const twikoo = require('twikoo-vercel');

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://srpn.top');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  return twikoo(req, res);
}
