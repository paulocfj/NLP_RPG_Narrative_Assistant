// src/hooks/useChat.ts

import { useContext, type Context } from 'react';
import type { Message } from '../../types';
import { ChatActionsContext, ChatMessagesContext } from './chat.context';
import type { ChatActions } from './chat.context.type';

// Função auxiliar para verificar o contexto
const useRequiredContext = <T>(
  context: Context<T | undefined>,
  name: string,
): T => {
  const value = useContext(context);
  if (value === undefined) {
    throw new Error(`use${name} must be used within a ChatProvider`);
  }
  return value as T;
};

/**
 * Hook para obter o estado (lista de mensagens).
 * Componentes que usam este hook serão re-renderizados sempre que uma mensagem for adicionada.
 *
 * @returns {Message[]} A lista atual de mensagens.
 */
const useChatMessages = (): Message[] => {
  return useRequiredContext(ChatMessagesContext, 'ChatMessages');
};

/**
 * Hook para obter as ações (funções setters).
 * Componentes que usam este hook NÃO serão re-renderizados quando a lista de mensagens mudar.
 *
 * @returns {ChatActions} O objeto com as funções de ação (addMessage, clearMessages, setMessages).
 */
const useChatActions = (): ChatActions => {
  return useRequiredContext(ChatActionsContext, 'ChatActions');
};

export { useChatMessages, useChatActions };
