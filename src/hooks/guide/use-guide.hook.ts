import { useCallback } from 'react';
import { useCompleteGuideDispatch } from '../../contexts';
import { InitialGuide } from '../../data';

/**
 * @typedef {object} UseGuideReturn
 * @property {() => void} initializeGuide Function to set the initial structure of the guide questions.
 * @property {() => void} resetGuide Function to clear all user responses in the guide, reverting them to empty strings.
 * @property {(question: string, userResponse: string) => void} updateResponse Function to update the user's response for a specific question in the guide.
 * @property {() => void} completeGuide Function to set the isFinished flag to true in the guide state.
 */
type UseGuideReturn = {
  initializeGuide: () => void;
  resetGuide: () => void;
  updateResponse: (question: string, userResponse: string) => void;
  completeGuide: () => void; // Added function for completeness
};

/**
 * @function useGuide
 * @description A custom hook that provides dispatch functions to manage the guide state
 * (questions and user responses) using the Reducer pattern via the CompleteGuideContext.
 *
 * @returns {UseGuideReturn} An object containing stable (memoized) functions to modify the guide state.
 */
const useGuide = (): UseGuideReturn => {
  const dispatch = useCompleteGuideDispatch();

  /**
   * Initializes the guide state with the base set of neutral questions.
   * This is typically called once when the guide component mounts.
   * The function is memoized using `useCallback`.
   */
  const initializeGuide = useCallback(() => {
    dispatch({ type: 'INITIALIZE_GUIDE', payload: InitialGuide });
  }, [dispatch]);

  /**
   * Resets the entire guide state, clearing all user responses while keeping the questions intact.
   * The function is memoized using `useCallback`.
   */
  const resetGuide = useCallback(() => {
    dispatch({ type: 'RESET_GUIDE' });
  }, [dispatch]);

  /**
   * Updates the user's response for a specific question identified by its text.
   * The function is memoized using `useCallback`.
   * @param {string} question The text of the question whose response should be updated.
   * @param {string} userResponse The new response text provided by the user.
   */
  const updateResponse = useCallback(
    (question: string, userResponse: string) => {
      dispatch({
        type: 'UPDATE_RESPONSE',
        payload: {
          question: question,
          userResponse: userResponse,
        },
      });
    },
    [dispatch],
  );

  /**
   * Dispatches the action to mark the guide as completed.
   * This sets the global isFinished flag to true in the context state.
   * The function is memoized using `useCallback`.
   */
  const completeGuide = useCallback(() => {
    dispatch({ type: 'GUIDE_COMPLETED' });
  }, [dispatch]);

  return { initializeGuide, resetGuide, updateResponse, completeGuide };
};

export { useGuide };
