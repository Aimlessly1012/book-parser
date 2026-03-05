# 书籍解析完整方案

## 一、提取内容全景图

### 1. 基础信息层
```json
{
  "basic": {
    "bookId": "123",
    "title": "她的逆袭人生",
    "author": "张三",
    "genre": "都市情感",
    "tags": ["女性成长", "职场", "逆袭", "爱情"],
    "totalChapters": 200,
    "totalWords": 500000,
    "status": "完结",
    "rating": 4.5,
    "synopsis": "一个普通女孩的逆袭故事..."
  }
}
```

### 2. 内容分析层
```json
{
  "content": {
    "chapters": [
      {
        "id": 1,
        "title": "第一章 被背叛的那一天",
        "content": "...",
        "wordCount": 3000,
        "summary": "女主发现男友出轨，决定离开",
        "keywords": ["背叛", "决裂", "新生"],
        "emotion": "愤怒、悲伤、决绝",
        "emotionScore": -0.7,
        "paceScore": 0.8,
        "isHighlight": true,
        "highlightReason": "情感冲突强烈，适合做短视频开头"
      }
    ],
    
    "characters": [
      {
        "name": "林晓雪",
        "role": "主角",
        "gender": "女",
        "age": 25,
        "occupation": "职场新人",
        "personality": ["坚韧", "聪明", "独立", "有原则"],
        "arc": "从被动受害者 → 主动掌控者",
        "firstAppear": 1,
        "keyChapters": [1, 5, 10, 20, 50],
        "relationships": [
          {
            "target": "陈浩",
            "type": "前男友",
            "relation": "敌对",
            "description": "渣男前任，背叛女主"
          },
          {
            "target": "顾寒",
            "type": "男主",
            "relation": "爱情",
            "description": "霸道总裁，女主的救赎者"
          }
        ]
      }
    ],
    
    "plotLines": [
      {
        "name": "职场逆袭线",
        "type": "主线",
        "chapters": [1, 3, 5, 8, 12, 20, 30],
        "description": "从底层员工到公司高管的成长之路",
        "climax": 30,
        "resolution": 50
      },
      {
        "name": "情感救赎线",
        "type": "主线",
        "chapters": [1, 10, 15, 25, 40],
        "description": "从被背叛到重新相信爱情",
        "climax": 40,
        "resolution": 50
      },
      {
        "name": "复仇支线",
        "type": "支线",
        "chapters": [5, 12, 18, 28],
        "description": "对渣男前任的反击",
        "climax": 28,
        "resolution": 30
      }
    ],
    
    "emotionCurve": [
      { "chapter": 1, "emotion": "愤怒", "intensity": -0.8 },
      { "chapter": 5, "emotion": "迷茫", "intensity": -0.3 },
      { "chapter": 10, "emotion": "希望", "intensity": 0.5 },
      { "chapter": 20, "emotion": "甜蜜", "intensity": 0.8 },
      { "chapter": 30, "emotion": "高潮", "intensity": 0.9 }
    ],
    
    "themes": [
      {
        "name": "女性独立",
        "weight": 0.9,
        "description": "强调女性经济独立和精神独立"
      },
      {
        "name": "自我救赎",
        "weight": 0.8,
        "description": "通过自身努力走出困境"
      },
      {
        "name": "真爱可贵",
        "weight": 0.7,
        "description": "经历背叛后重新相信爱情"
      }
    ],
    
    "writingStyle": {
      "pace": "前期慢热，中后期节奏加快",
      "language": "现代都市风格，对话生动",
      "narrative": "第三人称全知视角",
      "strengths": ["人物刻画细腻", "情感描写真实", "职场细节专业"],
      "weaknesses": ["前期铺垫较长", "部分情节略显套路"]
    }
  }
}
```

