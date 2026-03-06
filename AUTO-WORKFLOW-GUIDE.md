# Book Parser - 完整自动化使用指南

## 🎯 完整流程

### **一键命令**

```bash
cd /root/.openclaw/workspace/book-parser
./book-parser analyze your-book.txt --output output --compare
```

---

## 📊 自动化流程详解

### **Step 1：解析章节（自动）**

```bash
./book-parser analyze book.txt --output output --compare
```

**输出**：
- ✅ `output/chapters/` - 所有章节 JSON
- ✅ `output/analysis-prompt.txt` - AI 分析提示词
- ✅ `output/.task.json` - 任务标记文件

**时间**：10-30 秒

---

### **Step 2：AI 分析书籍类型（需要你）**

**book-parser 会提示你**：
```
📝 任务已创建，请对 AI 说：
   "帮我完成 output 的分析任务"
```

**你对 AI 说**：
```
"帮我完成 output 的分析任务"
```

**AI 会**：
1. 读取 `analysis-prompt.txt`
2. 生成完整的书籍分析
3. 保存到 `output/book-analysis.json`

**输出**：
- ✅ `output/book-analysis.json` - 包含：
  - 书籍类型（genre）
  - 关键词（keywords, searchKeywords）
  - 初步卖点
  - 人物、剧情、DNA 等

**时间**：1-2 分钟

---

### **Step 3：查找相似书籍（自动）**

**AI 完成 Step 2 后，会自动执行**：

```bash
./find-similar-books "关键词1" "关键词2" "关键词3" --save
```

**输出**：
- ✅ `output/similar-books.json` - 相似书籍列表

**时间**：5-10 秒

---

### **Step 4：对比分析生成最终卖点（需要你）**

**AI 会提示你**：
```
📝 对比任务已创建
   请对 AI 说: "帮我完成对比分析"
```

**你对 AI 说**：
```
"帮我完成对比分析"
```

**AI 会**：
1. 读取 `book-analysis.json`（我们的书）
2. 读取 `similar-books.json`（相似书籍）
3. 对比分析，生成最终卖点
4. 保存到 `output/selling-points-compare.json`

**输出**：
- ✅ `output/selling-points-compare.json` - 包含：
  - 对比表格
  - 市场验证
  - 差异化优势
  - 最终卖点（带 ROI 和优先级）

**时间**：1-2 分钟

---

### **Step 5：查询广告数据（自动）**

**AI 完成 Step 4 后，会自动执行**：

```bash
./query-ads Romance --save
```

**输出**：
- ✅ `output/ads-data.json` - 广告投放数据

**时间**：5-10 秒

---

## 📁 最终输出文件

```
output/
├── chapters/                      # 章节文件
│   ├── chapter-001.json
│   ├── chapter-002.json
│   └── ...
├── analysis-prompt.txt            # AI 提示词（备份）
├── book-analysis.json             # 书籍分析 ⭐
├── similar-books.json             # 相似书籍 ⭐
├── selling-points-compare.json    # 对比分析 + 最终卖点 ⭐⭐⭐
└── ads-data.json                  # 广告数据 ⭐
```

---

## 🎯 核心文件说明

### **1. book-analysis.json**

```json
{
  "bookAnalysis": {
    "basicInfo": {
      "genre": "军人浪漫 / 禁忌之恋",
      "coreHook": "渣男友忘了接我5次，他当兵的哥哥却记得我的每一个眼神",
      "keywords": ["military romance", "navy seal", "forbidden love"],
      "searchKeywords": ["military romance", "navy seal", "forbidden love"]
    },
    "addictionIndex": {
      "score": 8.5,
      "level": "极易上头"
    },
    "preliminarySellingPoints": [...]
  }
}
```

---

### **2. similar-books.json**

```json
{
  "books": [
    {
      "title": "Fall for a SEAL",
      "author": "Zoe York",
      "rating": 4.2,
      "categories": ["Romance", "Military"],
      "similarityScore": 85
    },
    {
      "title": "The Kissing Booth",
      "author": "Beth Reekles",
      "rating": 4.0,
      "categories": ["Young Adult", "Romance"],
      "similarityScore": 78
    }
  ]
}
```

---

