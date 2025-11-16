import { useContext, type Dispatch } from 'react';
import { ThemeDispatchContext, ThemeStateContext } from './theme.context';
import type { ThemeActions, ThemeState } from './theme.context.types';

/**
 * Hook (GET) para obter o estado (tema ativo e cenário sorteado).
 * Componentes que usam este hook serão re-renderizados sempre que o tema ou cenário mudar.
 *
 * @returns {ThemeState} O estado atual do tema.
 */
const useThemeState = (): ThemeState => {
  const context = useContext(ThemeStateContext);
  if (context === undefined) {
    throw new Error('useThemeState must be used within a ThemeProvider');
  }
  return context;
};

/**
 * Hook (SET) para obter as ações (funções setters).
 * Componentes que usam este hook NÃO serão re-renderizados quando o estado do tema mudar.
 *
 * @returns {Dispatch<ThemeActions>} A função dispatch para enviar ações ao reducer.
 */
const useThemeDispatch = (): Dispatch<ThemeActions> => {
  const context = useContext(ThemeDispatchContext);
  if (context === undefined) {
    throw new Error('useThemeDispatch must be used within a ThemeProvider');
  }
  return context;
};

export { useThemeDispatch, useThemeState };
