import './App.css';
import { ChatProvider } from './contexts';
import { CompleteGuideProvider } from './contexts/complete-guide';

import { ChatbotPage } from './pages/chatbot/chatbot.page';

function App() {
  return (
    <div className="App">
      <ChatProvider>
        <CompleteGuideProvider>
          <ChatbotPage />
        </CompleteGuideProvider>
      </ChatProvider>
    </div>
  );
}

export default App;
