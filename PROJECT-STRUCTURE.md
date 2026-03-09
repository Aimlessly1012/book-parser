# 📁 项目结构

```
book-parser/
├── 📄 核心脚本
│   ├── book-parser              # 主程序（章节解析 + DNA 提取）
│   ├── auto-workflow            # 自动化工作流（画像 + 卖点 + 创意）
│   └── report-generator         # 报告生成器
│
├── 📚 核心库 (lib/)
│   ├── ai-service.js            # AI 服务封装（支持 Claude/Gemini）
│   ├── json-extractor.js        # 多策略 JSON 提取器
│   ├── progress-tracker.js      # 进度追踪和日志
│   ├── error-handler.js         # 错误处理和重试机制
│   ├── data-adapter.js          # 数据格式转换器
│   │
│   └── 📝 Prompt 模板
│       ├── enhanced-prompts.js      # 标准模式 prompt
│       ├── compact-prompts.js       # 精简模式 prompt
│       ├── ultra-compact-prompts.js # 超精简模式 prompt
│       └── two-step-prompts.js      # 两步提取模式 prompt ⭐
│
├── 📖 文档 (docs/)
│   ├── WORKFLOW.md              # 工作流程说明
│   ├── WORKFLOW-DIAGRAM.md      # 流程图（Mermaid）
│   ├── DATA-DIMENSIONS.md       # 数据维度说明
│   ├── OPTIMIZATION.md          # 优化历史
│   ├── TEST-REPORT.md           # 测试报告
│   └── TWO-STEP-TEST-REPORT.md  # 两步提取测试报告 ⭐
│
├── ⚙️ 配置文件
│   ├── config.json              # API 配置
│   ├── package.json             # 项目依赖
│   └── .gitignore               # Git 忽略规则
│
└── 📋 说明文档
    ├── README.md                # 项目说明
    └── SKILL.md                 # OpenClaw 技能说明
```

## 🎯 核心功能模块

### 1. 章节解析
- 自动识别章节标题
- 提取章节内容
- 统计字数

### 2. DNA 提取（两步模式）⭐
- **Step 2a**: 章节梗概提取（覆盖全部章节）
- **Step 2b**: DNA 分析（基于梗概）

### 3. 受众画像
- 10 维度深度分析
- 心理驱动力挖掘
- 购买决策路径

### 4. 卖点提炼
- 直接使用章节梗概 ⭐
- 多维度打分
- 心理触发点分析

### 5. 创意方向
- TikTok 脚本
- Facebook 文案
- 视觉制作指导

### 6. 报告生成
- Markdown 格式
- 完整营销全案

## 🚀 使用方式

### 推荐：两步提取模式
```bash
./book-parser analyze book.txt --auto --two-step --output ./output
```

### 快速：超精简模式
```bash
./book-parser analyze book.txt --auto --ultra-compact --output ./output
```

## 📊 性能对比

| 模式 | 覆盖章节 | 总耗时 | 准确度 |
|------|---------|--------|--------|
| ultra-compact | 前3章 | 228秒 | 中等 |
| two-step ⭐ | 全部章节 | 195秒 | 高 |

## 🔧 技术栈

- **运行环境**: Node.js 18+
- **AI 模型**: Claude Sonnet 4.5 / Gemini
- **核心技术**: 
  - 多策略 JSON 提取
  - 指数退避重试
  - 进度追踪和断点恢复
  - 数据格式自动转换

## 📝 开发历史

- ✅ 基础功能实现
- ✅ 超精简模式（避免超时）
- ✅ 两步提取模式（覆盖全章节）⭐
- ✅ 数据复用优化
- ✅ 网文化文案风格
- ✅ 完整测试验证

---

最后更新: 2026-03-09
