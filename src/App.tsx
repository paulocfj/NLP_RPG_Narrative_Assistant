import './App.css';
import { ChatProvider } from './contexts';

import { ChatbotPage } from './pages/chatbot/chatbot.page';

function App() {
  return (
    <div className="App">
      <ChatProvider>
        <ChatbotPage />
      </ChatProvider>
    </div>
  );
}

export default App;
