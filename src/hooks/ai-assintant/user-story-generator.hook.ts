import { useCallback, useState } from 'react';
import { useCompleteGuideState } from '../../contexts';
import { buildFinalPrompt } from '../../utils';
import { SYSTEM_PROMPT } from '../../constants';

/**
 * `useStoryGenerator` is a custom React hook responsible for managing the state
 * and logic related to generating the One-Shot adventure script using an AI model.
 *
 * It combines the system rules (`SYSTEM_PROMPT`) with the user's completed
 * adventure guide answers (`completeGuide`) to form the final API prompt.
 *
 * The hook handles the asynchronous call to the `/api/ai-generator/genai-generate`
 * endpoint and manages the loading, error, and resulting story states.
 *
 * @returns An object containing:
 * - story: The generated adventure script string, or null.
 * - loading: A boolean indicating if the generation process is currently running.
 * - error: A string containing any error message, or null.
 * - generateStory: An asynchronous function to initiate the story generation process.
 *
 * @example
 * // In a React component:
 * // const { story, loading, error, generateStory } = useStoryGenerator();
 * // <button onClick={generateStory} disabled={loading}>Generate Adventure</button>
 */
const useStoryGenerator = () => {
  const [story, setStory] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const completeGuide = useCompleteGuideState();

  const generateStory = useCallback(async () => {
    if (loading) return;

    setLoading(true);
    setError(null);
    setStory(null);

    try {
      const userQuestionnairePrompt = buildFinalPrompt(completeGuide);

      const fullPrompt = `
        REGRAS DO SISTEMA ESPECÍFICAS (do Mestre):
        ${SYSTEM_PROMPT}

        --------------------------------------

        DADOS DE ENTRADA DO QUESTIONÁRIO:
        ${userQuestionnairePrompt}
      `;

      const response = await fetch('/api/ai-generator/genai-generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: fullPrompt }),
      });

      if (!response.ok) {
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
  }, [loading, completeGuide]);

  return { story, loading, error, generateStory };
};

export { useStoryGenerator };
