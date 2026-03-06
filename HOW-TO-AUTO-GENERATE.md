# Book Parser 一键生成改造指南

## 🎯 目标

让 book-parser skill 能够**一键自动生成完整的营销分析报告**，而不需要手动复制提示词。

---

## 📋 改造方案对比

### **方案 1：通过 OpenClaw 调用 AI（推荐）✅**

**优点**：
- ✅ 无需额外配置 API key
- ✅ 直接使用 OpenClaw 的 AI 能力
- ✅ 用户体验最好（对话式）
- ✅ 自动处理 token 限制

**缺点**：
- ❌ 依赖 OpenClaw 环境
- ❌ 需要修改 book-parser 脚本

**实现方式**：
```javascript
// 在 book-parser 中调用 OpenClaw 的 sessions API
const { spawn } = require('child_process');

function callAI(prompt) {
  return new Promise((resolve, reject) => {
    const process = spawn('openclaw', ['sessions', 'send', '--message', prompt]);
    let output = '';
    
    process.stdout.on('data', (data) => {
      output += data.toString();
    });
    
    process.on('close', (code) => {
      if (code === 0) {
        resolve(output);
      } else {
        reject(new Error('AI call failed'));
      }
    });
  });
}
```

---

### **方案 2：直接调用 Claude API**

**优点**：
- ✅ 独立运行，不依赖 OpenClaw
- ✅ 可以部署到任何环境

**缺点**：
- ❌ 需要配置 Claude API key
- ❌ 需要处理 API 限制和错误
- ❌ 需要自己管理 token 计数

**实现方式**：
```javascript
const Anthropic = require('@anthropic-ai/sdk');

async function callClaude(prompt) {
  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 8000,
    messages: [
      { role: 'user', content: prompt }
    ],
  });

  return message.content[0].text;
}
```

---

### **方案 3：混合方案（最灵活）⭐**

**优点**：
- ✅ 支持两种模式：OpenClaw 和直接 API
- ✅ 用户可以选择
- ✅ 最大灵活性

**实现方式**：
```javascript
async function generateAnalysis(prompt, mode = 'openclaw') {
  if (mode === 'openclaw') {
    // 使用 OpenClaw
    return await callOpenClaw(prompt);
  } else if (mode === 'api') {
    // 直接调用 Claude API
    return await callClaude(prompt);
  } else {
    throw new Error('Unknown mode');
  }
}
```

---

## 🔧 具体改造步骤

### **Step 1：修改 book-parser 脚本**

在 `book-parser` 文件中添加 AI 调用功能：

```javascript
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 新增：AI 调用函数
async function callOpenClawAI(promptFile) {
  const prompt = fs.readFileSync(promptFile, 'utf-8');
  
  // 方法 1：通过文件传递（推荐，避免命令行长度限制）
  const tempFile = `/tmp/book-parser-prompt-${Date.now()}.txt`;
  fs.writeFileSync(tempFile, prompt);
  
  // 调用 OpenClaw（需要实现）
  // 这里需要你告诉我 OpenClaw 的正确调用方式
  
  return result;
}

// 在主流程中添加
if (autoAnalyze) {
  console.log('\n🤖 正在调用 AI 生成完整分析报告...');
  console.log('⏳ 这可能需要 1-2 分钟，请耐心等待...\n');
  
  try {
    const result = await callOpenClawAI(promptFile);
    
    // 保存分析结果
    const analysisFile = path.join(outputDir, 'book-analysis.json');
    fs.writeFileSync(analysisFile, result);
    
    console.log(`✅ 完整分析报告已生成: ${analysisFile}`);
  } catch (error) {
    console.error('❌ AI 分析失败:', error.message);
  }
}
```

---

### **Step 2：创建 OpenClaw Skill 包装器**

创建一个新文件 `analyze-book.js`，作为 OpenClaw skill 的入口：

