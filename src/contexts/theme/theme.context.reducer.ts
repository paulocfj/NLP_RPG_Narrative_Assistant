import { DEFAULT_THEME, THEME_COLLECTIONS } from '../../constants';
import { getRandomScenario } from '../../utils';
import type { ThemeActions, ThemeState } from './theme.context.types';

const initialActiveScenario = getRandomScenario(
  DEFAULT_THEME,
  THEME_COLLECTIONS,
);

const initialState: ThemeState = {
  activeTheme: DEFAULT_THEME,
  activeScenario: initialActiveScenario,
};

const themeReducer = (state: ThemeState, action: ThemeActions): ThemeState => {
  switch (action.type) {
    case 'SET_THEME': {
      const newTheme = action.payload;
      const newScenario = getRandomScenario(newTheme, THEME_COLLECTIONS);
      return {
        ...state,
        activeTheme: newTheme,
        activeScenario: newScenario,
      };
    }
    default:
      throw new Error(`Unhandled theme action type: ${action.type}`);
  }
};

export { themeReducer, initialState };