### **3. selling-points-compare.json** ⭐⭐⭐

```json
{
  "comparisonTable": [
    {
      "dimension": "男主职业",
      "ourBook": "海军特种兵",
      "similarBooks": {
        "Fall for a SEAL": "海军特种兵 ✅",
        "The Kissing Booth": "普通学生",
        "After": "大学生"
      },
      "advantage": "⭐ 军人题材已验证"
    },
    {
      "dimension": "禁忌类型",
      "ourBook": "男友的哥哥",
      "similarBooks": {
        "Fall for a SEAL": "无",
        "The Kissing Booth": "哥哥的朋友 ✅",
        "After": "无"
      },
      "advantage": "⭐⭐ 更强的禁忌感"
    }
  ],
  
  "finalSellingPoints": [
    {
      "pointId": "SP001",
      "title": "渣男 vs 海军特种兵真男人",
      "oneLinePitch": "他忘了接我5次，他当兵的哥哥却记得我的每一个眼神",
      "marketValidation": {
        "similarSuccess": [
          {
            "book": "After",
            "proof": "Wattpad 5亿+阅读，证明'对比设定'有效",
            "ourAdvantage": "我们的对比更鲜明：渣男 vs 军人"
          }
        ]
      },
      "differentiator": "✅ 独特优势：军人职业 + 对比设定的组合",
      "estimatedROI": "1:8",
      "priority": "极高"
    }
  ],
  
  "competitiveAdvantage": {
    "summary": "我们的书 = Fall for a SEAL（军人）+ The Kissing Booth（禁忌）+ After（对比设定）",
    "uniqueValue": [
      "唯一的芭蕾舞者 + 军人组合",
      "最强的禁忌设定（男友的哥哥）",
      "最鲜明的对比（渣男 vs 真男人）"
    ]
  }
}
```

---

## 🚀 完整使用示例

### **示例：分析 Navy Brother**

```bash
# Step 1: 启动分析
cd /root/.openclaw/workspace/book-parser
./book-parser analyze navy-brother-book.txt --output navy-analysis --compare

# 输出：
# 📚 Step 1/5: 解析章节...
# ✅ 找到 8 个章节
# ✅ 章节已保存到: navy-analysis/chapters
# ✅ 分析提示词已生成: navy-analysis/analysis-prompt.txt
# 
# 📝 任务已创建，请对 AI 说：
#    "帮我完成 navy-analysis 的分析任务"

# Step 2: 对 AI 说
"帮我完成 navy-analysis 的分析任务"

# AI 会生成 book-analysis.json，然后自动执行 Step 3

# Step 4: 对 AI 说
"帮我完成对比分析"

# AI 会生成 selling-points-compare.json，然后自动执行 Step 5

# 完成！
```

---

## ⏱️ 时间估算

- **Step 1（解析章节）**：10-30 秒 ✅ 自动
- **Step 2（AI 分析）**：1-2 分钟 🤖 需要你
- **Step 3（相似书籍）**：5-10 秒 ✅ 自动
- **Step 4（对比分析）**：1-2 分钟 🤖 需要你
- **Step 5（广告数据）**：5-10 秒 ✅ 自动

**总计**：约 3-5 分钟

---

## 💡 使用技巧

### **技巧 1：只做基础分析**

```bash
./book-parser analyze book.txt --output output --auto
```

只完成 Step 1-2，不做对比分析。

---

### **技巧 2：手动模式**

```bash
# 只解析章节
./book-parser analyze book.txt --output output

# 手动完成后续步骤
cat output/analysis-prompt.txt  # 复制给 AI
./find-similar-books "关键词" --save
./query-ads Romance --save
```

---

### **技巧 3：批量分析多本书**

```bash
for book in *.txt; do
  name=$(basename "$book" .txt)
  ./book-parser analyze "$book" --output "$name-analysis" --compare
done
```

---

## 🎯 下一步

现在代码已经修改完成！

**测试一下**：

```bash
cd /root/.openclaw/workspace/book-parser
./book-parser analyze navy-brother-book.txt --output navy-test --compare
```

然后对我说：
```
"帮我完成 navy-test 的分析任务"
```

我会自动完成所有步骤！ 🚀
