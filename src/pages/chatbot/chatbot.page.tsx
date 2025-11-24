// Adicione o hook useState do React
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Ícones para o botão
import './chatbot.page.css';
import { ChatWindow, DraftSummaryModal, Sidebar } from '../../components';

const ChatbotPage = () => {
  // 1. Estado para controlar a abertura/fechamento da sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 2. Função para alternar o estado
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className="flex h-screen bg-gray-950 text-gray-100 p-0 md:p-4"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="w-full md:w-[95%] lg:w-[1200px] h-full mx-auto flex bg-gray-900 rounded-none md:rounded-xl shadow-2xl overflow-hidden">
        {/* ============================================================= */}
        {/* ✅ NOVO: Botão de Menu para Celular (Visível apenas em telas pequenas) */}
        <button
          onClick={toggleSidebar}
          // Posicionamento: Fixo no canto, visível APENAS em telas pequenas (`md:hidden`)
          className="fixed top-5 left-5 z-50 p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 md:hidden transition"
          aria-label={isSidebarOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isSidebarOpen ? (
            <X className="w-6 h-6" /> // Ícone de Fechar
          ) : (
            <Menu className="w-6 h-6" /> // Ícone de Menu
          )}
        </button>
        {/* ============================================================= */}

        {/* Sidebar - O Grimório */}
        <div
          // 3. Classes atualizadas:
          className={`
            fixed top-0 left-0 h-full z-40
            w-full max-w-[300px] transform transition-transform duration-300 ease-in-out
            md:relative md:block md:w-1/4
            ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
            md:translate-x-0 // Garante que em telas md a transição não aplique -translate-x-full
          `}
        >
          {/* ✅ Passamos a função de fechar para a Sidebar poder se fechar (opcional) */}
          <Sidebar onClose={toggleSidebar} />
        </div>

        {/* ✅ NOVO: Overlay de Fundo (Visível apenas quando o menu está aberto em mobile) */}
        {isSidebarOpen && (
          <div
            onClick={toggleSidebar}
            className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
          />
        )}

        {/* Main Chat Area - A Janela de Diálogo (Nenhuma mudança necessária aqui, exceto o CSS) */}
        <div className="flex-1 flex flex-col">
          <ChatWindow />
        </div>

        {/* Modal de Rascunho */}
        <DraftSummaryModal />
      </div>
    </div>
  );
};

export { ChatbotPage };
