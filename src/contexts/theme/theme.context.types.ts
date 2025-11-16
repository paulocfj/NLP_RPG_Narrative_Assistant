import type { ReactNode } from 'react';
import type { GuideTheme, ThematicScenario } from '../../types';

type ThemeProviderProps = {
  children: ReactNode;
};

/**
 * @typedef {object} ThemeState
 * @description Defines the structure of the global theme state.
 *
 * @property {GuideTheme} activeTheme The key/name of the currently selected theme (e.g., 'medieval').
 * @property {ThematicScenario} activeScenario The specific scenario object randomly chosen from the activeTheme collection.
 */
type ThemeState = {
  activeTheme: GuideTheme;
  activeScenario: ThematicScenario;
};

/**
 * @typedef {object} ThemeActions
 * @description Defines the structure of available actions in the theme context reducer.
 * @property {GuideTheme} payload - The new theme key to be set.
 */
type ThemeActions = {
  type: 'SET_THEME';
  payload: GuideTheme;
};

export type { ThemeState, ThemeActions, ThemeProviderProps };
