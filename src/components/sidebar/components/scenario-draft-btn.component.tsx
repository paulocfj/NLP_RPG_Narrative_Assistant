import { BookOpenText } from 'lucide-react';
import { useCompleteGuideState, useModalDispatch } from '../../../contexts';

const ScenarioDraftBtn = () => {
  const { guideQuestions } = useCompleteGuideState();
  const { openModal } = useModalDispatch();

  const hasAnswers = guideQuestions.filter((q) => q.userResponse !== '').length;

  return (
    <button
      type="button"
      className={`
            flex items-center w-full text-left p-3 rounded-lg transition duration-200
            ${
              hasAnswers
                ? 'bg-yellow-800/30 hover:bg-yellow-800/50 text-yellow-300 cursor-pointer'
                : 'text-gray-500 bg-gray-700/30 cursor-not-allowed'
            }
          `}
      onClick={hasAnswers ? () => openModal('DRAFT_SUMMARY') : undefined}
      disabled={!hasAnswers}
      title={
        hasAnswers
          ? 'Ver Rascunho Atual do Guia'
          : 'Responda a primeira pergunta para ver o rascunho.'
      }
    >
      <BookOpenText className="w-5 h-5 mr-3" />
      <span className="font-semibold">Rascunho da Aventura</span>
    </button>
  );
};

export { ScenarioDraftBtn };
