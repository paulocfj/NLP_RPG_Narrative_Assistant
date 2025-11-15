import type { ChatProviderProps } from './chat.context.types';
import { ChatDispatchContext, ChatStateContext } from './chat.context';
import { chatReducer, initialState } from './chat.context.reducer';
import { useReducer } from 'react';

/**
 * Provider principal para o Contexto de Chat.
 * Gerencia o estado das mensagens e fornece as ações.
 */
const ChatProvider = ({ children }: ChatProviderProps) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  return (
    // Otimização: Componentes que só precisam das ações não serão renderizados
    // quando a lista de mensagens (messages) mudar, e vice-versa.
    <ChatStateContext.Provider value={state}>
      <ChatDispatchContext.Provider value={dispatch}>
        {children}
      </ChatDispatchContext.Provider>
    </ChatStateContext.Provider>
  );
};

export { ChatProvider };
