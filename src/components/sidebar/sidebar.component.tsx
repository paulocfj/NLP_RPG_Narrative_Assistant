import { BookOpen, ChevronRight, ScrollText, Zap } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="h-full bg-gray-800 text-white shadow-xl p-6 border-r border-gray-700 md:flex md:flex-col">
      <div className="flex items-center text-xl font-extrabold text-yellow-400 mb-6 border-b border-gray-700 pb-3">
        <BookOpen className="w-6 h-6 mr-2" />
        Grimório de Aventura
      </div>

      <nav className="space-y-3">
        <div className="flex items-center p-3 rounded-lg bg-indigo-700/50 hover:bg-indigo-700 transition duration-200 cursor-pointer">
          <Zap className="w-5 h-5 mr-3 text-indigo-300" />
          <span className="font-semibold">Nova Campanha</span>
        </div>
        <div className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200 cursor-pointer text-gray-400">
          <ScrollText className="w-5 h-5 mr-3" />
          <span>Configurações (Tema)</span>
        </div>
        <div className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200 cursor-pointer text-gray-400">
          <ChevronRight className="w-5 h-5 mr-3" />
          <span>Histórico</span>
        </div>
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-700 text-sm text-gray-500">
        <p>Assistente de Cenário 1.0</p>
      </div>
    </div>
  );
};

export { Sidebar };
