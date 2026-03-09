const fs = require('fs');
const path = require('path');

/**
 * 进度管理器 - 追踪工作流执行状态
 */
class ProgressTracker {
  constructor(outputDir) {
    this.outputDir = outputDir;
    this.progressFile = path.join(outputDir, '.progress.json');
    this.logFile = path.join(outputDir, '.workflow.log');
    this.state = this.load();
  }

  /**
   * 加载现有进度
   */
  load() {
    if (fs.existsSync(this.progressFile)) {
      try {
        return JSON.parse(fs.readFileSync(this.progressFile, 'utf-8'));
      } catch (e) {
        this.log('warn', `Failed to load progress file: ${e.message}`);
      }
    }
    return {
      steps: {},
      startTime: Date.now(),
      lastUpdate: Date.now()
    };
  }

  /**
   * 保存进度
   */
  save() {
    this.state.lastUpdate = Date.now();
    fs.writeFileSync(this.progressFile, JSON.stringify(this.state, null, 2));
  }

  /**
   * 标记步骤开始
   */
  startStep(stepName) {
    this.state.steps[stepName] = {
      status: 'running',
      startTime: Date.now(),
      attempts: (this.state.steps[stepName]?.attempts || 0) + 1
    };
    this.save();
    this.log('info', `▶️  Step ${stepName} started (attempt ${this.state.steps[stepName].attempts})`);
  }

  /**
   * 标记步骤完成
   */
  completeStep(stepName, metadata = {}) {
    if (!this.state.steps[stepName]) {
      this.state.steps[stepName] = {};
    }
    this.state.steps[stepName].status = 'completed';
    this.state.steps[stepName].endTime = Date.now();
    this.state.steps[stepName].duration = this.state.steps[stepName].endTime - this.state.steps[stepName].startTime;
    this.state.steps[stepName].metadata = metadata;
    this.save();
    this.log('info', `✅ Step ${stepName} completed in ${(this.state.steps[stepName].duration / 1000).toFixed(1)}s`);
  }

  /**
   * 标记步骤失败
   */
  failStep(stepName, error) {
    if (!this.state.steps[stepName]) {
      this.state.steps[stepName] = {};
    }
    this.state.steps[stepName].status = 'failed';
    this.state.steps[stepName].endTime = Date.now();
    this.state.steps[stepName].error = error.message;
    this.state.steps[stepName].stack = error.stack;
    this.save();
    this.log('error', `❌ Step ${stepName} failed: ${error.message}`);
  }

  /**
   * 检查步骤是否已完成
   */
  isStepCompleted(stepName) {
    return this.state.steps[stepName]?.status === 'completed';
  }

  /**
   * 获取步骤状态
   */
  getStepStatus(stepName) {
    return this.state.steps[stepName]?.status || 'pending';
  }

  /**
   * 写入日志
   */
  log(level, message) {
    const timestamp = new Date().toISOString();
    const logLine = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
    
    // 输出到控制台
    if (level === 'error') {
      console.error(logLine.trim());
    } else if (level === 'warn') {
      console.warn(logLine.trim());
    } else {
      console.log(logLine.trim());
    }
    
    // 追加到日志文件
    fs.appendFileSync(this.logFile, logLine);
  }

  /**
   * 获取总结报告
   */
  getSummary() {
    const steps = Object.entries(this.state.steps);
    const completed = steps.filter(([_, s]) => s.status === 'completed').length;
    const failed = steps.filter(([_, s]) => s.status === 'failed').length;
    const running = steps.filter(([_, s]) => s.status === 'running').length;
    const totalDuration = Date.now() - this.state.startTime;

    return {
      total: steps.length,
      completed,
      failed,
      running,
      totalDuration,
      steps: this.state.steps
    };
  }

  /**
   * 打印总结
   */
  printSummary() {
    const summary = this.getSummary();
    console.log('\n📊 工作流执行总结:');
    console.log(`   总步骤: ${summary.total}`);
    console.log(`   ✅ 完成: ${summary.completed}`);
    console.log(`   ❌ 失败: ${summary.failed}`);
    console.log(`   ⏱️  总耗时: ${(summary.totalDuration / 1000).toFixed(1)}s`);
    console.log(`\n📝 详细日志: ${this.logFile}`);
  }

  /**
   * 清理进度文件（重新开始）
   */
  reset() {
    if (fs.existsSync(this.progressFile)) {
      fs.unlinkSync(this.progressFile);
    }
    if (fs.existsSync(this.logFile)) {
      fs.unlinkSync(this.logFile);
    }
    this.state = {
      steps: {},
      startTime: Date.now(),
      lastUpdate: Date.now()
    };
    this.log('info', '🔄 Progress reset');
  }
}

module.exports = ProgressTracker;
