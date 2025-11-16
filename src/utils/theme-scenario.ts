import type { THEME_COLLECTIONS } from '../constants';
import type { GuideTheme, ThematicScenario } from '../types';

/**
 * @function getRandomScenario
 * @description Selects a random scenario from the collection corresponding to the given theme.
 * If the specified theme collection is not found or is empty, it falls back to selecting a random
 * scenario from the 'medieval' theme collection.
 *
 * @param {GuideTheme} theme The theme key (e.g., 'fantasy', 'steampunk') to select the collection from.
 * @param {typeof THEME_COLLECTIONS} collections A map object containing all thematic scenario collections.
 * @returns {ThematicScenario} A randomly selected scenario object, or a default/fallback scenario.
 */
const getRandomScenario = (
  theme: GuideTheme,
  collections: typeof THEME_COLLECTIONS,
): ThematicScenario => {
  let collection = collections[theme];
  const medievalCollection = collections['medieval'];

  if (!collection || collection.length === 0) {
    console.warn(
      `Collection for theme "${theme}" not found or is empty. Falling back to 'medieval'.`,
    );
    collection = medievalCollection;
  }

  if (!collection || collection.length === 0) {
    return {
      id: 0,
      guideTheme: theme,
      name: 'Default Scenario (Fallback)',
      themeSuggestions: [],
    };
  }

  const randomIndex = Math.floor(Math.random() * collection.length);
  return collection[randomIndex];
};

export { getRandomScenario };
