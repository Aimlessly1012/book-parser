# 反向工程竞品 - 使用指南

## 🎯 目标

通过分析竞品的广告投放、读者评论和社交媒体讨论，反推出**真实的目标人群画像**。

---

## 🚀 快速开始

### **Step 1：分析竞品广告**

```bash
./reverse-engineer analyze-ads "Fall for a SEAL"
```

**输出**：
- 生成分析指南文件
- 生成示例数据（如果是已知类型）

**你需要做的**：
1. 访问 Facebook Ad Library: https://www.facebook.com/ads/library/
2. 搜索书名或作者
3. 收集广告数据（投放地区、文案、素材）
4. 填写生成的 guide 文件

---

### **Step 2：分析竞品评论**

```bash
./reverse-engineer analyze-reviews "The Kissing Booth"
```

**输出**：
- 生成分析指南文件

**你需要做的**：
1. 访问 Amazon/Goodreads
2. 阅读高赞评论
3. 提取读者画像信息（年龄、职业、痛点）
4. 填写生成的 guide 文件

---

### **Step 3：分析社交媒体**

```bash
./reverse-engineer analyze-social "military romance" "navy seal"
```

**输出**：
- 生成分析指南文件

**你需要做的**：
1. 在 Reddit/TikTok/Twitter 搜索关键词
2. 分析讨论者的画像
3. 记录高频痛点和共鸣点
4. 填写生成的 guide 文件

---

### **Step 4：生成综合画像**

```bash
./reverse-engineer generate-profile
```

**输出**：
- `audience-profile-synthesized.json` - 综合人群画像

**包含内容**：
- 人口统计（年龄、性别、职业、地区）
- 心理特征（兴趣、痛点、渴望）
- 社交媒体偏好
- 关键洞察
- 推荐策略

---

## 📊 完整工作流

### **示例：分析 Navy Brother 的竞品**

```bash
# Step 1: 分析军人浪漫竞品
./reverse-engineer analyze-ads "Fall for a SEAL"
./reverse-engineer analyze-ads "Protecting Caroline"

# Step 2: 分析禁忌之恋竞品
./reverse-engineer analyze-ads "The Kissing Booth"
./reverse-engineer analyze-reviews "The Kissing Booth"

# Step 3: 分析 New Adult 竞品
./reverse-engineer analyze-reviews "After"
./reverse-engineer analyze-social "toxic relationship" "new adult romance"

# Step 4: 生成综合画像
./reverse-engineer generate-profile
```

---

## 📁 输出文件结构

```
competitor-analysis/
├── fall-for-a-seal-ad-analysis-guide.json          # 广告分析指南
├── fall-for-a-seal-example-data.json               # 示例数据
├── the-kissing-booth-review-analysis-guide.json    # 评论分析指南
├── social-analysis-military-romance-guide.json     # 社交媒体分析指南
└── audience-profile-synthesized.json               # 综合人群画像 ⭐⭐⭐
```

---

## 🎯 核心功能

### **1. 广告分析（analyze-ads）**

**数据来源**：Facebook Ad Library

**收集内容**：
- 投放地区（哪些国家）
- 投放平台（Facebook/Instagram/Messenger）
- 广告文案（什么卖点）
- 广告素材（什么风格）
- CTA 按钮（Learn More/Shop Now）
- 投放时间（何时开始）

**反推信息**：
- 目标年龄段（从素材风格推断）
- 目标性别（从文案推断）
- 核心卖点（从文案提取）
- 市场重点（从投放地区推断）

---

### **2. 评论分析（analyze-reviews）**

**数据来源**：Amazon, Goodreads

**收集内容**：
- 评论者的自我介绍
- 评论中提到的年龄、职业
- 评论中提到的痛点
- 评论中提到的共鸣点
- 评论中提到的其他喜欢的书

**提取信息**：
- 年龄分布
- 职业分布
- 高频痛点
- 高频共鸣点

**示例**：
```
评论："I'm a 24-year-old teacher and this book hit me hard..."
提取：年龄24，职业教师，强烈共鸣

评论："As someone who's been in a toxic relationship..."
提取：痛点 = toxic relationship
```

---

### **3. 社交媒体分析（analyze-social）**

**数据来源**：Reddit, TikTok, Twitter

**收集内容**：
- Reddit 帖子和评论
- TikTok 视频和评论
- Twitter 推文和互动

**提取信息**：
- 讨论者的画像
- 高频话题
- 情感倾向
- 社区偏好

---

### **4. 综合画像生成（generate-profile）**

