# Book Parser Skill

OpenClaw 书籍解析工具，用于获取和分析书籍章节内容。

## 安装

```bash
cd /root/.openclaw/workspace/book-parser
cp .env.example .env
# 编辑 .env 配置你的 API 端点
```

## 配置

在 `.env` 文件中配置：

```bash
BOOK_API_URL=https://your-api.com
BOOK_API_KEY=your-api-key
```

## 使用方法

### 1. 分析书籍（获取前 20 章）

```bash
./book-parser analyze <book_id>
```

### 2. 获取指定数量的章节

```bash
./book-parser analyze <book_id> --count 30
```

### 3. 获取章节列表

```bash
./book-parser chapters <book_id>
```

## API 接口要求

你需要提供以下 API 接口：

### 获取章节列表

```
GET /books/{book_id}/chapters?start=1&end=30
```

返回格式：
```json
[
  {
    "id": "chapter-1",
    "title": "第一章 标题",
    "order": 1
  }
]
```

### 获取章节内容

```
GET /books/{book_id}/chapters/{chapter_id}
```

返回格式：
```json
{
  "id": "chapter-1",
  "title": "第一章 标题",
  "content": "章节内容...",
  "text": "章节内容..."
}
```

## 输出格式

```json
{
  "bookId": "123",
  "chapterCount": 20,
  "chapters": [
    {
      "id": "chapter-1",
      "title": "第一章",
      "content": "..."
    }
  ]
}
```

## 在 OpenClaw 中使用

你可以在 OpenClaw 对话中直接调用：

```
帮我分析书籍 123 的前 20 章
```

AI 会自动调用这个 skill 来获取和分析书籍内容。
