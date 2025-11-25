import { lazy, Suspense, useEffect, useRef } from 'react';
import { ScenarioDraftSummaryComponent } from '../scenario-draft-summary/scenario-draft-summary.component';
import { useCompleteGuideState } from '../../contexts/complete-guide';
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

  const GeneratedStoryDisplayLazy = lazy(() =>
    import('../generated-history/generated-history-display.component').then(
      (module) => ({
        default: module.GeneratedStoryDisplay,
      }),
    ),
  );

  return (
    <div className="flex flex-col h-full bg-gray-800">
      <header className="p-4 bg-gray-800 shadow-xl sticky top-0 z-10 border-b border-gray-700">
        <div className="mt-3 -mx-4 -mb-4">
          <GuideProgressIndicator />
        </div>
      </header>

      <div className="flex-1 bg-gray-850 flex flex-col overflow-y-auto">
        {!isFinished && <ChatFlowInterface />}

        {isFinished && (
          <>
            <ScenarioDraftSummaryComponent />
            <Suspense
              fallback={
                <div className="p-8 text-center bg-gray-900 text-yellow-400 border-t-8 border-yellow-500">
                  <h2 className="text-xl font-bold animate-pulse">
                    Carregando motor de resultado...
                  </h2>
                </div>
              }
            >
              <GeneratedStoryDisplayLazy isFinished={isFinished} />
            </Suspense>
          </>
        )}
      </div>
    </div>
  );
};

export { ChatWindow };