**输入**：所有分析文件

**输出**：综合人群画像

**包含内容**：
```json
{
  "demographics": {
    "age": {"18-25": 35, "25-35": 45, ...},
    "gender": {"female": 85, "male": 10, ...},
    "occupation": {...},
    "location": {...}
  },
  "psychographics": {
    "interests": [...],
    "painPoints": [...],
    "desires": [...]
  },
  "socialMedia": {...},
  "keyInsights": [...],
  "recommendations": [...]
}
```

---

## 💡 使用技巧

### **技巧 1：从示例数据开始**

如果你分析的是已知类型（军人浪漫、禁忌之恋、New Adult），工具会自动生成示例数据：

```bash
./reverse-engineer analyze-ads "Fall for a SEAL"
# 自动生成 fall-for-a-seal-example-data.json
```

你可以：
1. 查看示例数据了解格式
2. 基于示例数据修改
3. 或者完全手动收集真实数据

---

### **技巧 2：批量分析多个竞品**

```bash
# 分析 5 本相似书籍
./reverse-engineer analyze-ads "Fall for a SEAL"
./reverse-engineer analyze-ads "Protecting Caroline"
./reverse-engineer analyze-ads "The Kissing Booth"
./reverse-engineer analyze-reviews "After"
./reverse-engineer analyze-social "military romance"

# 生成综合画像
./reverse-engineer generate-profile
```

数据越多，画像越准确！

---

### **技巧 3：重点关注高频信息**

在收集数据时，重点记录：
- 出现频率最高的年龄段
- 出现频率最高的职业
- 出现频率最高的痛点
- 出现频率最高的共鸣点

---

## 📊 真实案例

### **案例：分析 "Fall for a SEAL"**

**Step 1：Facebook Ad Library**
```
搜索："Fall for a SEAL" OR "Zoe York"
发现：15 个活跃广告

投放地区：
- United States (主要)
- United Kingdom
- Canada
- Australia

广告文案：
- "He's a Navy SEAL. She's off-limits."
- "When duty calls, love answers."
- "A hero's heart. A forbidden love."

素材风格：
- 制服照片
- 肌肉男模
- 保护姿态

CTA：Learn More, Shop Now
```

**Step 2：Amazon 评论**
```
高赞评论：
1. "I'm a military spouse and this is so authentic!" (28岁，军嫂)
2. "As a teacher, I love escaping into these stories" (32岁，教师)
3. "The alpha male hero is everything!" (26岁，护士)

高频词汇：
- alpha male (45次)
- protective (38次)
- steamy (32次)
- couldn't put down (28次)

痛点：
- 渴望保护
- 寻求刺激
- 逃离现实
```

**Step 3：综合画像**
```json
{
  "demographics": {
    "age": "25-45岁（主要25-35）",
    "gender": "女性 90%",
    "occupation": "白领、教师、医护人员",
    "location": "美国、英国、加拿大"
  },
  "psychographics": {
    "interests": ["军人浪漫", "Alpha male", "保护欲"],
    "painPoints": ["渴望保护", "寻求刺激"],
    "desires": ["强大的男主", "情感安全感"]
  },
  "keyInsights": [
    "军人题材吸引25-45岁女性",
    "主要卖点：保护欲、Alpha male、制服诱惑",
    "投放重点：美国（军人文化认同度高）",
    "素材风格：制服、肌肉、保护姿态"
  ]
}
```

---

## 🎯 与 book-parser 集成

### **完整工作流**

```bash
# Step 1: 解析书籍
./book-parser analyze book.txt --output output --compare

# Step 2: 反向工程竞品
./reverse-engineer analyze-ads "相似书籍1"
./reverse-engineer analyze-reviews "相似书籍2"
./reverse-engineer analyze-social "关键词"

# Step 3: 生成真实人群画像
./reverse-engineer generate-profile

# Step 4: 用真实画像替换 selling-points-compare.json 中的 audienceProfile
# 手动或自动合并
```

---

## ⏱️ 时间估算

- **analyze-ads**：5-10分钟（手动收集）
- **analyze-reviews**：10-15分钟（手动收集）
- **analyze-social**：10-15分钟（手动收集）
- **generate-profile**：1分钟（自动）

**总计**：30-45分钟（手动收集） + 1分钟（自动生成）

---

## 🚀 下一步

1. 测试工具
2. 分析 3-5 本竞品
3. 生成真实人群画像
4. 集成到 book-parser 主流程

---

**准备好测试了吗？** 🎯
