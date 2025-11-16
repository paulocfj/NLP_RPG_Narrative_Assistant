import type { ThemeProviderProps } from './theme.context.types';
import { themeReducer, initialState } from './theme.context.reducer';
import { useReducer } from 'react';
import { ThemeDispatchContext, ThemeStateContext } from './theme.context';

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
};

export { ThemeProvider };
