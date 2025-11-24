import './chatbot.page.css';
import { ChatWindow, DraftSummaryModal, Sidebar } from '../../components';

const ChatbotPage = () => {
  return (
    <div
      className="flex h-screen bg-gray-950 text-gray-100 p-0 md:p-4"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="w-full md:w-[95%] lg:w-[1200px] h-full mx-auto flex bg-gray-900 rounded-none md:rounded-xl shadow-2xl overflow-hidden">
        {/* Sidebar - O Grimório */}
        <div className="w-full md:w-1/4 max-w-[300px] hidden md:block">
          <Sidebar />
        </div>

        {/* Main Chat Area - A Janela de Diálogo */}
        <div className="flex-1 flex flex-col">
          <ChatWindow />
        </div>

        {/* ✅ Modal de Rascunho */}
        {/* Ele é renderizado aqui. Seu CSS (fixed, z-50) garante que ele flutue por cima. */}
        <DraftSummaryModal />
      </div>
    </div>
  );
};

export { ChatbotPage };