### 3. 营销素材层
```json
{
  "marketing": {
    "highlights": [
      {
        "chapter": 1,
        "scene": "发现男友出轨",
        "type": "冲突爆点",
        "quote": "我给你的爱，你转手送给了别人",
        "videoScript": {
          "hook": "当我推开门，看到的是...",
          "body": "三年感情，一朝崩塌",
          "cta": "她会如何反击？",
          "duration": 15,
          "bgm": "悲伤钢琴曲"
        },
        "suitableFor": ["抖音", "快手"],
        "estimatedViews": "100w+"
      },
      {
        "chapter": 10,
        "scene": "职场首次胜利",
        "type": "爽点",
        "quote": "这一次，我要为自己而活",
        "videoScript": {
          "hook": "被看不起的她，做了这件事",
          "body": "从底层到高管，只用了3个月",
          "cta": "她是怎么做到的？",
          "duration": 15,
          "bgm": "励志音乐"
        },
        "suitableFor": ["抖音", "小红书"],
        "estimatedViews": "50w+"
      }
    ],
    
    "goldenQuotes": [
      "女人最大的底气，是自己挣的钱",
      "爱情可以输，但人生不能输",
      "你不勇敢，没人替你坚强",
      "最好的报复，是让自己变得更好"
    ],
    
    "suspensePoints": [
      {
        "chapter": 5,
        "question": "神秘男人的真实身份是？",
        "answer": "霸道总裁顾寒",
        "revealChapter": 8
      },
      {
        "chapter": 15,
        "question": "前男友为何突然回头？",
        "answer": "发现女主成为富豪女友",
        "revealChapter": 18
      }
    ],
    
    "emotionalTriggers": [
      {
        "type": "共鸣",
        "scene": "职场被欺负",
        "targetAudience": "职场新人",
        "reason": "每个人都经历过职场不公"
      },
      {
        "type": "爽感",
        "scene": "打脸前男友",
        "targetAudience": "情感受挫者",
        "reason": "替读者出了一口恶气"
      },
      {
        "type": "治愈",
        "scene": "男主温柔守护",
        "targetAudience": "都市女性",
        "reason": "满足被爱被保护的幻想"
      }
    ]
  }
}
```

