import type { FC } from 'react';
import type { CompleteGuide } from '../../types';
import ReactMarkdown from 'react-markdown';

type ScenarioDraftSummaryComponentProps = CompleteGuide;

const ScenarioDraftSummaryComponent: FC<ScenarioDraftSummaryComponentProps> = ({
  isFinished,
  guideQuestions,
}) => {
  if (!isFinished) return null;

  return (
    <div className="p-6 bg-yellow-900/10 border-t border-gray-700 text-gray-100">
      <div className="bg-yellow-100/95 p-8 border-4 border-yellow-700 rounded-lg shadow-2xl text-gray-900">
        <h2 className="text-3xl font-bold text-yellow-900 mb-6 border-b-2 border-yellow-900 pb-2">
          📜 Guia de Cenário Concluído
        </h2>
        <p className="mb-6 font-semibold">
          Todas as 9 etapas para a criação da sua aventura foram finalizadas.
          Abaixo está o seu resumo do **Rascunho da Missão**:
        </p>

        <ul className="space-y-6">
          {guideQuestions.map((item, index) => (
            <li
              key={index}
              className="p-4 bg-white rounded-md shadow-md border-l-4 border-yellow-600"
            >
              <strong className="text-gray-800 block mb-2 text-lg">
                Passo {index + 1}: {item.question}
              </strong>
              <div className="text-gray-600 italic font-mono bg-yellow-50 p-3 rounded border border-yellow-200">
                <span className="font-semibold text-sm">
                  Respostas do Mestre:
                </span>
                <div className="mt-1 prose prose-sm max-w-none text-gray-600">
                  <ReactMarkdown>
                    {item.userResponse || '*Não respondido.*'}
                  </ReactMarkdown>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { ScenarioDraftSummaryComponent };
