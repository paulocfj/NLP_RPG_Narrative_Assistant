import type { Message } from '../../types';
import type { ChatActions } from './chat.context.types';

const initialState: Message[] = [];

const chatReducer = (state: Message[], action: ChatActions): Message[] => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, action.message];
    case 'CLEAR_MESSAGES':
      return [];
    case 'SET_MESSAGES':
      return action.messages;
    default:
      // Garante que todas as ações sejam tratadas (TypeSafety)
      throw new Error(`Unhandled action type`);
  }
};

export { chatReducer, initialState };
