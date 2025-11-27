import { createContext, type Dispatch } from 'react';
import type { Message } from '../../types';
import type { ChatActions } from './chat.context.types';

const ChatStateContext = createContext<Message[] | undefined>(undefined);

const ChatDispatchContext = createContext<Dispatch<ChatActions> | undefined>(
  undefined,
);

export { ChatDispatchContext, ChatStateContext };
