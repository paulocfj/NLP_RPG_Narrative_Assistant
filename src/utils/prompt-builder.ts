import { STORY_STEPS_LABELS } from '../constants';
import type { CompleteGuide } from '../types';

const buildFinalPrompt = (questionnaire: CompleteGuide): string => {
  let finalPrompt =
    'Aqui estão as definições da aventura fornecidas pelo Mestre (Usuário) através do método de 9 Passos:\n\n';

  questionnaire.forEach((item, index) => {
    const label =
      'Passo: ' +
      index +
      STORY_STEPS_LABELS[index] +
      ' Foco: ' +
      item.mainFocus +
      ' Pergunta: ' +
      item.question;

    finalPrompt += `### ${label}\n`;
    finalPrompt += `**Resposta do Usuário:** ${item.userResponse}\n\n`;
  });

  finalPrompt +=
    '\n---\n\nCom base APENAS nessas informações, gere o Roteiro de One-Shot estruturado conforme suas diretrizes de sistema.';

  return finalPrompt;
};

export { buildFinalPrompt };
