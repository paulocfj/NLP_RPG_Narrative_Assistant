import { useState } from 'react';
import { Menu, X, BookOpenText } from 'lucide-react';
import './chatbot.page.css';
import { ChatWindow, DraftSummaryModal, Sidebar } from '../../components';

const ChatbotPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className="flex h-screen bg-gray-950 text-gray-100 p-0 md:p-4"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="w-full md:w-[95%] lg:w-[1200px] h-full mx-auto flex flex-col md:flex-row bg-gray-800 rounded-none md:rounded-xl shadow-2xl overflow-hidden">
        <button
          onClick={toggleSidebar}
          className="fixed top-5 left-5 z-50 p-2 rounded-full bg-yellow-800 text-yellow-200 hover:bg-yellow-700 md:hidden transition shadow-lg"
          aria-label={isSidebarOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isSidebarOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        <div
          className={`
            fixed top-0 left-0 h-full z-40
            w-full max-w-[300px] transform transition-transform duration-300 ease-in-out
            md:relative md:block md:w-1/4 md:flex-shrink-0
            ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
            md:translate-x-0
          `}
        >
          <Sidebar onClose={toggleSidebar} />
        </div>

        {isSidebarOpen && (
          <div
            onClick={toggleSidebar}
            className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
          />
        )}

        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="p-2 pb-0 bg-gray-800 shadow-2xl">
            <h1 className="text-3xl font-bold text-center text-gray-300">
              <div className="flex items-center justify-center">
                <BookOpenText className="w-7 h-7 mr-3 " />
                Grimório do Mestre
              </div>
            </h1>
          </header>

          <div className="flex-1 overflow-y-hidden md:pt-0">
            <ChatWindow />
          </div>
        </div>

        <DraftSummaryModal />
      </div>
    </div>
  );
};

export { ChatbotPage };
