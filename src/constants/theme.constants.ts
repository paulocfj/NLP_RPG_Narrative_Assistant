import { MedievalTheme } from '../data';
import type { GuideTheme, ThematicScenarioCollection } from '../types';

//TODO: Placeholder others collections
const THEME_COLLECTIONS: Record<GuideTheme, ThematicScenarioCollection> = {
  medieval: MedievalTheme,
  fantasy: MedievalTheme,
  dark: MedievalTheme,
  steampunk: MedievalTheme,
  cyberpunk: MedievalTheme,
};

const DEFAULT_THEME: GuideTheme = 'medieval';

export { THEME_COLLECTIONS, DEFAULT_THEME };
