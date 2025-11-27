import { useContext } from 'react';
import {
  CompleteGuideDispatchContext,
  CompleteGuideStateContext,
} from './complete-guide.context';

/**
 * Hook (GET): Accesses the 'CompleteGuide' state.
 * Components using this hook will re-render when the 'guide' state changes.
 *
 * @returns {CompleteGuide} The current state object of the adventure guide.
 * @throws {Error} Throws an error if the hook is not used within a CompleteGuideProvider.
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
 * Hook (SET): Accesses the 'dispatch' function to update the guide state.
 * Components using this hook WILL NOT re-render when the 'guide' state changes,
 * as they only consume the dispatch function.
 *
 * @returns {Dispatch<GuideActions>} The dispatch function used to send actions to the guide reducer.
 * @throws {Error} Throws an error if the hook is not used within a CompleteGuideProvider.
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
