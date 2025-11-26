import { useState } from 'react';
import { Settings, Dice5, Wand, Sparkles } from 'lucide-react';
import { useModalState, useModalDispatch } from '../../contexts';
import { HAS_SEEN_WELCOME_MODAL_KEY } from '../../constants';

const WelcomeModal = () => {
  const { activeModal } = useModalState();
  const { closeModal } = useModalDispatch();

  const [doNotShowAgain, setDoNotShowAgain] = useState(false);

  if (activeModal !== 'WELCOME') return null;

  const handleClose = () => {
    if (doNotShowAgain) {
      localStorage.setItem(HAS_SEEN_WELCOME_MODAL_KEY, 'true');
    } else {
      localStorage.removeItem(HAS_SEEN_WELCOME_MODAL_KEY);
    }

    closeModal();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-4">
      <div
        className="bg-yellow-100/95 text-gray-900 rounded-2xl shadow-2xl
                w-full max-w-lg md:max-w-xl flex flex-col
                border-4 border-yellow-700 transform transition-all duration-300 scale-100
                max-h-[90vh]"
      >
        <header className="flex justify-center items-center p-4 border-b-2 border-yellow-700 bg-yellow-200/50 sticky top-0 z-10 flex-shrink-0">
          <h2 className="text-2xl font-bold flex items-center text-yellow-900">
            🧙‍♂️ Saudações, Mestre!
          </h2>
        </header>

        <main className="p-6 md:p-8 flex-1 text-center overflow-y-auto min-h-0">
          <h3 className="text-xl md:text-2xl font-serif font-extrabold text-amber-900 mb-4">
            A Magia por Trás do Grimório de One-Shots
          </h3>

          <p className="mb-6 text-gray-700 text-base md:text-lg leading-relaxed">
            Cansado do Bloqueio Criativo? Use o poder da{' '}
            <strong className="font-extrabold text-amber-900">
              Inteligência Artificial Generativa (LLM)
            </strong>{' '}
            em seu favor para forjar aventuras curtas (One-Shots) épicas,
            coerentes e personalizadas em minutos!
          </p>

          <div className="flex justify-around items-start my-6 py-4 border-t border-b border-yellow-300">
            <div className="flex flex-col items-center max-w-[120px] px-1">
              <Settings className="w-9 h-9 sm:w-10 sm:h-10 text-teal-600 mb-2 animate-spin-slow" />
              <span className="text-xs sm:text-sm font-bold text-gray-800 mt-1">
                1. Mapeamento Estrutural
              </span>
              <p className="text-2xs sm:text-xs text-gray-600">
                Guia passo a passo (Scaffolding).
              </p>
            </div>

            <div className="flex flex-col items-center max-w-[120px] px-1">
              <Wand className="w-9 h-9 sm:w-10 sm:h-10 text-purple-600 mb-2 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-gray-800 mt-1">
                2. Convocação da IA
              </span>
              <p className="text-2xs sm:text-xs text-gray-600">
                O motor LLM conjura a trama.
              </p>
            </div>

            <div className="flex flex-col items-center max-w-[120px] px-1">
              <Dice5 className="w-9 h-9 sm:w-10 sm:h-10 text-red-600 mb-2 animate-bounce-slow" />
              <span className="text-xs sm:text-sm font-bold text-gray-800 mt-1">
                3. Aventura Pronta
              </span>
              <p className="text-2xs sm:text-xs text-gray-600">
                Roteiro jogável e customizado.
              </p>
            </div>
          </div>

          <p className="mb-8 text-gray-700 text-sm italic">
            Nós estruturamos a criação através de perguntas focadas, garantindo
            que o LLM receba os elementos narrativos essenciais para criar sua
            história.
          </p>
        </main>

        <footer className="p-4 pt-0 text-center flex flex-col items-center flex-shrink-0">
          <label className="flex items-center justify-center mb-4 text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              checked={doNotShowAgain}
              onChange={(e) => setDoNotShowAgain(e.target.checked)}
              className="mr-2 h-4 w-4 text-yellow-800 border-gray-300 rounded focus:ring-yellow-700"
            />
            Não me mostre esta tela novamente
          </label>

          <button
            onClick={handleClose}
            className="w-full md:w-3/4 px-6 py-2 md:px-10 md:py-3 rounded-lg font-extrabold text-lg sm:text-xl
                        bg-yellow-800 text-yellow-200 hover:bg-yellow-700 transition shadow-xl transform hover:scale-105
                        flex items-center justify-center space-x-2 mx-auto"
            aria-label="Iniciar a Jornada de Criação"
          >
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
            <span>Comece a Forjar a Sua Lenda!</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export { WelcomeModal };
