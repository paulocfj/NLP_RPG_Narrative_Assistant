import { useCallback } from 'react';
import { useChatDispatch } from '../../contexts';
import type { Message } from '../../types';

/**
 * @typedef {object} UseChatReturn
 * @property {(message: Message) => void} addMessage Function to add a single new message to the chat state.
 * @property {() => void} clearMessages Function to clear all messages from the chat state.
 * @property {(newMessages: Message[]) => void} setMessages Function to replace the entire message list with a new array.
 */
type UseChatMessageReturn = {
  addMessage: (message: Message) => void;
  clearMessages: () => void;
  setMessages: (newMessages: Message[]) => void;
};

/**
 * @function useChat
 * @description A custom hook that provides dispatch functions to manage the global chat state
 * (messages list) using the Reducer pattern via the ChatContext.
 *
 * @returns {UseChatReturn} An object containing stable (memoized) functions to modify the chat state.
 */
const useChatMessage = (): UseChatMessageReturn => {
  const dispatchChat = useChatDispatch();

  /**
   * Adds a single message object to the current list of messages.
   * The function is memoized using `useCallback`.
   * @param {Message} message The message object to be added.
   */
  const addMessage = useCallback(
    (message: Message) => {
      dispatchChat({
        type: 'ADD_MESSAGE',
        message: message,
      });
    },
    [dispatchChat],
  );

  /**
   * Clears all messages from the chat state.
   * The function is memoized using `useCallback`.
   */
  const clearMessages = useCallback(() => {
    dispatchChat({
      type: 'CLEAR_MESSAGES',
    });
  }, [dispatchChat]);

  /**
   * Replaces the current list of messages entirely with a new array.
   * The function is memoized using `useCallback`.
   * @param {Message[]} newMessages The array of messages that will replace the current state.
   */
  const setMessages = useCallback(
    (newMessages: Message[]) => {
      dispatchChat({
        type: 'SET_MESSAGES',
        messages: newMessages,
      });
    },
    [dispatchChat],
  );

  return { addMessage, clearMessages, setMessages };
};

export { useChatMessage };