### 4. 人群画像层
```json
{
  "audience": {
    "targetAudience": {
      "primary": {
        "label": "25-35岁都市女性",
        "percentage": 60,
        "demographics": {
          "ageRange": "25-35岁",
          "gender": "女性",
          "education": "本科及以上",
          "income": "月收入 8k-20k",
          "location": "一二线城市",
          "maritalStatus": "单身/恋爱中"
        },
        "psychographics": {
          "interests": ["职场成长", "情感话题", "女性独立", "时尚美妆"],
          "painPoints": [
            "职场天花板",
            "情感不顺",
            "经济压力",
            "自我价值迷茫"
          ],
          "desires": [
            "事业成功",
            "经济独立",
            "找到真爱",
            "自我实现"
          ],
          "values": [
            "女性力量",
            "自我价值",
            "不妥协",
            "真实自我"
          ],
          "fears": [
            "被背叛",
            "被看不起",
            "失去自我",
            "年龄焦虑"
          ]
        },
        "behaviors": {
          "readingHabits": "碎片化阅读，通勤时间、睡前",
          "readingTime": "每天 30-60 分钟",
          "platforms": ["抖音", "小红书", "微信读书", "番茄小说"],
          "contentPreference": "短视频 > 图文 > 长文",
          "purchaseTrigger": [
            "情感共鸣",
            "爆点片段",
            "KOL 推荐",
            "限时优惠"
          ],
          "shareMotivation": [
            "引发共鸣想分享",
            "觉得有价值",
            "想表达态度"
          ]
        }
      },
      "secondary": [
        {
          "label": "18-24岁职场新人",
          "percentage": 25,
          "keyFeatures": "刚入职场，对成长类内容敏感"
        },
        {
          "label": "35-45岁二次成长女性",
          "percentage": 15,
          "keyFeatures": "经历过挫折，寻求人生第二春"
        }
      ]
    },
    
    "suitableFor": [
      {
        "label": "职场新人",
        "matchScore": 0.95,
        "reason": "主角从小白到精英的成长路径，提供职场生存指南",
        "keyChapters": [3, 5, 8, 12],
        "marketingAngle": "职场小白的逆袭秘籍",
        "platforms": ["抖音", "小红书"],
        "adCopy": "3个月从底层到高管，她做对了什么？"
      },
      {
        "label": "都市女性",
        "matchScore": 0.9,
        "reason": "聚焦女性独立与情感选择，引发强烈共鸣",
        "keyChapters": [1, 10, 20, 30],
        "marketingAngle": "女性独立宣言",
        "platforms": ["小红书", "微博"],
        "adCopy": "女人最大的底气，是自己挣的钱"
      },
      {
        "label": "情感受挫者",
        "matchScore": 0.85,
        "reason": "疗愈系情节，从背叛中走出，重新相信爱情",
        "keyChapters": [1, 15, 25, 40],
        "marketingAngle": "情感疗愈系",
        "platforms": ["抖音", "快手"],
        "adCopy": "被渣男伤害后，她遇到了真正的爱情"
      },
      {
        "label": "爽文爱好者",
        "matchScore": 0.8,
        "reason": "打脸、逆袭、复仇情节丰富",
        "keyChapters": [18, 28, 35],
        "marketingAngle": "爽文打脸",
        "platforms": ["快手", "番茄小说"],
        "adCopy": "前男友跪求复合，她的回应绝了！"
      },
      {
        "label": "励志成长追求者",
        "matchScore": 0.75,
        "reason": "正能量满满，激励人心",
        "keyChapters": [10, 20, 30, 50],
        "marketingAngle": "励志成长",
        "platforms": ["小红书", "知乎"],
        "adCopy": "最好的报复，是让自己变得更好"
      }
    ],
    
    "notSuitableFor": [
      {
        "label": "纯爱甜宠读者",
        "reason": "前期有虐恋情节，不够甜",
        "alternative": "推荐《甜蜜暴击》等纯甜文"
      },
      {
        "label": "快节奏爽文读者",
        "reason": "前期铺垫较长，节奏偏慢",
        "alternative": "推荐《重生之豪门千金》等快节奏文"
      },
      {
        "label": "未成年读者",
        "reason": "涉及职场潜规则、情感背叛等成人话题",
        "alternative": "推荐校园青春类作品"
      },
      {
        "label": "男性读者",
        "reason": "女性视角为主，男性共鸣度低",
        "alternative": "推荐都市男频作品"
      }
    ],
    
    "competitorAnalysis": {
      "similarBooks": [
        {
          "title": "《欢乐颂》",
          "similarity": 0.7,
          "differentiator": "更聚焦单一主角成长，情节更紧凑"
        },
        {
          "title": "《三十而已》",
          "similarity": 0.6,
          "differentiator": "主角更年轻，更有逆袭感"
        }
      ],
      "marketGap": "职场+情感双线并重，且有强烈爽感的女性成长小说"
    }
  }
}
```

