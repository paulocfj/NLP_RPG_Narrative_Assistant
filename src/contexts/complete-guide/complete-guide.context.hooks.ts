import { useContext } from 'react';
import {
  CompleteGuideDispatchContext,
  CompleteGuideStateContext,
} from './complete-guide.context';

/*
 * Hook (GET): Acessa o estado 'CompleteGuide'.
 * Componentes que usam este hook irão re-renderizar quando o 'guide' mudar.
 */
const useCompleteGuideState = () => {
  const context = useContext(CompleteGuideStateContext);
  if (context === undefined) {
    throw new Error(
      'useCompleteGuideState must be used within a CompleteGuideProvider',
    );
  }
  return context;
};

/**
 * Hook (SET): Acessa a função 'dispatch' para atualizar o guia.
 * Componentes que usam este hook NÃO irão re-renderizar quando o 'guide' mudar.
 */
const useCompleteGuideDispatch = () => {
  const context = useContext(CompleteGuideDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useCompleteGuideDispatch must be used within a CompleteGuideProvider',
    );
  }
  return context;
};

export { useCompleteGuideState, useCompleteGuideDispatch };
