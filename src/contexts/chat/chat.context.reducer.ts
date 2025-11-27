import type { Message } from '../../types';
import type { ChatActions } from './chat.context.types';

/**
 * Defines the initial state for the Chat context: an empty array of messages.
 * @type {Message[]}
 */
const initialState: Message[] = [];

/**
 * A Redux-style reducer function for managing the state of the chat history.
 *
 * It handles adding new messages, clearing the history, and setting an entirely
 * new list of messages (e.g., when loading from storage).
 *
 * @param {Message[]} state The current list of messages in the chat history.
 * @param {ChatActions} action The dispatched action to modify the state.
 * @returns {Message[]} The new state object (updated list of messages).
 * @throws {Error} Throws an error if an unknown action type is received.
 */
const chatReducer = (state: Message[], action: ChatActions): Message[] => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, action.message];
    case 'CLEAR_MESSAGES':
      return [];
    case 'SET_MESSAGES':
      return action.messages;
    default:
      throw new Error(`Unhandled action type`);
  }
};

export { chatReducer, initialState };
