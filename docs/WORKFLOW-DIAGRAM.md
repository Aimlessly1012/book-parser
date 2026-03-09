# 📊 Book Parser 两步提取模式流程图

## 完整工作流程

```mermaid
graph TD
    A[📚 输入: 书籍文本] --> B[Step 1: 章节解析]
    B --> C{选择模式}
    
    C -->|两步提取模式| D[Step 2a: 章节梗概提取]
    C -->|超精简模式| E[Step 2: DNA 提取<br/>前3章]
    
    D --> F[8个章节梗概<br/>每章: 剧情+人物+关系]
    F --> G[Step 2b: DNA 分析<br/>基于梗概]
    
    E --> H[书籍 DNA]
    G --> H
    
    H --> I[Step 3: 受众画像生成]
    I --> J[10维度画像]
    
    J --> K[Step 4: 卖点提炼]
    F -.直接使用梗概.-> K
    
    K --> L[5个核心卖点]
    
    L --> M[Step 5: 创意方向生成]
    M --> N[3个完整创意方案]
    
    N --> O[Step 6: 报告生成]
    O --> P[📄 完整营销报告]
    
    style D fill:#4CAF50
    style F fill:#4CAF50
    style G fill:#4CAF50
    style K fill:#FF9800
    style P fill:#2196F3
```

## 数据流向

```mermaid
graph LR
    A[原始文本<br/>55K字] --> B[章节梗概<br/>8章 x 2KB]
    B --> C[DNA 分析<br/>6KB]
    B -.跳过DNA.-> D[卖点提炼<br/>5个]
    C --> E[受众画像<br/>11KB]
    E --> D
    D --> F[创意方向<br/>3个]
    F --> G[营销报告<br/>12KB]
    
    style B fill:#4CAF50
    style D fill:#FF9800
```

## 时间分布

```mermaid
gantt
    title 两步提取模式 - 时间分布 (总计 195秒)
    dateFormat ss
    axisFormat %S秒
    
    section 解析
    章节解析           :done, 00, 01s
    
    section DNA提取
    章节梗概提取       :done, 01, 32s
    DNA分析           :done, 33, 29s
    
    section 画像
    受众画像生成       :done, 62, 75s
    
    section 卖点
    卖点提炼          :done, 137, 20s
    
    section 创意
    创意方向生成       :done, 157, 40s
    
    section 报告
    报告生成          :done, 197, 01s
```

## 核心优势对比

```mermaid
graph TB
    subgraph 旧方案[超精简模式]
        A1[前3章文本] --> A2[DNA 提取<br/>19秒]
        A2 --> A3[覆盖率: 37.5%]
    end
    
    subgraph 新方案[两步提取模式]
        B1[全部8章] --> B2[梗概提取<br/>32秒]
        B2 --> B3[DNA 分析<br/>29秒]
        B3 --> B4[覆盖率: 100%]
    end
    
    A3 -.vs.-> B4
    
    style A3 fill:#FF5252
    style B4 fill:#4CAF50
```

## 数据复用策略

```mermaid
graph TD
    A[章节梗概] --> B[DNA 分析]
    A --> C[卖点提炼]
    A --> D[创意方向]
    
    B --> E[受众画像]
    E --> C
    
    C --> D
    D --> F[报告生成]
    
    style A fill:#4CAF50
    style C fill:#FF9800
```

---

## 📊 性能数据

| 指标 | 超精简模式 | 两步提取模式 | 提升 |
|------|-----------|-------------|------|
| 覆盖章节 | 3章 | 8章 | **+167%** |
| DNA 耗时 | 19秒 | 61秒 | +221% |
| 总耗时 | 228秒 | 195秒 | **-14%** |
| 识别准确度 | 中等 | 高 | **↑** |
| 成功率 | 100% | 100% | ✅ |

---

## 🎯 关键创新点

1. **分层提取**: 先提取结构化梗概，再做深度分析
2. **数据复用**: 梗概直接用于卖点提炼，避免信息损失
3. **降级方案**: 支持多种模式，保证兼容性
4. **进度追踪**: 断点恢复，失败重试

---

生成时间: 2026-03-09 20:42
