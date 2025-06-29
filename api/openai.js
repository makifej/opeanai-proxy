export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const OPENAI_API_KEY = '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'; // <-- IDE a saját OpenAI API kulcsod

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)
  });

  const data = await response.json();
  res.status(response.status).json(data);
}
