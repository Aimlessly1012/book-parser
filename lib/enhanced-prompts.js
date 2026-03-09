/**
 * 增强版 Prompt 模板 - 扩展数据维度
 * 每个阶段都输出更详细、更多维度的分析数据
 */

module.exports = {
  /**
   * Step 2: DNA 提取 - 书籍核心基因分析
   */
  dnaExtraction: (bookInfo, sampleChapters) => `你是一位资深的网文编辑和营销专家，专注于爽文、言情小说的市场推广。请用网文读者的语言分析以下书籍。

# 重要：文案风格要求
- 使用网文爽点式语言，直接、刺激、有冲击力
- 避免文学化、诗意化的表达
- 用"打脸"、"逆袭"、"虐渣"、"爽"等网文术语
- 卖点要一句话说清楚，让人一看就想点

# 书籍信息
- 总章节数：${bookInfo.totalChapters}
- 总字数：${bookInfo.totalWords}

# 章节列表
${bookInfo.chapters.map(ch => `${ch.number}. ${ch.title} (${ch.wordCount}字)`).join('\n')}

# 前10章完整内容
${sampleChapters.map(ch => `
## ${ch.title}

${ch.content}

---
`).join('\n')}

# 分析任务

请按照以下 JSON 格式输出完整的分析结果（只输出 JSON，不要其他内容）：

\`\`\`json
{
  "bookAnalysis": {
    "basicInfo": {
      "genre": "书籍类型（如：都市爽文、豪门虐恋、重生复仇等）",
      "subGenres": ["子类型1", "子类型2", "子类型3"],
      "coreHook": "一句话核心爽点",
      "keywords": ["关键词1", "关键词2", "关键词3", "关键词4", "关键词5"],
      "searchKeywords": ["英文关键词1", "关键词2", "关键词3"],
      "themes": ["主题1", "主题2", "主题3"],
      "toneStyle": "整体基调（如：轻松搞笑、虐心催泪、热血燃爽）",
      "targetMarkets": ["美国", "东南亚", "日韩"],
      "competitiveBooks": ["相似书籍1", "相似书籍2"]
    },
    
    "bookDNA": {
      "geneticCode": "书籍基因码（如：AECB-9F2D-4A1C）",
      "emotionWave": [
        {"chapter": 1, "value": -0.8, "emotion": "愤怒", "color": "#FF0000", "trigger": "触发事件"},
        {"chapter": 2, "value": -0.6, "emotion": "悲伤", "color": "#0000FF", "trigger": "触发事件"}
      ],
      "paceRhythm": [
        {"chapter": 1, "bpm": 120, "pace": "快", "reason": "原因"},
        {"chapter": 2, "bpm": 90, "pace": "中", "reason": "原因"}
      ],
      "coolPointDensity": [
        {"chapter": 1, "density": 0.2, "type": "打脸/逆袭/虐渣", "description": "具体爽点"},
        {"chapter": 2, "density": 0.5, "type": "类型", "description": "具体爽点"}
      ],
      "conflictIntensity": [
        {"chapter": 1, "intensity": 0.9, "conflictType": "情感/利益/身份", "parties": ["角色A", "角色B"]},
        {"chapter": 2, "intensity": 0.7, "conflictType": "类型", "parties": ["角色"]}
      ],
      "tensionCurve": [
        {"chapter": 1, "tension": 0.8, "reason": "悬念/危机/对抗"},
        {"chapter": 2, "tension": 0.6, "reason": "原因"}
      ],
      "satisfactionPoints": [
        {"chapter": 1, "satisfaction": 0.3, "event": "爽点事件"},
        {"chapter": 2, "satisfaction": 0.7, "event": "爽点事件"}
      ]
    },
    
    "addictionIndex": {
      "score": 8.7,
      "level": "极易上头",
      "factors": {
        "suspenseHooks": {
          "score": 9,
          "weight": 0.25,
          "count": 15,
          "examples": ["悬念1", "悬念2", "悬念3"],
          "distribution": "每章平均悬念数"
        },
        "emotionalInvestment": {
          "score": 8.5,
          "weight": 0.20,
          "reason": "共鸣原因",
          "triggers": ["触发点1", "触发点2"]
        },
        "paceControl": {
          "score": 8,
          "weight": 0.15,
          "reason": "节奏特点",
          "fastChapters": [1, 3, 5],
          "slowChapters": [2, 4]
        },
        "rewardFrequency": {
          "score": 9,
          "weight": 0.20,
          "reason": "奖励频率",
          "averageInterval": "3-5章",
          "rewardTypes": ["打脸", "逆袭", "甜宠"]
        },
        "cliffhangers": {
          "score": 8.5,
          "weight": 0.20,
          "count": 12,
          "examples": ["悬念1", "悬念2", "悬念3"],
          "effectiveness": "高/中/低"
        }
      },
      "prediction": {
        "bingeProbability": 0.85,
        "averageReadingTime": "3-5小时",
        "dropRate": 0.12,
        "rereadRate": 0.35,
        "viralPotential": 0.78,
        "wordOfMouthScore": 8.2
      },
      "warnings": ["风险点1", "风险点2"],
      "strengths": ["优势1", "优势2", "优势3"]
    },
    
    "characters": {
      "protagonist": {
        "name": "主角姓名",
        "age": 28,
        "occupation": "职业",
        "personality": ["性格1", "性格2", "性格3"],
        "arc": "成长弧线",
        "likability": 9.0,
        "relatability": 9.2,
        "strengths": ["优点1", "优点2"],
        "weaknesses": ["缺点1", "缺点2"],
        "desires": ["欲望1", "欲望2"],
        "fears": ["恐惧1", "恐惧2"],
        "backstory": "背景故事概要",
        "visualDescription": "外貌描述（用于视频制作）"
      },
      "supporting": [
        {
          "name": "配角姓名",
          "role": "角色定位",
          "relationship": "与主角的关系",
          "importance": "高/中/低",
          "likability": 7.5,
          "function": "在故事中的作用",
          "visualDescription": "外貌描述"
        }
      ],
      "relationships": [
        {
          "from": "角色A",
          "to": "角色B",
          "type": "关系类型",
          "description": "关系描述",
          "evolution": "关系发展",
          "conflictPotential": 0.8
        }
      ],
      "characterDynamics": {
        "mainTriangle": ["角色A", "角色B", "角色C"],
        "powerBalance": "权力关系描述",
        "emotionalCore": "情感核心"
      }
    },
    
    "plot": {
      "structure": "三幕式结构或英雄之旅",
      "mainConflicts": ["冲突1", "冲突2", "冲突3"],
      "subplots": ["支线1", "支线2"],
      "climax": "高潮章节和内容预期",
      "resolution": "预期结局类型",
      "chapterBreakdown": [
        {
          "chapter": 1,
          "phase": "铺垫/发展/冲突/高潮/悬念",
          "summary": "剧情概括",
          "intensity": 0.9,
          "hookType": "钩子类型",
          "keyEvents": ["事件1", "事件2"],
          "emotionalBeat": "情感节拍",
          "cliffhanger": "章末悬念",
          "coolPoints": ["爽点1", "爽点2"]
        }
      ],
      "plotCurve": "情节波动综合描述",
      "turningPoints": [
        {"chapter": 3, "event": "转折事件", "impact": "影响"}
      ],
      "foreshadowing": ["伏笔1", "伏笔2"]
    },
    
    "writingStyle": {
      "language": "语言风格（如：简洁明快、细腻婉约）",
      "dialogueQuality": 8.5,
      "descriptionDensity": "高/中/低",
      "pacing": "整体节奏感",
      "readability": 9.0,
      "uniqueFeatures": ["特色1", "特色2"]
    },
    
    "marketingAngles": {
      "goldenQuotes": [
        {"quote": "金句1", "context": "使用场景", "viralPotential": 0.9},
        {"quote": "金句2", "context": "使用场景", "viralPotential": 0.85}
      ],
      "highlights": [
        {
          "event": "高光事件",
          "type": "虐点/爽点/甜点",
          "emotion": "情感",
          "impact": 10,
          "webNovelStyle": "网文式描述",
          "suitableFor": ["视频", "图文"],
          "visualSuggestion": "视觉建议",
          "soundtrackMood": "配乐情绪"
        }
      ],
      "preliminarySellingPoints": [
        {
          "title": "卖点标题",
          "oneLinePitch": "一句话文案",
          "webNovelTags": ["标签1", "标签2"],
          "visualHook": "视觉钩子",
          "psychologicalTrigger": "心理驱动",
          "targetAudience": "目标人群",
          "platform": "适合平台",
          "estimatedCTR": 0.08
        }
      ],
      "viralElements": ["病毒传播元素1", "元素2"],
      "memePotential": ["梗1", "梗2"]
    },
    
    "contentWarnings": {
      "sensitiveTopics": ["敏感话题1", "话题2"],
      "ageRating": "年龄分级",
      "culturalConsiderations": ["文化考量1", "考量2"]
    }
  },
  
  "audienceProfile": {
    "primary": {
      "age": "25-35岁",
      "gender": "女性为主",
      "occupation": ["白领", "职场人"],
      "location": ["美国", "台湾", "新加坡"],
      "incomeLevel": "中等收入",
      "education": "本科及以上"
    }
  }
}
\`\`\`

请严格按照以上要求输出 JSON 格式的分析结果，只输出 JSON，不要其他内容。`,

  /**
   * Step 3: 受众画像生成 - 更详细的人群分析
   */
  audienceProfile: (bookDNA) => `你是一位专业的人群画像分析师。请根据以下书籍分析结果，反推并生成一个极其详细的目标人群画像。

# 书籍深度分析 (DNA)
${JSON.stringify(bookDNA, null, 2)}

# 任务目标
请输出 JSON 格式（只输出 JSON）：
{
  "primary": {
    "age": "年龄段",
    "ageDistribution": {"18-24": 0.2, "25-34": 0.5, "35-44": 0.3},
    "gender": "性别倾向",
    "genderRatio": {"female": 0.8, "male": 0.15, "other": 0.05},
    "occupation": ["职业1", "职业2", "职业3"],
    "location": ["地区1", "地区2", "地区3"],
    "incomeLevel": "收入水平",
    "education": "教育程度",
    "maritalStatus": "婚姻状况",
    "lifeStage": "人生阶段",
    "painPoints": ["痛点1", "痛点2", "痛点3"],
    "desires": ["动机1", "动机2", "动机3"],
    "frustrations": ["挫折感1", "挫折感2"],
    "aspirations": ["向往1", "向往2"]
  },
  
  "behavioral": {
    "readingHabits": "阅读场景描述",
    "readingTime": "阅读时段（如：睡前、通勤）",
    "readingDuration": "单次阅读时长",
    "genreFamiliarity": "熟悉程度",
    "platforms": ["TikTok", "WebNovel", "Instagram"],
    "devicePreference": "设备偏好",
    "socialMediaUsage": ["平台1", "平台2"],
    "contentConsumption": "内容消费习惯",
    "purchaseBehavior": "购买行为",
    "shareFrequency": "分享频率",
    "communityEngagement": "社区参与度"
  },
  
  "psychographics": {
    "psychologicalDrivers": "深层心理驱动力",
    "values": ["价值观1", "价值观2", "价值观3"],
    "lifestyle": "生活方式",
    "interests": ["兴趣1", "兴趣2", "兴趣3"],
    "aesthetic": "审美偏好",
    "personalityTraits": ["性格特征1", "特征2"],
    "readingTriggers": "触发阅读的核心点",
    "emotionalNeeds": ["情感需求1", "需求2"],
    "escapismLevel": "逃避现实程度（0-1）",
    "identityAlignment": "身份认同度"
  },
  
  "mediaConsumption": {
    "preferredFormats": ["短视频", "图文", "音频"],
    "contentLength": "偏好内容长度",
    "visualStyle": "视觉风格偏好",
    "musicTaste": "音乐品味",
    "influencerTypes": ["影响者类型1", "类型2"],
    "trendSensitivity": "潮流敏感度"
  },
  
  "purchaseJourney": {
    "awarenessChannels": ["认知渠道1", "渠道2"],
    "decisionFactors": ["决策因素1", "因素2"],
    "conversionTriggers": ["转化触发点1", "触发点2"],
    "pricesensitivity": "价格敏感度",
    "trialBehavior": "试读行为",
    "loyaltyDrivers": ["忠诚度驱动1", "驱动2"]
  },
  
  "segmentation": {
    "primarySegment": {
      "name": "核心人群名称",
      "size": "占比",
      "characteristics": "特征描述",
      "priority": "优先级"
    },
    "secondarySegments": [
      {
        "name": "次要人群名称",
        "size": "占比",
        "characteristics": "特征",
        "priority": "优先级"
      }
    ]
  },
  
  "competitiveInsights": {
    "currentReading": ["正在读的书1", "书2"],
    "favoriteAuthors": ["作者1", "作者2"],
    "genrePreferences": ["类型1", "类型2"],
    "unmetNeeds": ["未满足需求1", "需求2"]
  },
  
  "keyInsights": ["洞察1", "洞察2", "洞察3"],
  "personaName": "人群画像昵称（如：都市白领小美）",
  "personaQuote": "代表性语录"
}`,

  /**
   * Step 4: 卖点提炼 - 更全面的卖点分析
   */
  sellingPoints: (bookDNA, audienceProfile) => `你是一位顶尖的网文出海营销专家。请根据书籍分析结果和目标受众画像，提炼出最能打动该人群的**适配卖点**，并进行多维度深度评分。

# 书籍 DNA
${JSON.stringify(bookDNA, null, 2)}

# 目标受众画像
${JSON.stringify(audienceProfile, null, 2)}

# 任务要求
请输出 JSON 格式（只输出 JSON）：
{
  "finalSellingPoints": [
    {
      "pointId": "SP001",
      "title": "卖点标题",
      "oneLinePitch": "一句话核心文案",
      "extendedPitch": "扩展版文案（2-3句）",
      "priority": "极高/高/中/低",
      "psychologicalTriggers": "背后的心理动机",
      "emotionalAppeal": "情感诉求",
      "targetSegment": "目标人群细分",
      "uniqueAngle": "独特角度",
      "proofPoints": ["支撑点1", "支撑点2"],
      "scoring": {
        "marketAppeal": 9,
        "uniqueness": 8,
        "emotionalImpact": 10,
        "credibility": 8.5,
        "memorability": 9,
        "shareability": 8.5,
        "conversionPotential": 9,
        "overallScore": 9
      },
      "platformFit": {
        "tiktok": 9,
        "facebook": 8,
        "instagram": 8.5,
        "youtube": 7
      },
      "testingRecommendations": ["测试建议1", "建议2"],
      "risks": ["风险1", "风险2"],
      "opportunities": ["机会点1", "机会点2"]
    }
  ],
  
  "competitiveAdvantage": {
    "summary": "核心竞争力评价",
    "differentiators": ["差异化点1", "点2", "点3"],
    "marketGap": "市场空白",
    "positioningStatement": "定位陈述"
  },
  
  "messagingHierarchy": {
    "primaryMessage": "主要信息",
    "secondaryMessages": ["次要信息1", "信息2"],
    "supportingMessages": ["支撑信息1", "信息2"]
  },
  
  "contentPillars": [
    {
      "pillar": "内容支柱1",
      "themes": ["主题1", "主题2"],
      "formats": ["格式1", "格式2"]
    }
  ]
}`,

  /**
   * Step 5: 创意方向 - 更详细的创意产出
   */
  creativeDirections: (bookDNA, audienceProfile, sellingPoints) => `你是一位顶级效果广告创意总监。请结合书籍基因、受众画像和核心卖点，产出高转化的广告创意方向（Facebook/TikTok/Instagram）。

# 输入数据
- 核心信息: ${JSON.stringify(bookDNA.bookAnalysis?.basicInfo, null, 2)}
- 角色背景: ${JSON.stringify(bookDNA.bookAnalysis?.characters?.protagonist, null, 2)}
- 受众画像: ${JSON.stringify(audienceProfile, null, 2)}
- 核心卖点: ${JSON.stringify(sellingPoints.finalSellingPoints, null, 2)}

# 产出目标
请输出 JSON 格式（只输出 JSON）：
{
  "creativeDirections": [
    {
      "pointId": "SP001",
      "creativeName": "创意方案名称",
      "creativeHook": "第一秒视觉钩子",
      "narrativeStructure": "叙事结构（如：问题-解决、前后对比）",
      
      "tiktok": {
        "videoScript": "完整视频脚本（分镜头）",
        "caption": "配文",
        "hashtags": ["#标签1", "#标签2", "#标签3"],
        "soundSuggestion": "配乐建议",
        "visualStyle": "视觉风格",
        "duration": "15秒/30秒/60秒",
        "callToAction": "行动号召"
      },
      
      "facebook": {
        "headline": "标题",
        "primaryText": "主文案",
        "description": "描述",
        "imageDescription": "图片描述",
        "videoScript": "视频脚本（如适用）",
        "callToAction": "CTA按钮文字"
      },
      
      "instagram": {
        "feedPost": "信息流文案",
        "storyScript": "故事脚本",
        "reelsScript": "Reels脚本",
        "caption": "配文",
        "hashtags": ["#标签1", "#标签2"]
      },
      
      "visualBrief": {
        "colorPalette": ["#颜色1", "#颜色2"],
        "mood": "情绪氛围",
        "keyVisuals": ["关键视觉1", "视觉2"],
        "characterStyling": "角色造型",
        "sceneDescription": "场景描述",
        "textOverlay": "文字叠加建议",
        "transitions": "转场效果"
      },
      
      "emotionalAngle": "挖掘的心理切入点",
      "targetingRecommendations": {
        "demographics": "人口定向",
        "interests": ["兴趣1", "兴趣2"],
        "behaviors": ["行为1", "行为2"],
        "lookalikes": "相似受众建议"
      },
      
      "performancePrediction": {
        "estimatedCTR": 0.08,
        "estimatedCVR": 0.12,
        "viralPotential": 0.75,
        "engagementScore": 8.5
      },
      
      "testingVariations": [
        {"element": "钩子", "variations": ["变体1", "变体2"]},
        {"element": "CTA", "variations": ["变体1", "变体2"]}
      ],
      
      "productionNotes": "制作注意事项",
      "budgetTier": "预算层级（低/中/高）"
    }
  ],
  
  "campaignStrategy": {
    "phasing": "投放阶段规划",
    "budgetAllocation": "预算分配建议",
    "kpis": ["KPI1", "KPI2", "KPI3"],
    "optimizationTips": ["优化建议1", "建议2"]
  }
}`
};
