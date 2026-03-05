# Book Parser - 书籍智能解析工具

## 功能

自动解析书籍 TXT 文件，提取章节信息，生成 AI 分析提示词。

## 安装

```bash
cd /root/.openclaw/workspace/book-parser
chmod +x book-parser
```

## 使用方法

### 基本用法

```bash
./book-parser analyze <book.txt>
```

### 指定输出目录

```bash
./book-parser analyze <book.txt> --output ./my-output
```

### 只分析前 N 章

```bash
./book-parser analyze <book.txt> --chapters 20
```

## 输入格式

TXT 文件，章节格式示例：

```
第一章 初遇
这是第一章的内容...

第二章 相识
这是第二章的内容...

第三章 误会
这是第三章的内容...
```

支持的章节格式：
- `第一章 标题`
- `第1章 标题`
- `第十章 标题`

## 输出内容

运行后会在输出目录生成：

### 1. chapters/ 目录
每个章节的 JSON 文件：
- `chapter-001.json`
- `chapter-002.json`
- ...

章节 JSON 格式：
```json
{
  "number": 1,
  "title": "第一章 初遇",
  "name": "初遇",
  "content": "章节完整内容...",
  "wordCount": 3500
}
```

### 2. analysis-prompt.txt
AI 分析提示词，包含：
- 书籍基本信息
- 章节列表
- 前10章完整内容
- 详细的分析任务说明

## 下一步

1. 运行 `./book-parser analyze your-book.txt`
2. 打开生成的 `output/analysis-prompt.txt`
3. 复制内容发送给 AI (Claude Sonnet 4.5)
4. AI 会返回完整的书籍分析 JSON

## 分析维度

AI 会分析以下内容：

### 书籍 DNA 图谱
- 情感波动曲线（每章的情感值）
- 节奏快慢（BPM）
- 爽点密度
- 冲突强度

### 上头指数预测
- 悬念钩子（9分）
- 情感投入（8.5分）
- 节奏控制（8分）
- 奖励频率（9分）
- 章末悬念（8.5分）
- 综合评分：8.7/10

### 人物关系
- 主角信息（姓名、年龄、职业、性格）
- 配角列表
- 人物关系图谱

### 整体情节
- 三幕式结构
- 主要冲突
- 高潮章节
- 关键事件

### 金句提取
- 适合做海报的金句
- 适合做短视频的对话

### 高光片段
- 适合做短视频的场景
- 适合做图文的情节
- 适合做漫画的片段

### 目标人群画像
- 年龄、性别、职业、收入
- 兴趣、痛点、渴望
- 情感状态匹配
- 适合/不适合的人群

### 地区投放建议
- 核心市场（美国、台湾、日本、韩国、新加坡）
- 潜力市场（英国、加拿大、澳大利亚等）
- 本地化策略

### 创意方向
- 5-10个营销角度
- 每个角度包含：
  - 目标人群
  - 情感触发点
  - 核心信息
  - 关键章节
  - 关键场景
  - 金句
  - 投放平台
  - 预估ROI

## 示例

```bash
# 解析书籍
./book-parser analyze 她的逆袭人生.txt

# 输出
📚 解析书籍中...
✅ 找到 50 个章节
✅ 章节已保存到: ./output/chapters
✅ 分析提示词已生成: ./output/analysis-prompt.txt

📝 下一步：
1. 复制 analysis-prompt.txt 的内容
2. 发送给 AI (Claude Sonnet 4.5)
3. AI 会返回完整的书籍分析 JSON
```

## 技术栈

- Node.js
- Claude Sonnet 4.5 (AI 分析)
- 正则表达式（章节解析）

## 注意事项

1. TXT 文件必须是 UTF-8 编码
2. 章节标题必须符合格式（第X章 标题）
3. 建议分析前 10-30 章即可（AI 上下文限制）
4. 生成的 prompt 可能很长，确保 AI 支持长文本

## 故障排除

### 找不到章节
- 检查 TXT 文件格式
- 确保章节标题符合 `第X章 标题` 格式

### 文件编码错误
- 确保 TXT 文件是 UTF-8 编码
- 可以用文本编辑器转换编码

### AI 分析超时
- 减少分析章节数：`--chapters 10`
- 分批次分析