### 5. 营销策略层
```json
{
  "strategy": {
    "byPlatform": {
      "douyin": {
        "contentType": "短视频",
        "duration": "15-30秒",
        "frequency": "每天 3-5 条",
        "bestTime": "12:00, 18:00, 21:00",
        "hashtags": ["#女性独立", "#职场逆袭", "#都市情感"],
        "scripts": [
          {
            "angle": "冲突爆点",
            "hook": "当我推开门，看到的是...",
            "body": "三年感情，一朝崩塌",
            "cta": "她会如何反击？评论区告诉我",
            "targetAudience": "情感受挫者",
            "estimatedCTR": "8%"
          }
        ]
      },
      "xiaohongshu": {
        "contentType": "图文",
        "wordCount": "200-500字",
        "frequency": "每天 2 条",
        "bestTime": "10:00, 20:00",
        "tags": ["女性成长", "职场干货", "情感治愈"],
        "posts": [
          {
            "title": "被渣男伤害后，我做了这 5 件事",
            "content": "1. 断联...\n2. 提升自己...",
            "images": ["封面图", "金句图", "对比图"],
            "targetAudience": "都市女性",
            "estimatedLikes": "5000+"
          }
        ]
      },
      "wechat": {
        "contentType": "长文",
        "wordCount": "1000-2000字",
        "frequency": "每周 2 条",
        "bestTime": "周三、周日 20:00",
        "articles": [
          {
            "title": "25 岁被背叛，30 岁身价千万：她的逆袭告诉我们什么？",
            "outline": "引子 → 故事 → 启发 → 行动建议",
            "targetAudience": "25-35岁女性",
            "estimatedReads": "10w+"
          }
        ]
      }
    },
    
    "byAudience": {
      "职场新人": {
        "painPoint": "不知道如何在职场生存",
        "solution": "书中提供职场生存法则",
        "hook": "3个月从底层到高管的秘密",
        "cta": "点击查看完整攻略",
        "channels": ["抖音", "小红书", "知乎"],
        "budget": "30%"
      },
      "都市女性": {
        "painPoint": "经济不独立，情感受挫",
        "solution": "通过主角成长获得力量",
        "hook": "女人最大的底气，是自己挣的钱",
        "cta": "看她如何华丽转身",
        "channels": ["小红书", "微博", "抖音"],
        "budget": "40%"
      },
      "情感受挫者": {
        "painPoint": "被背叛，不敢再相信爱情",
        "solution": "疗愈系情节，重建信心",
        "hook": "被渣男伤害后，她遇到了真爱",
        "cta": "你也值得被好好爱",
        "channels": ["抖音", "快手"],
        "budget": "30%"
      }
    },
    
    "conversionFunnel": {
      "awareness": {
        "goal": "让目标用户看到",
        "tactics": ["短视频投放", "KOL 合作", "话题营销"],
        "kpi": "曝光量 1000w+"
      },
      "interest": {
        "goal": "引发兴趣",
        "tactics": ["爆点片段", "金句海报", "用户评论"],
        "kpi": "点击率 5%+"
      },
      "desire": {
        "goal": "激发购买欲望",
        "tactics": ["限时优惠", "前 3 章免费", "用户好评"],
        "kpi": "加购率 20%+"
      },
      "action": {
        "goal": "完成购买",
        "tactics": ["一键购买", "支付优惠", "赠送周边"],
        "kpi": "转化率 3%+"
      }
    }
  }
}
```

## 二、技术实现方案

### 1. 数据获取流程
```
用户输入书籍 ID
    ↓
调用 API 获取章节列表 (1-30章)
    ↓
并发获取章节内容
    ↓
存储到本地 JSON
```

### 2. AI 分析流程
```
章节内容
    ↓
Prompt 1: 提取基础信息
  - 人物、情节、情感、关键词
    ↓
Prompt 2: 分析人物关系
  - 主角、配角、关系网
    ↓
Prompt 3: 识别高光片段
  - 冲突、爽点、金句
    ↓
Prompt 4: 推断目标读者
  - 年龄、性别、兴趣、痛点
    ↓
Prompt 5: 生成营销素材
  - 短视频脚本、图文文案
    ↓
合并输出完整报告
```

### 3. Prompt 模板

#### Prompt 1: 内容分析
```
你是一位资深的图书编辑和内容分析师。请分析以下章节内容：

【章节信息】
书名：{{bookTitle}}
章节：第 {{chapterNum}} 章 {{chapterTitle}}
内容：{{chapterContent}}

【分析任务】
1. 提取人物：姓名、角色、性格特点、首次出现
2. 提取情节：主要事件、冲突点、转折点
3. 分析情感：主导情绪、情感强度（-1到1）
4. 提取关键词：5-10个核心关键词
5. 判断节奏：快/中/慢
6. 识别高光：是否适合做短视频素材（是/否，原因）

【输出格式】
严格按照 JSON 格式输出，不要有任何额外文字。
```

