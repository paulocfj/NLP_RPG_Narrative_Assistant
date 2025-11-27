/**
 * `STORY_STEPS_LABELS` is a constant array that provides human-readable labels
 * for the 9 steps of the One-Shot adventure questionnaire.
 *
 * This array is typically used for mapping the questions in the guide to
 * descriptive titles, especially when generating the final structured prompt
 * for the AI model (as seen in `buildFinalPrompt`).
 *
 * Note: These labels are in Portuguese as they represent the fixed labels
 * derived from the guide's questions.
 *
 * @type {string[]}
 */
const STORY_STEPS_LABELS = [
  '1. CENÁRIO E AÇÃO INICIAL (Onde começa/O que ocorre)',
  '2. MOTIVAÇÃO COMUM (Por que o grupo está junto)',
  '3. OBJETIVO E PATRONO (O que deve ser alcançado)',
  '4. ANTAGONISTA (Quem impede o objetivo)',
  '5. MEIO/CLÍMAX (O grande confronto/conflito moral)',
  '6. FIM DE JOGO (Condições de Sucesso e Falha)',
  '7. NPCS E OBSTÁCULOS FLEXÍVEIS',
  '8. REGRAS ESPECIAIS/CORTES DE LORE',
  '9. PREPARAÇÃO/DICAS DE PERSONAGEM',
];

export { STORY_STEPS_LABELS };
