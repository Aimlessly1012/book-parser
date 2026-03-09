const fs = require('fs');
const path = require('path');

/**
 * 增强的错误处理工具
 */
class ErrorHandler {
  /**
   * 带重试的异步函数执行器
   * @param {Function} fn - 要执行的异步函数
   * @param {Object} options - 配置选项
   * @returns {Promise} - 执行结果
   */
  static async retry(fn, options = {}) {
    const {
      maxRetries = 3,
      delayMs = 2000,
      backoff = true,
      onRetry = null,
      stepName = 'unknown'
    } = options;

    let lastError;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await fn();
      } catch (error) {
        lastError = error;
        
        if (attempt === maxRetries) {
          throw new EnhancedError(
            `${stepName} failed after ${maxRetries} attempts`,
            error,
            { stepName, attempts: maxRetries }
          );
        }

        const delay = backoff ? delayMs * attempt : delayMs;
        const message = `⚠️  Attempt ${attempt}/${maxRetries} failed: ${error.message}`;
        
        if (onRetry) {
          onRetry(message, attempt, error);
        } else {
          console.warn(message);
          console.warn(`   Retrying in ${delay}ms...`);
        }

        await this.sleep(delay);
      }
    }

    throw lastError;
  }

  /**
   * 安全的 JSON 文件读取
   */
  static readJsonFile(filePath, defaultValue = null) {
    try {
      if (!fs.existsSync(filePath)) {
        if (defaultValue !== null) {
          return defaultValue;
        }
        throw new Error(`File not found: ${filePath}`);
      }
      
      const content = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(content);
    } catch (error) {
      throw new EnhancedError(
        `Failed to read JSON file: ${filePath}`,
        error,
        { filePath }
      );
    }
  }

  /**
   * 安全的 JSON 文件写入
   */
  static writeJsonFile(filePath, data, pretty = true) {
    try {
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      const content = pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data);
      fs.writeFileSync(filePath, content, 'utf-8');
      return true;
    } catch (error) {
      throw new EnhancedError(
        `Failed to write JSON file: ${filePath}`,
        error,
        { filePath }
      );
    }
  }

  /**
   * 验证必需文件是否存在
   */
  static validateFiles(files, baseDir = '') {
    const missing = [];
    
    for (const file of files) {
      const fullPath = baseDir ? path.join(baseDir, file) : file;
      if (!fs.existsSync(fullPath)) {
        missing.push(file);
      }
    }

    if (missing.length > 0) {
      throw new Error(`Missing required files: ${missing.join(', ')}`);
    }
  }

  /**
   * 捕获并格式化错误
   */
  static formatError(error, context = {}) {
    const formatted = {
      message: error.message,
      type: error.constructor.name,
      timestamp: new Date().toISOString(),
      context
    };

    if (error.stack) {
      formatted.stack = error.stack.split('\n').slice(0, 5).join('\n');
    }

    if (error.metadata) {
      formatted.metadata = error.metadata;
    }

    return formatted;
  }

  /**
   * 保存错误到文件
   */
  static saveError(error, outputDir, stepName) {
    const errorFile = path.join(outputDir, `.error-${stepName}.json`);
    const formatted = this.formatError(error, { stepName });
    this.writeJsonFile(errorFile, formatted);
    console.error(`❌ Error details saved to: ${errorFile}`);
  }

  /**
   * Sleep 工具
   */
  static sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * 包装异步函数，自动处理错误
   */
  static async wrap(fn, stepName, tracker = null) {
    try {
      if (tracker) {
        tracker.startStep(stepName);
      }
      
      const result = await fn();
      
      if (tracker) {
        tracker.completeStep(stepName);
      }
      
      return result;
    } catch (error) {
      if (tracker) {
        tracker.failStep(stepName, error);
      }
      throw error;
    }
  }
}

/**
 * 增强的错误类，携带更多上下文信息
 */
class EnhancedError extends Error {
  constructor(message, originalError = null, metadata = {}) {
    super(message);
    this.name = 'EnhancedError';
    this.originalError = originalError;
    this.metadata = metadata;
    
    if (originalError) {
      this.stack = `${this.stack}\n\nCaused by: ${originalError.stack}`;
    }
  }
}

module.exports = { ErrorHandler, EnhancedError };
