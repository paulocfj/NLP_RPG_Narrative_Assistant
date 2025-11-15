import type { ReactNode } from 'react';
import type { CoreQuestionsGuide } from '../../types';

type GuideActions =
  | {
      type: 'INITIALIZE_GUIDE';
      payload: CoreQuestionsGuide;
    }
  | {
      type: 'UPDATE_RESPONSE';
      payload: {
        question: string;
        userResponse: string;
      };
    }
  | { type: 'RESET_GUIDE' };

type CompleteGuideProviderProps = {
  children: ReactNode;
};

export type { GuideActions, CompleteGuideProviderProps };
