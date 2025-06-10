const twikoo = require('twikoo-vercel');

export default async function handler(req, res) {
  // 允许跨域请求
  res.setHeader('Access-Control-Allow-Origin', 'https://srpn.top');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 如果是预检请求，直接返回 204（必须处理，不然浏览器请求会失败）
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // Twikoo 主体逻辑
  return twikoo(req, res);
}
