import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

const genai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt é obrigatório' });
    }

    const model = genai.models;

    const result = await model.generateContent({
      model: 'gemini-flash-latest',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
    });

    const text = result.text;

    return res.status(200).json({ story: text });
  } catch (error: any) {
    console.error('Erro na Genai API:', error);

    // TRATAMENTO DE COTA (ERRO 429)
    if (error.status === 429 || error.message?.includes('429')) {
      return res.status(429).json({
        error: 'Cota excedida',
        message:
          'Muitas requisições seguidas. Por favor, aguarde cerca de 60 segundos antes de tentar novamente.',
        retryAfter: '60s',
      });
    }

    // TRATAMENTO DE SEGURANÇA (CONTEÚDO BLOQUEADO)
    if (error.message?.includes('SAFETY')) {
      return res.status(400).json({
        error: 'Conteúdo sensível',
        message:
          'O modelo não pôde gerar essa história devido aos filtros de segurança.',
      });
    }

    // ERRO GENÉRICO
    return res.status(500).json({
      error: 'Erro interno no servidor',
      details: error.message,
    });
  }
}
