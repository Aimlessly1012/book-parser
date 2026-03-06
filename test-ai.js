const fs = require('fs');
const path = require('path');
const AIService = require('./lib/ai-service');

async function test() {
  const config = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));
  console.log('Using config:', JSON.stringify(config, null, 2));
  
  const aiService = new AIService({
    apiKey: config.apiKey,
    provider: config.provider,
    model: config.model,
    baseUrl: config.baseUrl
  });

  try {
    const res = await aiService.chat('Say "Hello World" in JSON format: {"message": "Hello World"}');
    console.log('Response:', res);
  } catch (e) {
    console.error('Error:', e.message);
  }
}

test();
