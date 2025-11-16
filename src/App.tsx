import './App.css';
import { ChatProvider } from './contexts';
import { CompleteGuideProvider } from './contexts/complete-guide';
import { ThemeProvider } from './contexts/theme';

import { ChatbotPage } from './pages/chatbot/chatbot.page';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ChatProvider>
          <CompleteGuideProvider>
            <ChatbotPage />
          </CompleteGuideProvider>
        </ChatProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
