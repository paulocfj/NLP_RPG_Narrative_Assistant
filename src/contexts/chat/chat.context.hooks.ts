import { useContext, type Dispatch } from 'react';
import { ChatDispatchContext, ChatStateContext } from './chat.context';
import type { Message } from '../../types';
import type { ChatActions } from './chat.context.types';

/**
 * Hook (GET) para obter o estado (lista de mensagens).
 * Componentes que usam este hook serão re-renderizados sempre que uma mensagem for adicionada.
 *
 * @returns {Message[]} A lista atual de mensagens.
 */
const useChatState = (): Message[] => {
  const context = useContext(ChatStateContext);
  if (context === undefined) {
    throw new Error('useChatState must be used within a ChatProvider');
  }
  return context;
};

/**
 * Hook (SET) para obter as ações (funções setters).
 * Componentes que usam este hook NÃO serão re-renderizados quando a lista de mensagens mudar.
 *
 * @returns {Dispatch<ChatActions>} O objeto com as funções de ação (addMessage, clearMessages, setMessages).
 */
const useChatDispatch = (): Dispatch<ChatActions> => {
  const context = useContext(ChatDispatchContext);
  if (context === undefined) {
    throw new Error('useChatDispatch must be used within a ChatProvider');
  }
  return context;
};

export { useChatDispatch, useChatState };
