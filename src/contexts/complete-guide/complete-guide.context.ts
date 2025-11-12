import { createContext, type Dispatch } from 'react';
import type { CompleteGuide } from '../../types';
import type { GuideAction } from './complete-guide.context.types';

const CompleteGuideStateContext = createContext<CompleteGuide | undefined>(
  undefined,
);

/** Contexto para o DISPATCH (Set) */
const CompleteGuideDispatchContext = createContext<
  Dispatch<GuideAction> | undefined
>(undefined);

export { CompleteGuideStateContext, CompleteGuideDispatchContext };
