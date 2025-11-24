import { useEffect, useRef } from 'react';
import { ScenarioDraftSummaryComponent } from '../scenario-draft-summary/scenario-draft-summary.component';
import { useCompleteGuideState } from '../../contexts/complete-guide';
import { GeneratedStoryDisplay } from '../generated-history/generated-history-display.component';
import { GuideProgressIndicator } from '../guide-progress-indicator/guide-progress-indicator.component';
import { ChatFlowInterface } from '../chat-flow-interface/chat-flow-interface.component';

const ChatWindow = () => {
  const { isFinished } = useCompleteGuideState();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFinished) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isFinished]);

  return (
    <div className="flex flex-col h-full bg-gray-800">
      {/* Cabeçalho de Status */}
      <header className="p-4 bg-gray-900 text-white shadow-2xl sticky top-0 z-10 border-b border-indigo-700">
        <h1 className="text-3xl font-bold text-yellow-400">
          Guia de Cenário RPG
        </h1>
        <div className="mt-3 -mx-4 -mb-4">
          <GuideProgressIndicator />
        </div>
      </header>

      {/* Área de Mensagens e Rascunho */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* ✅ Renderiza o MessageList APENAS se não estiver finalizado */}
        {!isFinished && <ChatFlowInterface />}

        {/* 💡 Exibe a Seção de Resultados APENAS QUANDO FINALIZADO */}
        {isFinished && (
          <>
            <ScenarioDraftSummaryComponent />
            <GeneratedStoryDisplay isFinished={isFinished} />
            {/* 🛑 Se estiver FINALIZADO, o MessageList não está mais aqui.
                             Devemos colocar a âncora aqui para rolar para o final do conteúdo de resultado. */}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>
    </div>
  );
};

export { ChatWindow };
