/**
 * 精简版 Prompt 模板 - 保留所有维度，减少说明文字
 * 适用于长篇内容，避免 API 超时
 */

module.exports = {
  /**
   * Step 2: DNA 提取 - 精简版（只分析前3章）
   */
  dnaExtractionCompact: (bookInfo, sampleChapters) => {
    // 只取前3章
    const limitedChapters = sampleChapters.slice(0, Math.min(3, sampleChapters.length));
    
    return `你是网文营销专家。分析以下书籍，用网文爽点式语言。

# 书籍信息
总章节: ${bookInfo.totalChapters} | 总字数: ${bookInfo.totalWords}

章节列表:
${bookInfo.chapters.map(ch => `${ch.number}. ${ch.title} (${ch.wordCount}字)`).join('\n')}

# 前3章内容
${limitedChapters.map(ch => `## ${ch.title}\n${ch.content}\n---`).join('\n')}

# 输出 JSON（只输出JSON，无其他内容）

\`\`\`json
{
  "bookAnalysis": {
    "basicInfo": {
      "genre": "类型",
      "subGenres": ["子类型"],
      "coreHook": "核心爽点",
      "keywords": ["关键词"],
      "searchKeywords": ["英文关键词"],
      "themes": ["主题"],
      "toneStyle": "基调",
      "targetMarkets": ["市场"],
      "competitiveBooks": ["竞品"]
    },
    "bookDNA": {
      "geneticCode": "基因码",
      "emotionWave": [{"chapter": 1, "value": 0.5, "emotion": "情绪", "color": "#000", "trigger": "触发"}],
      "paceRhythm": [{"chapter": 1, "bpm": 100, "pace": "节奏", "reason": "原因"}],
      "coolPointDensity": [{"chapter": 1, "density": 0.5, "type": "类型", "description": "描述"}],
      "conflictIntensity": [{"chapter": 1, "intensity": 0.5, "conflictType": "类型", "parties": ["角色"]}],
      "tensionCurve": [{"chapter": 1, "tension": 0.5, "reason": "原因"}],
      "satisfactionPoints": [{"chapter": 1, "satisfaction": 0.5, "event": "事件"}]
    },
    "addictionIndex": {
      "score": 8.0,
      "level": "等级",
      "factors": {
        "suspenseHooks": {"score": 8, "weight": 0.25, "count": 10, "examples": ["例子"], "distribution": "分布"},
        "emotionalInvestment": {"score": 8, "weight": 0.20, "reason": "原因", "triggers": ["触发点"]},
        "paceControl": {"score": 8, "weight": 0.15, "reason": "原因", "fastChapters": [1], "slowChapters": [2]},
        "rewardFrequency": {"score": 8, "weight": 0.20, "reason": "原因", "averageInterval": "间隔", "rewardTypes": ["类型"]},
        "cliffhangers": {"score": 8, "weight": 0.20, "count": 10, "examples": ["例子"], "effectiveness": "效果"}
      },
      "prediction": {
        "bingeProbability": 0.8,
        "averageReadingTime": "时长",
        "dropRate": 0.1,
        "rereadRate": 0.3,
        "viralPotential": 0.7,
        "wordOfMouthScore": 8.0
      },
      "warnings": ["警告"],
      "strengths": ["优势"]
    },
    "characters": {
      "protagonist": {
        "name": "名字",
        "age": 25,
        "occupation": "职业",
        "personality": ["性格"],
        "arc": "成长",
        "likability": 8.0,
        "relatability": 8.0,
        "strengths": ["优点"],
        "weaknesses": ["缺点"],
        "desires": ["欲望"],
        "fears": ["恐惧"],
        "backstory": "背景",
        "visualDescription": "外貌"
      },
      "supporting": [{"name": "名字", "role": "角色", "relationship": "关系", "importance": "重要性", "likability": 7.0, "function": "作用", "visualDescription": "外貌"}],
      "relationships": [{"from": "A", "to": "B", "type": "类型", "description": "描述", "evolution": "发展", "conflictPotential": 0.5}],
      "characterDynamics": {"mainTriangle": ["角色"], "powerBalance": "权力", "emotionalCore": "核心"}
    },
    "plot": {
      "structure": "结构",
      "mainConflicts": ["冲突"],
      "subplots": ["支线"],
      "climax": "高潮",
      "resolution": "结局",
      "chapterBreakdown": [{"chapter": 1, "phase": "阶段", "summary": "概括", "intensity": 0.8, "hookType": "钩子", "keyEvents": ["事件"], "emotionalBeat": "节拍", "cliffhanger": "悬念", "coolPoints": ["爽点"]}],
      "plotCurve": "曲线描述",
      "turningPoints": [{"chapter": 1, "event": "事件", "impact": "影响"}],
      "foreshadowing": ["伏笔"]
    },
    "writingStyle": {
      "language": "风格",
      "dialogueQuality": 8.0,
      "descriptionDensity": "密度",
      "pacing": "节奏",
      "readability": 8.0,
      "uniqueFeatures": ["特色"]
    },
    "marketingAngles": {
      "goldenQuotes": [{"quote": "金句", "context": "场景", "viralPotential": 0.8}],
      "highlights": [{"event": "事件", "type": "类型", "emotion": "情感", "impact": 9, "webNovelStyle": "描述", "suitableFor": ["用途"], "visualSuggestion": "视觉", "soundtrackMood": "配乐"}],
      "preliminarySellingPoints": [{"title": "标题", "oneLinePitch": "文案", "webNovelTags": ["标签"], "visualHook": "钩子", "psychologicalTrigger": "驱动", "targetAudience": "人群", "platform": "平台", "estimatedCTR": 0.08}],
      "viralElements": ["元素"],
      "memePotential": ["梗"]
    },
    "contentWarnings": {
      "sensitiveTopics": ["话题"],
      "ageRating": "分级",
      "culturalConsiderations": ["考量"]
    }
  },
  "audienceProfile": {
    "primary": {
      "age": "年龄",
      "gender": "性别",
      "occupation": ["职业"],
      "location": ["地区"],
      "incomeLevel": "收入",
      "education": "教育"
    }
  }
}
\`\`\``;
  }
};
