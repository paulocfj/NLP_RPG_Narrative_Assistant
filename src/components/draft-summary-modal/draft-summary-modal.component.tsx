import { X, BookOpenCheck } from 'lucide-react';
import { ScenarioDraftSummaryComponent } from '../scenario-draft-summary/scenario-draft-summary.component';
import { useModalDispatch, useModalState } from '../../contexts';

const DraftSummaryModal = () => {
  const { activeModal } = useModalState();
  const { closeModal } = useModalDispatch();

  if (activeModal !== 'DRAFT_SUMMARY') return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm p-2 sm:p-4">
      <div
        className="bg-yellow-100/95 text-gray-900 rounded-2xl shadow-2xl
            w-full max-w-4xl h-[95vh] flex flex-col overflow-hidden
            border-4 border-yellow-700"
      >
        <div className="flex justify-between items-center p-3 sm:p-5 border-b-2 border-yellow-700 bg-yellow-200/50 sticky top-0 z-10">
          <h2 className="text-xl sm:text-2xl font-bold flex items-center text-yellow-900">
            <BookOpenCheck className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-3 text-yellow-800" />
            Rascunho Atual do Guia
          </h2>
          <button
            onClick={closeModal}
            className="p-1 sm:p-2 rounded-full hover:bg-red-700 transition duration-200 text-red-500 hover:text-white"
            aria-label="Fechar rascunho"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
        <div className="overflow-y-auto p-4 sm:p-8 flex-1">
          <ScenarioDraftSummaryComponent />
        </div>
      </div>
    </div>
  );
};

export { DraftSummaryModal };
