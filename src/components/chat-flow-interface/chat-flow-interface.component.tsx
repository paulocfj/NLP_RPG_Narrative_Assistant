import { useCallback, useEffect, useRef, useState } from 'react';
import { MessageList } from '../message-list/message-list.component';
import { SendMessageForm } from '../send-message-form/send-message-form.component';
import { InitialGuide } from '../../data';
import type { Message } from '../../types';
import { useCompleteGuideState } from '../../contexts/complete-guide';
import { useChatState } from '../../contexts';
import { useChatMessage, useGuide } from '../../hooks';
import { formatBotQuestion, getNextMessageId } from '../../utils';
import { SENDER_BOT, SENDER_USER } from '../../constants';
import { useThemeState } from '../../contexts/theme';

const ChatFlowInterface = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [inputPreFill, setInputPreFill] = useState('');

  const messages = useChatState();
  const { isFinished } = useCompleteGuideState();

  const { addMessage, setMessages } = useChatMessage();
  const { initializeGuide, updateResponse, completeGuide } = useGuide();
  const themeScenario = useThemeState();

  const currentQuestion = InitialGuide[currentQuestionIndex];
  const totalQuestions = InitialGuide.length;

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

  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSuggestionClick = useCallback((text: string) => {
    setInputPreFill(text);
  }, []);

  const handleSendMessage = useCallback(
    (text: string) => {
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
      isFinished,
      currentQuestion,
      addMessage,
      updateResponse,
      currentQuestionIndex,
      themeScenario.activeScenario,
      totalQuestions,
      completeGuide,
    ],
  );

  return (
    <>
      <div className="flex-1 flex flex-col overflow-y-auto">
        <MessageList
          onSuggestionClick={handleSuggestionClick}
          ref={messagesEndRef}
        />
        <div className="pb-4" />
      </div>
      <div className="sticky bottom-0 z-10">
        <SendMessageForm
          onSendMessage={handleSendMessage}
          isDisabled={isFinished}
          preFillText={inputPreFill}
          onInputFilled={() => setInputPreFill('')}
        />
      </div>
    </>
  );
};

export { ChatFlowInterface };
