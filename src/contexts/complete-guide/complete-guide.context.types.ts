import type { ReactNode } from 'react';
import type { CoreQuestionsGuide } from '../../types';

type GuideActions =
  | {
      type: 'GUIDE_COMPLETED';
    }
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
  | {
      type: 'GUIDE_COMPLETE';
    }
  | { type: 'RESET_GUIDE' };

type CompleteGuideProviderProps = {
  children: ReactNode;
};

export type { GuideActions, CompleteGuideProviderProps };
