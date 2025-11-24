import { useCallback, useEffect, useRef, useState } from 'react';
import { MessageList } from '../message-list/message-list.component';
import { SendMessageForm } from '../send-message-form/send-message-form.component';
import { InitialGuide } from '../../data';
import type { Message } from '../../types';
import { ScenarioDraftSummaryComponent } from '../scenario-draft-summary/scenario-draft-summary.component';
import { useCompleteGuideState } from '../../contexts/complete-guide';
import { useChatState } from '../../contexts';
import { useChatMessage, useGuide } from '../../hooks';
import { formatBotQuestion, getNextMessageId } from '../../utils';
import { SENDER_BOT, SENDER_USER } from '../../constants';
import { useThemeState } from '../../contexts/theme';
import { GeneratedStoryDisplay } from '../generated-history/generated-history-display.component';
import { GuideProgressIndicator } from '../guide-progress-indicator/guide-progress-indicator.component';

const ChatWindow = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [inputPreFill, setInputPreFill] = useState('');

  const messages = useChatState();

  // 💡 ACESSANDO ESTADO GLOBAL: isFinished e o rascunho (guideQuestions)
  const { isFinished, guideQuestions } = useCompleteGuideState();

  const { addMessage, setMessages } = useChatMessage();

  // 💡 USANDO A FUNÇÃO GLOBAL completeGuide
  const { initializeGuide, updateResponse, completeGuide } = useGuide();

  const themeScenario = useThemeState();

  const currentQuestion = InitialGuide[currentQuestionIndex];
  const totalQuestions = InitialGuide.length;

  // Efeito para iniciar o chat (Lógica de inicialização mantida)
  useEffect(() => {
    if (messages.length > 0) return;

    initializeGuide(InitialGuide);

    const initialMessage: Message = {
      id: getNextMessageId(),
      text: `Saudações, Mestre 🧙!\nSeja bem-vindo ao seu Guia de Cenário RPG. Vamos criar uma aventura épica OneShot em ${totalQuestions} passos!`,
      sender: SENDER_BOT,
      timestamp: new Date().toLocaleString('pt-BR'),
      isStatus: true,
    };

    const firstQuestionData = formatBotQuestion(
      0,
      themeScenario.activeScenario,
    );
    const firstQuestion: Message = {
      id: getNextMessageId(),
      text: firstQuestionData.text,
      suggestions: firstQuestionData.suggestions,
      sender: SENDER_BOT,
      timestamp: new Date().toLocaleString('pt-BR'),
      isStatus: false,
    };

    setMessages([initialMessage, firstQuestion]);
  }, [
    initializeGuide,
    messages.length,
    setMessages,
    themeScenario.activeScenario,
    totalQuestions,
  ]);

  // Efeito para rolar o chat para baixo
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // ✅ Rolagem disparada sempre que as mensagens mudam.
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Função para preencher o input (inalterada)
  const handleSuggestionClick = useCallback((text: string) => {
    setInputPreFill(text);
  }, []);

  // Função principal para envio
  const handleSendMessage = useCallback(
    (text: string) => {
      // isFinished agora vem do estado global (useCompleteGuideState)
      if (isFinished || !currentQuestion) return;

      setInputPreFill('');

      const userMessage: Message = {
        id: getNextMessageId(),
        text: text,
        sender: SENDER_USER,
        timestamp: new Date().toLocaleString('pt-BR'),
        isStatus: false,
      };

      addMessage(userMessage);

      updateResponse(currentQuestion.question, text);

      const nextQuestionIndex = currentQuestionIndex + 1;
      const isLastQuestion = nextQuestionIndex >= InitialGuide.length;

      if (isLastQuestion) {
        // 💡 CHAMA A FUNÇÃO GLOBAL
        completeGuide();

        const finalMessage: Message = {
          id: getNextMessageId(),
          text: `**MISSÃO CUMPRIDA!**\n Todas as ${totalQuestions} etapas foram concluídas com sucesso. Role a tela para baixo para revisar o seu Guia de Aventura final!`,
          sender: SENDER_BOT,
          timestamp: new Date().toLocaleString('pt-BR'),
          isStatus: true,
        };

        addMessage(finalMessage);
        return;
      }

      const nextQuestionData = formatBotQuestion(
        nextQuestionIndex,
        themeScenario.activeScenario,
      );
      const botQuestionMessage: Message = {
        id: getNextMessageId(),
        text: nextQuestionData.text,
        suggestions: nextQuestionData.suggestions,
        sender: SENDER_BOT,
        timestamp: new Date().toLocaleString('pt-BR'),
        isStatus: false,
      };

      setCurrentQuestionIndex(nextQuestionIndex);
      addMessage(botQuestionMessage);
    },
    [
      isFinished, // Global
      currentQuestion,
      addMessage,
      updateResponse,
      currentQuestionIndex,
      themeScenario.activeScenario,
      totalQuestions,
      completeGuide, // Global
    ],
  );

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
        {!isFinished && (
          <MessageList
            onSuggestionClick={handleSuggestionClick}
            ref={messagesEndRef} // ✅ Passa a ref para o MessageList (âncora interna)
          />
        )}

        {/* 💡 Exibe a Seção de Resultados APENAS QUANDO FINALIZADO */}
        {isFinished && (
          <>
            <ScenarioDraftSummaryComponent
              // 💡 Passando o array de perguntas (guideQuestions)
              guideQuestions={guideQuestions}
              isFinished={isFinished}
            />
            <GeneratedStoryDisplay isFinished={isFinished} />
            {/* 🛑 Se estiver FINALIZADO, o MessageList não está mais aqui. 
                             Devemos colocar a âncora aqui para rolar para o final do conteúdo de resultado. */}
            <div ref={messagesEndRef} />
          </>
        )}

        {/* 🛑 REMOVIDO: A div de âncora duplicada {!isFinished && <div ref={messagesEndRef} />} */}
      </div>

      {/* Formulário de Envio (Não Mudou) */}
      <div className="sticky bottom-0 z-10">
        <SendMessageForm
          onSendMessage={handleSendMessage}
          isDisabled={isFinished}
          preFillText={inputPreFill}
          onInputFilled={() => setInputPreFill('')}
        />
      </div>
    </div>
  );
};

export { ChatWindow };
