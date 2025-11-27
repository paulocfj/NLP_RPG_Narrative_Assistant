import type { ChatProviderProps } from './chat.context.types';
import { ChatDispatchContext, ChatStateContext } from './chat.context';
import { chatReducer, initialState } from './chat.context.reducer';
import { useReducer } from 'react';

const ChatProvider = ({ children }: ChatProviderProps) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatStateContext.Provider value={state}>
      <ChatDispatchContext.Provider value={dispatch}>
        {children}
      </ChatDispatchContext.Provider>
    </ChatStateContext.Provider>
  );
};

export { ChatProvider };
