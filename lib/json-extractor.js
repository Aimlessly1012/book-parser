/**
 * 健壮的 JSON 提取工具
 * 处理 AI 返回的各种格式：代码块、纯文本、嵌套 JSON
 */

class JsonExtractor {
  /**
   * 从 AI 响应中提取 JSON
   * @param {string} raw - AI 原始响应
   * @returns {string} - 提取的 JSON 字符串
   */
  static extract(raw) {
    if (!raw || typeof raw !== 'string') {
      throw new Error('Invalid input: expected non-empty string');
    }

    // 策略 1: 尝试匹配 ```json ... ``` 代码块
    const codeBlockMatch = raw.match(/```json\s*([\s\S]*?)\s*```/);
    if (codeBlockMatch) {
      const json = codeBlockMatch[1].trim();
      if (this.isValidJson(json)) {
        return json;
      }
    }

    // 策略 2: 尝试匹配 ``` ... ``` 通用代码块
    const genericCodeBlock = raw.match(/```\s*([\s\S]*?)\s*```/);
    if (genericCodeBlock) {
      const json = genericCodeBlock[1].trim();
      if (this.isValidJson(json)) {
        return json;
      }
    }

    // 策略 3: 查找第一个完整的 JSON 对象（支持嵌套）
    const extracted = this.findFirstCompleteJson(raw);
    if (extracted && this.isValidJson(extracted)) {
      return extracted;
    }

    // 策略 4: 尝试直接解析整个字符串
    const trimmed = raw.trim();
    if (this.isValidJson(trimmed)) {
      return trimmed;
    }

    // 策略 5: 移除前后非 JSON 字符后再试
    const cleaned = this.cleanNonJson(raw);
    if (this.isValidJson(cleaned)) {
      return cleaned;
    }

    throw new Error('Failed to extract valid JSON from response');
  }

  /**
   * 查找第一个完整的 JSON 对象（处理嵌套）
   */
  static findFirstCompleteJson(text) {
    let depth = 0;
    let start = -1;
    let inString = false;
    let escapeNext = false;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];

      // 处理字符串内的转义
      if (escapeNext) {
        escapeNext = false;
        continue;
      }

      if (char === '\\') {
        escapeNext = true;
        continue;
      }

      // 处理字符串边界
      if (char === '"') {
        inString = !inString;
        continue;
      }

      // 只在非字符串内处理大括号
      if (!inString) {
        if (char === '{') {
          if (depth === 0) start = i;
          depth++;
        } else if (char === '}') {
          depth--;
          if (depth === 0 && start !== -1) {
            return text.substring(start, i + 1);
          }
        }
      }
    }

    return null;
  }

  /**
   * 清理非 JSON 字符（前后的说明文字）
   */
  static cleanNonJson(text) {
    // 移除常见的前缀说明
    const prefixes = [
      /^.*?这是.*?JSON.*?[:：]\s*/i,
      /^.*?以下是.*?[:：]\s*/i,
      /^.*?输出.*?[:：]\s*/i,
      /^.*?结果.*?[:：]\s*/i,
    ];

    let cleaned = text;
    for (const prefix of prefixes) {
      cleaned = cleaned.replace(prefix, '');
    }

    // 移除常见的后缀说明
    const suffixes = [
      /\s*以上.*$/i,
      /\s*希望.*$/i,
      /\s*如果.*$/i,
    ];

    for (const suffix of suffixes) {
      cleaned = cleaned.replace(suffix, '');
    }

    return cleaned.trim();
  }

  /**
   * 验证是否为有效 JSON
   */
  static isValidJson(str) {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * 提取并解析为对象（一步到位）
   */
  static extractAndParse(raw) {
    const jsonStr = this.extract(raw);
    return JSON.parse(jsonStr);
  }
}

module.exports = JsonExtractor;
