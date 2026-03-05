# 书籍广告数据查询工具使用指南

使用 AnyNovel 竞品分析 API 查询**真实的广告投放数据**

---

## 🎯 **为什么这个API更好？**

### **Google Books API vs AnyNovel 广告API**

| 功能 | Google Books API | AnyNovel 广告API |
|------|-----------------|------------------|
| **数据类型** | 书籍基本信息 | **真实广告投放数据** ✅ |
| **广告数量** | ❌ 无 | ✅ 总广告数、热度 |
| **投放国家** | ❌ 无 | ✅ 具体投放国家列表 |
| **投放渠道** | ❌ 无 | ✅ TikTok、Facebook等 |
| **投放时间** | ❌ 无 | ✅ 最后投放时间 |
| **活跃状态** | ❌ 无 | ✅ 活跃/不活跃 |
| **标签** | 类型分类 | ✅ 详细标签 |
| **语言** | ✅ 有 | ✅ 有 |
| **评分** | ✅ 有 | ❌ 无 |

**结论**：AnyNovel API 提供**真实的市场数据**，比 Google Books 更适合竞品分析！

---

## 🔧 **配置要求**

### **1. 需要 Authorization Token**

API 需要认证，需要在 header 中添加：

```javascript
headers: {
  'Content-Type': 'application/json',
  'Accept-Language': 'zh-CN',
  'Authorization': 'Bearer YOUR_TOKEN_HERE'  // 需要添加
}
```

### **2. 获取 Token**

请联系 AnyNovel 团队获取 API token。

---

## 📊 **API 功能**

### **可查询的数据**

1. **书籍基本信息**
   - 书籍ID、书籍名称
   - 语言、标签
   - 内容来源（原创/翻译）
   - 连载状态

2. **广告投放数据** ⭐
   - 总广告数
   - 热度
   - 最后投放时间
   - 活跃状态

3. **投放策略数据** ⭐⭐⭐
   - 投放国家列表
   - 投放渠道（TikTok、Facebook等）
   - 投放地区
   - 素材类型（视频/图片）

### **可筛选的条件**

```json
{
  "bookName": "military romance",        // 书名模糊搜索
  "bookLanguage": ["en"],                // 语言筛选
  "tags": ["romance", "military"],       // 标签筛选
  "countries": ["US", "UK"],             // 投放国家
  "channels": ["TikTok", "Facebook"],    // 投放渠道
  "activeOnly": true,                    // 仅活跃书籍
  "minAds": 100,                         // 最小广告数
  "sortBy": "totalAds",                  // 按广告数排序
  "sortDirection": "desc"                // 降序
}
```

---

## 🎯 **使用场景**

### **场景 1: 查找同类型书籍的真实投放数据**

```bash
./find-books-by-ads "military romance" "navy seal" --language en --active-only
```

**可以获得**：
- 哪些军人浪漫小说正在投放广告
- 它们的广告数量（投放规模）
- 投放在哪些国家
- 使用哪些渠道（TikTok/Facebook）
- 最后投放时间（是否还活跃）

### **场景 2: 分析竞品的投放策略**

```bash
./find-books-by-ads "After" --language en --save
```

**可以获得**：
- After 系列的广告投放规模
- 主要投放国家（美国？英国？）
- 主要投放渠道（TikTok为主？）
- 素材类型（视频还是图片？）

### **场景 3: 发现市场趋势**

```bash
./find-books-by-ads "forbidden love" --language en --time-range 2025-10,2025-11
```

**可以获得**：
- 禁忌题材的书籍有多少在投放
- 哪些国家对这个题材感兴趣
- 投放规模的分布

---

## 📈 **数据价值**

### **1. 验证卖点的真实市场表现**

**之前（Google Books）**：
- 只能看到评分、评论数
- 无法知道是否在投放广告
- 无法知道投放效果

**现在（AnyNovel API）**：
- ✅ 看到真实的广告投放数量
- ✅ 看到投放国家和渠道
- ✅ 看到是否还在活跃投放

**示例**：
```
书籍A: 评分4.5，但广告数=0 → 可能是老书，不再投放
书籍B: 评分4.0，但广告数=5000 → 正在大规模投放，说明ROI好
```

