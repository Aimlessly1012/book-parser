const https = require('https');

/**
 * 通用 AI 服务，支持 Gemini 和 Claude
 */
class AIService {
  constructor(config = {}) {
    this.provider = config.provider || 'gemini';
    this.apiKey = config.apiKey;
    this.model = config.model;
    this.baseUrl = config.baseUrl; // 支持自定义 endpoint
    
    if (!this.apiKey) {
      throw new Error('API Key is required for AIService');
    }

    // 设置默认模型
    if (!this.model) {
      this.model = this.provider === 'gemini' ? 'gemini-1.5-flash' : 'claude-3-sonnet-20240229';
    }
  }

  /**
   * 发送聊天请求
   */
  async chat(prompt) {
    if (this.provider === 'gemini') {
      return this.callGemini(prompt);
    } else if (this.provider === 'claude') {
      return this.callClaude(prompt);
    } else {
      throw new Error(`Unsupported provider: ${this.provider}`);
    }
  }

  /**
   * 调用 Gemini API
   */
  async callGemini(prompt) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${this.model}:generateContent?key=${this.apiKey}`;
    
    const data = JSON.stringify({
      contents: [{
        parts: [{ text: prompt }]
      }],
      generationConfig: {
        response_mime_type: "application/json"
      }
    });

    return this.post(url, data, { 'Content-Type': 'application/json' })
      .then(res => {
        if (res.candidates && res.candidates[0] && res.candidates[0].content) {
          return res.candidates[0].content.parts[0].text;
        }
        throw new Error('Unexpected Gemini response format: ' + JSON.stringify(res));
      });
  }

  /**
   * 调用 Claude API
   */
  async callClaude(prompt) {
    let url = this.baseUrl || 'https://api.anthropic.com/v1/messages';
    if (this.baseUrl && !this.baseUrl.endsWith('/messages')) {
      url = `${this.baseUrl.replace(/\/$/, '')}/v1/messages`;
    }

    const data = JSON.stringify({
      model: this.model,
      max_tokens: 4096,
      messages: [{ role: 'user', content: prompt }]
    });

    // 中转 API 使用 Authorization Bearer，官方 API 使用 x-api-key
    const headers = {
      'Content-Type': 'application/json',
      'anthropic-version': '2023-06-01'
    };
    
    if (this.baseUrl) {
      headers['Authorization'] = `Bearer ${this.apiKey}`;
    } else {
      headers['x-api-key'] = this.apiKey;
    }

    return this.post(url, data, headers).then(res => {
      if (res.content && res.content[0]) {
        return res.content[0].text;
      }
      throw new Error('Unexpected Claude response format: ' + JSON.stringify(res));
    });
  }

  /**
   * 通用 POST 请求
   */
  post(url, data, headers) {
    return new Promise((resolve, reject) => {
      const options = {
        method: 'POST',
        headers: headers
      };

      const req = https.request(url, options, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          if (res.statusCode >= 400 && !body.trim().startsWith('{')) {
            return reject(new Error(`HTTP Error (${res.statusCode}): ${body.substring(0, 200)}`));
          }
          try {
            const parsed = JSON.parse(body);
            if (res.statusCode >= 400) {
              reject(new Error(`API Error (${res.statusCode}): ${JSON.stringify(parsed)}`));
            } else {
              resolve(parsed);
            }
          } catch (e) {
            reject(new Error(`Failed to parse JSON (HTTP ${res.statusCode}, Body snippet: ${body.substring(0, 100).replace(/\n/g, ' ')}...): ${e.message}`));
          }
        });
      });

      req.setTimeout(300000, () => {
        req.destroy(new Error('Request Timeout (300s)'));
      });

      req.on('error', reject);
      req.write(data);
      req.end();
    });
  }
}

module.exports = AIService;