```javascript
#!/usr/bin/env node

// analyze-book.js - OpenClaw Skill 入口

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 从命令行参数获取书籍文件
const bookFile = process.argv[2];
const outputDir = process.argv[3] || './output';

if (!bookFile) {
  console.error('Usage: analyze-book <book.txt> [output-dir]');
  process.exit(1);
}

// Step 1: 解析章节
console.log('📚 Step 1/3: 解析章节...');
execSync(`./book-parser analyze "${bookFile}" --output "${outputDir}"`, {
  stdio: 'inherit'
});

// Step 2: 读取提示词
console.log('\n🤖 Step 2/3: 生成 AI 分析...');
const promptFile = path.join(outputDir, 'analysis-prompt.txt');
const prompt = fs.readFileSync(promptFile, 'utf-8');

// Step 3: 调用 OpenClaw AI（这里需要你的帮助）
// 问题：如何在 Node.js 脚本中调用 OpenClaw 的 AI？
// 
// 可能的方式：
// 1. 通过 sessions API
// 2. 通过 HTTP API
// 3. 通过命令行工具
// 4. 直接导入 OpenClaw 模块

console.log('\n✅ Step 3/3: 保存分析结果...');
console.log(`📁 所有文件已保存到: ${outputDir}`);
```

---

### **Step 3：更新 SKILL.md**

让 OpenClaw 知道如何调用这个 skill：

```markdown
# Book Parser Skill

## 触发条件

当用户说以下内容时，自动调用此 skill：
- "分析这本书"
- "帮我解析书籍"
- "生成书籍营销分析"

## 调用方式

```bash
cd /root/.openclaw/workspace/book-parser
./analyze-book <book-file> <output-dir>
```

## 工作流程

1. 解析章节（book-parser）
2. 生成提示词
3. 调用 AI 分析（你来完成）
4. 保存结果
```

---

## ❓ 需要你回答的问题

### **关键问题：如何在 Node.js 脚本中调用 OpenClaw 的 AI？**

我需要知道：

1. **OpenClaw 是否提供 Node.js API？**
   - 可以直接 `require('openclaw')` 吗？
   - 有没有官方的 SDK？

2. **是否可以通过 HTTP API 调用？**
   - 有没有本地 HTTP 服务？
   - 端口是多少？
   - 需要认证吗？

3. **是否可以通过命令行调用？**
   - 类似 `openclaw ask "问题"` 这样？
   - 如何传递长文本（提示词可能 50-100KB）？

4. **是否可以通过 sessions API？**
   - 如何创建新的 session？
   - 如何发送消息并获取回复？

---

## 🎯 推荐的最终方案

基于你的回答，我推荐：

### **方案 A：如果 OpenClaw 有 Node.js API**

```javascript
const openclaw = require('openclaw');

async function analyze(prompt) {
  const response = await openclaw.chat({
    message: prompt,
    model: 'claude-sonnet-4-5'
  });
  return response.content;
}
```

### **方案 B：如果只能通过命令行**

```javascript
const { execSync } = require('child_process');

function analyze(promptFile) {
  // 通过文件传递，避免命令行长度限制
  const result = execSync(`openclaw analyze-file "${promptFile}"`, {
    encoding: 'utf-8',
    maxBuffer: 10 * 1024 * 1024 // 10MB
  });
  return result;
}
```

### **方案 C：如果有 HTTP API**

```javascript
const axios = require('axios');

async function analyze(prompt) {
  const response = await axios.post('http://localhost:3000/api/chat', {
    message: prompt,
    model: 'claude-sonnet-4-5'
  });
  return response.data.content;
}
```

---

## 📝 下一步

请告诉我：

1. **OpenClaw 的 AI 调用方式是什么？**
2. **你希望用哪种方案？**
3. **有没有现成的示例代码？**

我会根据你的回答，完成最终的代码实现。

---

## 🚀 完成后的使用体验

### **用户视角**

```bash
# 方式 1：命令行
./book-parser analyze book.txt --output output --auto

# 方式 2：对话式（推荐）
"帮我分析这本书：book.txt"
```

### **输出结果**

```
📚 解析书籍中...
✅ 找到 8 个章节
✅ 章节已保存

🤖 正在生成 AI 分析...
⏳ 预计需要 1-2 分钟...

✅ 分析完成！

📊 生成的文件：
- book-analysis.json      # 完整分析报告
- chapters/               # 章节文件
- analysis-prompt.txt     # 提示词（备份）

📈 核心卖点：
1. 渣男 vs 真男人（ROI 1:8）
2. 禁忌之恋（ROI 1:7）
3. 海军特种兵霸总（ROI 1:6）

🎯 目标市场：
- 美国 35%
- 英国 18%
- 加拿大 12%
```

---

**等待你的回答，我会立即完成代码实现！** 🚀
