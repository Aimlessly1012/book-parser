# Book Parser Skill - 完整功能文档

书籍解析与营销分析工具 - 自动化书籍营销素材生产系统

---

## 📚 **核心功能**

### **1. 书籍解析**
- 自动识别章节（支持中英文格式）
- 提取章节内容
- 统计字数、章节数
- 生成结构化数据

### **2. AI 营销分析**
- 网文风格卖点提取
- Book DNA 分析（情绪波动、节奏、爽点密度）
- 上头指数预测
- 角色关系图谱
- 高光场景提取

### **3. 相似书籍查询**
- **Google Books API**：免费查询，获取基础数据
- **AnyNovel 广告API**：查询真实广告投放数据

---

## 🛠️ **工具列表**

### **1. book-parser**
主要的书籍解析工具

**功能**：
- 解析 TXT 格式书籍
- 识别章节（支持 `第X章` 和 `【第 X 章】` 格式）
- 生成 AI 分析提示词

**使用方法**：
```bash
# 解析书籍
./book-parser analyze <book.txt> --output <output-dir>

# 示例
./book-parser analyze navy-brother.txt --output navy-brother-output
```

**输出**：
- `chapters/` - 各章节 JSON 文件
- `analysis-prompt.txt` - AI 分析提示词
- `chapters-analysis.md` - 章节列表

---

### **2. find-similar-books**
使用 Google Books API 查找相似书籍

**功能**：
- 多关键词搜索
- 相似度算法（100分制）
- 输出 JSON 格式

**使用方法**：
```bash
# 查找相似书籍
./find-similar-books "关键词1" "关键词2" --save

# 示例
./find-similar-books "Navy SEAL romance" "military romance" "forbidden love" --save
```

**相似度算法**（5个维度）：
- 类型匹配（40分）
- 评分相似度（20分）
- 热度相近（20分）
- 受众年龄（10分）
- 长度相近（10分）

**输出**：
- 控制台报告
- `similar-books-{timestamp}.json`

**优点**：
- ✅ 免费，无需 API key
- ✅ 数据稳定
- ✅ 有评分、分类、价格

**缺点**：
- ❌ 无真实销售数据
- ❌ 无地区分布数据

---

### **3. query-ads**
使用 AnyNovel API 查询真实广告数据

**功能**：
- 标签筛选查询
- 查询真实广告投放数据
- 获取投放国家、渠道、素材类型

**使用方法**：
```bash
# 按标签查询
./query-ads <标签1> [标签2] [标签3] --save

# 示例
./query-ads Romance --save
./query-ads Werewolf Alpha --save

# 查询所有英文书籍
./query-ads --all
```

**可用标签**（13个）：
- Alpha, Beta, Warrior
- Romance, Werewolf, Mafia
- Contemporary, Urban
- Hate to Love, Lovers Reunion
- Girl Power, Regret
- Hombre lobo（西班牙语狼人）

**可查询的数据**：
- 总广告数、活跃广告数
- 热度分数
- 投放国家列表
- 投放渠道（Facebook、Instagram、TikTok等）
- 素材类型（image、video）
- 首次/最后投放时间

**输出**：
- 控制台报告
- `ads-query-{timestamp}.json`

**优点**：
- ✅ 真实的市场数据
- ✅ 精准的投放策略
- ✅ 活跃状态
- ✅ 投放规模

**缺点**：
- ⚠️ 需要 API token
- ⚠️ 大部分书籍没有标签（覆盖率 < 10%）

---

## 📊 **完整工作流程**

### **流程 1: 解析书籍**

```bash
# 1. 准备 TXT 文件
# 格式要求：
# - 章节标题：【第 1 章】或 第1章
# - UTF-8 编码

# 2. 解析书籍
./book-parser analyze your-book.txt --output book-output

# 3. 查看输出
ls book-output/
# - chapters/          # 各章节 JSON
# - analysis-prompt.txt  # AI 分析提示词
# - chapters-analysis.md # 章节列表
```

---

### **流程 2: 查找相似书籍（Google Books）**

```bash
# 1. 确定关键词
# 示例：军人浪漫 + 禁忌之恋

# 2. 查询相似书籍
./find-similar-books "Navy SEAL romance" "military romance" "forbidden love" --save

# 3. 查看结果
cat similar-books-*.json
```

**输出示例**：
```json
{
  "similarBooks": [
    {
      "title": "The Defiant Hero",
      "authors": ["Suzanne Brockmann"],
      "categories": ["Fiction", "Romance"],
      "averageRating": 4.5,
      "ratingsCount": 1200,
      "similarity": 85
    }
  ]
}
```

---

### **流程 3: 查询广告数据（AnyNovel API）**

```bash
# 1. 按标签查询
./query-ads Romance --save

# 2. 查询所有书籍
./query-ads --all

# 3. 查看结果
cat ads-query-*.json
```

**输出示例**：
```json
{
  "similarBooks": [
    {
      "bookName": "Your Uncle's My Husband Now",
      "totalUniqueAds": 41,
      "heatScore": 410.304,
      "countries": ["美国", "印度", "日本"],
      "channels": ["Facebook", "Instagram", "TikTok"],
      "creativeTypes": ["image", "video"]
    }
  ]
}
```

---

## 🎯 **使用场景**

### **场景 1: 新书营销分析**

**目标**：分析一本新书，生成营销策略

**步骤**：
1. 解析书籍章节
   ```bash
   ./book-parser analyze new-book.txt --output new-book-output
   ```

2. 查找相似书籍（Google Books）
   ```bash
   ./find-similar-books "关键词1" "关键词2" --save
   ```

3. 查询广告数据（如果有合适标签）
   ```bash
   ./query-ads Romance --save
   ```

