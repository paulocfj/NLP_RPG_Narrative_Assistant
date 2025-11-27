import { MedievalTheme } from '../data';
import type { GuideTheme, ThematicScenarioCollection } from '../types';

/**
 * Defines a record mapping each possible GuideTheme to its corresponding
 * ThematicScenarioCollection (containing random starting scenarios).
 *
 * NOTE: This record currently uses 'MedievalTheme' as a placeholder for all
 * themes until specific collections for 'fantasy', 'dark', 'steampunk',
 * and 'cyberpunk' are implemented.
 *
 * @type {Record<GuideTheme, ThematicScenarioCollection>}
 */
const THEME_COLLECTIONS: Record<GuideTheme, ThematicScenarioCollection> = {
  medieval: MedievalTheme,
  fantasy: MedievalTheme,
  dark: MedievalTheme,
  steampunk: MedievalTheme,
  cyberpunk: MedievalTheme,
};

/**
 * Defines the default theme applied to the application when no theme is
 * explicitly selected or loaded.
 *
 * @type {GuideTheme}
 */
const DEFAULT_THEME: GuideTheme = 'medieval';

export { THEME_COLLECTIONS, DEFAULT_THEME };
