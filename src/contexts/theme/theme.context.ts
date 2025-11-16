import { createContext, type Dispatch } from 'react';
import type { ThemeActions, ThemeState } from './theme.context.types';

const ThemeStateContext = createContext<ThemeState | undefined>(undefined);

const ThemeDispatchContext = createContext<Dispatch<ThemeActions> | undefined>(
  undefined,
);

export { ThemeDispatchContext, ThemeStateContext };
