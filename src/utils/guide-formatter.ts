import type {
  FormattedQuestion,
  NpcChallenge,
  OneShotGuideQuestion,
  ThematicScenario,
} from '../types';
import { InitialGuide } from '../data';

/**
 * @function normalizeSuggestion
 * @description Normalizes a suggestion item into a clean string.
 * If the item is an NpcChallenge object, it extracts the challenge text and removes
 * any content enclosed in square brackets (e.g., [Neutral]).
 *
 * @param {string | NpcChallenge} item The suggestion item, which can be a string or an NpcChallenge object.
 * @returns {string} The normalized suggestion as a string.
 */
const normalizeSuggestion = (item: string | NpcChallenge): string => {
  if (typeof item === 'string') {
    return item;
  }

  if (item && typeof item === 'object' && 'challenge' in item) {
    // Case NpcChallenge: Extracts the challenge text and removes content in brackets
    // Ex: "The Thief [Neutral]" -> "The Thief"
    return item.challenge.replace(/\[[^\]]+\]/g, '').trim();
  }

  // Returns an empty string as a safe fallback
  return '';
};
/**
 * @function formatBotQuestion
 * @description Formats the bot's question text (adding strong tags) and extracts
 * relevant thematic suggestions based on the currently active scenario object provided.
 *
 * @param {number} questionIndex The index of the question in the InitialGuide array.
 * @param {ThematicScenario} activeScenario The specific scenario object (chosen by the theme context) used to source suggestions. <-- NOVO ARGUMENTO
 * @returns {FormattedQuestion} An object containing the formatted question text and an optional list of suggestions (max 3).
 */
const formatBotQuestion = (
  questionIndex: number,
  activeScenario: ThematicScenario, // <-- NOVO PARÂMETRO
): FormattedQuestion => {
  const questionData: OneShotGuideQuestion | undefined =
    InitialGuide[questionIndex];

  if (!questionData) return { text: '', suggestions: undefined };

  const questionText = `<strong>${questionData.question}</strong>`;

  const scenarioSection = activeScenario.themeSuggestions.find(
    (s) => s.id === questionData.id,
  );

  const rawSuggestions = scenarioSection?.suggestion || [];

  const suggestions: string[] = rawSuggestions
    .map(normalizeSuggestion)
    .slice(0, 3)
    .filter((text) => text.length > 0);

  return {
    text: questionText,
    suggestions: suggestions.length > 0 ? suggestions : undefined,
  };
};

export { formatBotQuestion, normalizeSuggestion };
