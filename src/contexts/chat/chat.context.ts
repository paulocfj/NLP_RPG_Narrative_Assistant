import { createContext, type Dispatch } from 'react';
import type { Message } from '../../types';
import type { ChatActions } from './chat.context.types';

// --- 1. Contextos ---

// Contexto para o ESTADO (apenas a lista de mensagens)
// Usamos 'undefined' como valor inicial para forçar o uso dentro do Provider.
const ChatStateContext = createContext<Message[] | undefined>(undefined);

// Contexto para as AÇÕES (as funções setters)
const ChatDispatchContext = createContext<Dispatch<ChatActions> | undefined>(
  undefined,
);

export { ChatDispatchContext, ChatStateContext };
