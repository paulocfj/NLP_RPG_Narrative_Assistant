import { useContext, type Dispatch } from 'react';
import { ThemeDispatchContext, ThemeStateContext } from './theme.context';
import type { ThemeActions, ThemeState } from './theme.context.types';

/**
 * Hook (GET) to retrieve the theme state (active theme and randomized scenario).
 * Components using this hook will re-render whenever the theme or scenario changes.
 *
 * @returns {ThemeState} The current theme state.
 * @throws {Error} Throws an error if the hook is not used within a ThemeProvider.
 */
const useThemeState = (): ThemeState => {
  const context = useContext(ThemeStateContext);
  if (context === undefined) {
    throw new Error('useThemeState must be used within a ThemeProvider');
  }
  return context;
};

/**
 * Hook (SET) to retrieve the dispatch function (setters).
 * Components using this hook WILL NOT re-render when the theme state changes,
 * as they only consume the dispatch function.
 *
 * @returns {Dispatch<ThemeActions>} The dispatch function used to send actions to the reducer.
 * @throws {Error} Throws an error if the hook is not used within a ThemeProvider.
 */
const useThemeDispatch = (): Dispatch<ThemeActions> => {
  const context = useContext(ThemeDispatchContext);
  if (context === undefined) {
    throw new Error('useThemeDispatch must be used within a ThemeProvider');
  }
  return context;
};

export { useThemeDispatch, useThemeState };
