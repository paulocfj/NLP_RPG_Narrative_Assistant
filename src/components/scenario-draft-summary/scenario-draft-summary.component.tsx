import ReactMarkdown from 'react-markdown';
import { useCompleteGuideState } from '../../contexts';

const ScenarioDraftSummaryComponent = () => {
  const { guideQuestions } = useCompleteGuideState();

  const totalSteps = guideQuestions.length;
  const answeredSteps = guideQuestions.filter(
    (item) => item.userResponse && item.userResponse.trim() !== '',
  ).length;
  const isCompleted = answeredSteps === totalSteps;
  const progressPercentage =
    totalSteps > 0 ? Math.round((answeredSteps / totalSteps) * 100) : 0;

  const completedColors = {
    title: 'text-yellow-900',
    border: 'border-yellow-900',
    progressText: 'text-yellow-700',
    itemBorder: 'border-yellow-600',
    itemTextAnswered: 'text-green-700',
    itemTextUnanswered: 'text-red-700',
  };

  const inProgressColors = {
    title: 'text-teal-800',
    border: 'border-teal-600',
    progressText: 'text-teal-700',
    itemBorder: 'border-gray-400',
    itemTextAnswered: 'text-green-700',
    itemTextUnanswered: 'text-red-700',
  };

  const currentColors = isCompleted ? completedColors : inProgressColors;

  const titleText = isCompleted
    ? '📜 Guia de Cenário Concluído'
    : '🛠️ Progresso do Rascunho da Aventura';

  const introMessage = isCompleted ? (
    <p className="mb-6 font-semibold text-base sm:text-lg">
      Todas as {totalSteps} etapas para a criação da sua aventura foram
      finalizadas! Abaixo está o seu resumo completo do{' '}
      <strong>Rascunho da Missão</strong>.
    </p>
  ) : (
    <p className="mb-6 font-semibold text-base sm:text-lg">
      Você completou
      <strong className={`text-lg sm:text-xl ${currentColors.progressText}`}>
        {answeredSteps} de {totalSteps}
      </strong>{' '}
      etapas ({progressPercentage}% concluído). Continue respondendo para
      finalizar o seu guia. Abaixo está o seu progresso atual:
    </p>
  );

  return (
    <div className="bg-yellow-100/95 p-3 sm:p-8 border-4 border-yellow-700 rounded-lg shadow-2xl text-gray-900">
      <h2
        className={`text-2xl sm:text-3xl font-bold ${currentColors.title} mb-6 border-b-2 ${currentColors.border} pb-2`}
      >
        {titleText}
      </h2>

      {introMessage}

      <ul className="space-y-6">
        {guideQuestions.map((item, index) => {
          const isAnswered =
            item.userResponse && item.userResponse.trim() !== '';

          return (
            <li
              key={index}
              className={`p-3 rounded-md shadow-md transition duration-300
                ${
                  isAnswered
                    ? `bg-white border-l-4 ${currentColors.itemBorder}`
                    : 'bg-gray-200 border-l-4 border-gray-400 opacity-70'
                }`}
            >
              <strong className="text-gray-800 block mb-2 text-base sm:text-lg">
                Passo {index + 1}: {item.question}
              </strong>

              <div className="text-gray-600 italic font-mono bg-yellow-50 p-3 rounded border border-yellow-200">
                <span
                  className={`font-semibold text-sm ${isAnswered ? currentColors.itemTextAnswered : currentColors.itemTextUnanswered}`}
                >
                  Respostas do Mestre:
                </span>
                <div className="mt-1 prose prose-sm max-w-none text-gray-600">
                  <ReactMarkdown>
                    {item.userResponse ||
                      '*Não respondido. Preencha este campo para avançar.*'}
                  </ReactMarkdown>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { ScenarioDraftSummaryComponent };
