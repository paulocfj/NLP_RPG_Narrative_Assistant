import { X, BookOpenCheck } from 'lucide-react';
import { ScenarioDraftSummaryComponent } from '../scenario-draft-summary/scenario-draft-summary.component';
import { useModalDispatch, useModalState } from '../../contexts';

const DraftSummaryModal = () => {
  const { activeModal } = useModalState();
  const { closeModal } = useModalDispatch();

  if (activeModal !== 'DRAFT_SUMMARY') return null;

  return (
    // Backdrop / Overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm p-4">
      {/* Container do Modal */}
      <div
        className="bg-yellow-100/95 text-gray-900 rounded-2xl shadow-2xl
            w-full max-w-4xl h-[95vh] flex flex-col overflow-hidden
            border-4 border-yellow-700"
      >
        {/* Cabeçalho */}
        <div className="flex justify-between items-center p-5 border-b-2 border-yellow-700 bg-yellow-200/50 sticky top-0 z-10">
          <h2 className="text-2xl font-bold flex items-center text-yellow-900">
            <BookOpenCheck className="w-7 h-7 mr-3 text-yellow-800" />
            Rascunho Atual do Guia
          </h2>
          {/* Botão de Fechar */}
          <button
            onClick={closeModal}
            className="p-2 rounded-full hover:bg-red-700 transition duration-200 text-red-500 hover:text-white"
            aria-label="Fechar rascunho"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Conteúdo (Scrollable) */}
        <div className="overflow-y-auto p-8 flex-1">
          <ScenarioDraftSummaryComponent />
        </div>
      </div>
    </div>
  );
};

export { DraftSummaryModal };
