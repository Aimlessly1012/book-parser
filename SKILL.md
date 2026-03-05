---
name: book-parser
description: 书籍解析工具。调用 API 获取书籍章节，分析内容结构、人物关系、情节梗概等。
---

# Book Parser Skill

解析书籍内容，提取章节、人物、情节等信息。

## 功能

- 获取书籍章节（前 10-30 章）
- 章节内容分析
- 人物关系提取
- 情节梗概生成
- 关键词提取

## 使用方法

```bash
# 解析书籍
book-parser analyze <book_id>

# 获取章节列表
book-parser chapters <book_id> --count 20

# 分析人物关系
book-parser characters <book_id>
```

## 配置

在 `.env` 中配置 API 端点：

```
BOOK_API_URL=https://your-api.com
BOOK_API_KEY=your-api-key
```

## API 接口

需要提供以下接口：

- `GET /books/{id}/chapters?start=1&end=30` - 获取章节列表
- `GET /books/{id}/chapters/{chapter_id}` - 获取章节内容
