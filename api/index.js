const twikoo = require('twikoo-vercel')

export default async function handler(req, res) {
  // 添加 CORS 支持
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(204).end()

  // 调用 Twikoo 主体逻辑
  return twikoo(req, res)
}
