import type { CoreQuestionsGuide } from '../../types';

/**
 * `InitialGuide` is a constant (Array) that defines the complete set of 9
 * fundamental questions used to plan and structure a One-Shot RPG adventure
 * (single-session).
 *
 * Each object within the array (`CoreQuestionsGuide`) represents a step in the
 * structure, categorized by a 'Pillar' (Design Pillar) and a 'mainFocus'
 * (Main Focus).
 *
 * Properties of each object:
 * - id: Sequential identifier for the step (1 through 9).
 * - pillar: The main adventure phase or design category ('INTRO', 'PICK ONE GOAL', 'PACE', 'STRUCTURE', 'STREAMLINE').
 * - mainFocus: The game concept the step addresses (e.g., 'Ação Imediata', 'Clareza de Objetivo').
 * - question: The detailed question that the Game Master (User) must answer to build the script.
 *
 * This constant serves as the initial template (questionnaire) to be filled out
 * by the user.
 *
 * @type {CoreQuestionsGuide}
 */
const InitialGuide: CoreQuestionsGuide = [
  {
    id: 1,
    pillar: 'INTRO',
    mainFocus: 'Ação Imediata',
    question:
      '1. Cenário e Ação Inicial: Onde a aventura começa (Ambiente) e o que está acontecendo no momento em que a sessão inicia?',
  },
  {
    id: 2,
    pillar: 'INTRO',
    mainFocus: 'Ação Imediata',
    question:
      '2. Motivação Comum: Por que os PCs (Player Character) estão juntos neste lugar e por que precisam agir agora?',
  },
  {
    id: 3,
    pillar: 'PICK ONE GOAL',
    mainFocus: 'Clareza de Objetivo',
    question:
      '3. O Objetivo e o Patrono: Qual é a única coisa que deve ser alcançada? Quem (Aliado Principal/Patrono) está pedindo/exigindo isso?',
  },
  {
    id: 4,
    pillar: 'PICK ONE GOAL',
    mainFocus: 'Clareza de Objetivo',
    question:
      '4. O Antagonista: Quem ou o que é a força que impede esse objetivo?',
  },
  {
    id: 5,
    pillar: 'PACE',
    mainFocus: 'Ritmo e Tempo',
    question:
      '5. in (Meio): Qual é o grande confronto/cena que irá consumir a maior parte do tempo de jogo antes da resolução?',
  },
  {
    id: 6,
    pillar: 'PACE',
    mainFocus: 'Ritmo e Tempo',
    question:
      '6. Fim de Jogo: O que acontece na hora do fim da sessão? (Descreva o SUCESSO e a FALHA).',
  },
  {
    id: 7,
    pillar: 'STRUCTURE',
    mainFocus: 'Flexibilidade',
    question:
      '7. NPCs (Non Player Character) e Obstáculos Flexíveis: Lista 3 desafios/cenas (combate, social, enigma) que você pode inserir a qualquer momento. Qual NPC (Aliado/Neutro) está ligado a cada um?',
  },
  {
    id: 8,
    pillar: 'STREAMLINE',
    mainFocus: 'Simplificação',
    question:
      '8. Cortes: Qual cena, regra ou informação de lore complexa do Ambiente ou das Raças você irá ignorar ou simplificar para não atrasar a história?',
  },
  {
    id: 9,
    pillar: 'STREAMLINE',
    mainFocus: 'Simplificação',
    question:
      '9. Preparação: Se usar Pregens, qual é a principal dica de interpretação/Raça (ou aparência) para cada um?',
  },
];

export { InitialGuide };
