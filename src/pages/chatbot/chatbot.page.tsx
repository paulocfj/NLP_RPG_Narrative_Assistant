import { Sidebar } from "../../components/sidebar/sidebar.component";
import { ChatWindow } from "../../components/chat-window/chat-window.component";
import "./chatbot.page.css"; // Estilo para a página

const ChatbotPage = () => {
  return (
    <div className="chatbot-layout">
      {/* 1. Menu Lado Esquerdo */}
      <Sidebar />

      {/* 2. Área do Chat (restante do espaço) */}
      <ChatWindow />
    </div>
  );
};

export { ChatbotPage };
