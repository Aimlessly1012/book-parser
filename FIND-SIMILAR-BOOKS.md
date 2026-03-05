# 📚 Google Books API 相似书籍查找工具

使用 Google Books API 查找和分析相似书籍的市场数据。

## 🚀 快速开始

### 基本用法

```bash
./find-similar-books "书名" [关键词1] [关键词2] ...
```

### 示例

#### 1. 查找与 "After" 相似的书籍
```bash
./find-similar-books "After Anna Todd" "new adult romance" "toxic relationship"
```

#### 2. 查找军人浪漫小说
```bash
./find-similar-books "Falling for my boyfriend's Navy brother" "military romance" "forbidden love" "brother romance"
```

#### 3. 保存结果到 JSON 文件
```bash
./find-similar-books "Beautiful Disaster" "new adult" "bad boy" --save
```

#### 4. 输出 JSON 格式
```bash
./find-similar-books "The Kissing Booth" "brother's best friend" --json
```

---

## 📊 输出示例

### 控制台输出

```
================================================================================
📊 相似书籍分析报告
================================================================================

目标书籍: After
作者: Anna Todd
类型: Fiction
评分: 3.5/5 (14 评价)

找到 10 本相似书籍:

1. After We Fell
   作者: Anna Todd
   类型: Fiction
   评分: 5/5 (3 评价)
   相似度: 80/100 - 类型匹配, 热度相近, 受众年龄匹配, 长度相近
   价格: 2229 JPY
   链接: https://play.google.com/store/books/details?id=pn4wBAAAQBAJ

2. Navy Seal Security (Brothers in Arms, Book 1)
   作者: Carol Ericson
   类型: Fiction
   评分: 0/5 (0 评价)
   相似度: 100/100 - 类型匹配, 评分相近, 热度相近, 受众年龄匹配
   链接: https://play.google.com/store/books/details?id=td1XCCb3jgEC
```

### JSON 输出

```json
{
  "targetBook": {
    "title": "After",
    "authors": ["Anna Todd"],
    "categories": ["Fiction"],
    "averageRating": 3.5,
    "ratingsCount": 14
  },
  "similarBooks": [
    {
      "title": "After We Fell",
      "authors": ["Anna Todd"],
      "categories": ["Fiction"],
      "averageRating": 5,
      "ratingsCount": 3,
      "similarity": 80,
      "reasons": ["类型匹配", "热度相近", "受众年龄匹配", "长度相近"],
      "link": "https://play.google.com/store/books/details?id=pn4wBAAAQBAJ",
      "price": {
        "amount": 2229,
        "currencyCode": "JPY"
      }
    }
  ],
  "generatedAt": "2026-03-05T11:53:49.523Z"
}
```

---

## 🎯 相似度算法

工具使用以下因素计算相似度（总分 100）：

| 因素 | 权重 | 说明 |
|------|------|------|
| **类型匹配** | 40分 | 书籍类型是否相同（Fiction, Romance等） |
| **评分相近** | 20分 | 平均评分差距 < 0.5 |
| **热度相近** | 20分 | 评价数量级相近（10倍以内） |
| **受众年龄** | 10分 | 成熟度评级匹配 |
| **长度相近** | 10分 | 页数比例 < 2倍 |

---

## 📖 可获取的数据

### 书籍基本信息
- ✅ 书名、作者
- ✅ 出版日期
- ✅ 类型/分类
- ✅ 语言
- ✅ 页数

### 评价数据
- ✅ 平均评分（1-5星）
- ✅ 评价数量
- ✅ 成熟度评级

### 销售信息
- ✅ 销售地区
- ✅ 是否可售
- ✅ 价格（如果有）
- ✅ 是否有电子书

### 链接
- ✅ Google Books 预览链接
- ✅ Google Play 购买链接

---

## ⚠️ 限制

### Google Books API 的限制

1. **数据不完整**
   - ❌ 没有真实销售数据
   - ❌ 没有地区分布数据
   - ❌ 评价数量通常较少
   - ❌ 部分书籍没有评分

2. **搜索准确度**
   - 搜索结果可能不精确
   - 需要用"书名 + 作者"提高准确度
   - 热门书籍数据更完整

3. **API 限制**
   - 免费版：1000 次/天
   - 无需 API key（但有限制）
   - 响应速度较慢

---

## 💡 使用技巧

### 1. 提高搜索准确度

**❌ 不好的搜索：**
```bash
./find-similar-books "After"
# 可能搜到 Adobe After Effects
```

**✅ 好的搜索：**
```bash
./find-similar-books "After Anna Todd"
# 或
./find-similar-books "After" "Anna Todd" "new adult romance"
```

### 2. 选择合适的关键词

**针对类型：**
- `"new adult romance"` - 新成人浪漫
- `"military romance"` - 军人浪漫
- `"forbidden love"` - 禁忌之恋
- `"brother's best friend"` - 兄弟的朋友
- `"enemies to lovers"` - 欢喜冤家

**针对元素：**
- `"toxic relationship"` - 有毒关系
- `"college romance"` - 校园浪漫
- `"alpha male"` - 霸道男主
- `"slow burn"` - 慢热
- `"second chance"` - 第二次机会

### 3. 批量查找

创建一个脚本批量查找多本书：

```bash
#!/bin/bash

books=(
  "After Anna Todd:new adult:toxic relationship"
  "Beautiful Disaster:bad boy:college romance"
  "The Kissing Booth:brother's best friend:forbidden love"
)

for book in "${books[@]}"; do
  IFS=':' read -r title keywords <<< "$book"
  ./find-similar-books "$title" $keywords --save
  sleep 2  # 避免请求过快
done
```

---

## 🔧 集成到 book-parser

### 方法 1: 在分析时自动查找相似书籍

修改 `book-parser` 脚本，在生成分析时调用：

```javascript
const { findSimilarBooks } = require('./find-similar-books');

// 在分析书籍时
const similarBooks = await findSimilarBooks(bookTitle, keywords);

// 添加到分析结果
analysisResult.similarBooks = similarBooks;
```

### 方法 2: 作为独立步骤

```bash
# 1. 解析书籍
./book-parser analyze book.txt --output output/

# 2. 查找相似书籍
./find-similar-books "书名" "关键词1" "关键词2" --save

# 3. 手动合并结果
```

---

## 📈 下一步改进

### 短期（本周）
- [ ] 添加缓存机制（避免重复查询）
- [ ] 支持批量查询
- [ ] 改进相似度算法
- [ ] 添加更多数据源（Goodreads）

### 中期（本月）
- [ ] 集成到 book-parser 主流程
- [ ] 添加数据可视化
- [ ] 支持导出 Excel/CSV
- [ ] 添加趋势分析

### 长期（未来）
- [ ] 集成 Amazon API
- [ ] 添加 BookTok 数据
- [ ] 机器学习推荐
- [ ] 实时市场监控

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

## 📄 许可

MIT License

---

## 🔗 相关资源

- [Google Books API 文档](https://developers.google.com/books)
- [book-parser 主项目](../README.md)
- [BRAINSTORM.md](../BRAINSTORM.md) - 项目头脑风暴
