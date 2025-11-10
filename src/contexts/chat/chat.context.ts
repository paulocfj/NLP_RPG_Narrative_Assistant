import { createContext } from 'react';
import type { Message } from '../../types';
import type { ChatActions } from './chat.context.type';

// --- 1. Contextos ---

// Contexto para o ESTADO (apenas a lista de mensagens)
// Usamos 'undefined' como valor inicial para forçar o uso dentro do Provider.
const ChatMessagesContext = createContext<Message[] | undefined>(undefined);

// Contexto para as AÇÕES (as funções setters)
const ChatActionsContext = createContext<ChatActions | undefined>(undefined);

export { ChatMessagesContext, ChatActionsContext };
