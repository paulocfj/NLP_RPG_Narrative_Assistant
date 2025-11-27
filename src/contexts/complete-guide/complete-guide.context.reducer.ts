import type {
  CompleteGuide,
  GuideQuestion,
  OneShotGuideQuestion,
} from '../../types';
import type { GuideActions } from './complete-guide.context.types';
/**
 * Defines the initial state for the Complete Guide context.
 * The guide starts with an empty list of questions and is not finished.
 */
const initialState: CompleteGuide = {
  guideQuestions: [],
  isFinished: false,
};

/**
 * A Redux-style reducer function for managing the state of the One-Shot adventure guide.
 *
 * It handles actions related to initializing the guide, updating user responses,
 * and managing the completion status.
 *
 * @param state The current state of the CompleteGuide (questions and completion status).
 * @param action The dispatched action to modify the state (e.g., 'UPDATE_RESPONSE', 'INITIALIZE_GUIDE').
 * @returns The new state object after applying the action.
 */
const completeGuideReducer = (
  state: CompleteGuide,
  action: GuideActions,
): CompleteGuide => {
  switch (action.type) {
    case 'GUIDE_COMPLETED':
      return {
        ...state,
        isFinished: true,
      };

    case 'INITIALIZE_GUIDE': {
      // Maps the initial static questions (payload) to the state format,
      // adding an empty userResponse field to each.
      const initialQuestions: GuideQuestion[] = (
        action.payload as OneShotGuideQuestion[]
      ).map((q) => ({
        ...q,
        userResponse: '',
      }));

      return {
        ...state,
        guideQuestions: initialQuestions,
        isFinished: false,
      };
    }

    case 'UPDATE_RESPONSE': {
      // Finds the question by its text and updates the user's response for that specific item.
      const updatedQuestions = state.guideQuestions.map((item) =>
        item.question === action.payload.question
          ? { ...item, userResponse: action.payload.userResponse }
          : item,
      );

      return {
        ...state,
        guideQuestions: updatedQuestions,
      };
    }

    case 'RESET_GUIDE': {
      // Clears all user responses from the current guide questions and sets isFinished to false.
      const resetQuestions = state.guideQuestions.map((item) => ({
        ...item,
        userResponse: '',
      }));
      return {
        ...state,
        guideQuestions: resetQuestions,
        isFinished: false,
      };
    }

    default:
      return state;
  }
};

export { completeGuideReducer, initialState };