### **2. 精准的地区投放策略**

**之前（猜测）**：
- 美国市场应该占35%
- 基于：相似书籍在美国成功

**现在（数据驱动）**：
- 查询10本相似书籍的投放数据
- 统计：8本在美国投放，6本在英国，3本在台湾
- 结论：美国是主战场，英国是第二市场

### **3. 渠道优先级**

**之前（猜测）**：
- TikTok应该是主要渠道

**现在（数据驱动）**：
- 查询相似书籍的渠道分布
- 统计：TikTok 90%，Facebook 60%，Instagram 40%
- 结论：TikTok是必投，Facebook是辅助

---

## 🔥 **实际应用流程**

### **Step 1: 查找精准相似书籍**

```bash
# 查找军人浪漫 + 禁忌题材的书籍
./find-books-by-ads "military romance" "forbidden love" "navy seal" \
  --language en \
  --active-only \
  --save
```

**输出**：
```json
{
  "similarBooks": [
    {
      "bookName": "Falling for the SEAL",
      "totalAds": 3500,
      "countries": ["US", "UK", "CA", "AU"],
      "channels": ["TikTok", "Facebook"],
      "tags": ["military", "romance", "forbidden"],
      "activityStatus": "活跃"
    },
    {
      "bookName": "Navy SEAL's Secret",
      "totalAds": 2800,
      "countries": ["US", "UK"],
      "channels": ["TikTok"],
      "tags": ["military", "romance", "secret"],
      "activityStatus": "活跃"
    }
  ]
}
```

### **Step 2: 分析投放策略**

```python
# 统计投放国家
countries = {}
for book in similarBooks:
    for country in book['countries']:
        countries[country] = countries.get(country, 0) + 1

# 结果：
# US: 10本 (100%)
# UK: 8本 (80%)
# CA: 6本 (60%)
# AU: 5本 (50%)
```

### **Step 3: 生成投放建议**

```
基于10本相似书籍的真实投放数据：

投放地区建议：
- 美国：35% 预算（10/10本都在投放）
- 英国：20% 预算（8/10本在投放）
- 加拿大：15% 预算（6/10本在投放）
- 澳大利亚：10% 预算（5/10本在投放）

投放渠道建议：
- TikTok：60% 预算（9/10本使用）
- Facebook：30% 预算（6/10本使用）
- Instagram：10% 预算（4/10本使用）

素材类型建议：
- 视频：70%（7/10本主要用视频）
- 图片：30%（3/10本主要用图片）
```

---

## 🚀 **下一步**

### **需要做的事**

1. **获取 API Token**
   - 联系 AnyNovel 团队
   - 获取 Authorization token

2. **更新工具**
   - 在 `find-books-by-ads` 中添加 token
   - 测试 API 连接

3. **批量查询**
   - 查询 20-50 本相似书籍
   - 统计投放数据
   - 生成投放策略报告

4. **集成到 book-parser**
   - 自动查询相似书籍的广告数据
   - 生成基于真实数据的卖点分析
   - 输出可执行的投放策略

---

## 📝 **API 请求示例**

```bash
curl -X POST https://test-ad-middle.anynovel.app/api/middlemanage/v1/competitiveanalysis/books-ads \
  -H "Content-Type: application/json" \
  -H "Accept-Language: zh-CN" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "timeGranularity": "month",
    "timeDimension": ["2025-10", "2025-11"],
    "bookLanguage": ["en"],
    "tags": ["romance", "military"],
    "activeOnly": true,
    "sortBy": "totalAds",
    "sortDirection": "desc",
    "pageIndex": 1,
    "pageSize": 20
  }'
```

---

## 🎯 **总结**

**AnyNovel 广告API 的优势**：
1. ✅ 真实的市场数据（不是猜测）
2. ✅ 精准的投放策略（国家、渠道、素材）
3. ✅ 活跃状态（知道哪些书还在投放）
4. ✅ 投放规模（广告数量 = 投入规模）

**下一步**：
1. 获取 API token
2. 查询相似书籍的真实投放数据
3. 基于数据生成投放策略
4. 替代 Google Books API

**这将使我们的分析从"猜测"变成"数据驱动"！** 🚀