4. 手动分析
   - 阅读 `analysis-prompt.txt`
   - 使用 AI（Claude）生成完整分析
   - 参考相似书籍的成功卖点

---

### **场景 2: 竞品分析**

**目标**：分析竞品的投放策略

**步骤**：
1. 查询竞品广告数据
   ```bash
   ./query-ads --all
   ```

2. 筛选相关书籍
   - 手动查看 JSON 文件
   - 筛选同类型书籍

3. 统计投放策略
   - 投放国家分布
   - 投放渠道使用率
   - 广告数量分布

---

### **场景 3: 市场调研**

**目标**：了解某个题材的市场情况

**步骤**：
1. 查询该题材的书籍
   ```bash
   ./query-ads Romance --save
   ./query-ads Werewolf --save
   ```

2. 使用 Google Books 补充
   ```bash
   ./find-similar-books "romance" "werewolf" --save
   ```

3. 分析市场趋势
   - 哪些书籍正在投放
   - 投放规模分布
   - 主要投放国家

---

## 📁 **文件结构**

```
book-parser/
├── book-parser              # 主解析工具
├── find-similar-books       # Google Books API 工具
├── query-ads               # AnyNovel API 工具
├── SKILL.md                # Skill 描述
├── README.md               # 使用文档
├── FIND-SIMILAR-BOOKS.md   # Google Books 使用指南
├── ANYNOVEL-API-GUIDE.md   # AnyNovel API 使用指南
├── AVAILABLE-TAGS.md       # 可用标签列表
├── navy-brother-v2-output/ # 示例分析结果
│   ├── book-analysis.json
│   ├── chapters-analysis.md
│   ├── SELLING-POINTS-DEEP-DIVE.md
│   ├── SIMILAR-BOOKS-SELLING-POINTS.md
│   └── PRECISE-SIMILAR-BOOKS-ANALYSIS.md
└── similar-books-*.json    # 查询结果
```

---

## 🔧 **配置要求**

### **1. book-parser**
- ✅ 无需配置
- ✅ 直接使用

### **2. find-similar-books**
- ✅ 无需 API key
- ✅ 免费使用

### **3. query-ads**
- ⚠️ 需要 AnyNovel API token
- 当前 token 已配置在脚本中
- Token 有效期：2026年

---

## 📈 **数据对比**

| 功能 | Google Books API | AnyNovel API |
|------|-----------------|--------------|
| **数据类型** | 书籍基本信息 | 真实广告数据 |
| **广告数量** | ❌ 无 | ✅ 有 |
| **投放国家** | ❌ 无 | ✅ 有 |
| **投放渠道** | ❌ 无 | ✅ 有 |
| **评分** | ✅ 有 | ❌ 无 |
| **价格** | ✅ 有 | ❌ 无 |
| **API Key** | ❌ 不需要 | ⚠️ 需要 |
| **数据覆盖** | ✅ 广泛 | ⚠️ 有限（标签覆盖率低） |

**建议**：
- 用 Google Books API 查找相似书籍
- 用 AnyNovel API 查询投放数据
- 两者结合使用效果最佳

---

## 💡 **最佳实践**

### **1. 书籍解析**
- 确保 TXT 文件是 UTF-8 编码
- 章节标题格式统一
- 建议解析前 10-30 章

### **2. 相似书籍查询**
- 使用多个关键词组合
- 关键词要精准（如 "Navy SEAL" 而不是 "military"）
- 保存结果以便后续分析

### **3. 广告数据查询**
- 先查询所有书籍（`--all`）
- 手动筛选相关书籍
- 标签查询作为补充

### **4. 数据分析**
- 统计投放国家分布
- 分析投放渠道使用率
- 对比广告数量与热度

---

## 🚀 **未来优化方向**

### **短期（1-2周）**
1. ✅ 完善 book-parser 的章节识别
2. ✅ 优化相似度算法
3. ⏳ 添加缓存机制（避免重复查询）

### **中期（1-2月）**
1. ⏳ 集成 Goodreads API
2. ⏳ 添加 Amazon API
3. ⏳ 自动生成营销报告

### **长期（3-6月）**
1. ⏳ BookTok 数据爬取
2. ⏳ 自动化投放策略生成
3. ⏳ 集成 Book Promo Studio

---

## 📝 **示例输出**

### **Navy Brother 书籍分析**

**基本信息**：
- 书名：Falling for my boyfriend's Navy brother
- 章节数：8 章
- 总字数：55,715 字
- 语言：英文

**核心卖点**：
1. **渣男 vs 真男人**（ROI 1:8）
   - "他忘了接我5次，他哥哥却记得我的每一个眼神"

2. **禁忌之恋**（ROI 1:7）
   - "爱上男友的海军特种兵哥哥，我完了"

3. **海军特种兵霸总**（ROI 1:6）
   - "6尺3海军特种兵，冷酷危险，却只盯着我看"

**相似书籍**：
- Suzanne Brockmann 的 Navy SEAL 系列
- The Kissing Booth（禁忌之恋）
- After 系列（Toxic relationship）

**投放建议**：
- 美国：35%
- 英国：18%
- 加拿大+澳洲：22%
- 台湾+新加坡：15%

---

## 🔗 **相关链接**

- **GitHub 仓库**：https://github.com/Aimlessly1012/book-parser
- **Google Books API**：https://developers.google.com/books
- **AnyNovel API**：内部 API

---

## 📞 **支持**

如有问题，请：
1. 查看相关文档（README.md、SKILL.md）
2. 查看示例输出（navy-brother-v2-output/）
3. 联系开发者

---

**最后更新**：2026-03-05
**版本**：v1.0
