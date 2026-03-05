# Book Parser Skill

## 功能描述

AI 驱动的书籍智能解析系统，自动分析书籍内容并生成营销素材。

## 使用方法

```bash
# 解析书籍（从 TXT 文件）
./book-parser analyze <book.txt>

# 指定输出目录
./book-parser analyze <book.txt> --output ./output

# 只分析前 N 章
./book-parser analyze <book.txt> --chapters 20
```

## 输入格式

TXT 文件，章节格式：
```
第一章 章节标题
章节内容...

第二章 章节标题
章节内容...
```

## 输出内容

### 1. 书籍整体分析 (book-analysis.json)
- 书籍 DNA 图谱（情感曲线、节奏、爽点密度、冲突强度）
- 上头指数预测
- 人物关系图谱
- 整体情节梳理
- 目标人群画像
- 地区投放建议

### 2. 章节详细分析 (chapters/)
- 每章情节摘要
- 情感分析
- 爽点/虐点标注
- 关键对话/金句
- 适合做素材的片段

### 3. 营销素材 (materials/)
- 创意方向（5-10个角度）
- 视频脚本（TikTok、Facebook、Instagram）
- 图文文案
- 广告文案

## 技术实现

使用 Claude Sonnet 4.5 进行 AI 分析，支持长文本处理。
