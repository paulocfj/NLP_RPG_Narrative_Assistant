import type {
  FormattedQuestion,
  NpcChallenge,
  OneShotGuideQuestion,
} from '../types';
import { InitialGuide, MedievalTheme } from '../data'; // Importe os dados necessários

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
 * relevant thematic suggestions from the data source for that question index.
 *
 * @param {number} questionIndex The index of the question in the InitialGuide array.
 * @returns {{ text: string, suggestions: string[] | undefined }} An object containing the formatted question text and an optional list of suggestions (max 3).
 */
const formatBotQuestion = (questionIndex: number): FormattedQuestion => {
  const questionData: OneShotGuideQuestion | undefined =
    InitialGuide[questionIndex];

  if (!questionData) return { text: '', suggestions: undefined };

  const questionText = `<strong>${questionData.question}</strong>`;

  // Assumes MedievalTheme[4] is the scenario you are targeting
  const scenarioSection = MedievalTheme[4].themeSuggestions.find(
    (s) => s.id === questionData.id,
  );

  const rawSuggestions = scenarioSection?.suggestion || [];

  // Maps the array of suggestions (string[] | NpcChallenge[]) to string[] using normalizeSuggestion
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
