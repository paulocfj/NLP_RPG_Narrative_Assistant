import { useReducer } from 'react';
import type { CompleteGuideProviderProps } from './complete-guide.context.types';
import {
  completeGuideReducer,
  initialState,
} from './complete-guide.context.reducer';
import {
  CompleteGuideDispatchContext,
  CompleteGuideStateContext,
} from './complete-guide.context';

/**
 * Provedor que encapsula a lógica do 'CompleteGuide'
 */
const CompleteGuideProvider = ({ children }: CompleteGuideProviderProps) => {
  const [state, dispatch] = useReducer(completeGuideReducer, initialState);

  return (
    <CompleteGuideStateContext.Provider value={state}>
      <CompleteGuideDispatchContext.Provider value={dispatch}>
        {children}
      </CompleteGuideDispatchContext.Provider>
    </CompleteGuideStateContext.Provider>
  );
};

export { CompleteGuideProvider };
