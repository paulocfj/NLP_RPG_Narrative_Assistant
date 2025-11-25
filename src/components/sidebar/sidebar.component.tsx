import { Swords, X } from 'lucide-react';
import { NewScenarioBtn, ScenarioDraftBtn } from './components';

type SidebarProps = {
  onClose: () => void;
};

const Sidebar = ({ onClose }: SidebarProps) => {
  return (
    <div className="h-full bg-gray-800 text-white shadow-xl p-6 border-r border-gray-700 flex flex-col">
      <header className="mb-6 border-b border-gray-700 pb-3">
        <div className="flex items-center justify-between text-xl font-extrabold text-gray-300">
          <div className="flex items-center">
            <Swords className="w-6 h-6 mr-2" />
            Grimório de Aventura
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-yellow-400 hover:bg-gray-700 md:hidden"
            aria-label="Fechar Sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        <nav className="space-y-3">
          <NewScenarioBtn />
          <ScenarioDraftBtn />
        </nav>
      </main>

      <footer className="pt-6 border-t border-gray-700 text-sm text-gray-500">
        <p>Assistente de One-Shots 1.0</p>
      </footer>
    </div>
  );
};

export { Sidebar };
