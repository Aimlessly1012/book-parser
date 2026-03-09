/**
 * 两步提取策略 - 覆盖更多章节，避免超时
 * Step 1: 提取每章核心信息（剧情 + 人物 + 关系）
 * Step 2: 基于梗概做 DNA 分析
 */

module.exports = {
  /**
   * Step 1: 章节梗概提取（可以处理全部章节）
   */
  chapterSummaryExtraction: (chapters) => {
    // 每章只取前2000字做梗概
    const limitedChapters = chapters.map(ch => ({
      ...ch,
      content: ch.content.substring(0, 2000) + (ch.content.length > 2000 ? '...' : '')
    }));
    
    return `你是网文编辑。快速提取每章的核心信息。

# 章节内容
${limitedChapters.map(ch => `
## ${ch.title}
${ch.content}
---
`).join('\n')}

输出JSON（简洁）:
\`\`\`json
{
  "chapters": [
    {
      "chapter": 1,
      "title": "章节标题",
      "summary": "剧情梗概（100字内）",
      "keyEvents": ["关键事件1", "关键事件2"],
      "characters": ["出场角色"],
      "relationships": ["角色A对角色B的态度/关系变化"],
      "emotion": "主要情绪",
      "conflict": "核心冲突"
    }
  ]
}
\`\`\``;
  },

  /**
   * Step 2: 基于梗概做 DNA 分析（输入小，速度快）
   */
  dnaFromSummaries: (bookInfo, chapterSummaries) => {
    return `你是网文营销专家。基于章节梗概分析书籍DNA。

# 书籍信息
总章节: ${bookInfo.totalChapters} | 总字数: ${bookInfo.totalWords}

# 章节梗概
${JSON.stringify(chapterSummaries, null, 2)}

# 重要：用网文爽点式语言

输出JSON（只输出JSON）:
\`\`\`json
{
  "basic": {
    "genre": "类型",
    "hook": "核心爽点一句话",
    "tags": ["标签1","标签2","标签3"]
  },
  "dna": {
    "emotion": [{"ch":1,"val":-0.8,"mood":"愤怒"}],
    "pace": [{"ch":1,"bpm":120}],
    "cool": [{"ch":1,"density":0.3,"desc":"爽点"}],
    "conflict": [{"ch":1,"intensity":0.9}]
  },
  "addiction": {
    "score": 8.5,
    "hooks": 10,
    "viral": 0.75
  },
  "chars": {
    "lead": {"name":"名字","age":25,"job":"职业","arc":"成长"},
    "support": [{"name":"名字","role":"角色"}]
  },
  "plot": {
    "structure": "三幕式",
    "conflicts": ["冲突1","冲突2"],
    "chapters": [{"ch":1,"phase":"铺垫","intensity":0.8}]
  },
  "marketing": {
    "quotes": ["金句1","金句2"],
    "highlights": [{"event":"事件","type":"虐点","impact":9}],
    "angles": [{"title":"卖点","pitch":"文案","ctr":0.08}]
  },
  "audience": {
    "age": "25-35",
    "gender": "女",
    "pain": ["痛点1","痛点2"]
  }
}
\`\`\``;
  }
};
