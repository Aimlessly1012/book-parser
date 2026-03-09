#!/usr/bin/env node

/**
 * JSON 提取器测试脚本
 */

const JsonExtractor = require('./lib/json-extractor');

console.log('🧪 测试 JSON 提取器\n');

// 测试用例
const testCases = [
  {
    name: '纯 JSON',
    input: '{"name": "test", "value": 123}',
    shouldPass: true
  },
  {
    name: 'JSON 代码块',
    input: '```json\n{"name": "test", "value": 123}\n```',
    shouldPass: true
  },
  {
    name: '通用代码块',
    input: '```\n{"name": "test", "value": 123}\n```',
    shouldPass: true
  },
  {
    name: '前后有说明文字',
    input: '这是分析结果：\n{"name": "test", "value": 123}\n以上是结果',
    shouldPass: true
  },
  {
    name: '嵌套 JSON',
    input: '{"outer": {"inner": {"deep": "value"}}, "array": [1, 2, 3]}',
    shouldPass: true
  },
  {
    name: '包含转义字符',
    input: '{"text": "He said \\"hello\\"", "path": "C:\\\\Users\\\\test"}',
    shouldPass: true
  },
  {
    name: '多个 JSON（取第一个）',
    input: '{"first": 1} some text {"second": 2}',
    shouldPass: true
  },
  {
    name: 'AI 常见格式',
    input: '好的，这是分析结果：\n\n```json\n{\n  "bookAnalysis": {\n    "genre": "都市爽文"\n  }\n}\n```\n\n希望对你有帮助！',
    shouldPass: true
  },
  {
    name: '无效输入',
    input: 'this is not json at all',
    shouldPass: false
  }
];

let passed = 0;
let failed = 0;

testCases.forEach((testCase, index) => {
  console.log(`Test ${index + 1}: ${testCase.name}`);
  try {
    const result = JsonExtractor.extract(testCase.input);
    const parsed = JSON.parse(result);
    
    if (testCase.shouldPass) {
      console.log(`  ✅ PASS - 提取成功`);
      console.log(`     提取结果: ${result.substring(0, 50)}${result.length > 50 ? '...' : ''}`);
      passed++;
    } else {
      console.log(`  ❌ FAIL - 应该失败但成功了`);
      failed++;
    }
  } catch (error) {
    if (!testCase.shouldPass) {
      console.log(`  ✅ PASS - 正确识别为无效 JSON`);
      passed++;
    } else {
      console.log(`  ❌ FAIL - ${error.message}`);
      failed++;
    }
  }
  console.log('');
});

console.log('📊 测试总结:');
console.log(`   总计: ${testCases.length}`);
console.log(`   ✅ 通过: ${passed}`);
console.log(`   ❌ 失败: ${failed}`);
console.log(`   成功率: ${((passed / testCases.length) * 100).toFixed(1)}%`);

process.exit(failed > 0 ? 1 : 0);
