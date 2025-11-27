import { STORY_STEPS_LABELS } from '../constants';
import type { CompleteGuide } from '../types';

/**
 * Constructs the final prompt string by formatting the data from the adventure
 * questionnaire (CompleteGuide) into a structured text prompt for the AI model.
 *
 * This function iterates through the 9 steps of the adventure guide (based on
 * Pillars like 'INTRO', 'PICK ONE GOAL', 'PACE', etc.) and includes the
 * 'Step' (index), 'Focus' (mainFocus), 'Question', and the critical
 * 'User Response' for each step in the final prompt structure.
 *
 * @param questionnaire The CompleteGuide object containing the full adventure structure
 * and the user's responses (userResponse).
 * @returns A fully formatted string ready to be sent to the generation model
 * as an instructional prompt.
 *
 * @example
 * // The function outputs a prompt that looks like:
 * // 'Aqui estão as definições da aventura fornecidas pelo Mestre (Usuário) através do método de 9 Passos:\n\n'
 * // '### Passo: 0: Ação Imediata Foco: [Specific Focus] Pergunta: [Question Text]\n'
 * // '**Resposta do Usuário:** [User's Answer]\n\n'
 * // ... (and so on for all 9 steps)
 * // '\n---\n\nCom base APENAS nessas informações, gere o Roteiro de One-Shot estruturado conforme suas diretrizes de sistema.'
 */
const buildFinalPrompt = (questionnaire: CompleteGuide): string => {
  let finalPrompt =
    'Aqui estão as definições da aventura fornecidas pelo Mestre (Usuário) através do método de 9 Passos:\n\n';

  questionnaire.guideQuestions.forEach((item, index) => {
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
