import { BookOpen, ChevronRight, ScrollText, X } from 'lucide-react';
import { NewScenarioBtn, ScenarioDraftBtn } from './components';

type SidebarProps = {
  onClose: () => void;
};

const Sidebar = ({ onClose }: SidebarProps) => {
  return (
    <div className="h-full bg-gray-800 text-white shadow-xl p-6 border-r border-gray-700 flex flex-col">
      {/* 1. Título do Grimório + Botão de Fechar no Mobile */}
      <div className="flex items-center justify-between text-xl font-extrabold text-yellow-400 mb-6 border-b border-gray-700 pb-3">
        <div className="flex items-center">
          <BookOpen className="w-6 h-6 mr-2" />
          Grimório de Aventura
        </div>
        {/* ✅ NOVO: Botão de Fechar visível apenas em Mobile */}
        <button
          onClick={onClose}
          className="p-1 rounded-full text-white hover:bg-gray-700 md:hidden"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* 2. GRUPO NAV 1: Botões de Ação Principal (Separados por space-y-3) */}
      <nav className="space-y-3">
        {/* Botão 1: Nova Campanha (Ação de reinício) */}
        <NewScenarioBtn />
        {/* Botão 2: Rascunho da Aventura (Ação Modal) */}
        <ScenarioDraftBtn />
      </nav>

      {/* 3. GRUPO NAV 2: Navegação Secundária/Configuração (Separado por mt-4) */}
      {/* 💡 O mt-4 (1rem) cria o gap entre o Grupo de Ações e este Grupo */}
      <nav className="space-y-3 mt-4">
        {/* Item 1: Configurações (Tema) - Item de navegação/visualização */}
        <div className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200 cursor-pointer text-gray-400">
          <ScrollText className="w-5 h-5 mr-3" />
          <span>Configurações (Tema)</span>
        </div>

        {/* Item 2: Histórico - Item de navegação/visualização */}
        <div className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200 cursor-pointer text-gray-400">
          <ChevronRight className="w-5 h-5 mr-3" />
          <span>Histórico</span>
        </div>
      </nav>

      {/* 4. Footer (Empurrado para baixo por mt-auto) */}
      <div className="mt-auto pt-6 border-t border-gray-700 text-sm text-gray-500">
        <p>Assistente de OneShots 1.0</p>
      </div>
    </div>
  );
};

export { Sidebar };
