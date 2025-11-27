import { useCompleteGuideState } from '../../contexts';

const GuideProgressIndicator = () => {
  const { isFinished, guideQuestions } = useCompleteGuideState();
  const totalQuestions = guideQuestions.length;
  const answeredQuestions = guideQuestions.filter(
    (question) => question.userResponse && question.userResponse.trim() !== '',
  ).length;
  const currentStep = answeredQuestions;
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;

  const progressTextClass = isFinished ? 'text-green-400' : 'text-yellow-400';
  const progressBarClass = isFinished ? 'bg-green-500' : 'bg-yellow-500';

  return (
    <div className="flex flex-col items-center w-full p-2 bg-gray-800 border-t border-gray-700">
      <div className="flex justify-between w-full max-w-xl mb-1 text-sm font-semibold text-white">
        <span className={progressTextClass}>
          {isFinished
            ? 'Aventura Concluída! 🎉'
            : `Progresso: Passo ${currentStep + 1} de ${totalQuestions}`}
        </span>
        <span className={progressTextClass}>
          {Math.round(progressPercentage)}%
        </span>
      </div>
      <div className="w-full max-w-xl h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-500 ease-out ${progressBarClass}`}
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export { GuideProgressIndicator };
