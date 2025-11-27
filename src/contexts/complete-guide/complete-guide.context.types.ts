import type { ReactNode } from 'react';
import type { CoreQuestionsGuide } from '../../types';

/**
 * Defines the possible actions that can be dispatched to the CompleteGuide reducer.
 */
type GuideActions =
  | {
      /** Indicates that all questions in the guide have been completed. */
      type: 'GUIDE_COMPLETED';
    }
  | {
      /** Initializes the guide state with the initial set of questions. */
      type: 'INITIALIZE_GUIDE';
      payload: CoreQuestionsGuide;
    }
  | {
      /** Updates the user's response for a specific question in the guide. */
      type: 'UPDATE_RESPONSE';
      payload: {
        question: string;
        userResponse: string;
      };
    }
  | {
      /** Resets the entire guide state to its initial, empty, or uninitialized status. */
      type: 'RESET_GUIDE';
    };

/**
 * Defines the props for the CompleteGuideProvider component.
 */
type CompleteGuideProviderProps = {
  /** The child elements rendered within the provider. */
  children: ReactNode;
};

export type { GuideActions, CompleteGuideProviderProps };
