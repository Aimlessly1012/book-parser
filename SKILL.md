# Book Parser Skill

AI 驱动的书籍智能解析系统，为国际市场书籍营销提供精准洞察。

## 功能

1. **章节解析**：自动识别章节，支持多种格式
2. **AI 分析**：一键生成完整的营销分析报告
3. **相似书籍查询**：Google Books API
4. **广告数据查询**：AnyNovel API

## 使用方法

### 通过 OpenClaw 调用（推荐）

```
"帮我分析这本书：<book.txt>"
```

AI 会自动：
1. 解析章节
2. 生成分析提示词
3. 调用 Claude 生成完整分析
4. 保存结果到输出目录

### 命令行使用

```bash
# 基础解析（只生成提示词）
./book-parser analyze book.txt --output output

# 全自动分析 (推荐)
./book-parser analyze book.txt --output output --auto --api-key YOUR_KEY --compare
```

## 配置

你可以创建 `config.json` 文件来持久化你的 AI 配置：
```json
{
  "provider": "gemini",
  "apiKey": "YOUR_API_KEY",
  "model": "gemini-1.5-flash"
}
```

## 输出文件

```
output/
├── chapters/              # 章节 JSON 文件
├── analysis-prompt.txt    # AI 分析提示词
└── book-analysis.json     # 完整分析报告（--auto 时生成）
```

## 分析内容

- 书籍 DNA 图谱（情感曲线、节奏、爽点密度）
- 上头指数预测（5大维度评分）
- 人物关系图谱
- 整体情节梳理
- 金句提取
- 高光片段（事件化）
- 卖点分析（网文爽点式）
- 目标人群画像
- 地区投放建议

## 工作流程

1. **解析书籍** → 提取章节
2. **生成提示词** → 包含完整章节内容
3. **AI 分析** → 调用 Claude Sonnet 4.5
4. **保存结果** → JSON 格式

## 依赖

- Node.js 18+
- OpenClaw（用于 AI 调用）

## 示例

```bash
# 分析一本书
./book-parser analyze navy-brother.txt --output navy-analysis --auto

# 查找相似书籍
./find-similar-books "military romance" "navy seal" --save

# 查询广告数据
./query-ads Romance --save
```

## 注意事项

- 提示词文件可能很大（50-100KB）
- AI 分析需要 1-2 分钟
- 建议使用 Claude Sonnet 4.5 模型
