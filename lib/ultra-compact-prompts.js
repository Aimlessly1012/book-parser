/**
 * 超精简版 Prompt - 针对 100 秒超时优化
 * 只保留最核心的营销数据，去掉所有冗余字段
 */

module.exports = {
  /**
   * Step 2: DNA 提取 - 超精简版（前3章，最小输出）
   */
  dnaExtractionUltraCompact: (bookInfo, sampleChapters) => {
    const limitedChapters = sampleChapters.slice(0, Math.min(3, sampleChapters.length));
    
    return `你是网文营销专家。分析书籍，输出核心营销数据。

书籍: ${bookInfo.totalChapters}章 ${bookInfo.totalWords}字

前3章内容:
${limitedChapters.map(ch => `## ${ch.title}\n${ch.content.substring(0, 3000)}...\n`).join('\n')}

输出JSON（简洁，无冗余）:
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
