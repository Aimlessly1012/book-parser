/**
 * 数据格式适配器
 * 将超精简格式转换为标准格式，保证后续流程兼容
 */

class DataAdapter {
  /**
   * 将超精简 DNA 格式转换为标准格式
   */
  static adaptUltraCompactToStandard(ultraCompact) {
    return {
      bookAnalysis: {
        basicInfo: {
          genre: ultraCompact.basic?.genre || '',
          subGenres: ultraCompact.basic?.tags?.slice(0, 3) || [],
          coreHook: ultraCompact.basic?.hook || '',
          keywords: ultraCompact.basic?.tags || [],
          searchKeywords: ultraCompact.basic?.tags || []
        },
        bookDNA: {
          geneticCode: 'AUTO-GEN',
          emotionWave: (ultraCompact.dna?.emotion || []).map(e => ({
            chapter: e.ch,
            value: e.val,
            emotion: e.mood,
            color: this.emotionToColor(e.val)
          })),
          paceRhythm: (ultraCompact.dna?.pace || []).map(p => ({
            chapter: p.ch,
            bpm: p.bpm,
            pace: p.bpm > 100 ? '快' : p.bpm > 80 ? '中' : '慢'
          })),
          coolPointDensity: (ultraCompact.dna?.cool || []).map(c => ({
            chapter: c.ch,
            density: c.density,
            description: c.desc
          })),
          conflictIntensity: (ultraCompact.dna?.conflict || []).map(c => ({
            chapter: c.ch,
            intensity: c.intensity
          }))
        },
        addictionIndex: {
          score: ultraCompact.addiction?.score || 0,
          level: this.scoreToLevel(ultraCompact.addiction?.score),
          factors: {
            suspenseHooks: {
              score: 8,
              weight: 0.25,
              count: ultraCompact.addiction?.hooks || 0
            }
          },
          prediction: {
            viralPotential: ultraCompact.addiction?.viral || 0
          }
        },
        characters: {
          protagonist: ultraCompact.chars?.lead || {},
          supporting: ultraCompact.chars?.support || []
        },
        plot: {
          structure: ultraCompact.plot?.structure || '',
          mainConflicts: ultraCompact.plot?.conflicts || [],
          chapterBreakdown: (ultraCompact.plot?.chapters || []).map(ch => ({
            chapter: ch.ch,
            phase: ch.phase,
            intensity: ch.intensity
          }))
        },
        marketingAngles: {
          goldenQuotes: (ultraCompact.marketing?.quotes || []).map(q => ({
            quote: q,
            viralPotential: 0.8
          })),
          highlights: ultraCompact.marketing?.highlights || [],
          preliminarySellingPoints: (ultraCompact.marketing?.angles || []).map(a => ({
            title: a.title,
            oneLinePitch: a.pitch,
            estimatedCTR: a.ctr
          }))
        }
      },
      audienceProfile: {
        primary: {
          age: ultraCompact.audience?.age || '',
          gender: ultraCompact.audience?.gender || '',
          painPoints: ultraCompact.audience?.pain || []
        }
      }
    };
  }

  /**
   * 情感值转颜色
   */
  static emotionToColor(value) {
    if (value < -0.5) return '#FF0000'; // 负面
    if (value < 0) return '#FFA500';    // 轻微负面
    if (value < 0.5) return '#FFFF00';  // 中性
    return '#00FF00';                    // 正面
  }

  /**
   * 分数转等级
   */
  static scoreToLevel(score) {
    if (score >= 9) return '极易上头';
    if (score >= 8) return '容易上头';
    if (score >= 7) return '中等吸引';
    return '一般';
  }
}

module.exports = DataAdapter;
