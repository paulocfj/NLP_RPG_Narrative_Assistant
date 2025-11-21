import { useCallback, useState } from 'react';
import { useCompleteGuideState } from '../../contexts';
import { buildFinalPrompt } from '../../utils';
import { SYSTEM_PROMPT } from '../../constants';

const useStoryGenerator = () => {
  // Estados para gerenciar a requisição
  const [story, setStory] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Busca os dados da história e regras do Context
  const completeGuide = useCompleteGuideState();

  // Função que será chamada no componente (ex: no clique do botão)
  const generateStory = useCallback(async () => {
    if (loading) return; // Evita cliques duplicados

    setLoading(true);
    setError(null);
    setStory(null);

    try {
      // 1. Montagem do Prompt Final
      const userQuestionnairePrompt = buildFinalPrompt(completeGuide);

      // Combinamos o Role Geral (SYSTEM_PROMPT) + Regras Específicas + Dados do Usuário
      const fullPrompt = `
        REGRAS DO SISTEMA ESPECÍFICAS (do Mestre):
        ${SYSTEM_PROMPT}
        
        --------------------------------------
        
        DADOS DE ENTRADA DO QUESTIONÁRIO:
        ${userQuestionnairePrompt}
      `;

      // 2. Chamada ao Nosso Backend (Vercel Function)
      const response = await fetch('/api/ai-generator/genai-generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: fullPrompt }),
      });

      if (!response.ok) {
        // Tenta ler a mensagem de erro do backend se existir
        const errJson = await response.json();
        throw new Error(
          errJson.error || 'Falha ao conectar com o servidor da Vercel.',
        );
      }

      const json = await response.json();
      setStory(json.story);
    } catch (err) {
      console.error('Erro na geração:', err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Ocorreu um erro desconhecido.');
      }
    } finally {
      setLoading(false);
    }
  }, [loading, completeGuide]); // Dependências do hook

  return { story, loading, error, generateStory };
};

export { useStoryGenerator };