#### Prompt 2: 人群画像
```
你是一位资深的图书营销专家。基于以下书籍分析，推断目标读者画像：

【书籍信息】
书名：{{bookTitle}}
类型：{{genre}}
主题：{{themes}}
人物：{{characters}}
情节：{{plotSummary}}

【分析任务】
1. 目标读者画像
   - 年龄段、性别、学历、收入、地域
   - 兴趣爱好、痛点、渴望、价值观、恐惧
   - 阅读习惯、常用平台、内容偏好、购买触发点

2. 适合人群标签（至少 5 个）
   - 人群名称、匹配度评分、匹配原因、营销角度、推广渠道、广告文案

3. 不适合人群（至少 3 个）
   - 人群名称、不匹配原因、替代推荐

【输出格式】
严格按照 JSON 格式输出。
```

#### Prompt 3: 营销素材生成
```
你是一位资深的短视频编剧和营销文案专家。基于以下信息，生成营销素材：

【书籍信息】
书名：{{bookTitle}}
目标人群：{{targetAudience}}
高光片段：{{highlights}}
金句：{{quotes}}

【生成任务】
1. 抖音短视频脚本（3条）
   - Hook（前3秒抓眼球）
   - Body（10秒讲故事）
   - CTA（2秒行动号召）
   - 建议 BGM、字幕样式

2. 小红书种草文案（2条）
   - 标题（吸引点击）
   - 正文（200-300字）
   - 话题标签（5个）
   - 配图建议

3. 微信朋友圈文案（3条）
   - 50字以内
   - 引发共鸣或好奇

【输出格式】
严格按照 JSON 格式输出。
```

### 4. 代码结构
```
book-parser/
├── book-parser              # 主脚本
├── lib/
│   ├── api.js              # API 调用封装
│   ├── analyzer.js         # AI 分析逻辑
│   ├── prompts.js          # Prompt 模板
│   └── output.js           # 结果输出
├── templates/
│   ├── report.html         # HTML 报告模板
│   └── report.md           # Markdown 报告模板
├── SKILL.md
├── README.md
└── .env.example
```

## 三、输出格式

### 1. JSON 完整报告
```json
{
  "basic": {...},
  "content": {...},
  "marketing": {...},
  "audience": {...},
  "strategy": {...},
  "meta": {
    "analyzedAt": "2026-03-05T14:30:00Z",
    "version": "1.0",
    "chaptersAnalyzed": 30,
    "aiModel": "Claude Sonnet 4.5"
  }
}
```

### 2. Markdown 可读报告
```markdown
# 《她的逆袭人生》分析报告

## 一、基础信息
- 书名：她的逆袭人生
- 作者：张三
- 类型：都市情感
...

## 二、内容分析
### 人物关系图
[人物关系图]

### 情节线索
1. 职场逆袭线
2. 情感救赎线
...

## 三、目标读者画像
### 主要受众
25-35岁都市女性...

## 四、营销建议
### 抖音短视频脚本
...
```

### 3. HTML 可视化报告
- 人物关系图（可交互）
- 情感曲线图
- 章节热力图
- 营销素材预览

## 四、使用示例

```bash
# 完整分析
./book-parser analyze 123 --count 30 --output report.json

# 只分析人群画像
./book-parser audience 123

# 生成营销素材
./book-parser marketing 123 --platform douyin

# 生成可视化报告
./book-parser report 123 --format html
```

---

这就是完整的书籍解析方案！涵盖了：
✅ 内容分析（人物、情节、情感）
✅ 人群画像（目标读者、适合人群）
✅ 营销素材（短视频、图文、文案）
✅ 营销策略（分平台、分人群）
✅ 技术实现（API、AI、输出）
