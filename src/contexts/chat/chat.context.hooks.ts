import { useContext, type Dispatch } from 'react';
import { ChatDispatchContext, ChatStateContext } from './chat.context';
import type { Message } from '../../types';
import type { ChatActions } from './chat.context.types';

/**
 * Hook (GET) to retrieve the state (list of messages).
 * Components using this hook will re-render whenever a message is added or the list changes.
 *
 * @returns {Message[]} The current list of chat messages.
 * @throws {Error} Throws an error if the hook is not used within a ChatProvider.
 */
const useChatState = (): Message[] => {
  const context = useContext(ChatStateContext);
  if (context === undefined) {
    throw new Error('useChatState must be used within a ChatProvider');
  }
  return context;
};

/**
 * Hook (SET) to retrieve the dispatch function (action setters).
 * Components using this hook WILL NOT re-render when the message list changes,
 * as they only consume the dispatch function.
 *
 * @returns {Dispatch<ChatActions>} The dispatch function used to send actions
 * (ADD_MESSAGE, CLEAR_MESSAGES, SET_MESSAGES) to the chat reducer.
 * @throws {Error} Throws an error if the hook is not used within a ChatProvider.
 */
const useChatDispatch = (): Dispatch<ChatActions> => {
  const context = useContext(ChatDispatchContext);
  if (context === undefined) {
    throw new Error('useChatDispatch must be used within a ChatProvider');
  }
  return context;
};

export { useChatDispatch, useChatState };
