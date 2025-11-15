import type { ReactNode } from 'react';
import type { Message } from '../../types';

type ChatProviderProps = {
  children: ReactNode;
};

/**
 * @typedef {object} ChatActions
 * @description Defines the structure of available actions (setters) in the chat context.
 * @property {(message: Message) => void} addMessage - Adds a new message to the list.
 * @property {() => void} clearMessages - Clears all messages from the chat.
 * @property {(messages: Message[]) => void} setMessages - Sets the complete list of messages (useful for initialization/loading).
 */
type ChatActions =
  | {
      type: 'ADD_MESSAGE';
      message: Message;
    }
  | {
      type: 'CLEAR_MESSAGES';
    }
  | {
      type: 'SET_MESSAGES';
      messages: Message[];
    };

export type { ChatProviderProps, ChatActions };
