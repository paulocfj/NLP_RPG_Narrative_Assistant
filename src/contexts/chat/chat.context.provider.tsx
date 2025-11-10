import { useMemo, useState } from 'react';
import type { ChatActions, ChatProviderProps } from './chat.context.type';
import type { Message } from '../../types';
import { ChatActionsContext, ChatMessagesContext } from './chat.context';

/**
 * Provider principal para o Contexto de Chat.
 * Gerencia o estado das mensagens e fornece as ações.
 */
export const ChatProvider: React.FC<ChatProviderProps> = ({
  children,
  initialMessages = [],
}) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  // Memoiza as ações para garantir que a referência das funções só mude
  // se houver uma mudança de dependência externa (o que não acontece aqui).
  const actions = useMemo<ChatActions>(
    () => ({
      addMessage: (message: Message) => {
        setMessages((prev) => [...prev, message]);
      },
      clearMessages: () => {
        setMessages([]);
      },
      setMessages: (newMessages: Message[]) => {
        setMessages(newMessages);
      },
    }),
    [],
  );

  return (
    // Otimização: Componentes que só precisam das ações não serão renderizados
    // quando a lista de mensagens (messages) mudar, e vice-versa.
    <ChatActionsContext.Provider value={actions}>
      <ChatMessagesContext.Provider value={messages}>
        {children}
      </ChatMessagesContext.Provider>
    </ChatActionsContext.Provider>
  );
};
