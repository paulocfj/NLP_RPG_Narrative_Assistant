import { useCallback, useEffect, useRef, useState } from 'react';
import { MessageList } from '../message-list/message-list.component';
import { SendMessageForm } from '../send-message-form/send-message-form.component';
import { InitialGuide } from '../../data';
import type { Message } from '../../types';
import { ScenarioDraftSummaryComponent } from '../scenario-draft-summary/scenario-draft-summary.component';
import { useCompleteGuideState } from '../../contexts/complete-guide';
import { useChatState } from '../../contexts';
import { useChatMessage, useGuide } from '../../hooks';
import { formatBotQuestion } from '../../utils';

let messageIdCounter = 0;
const getNextMessageId = () => messageIdCounter++;
const SENDER_BOT = 'bot';
const SENDER_USER = 'user';

const ChatWindow = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [inputPreFill, setInputPreFill] = useState('');
  const messages = useChatState();
  const scenarioDraft = useCompleteGuideState();
  const { addMessage, setMessages } = useChatMessage();
  const { initializeGuide, updateResponse } = useGuide();

  const currentQuestion = InitialGuide[currentQuestionIndex];
  const totalQuestions = InitialGuide.length;
  const progressText = `Passo ${currentQuestionIndex + 1} de ${totalQuestions}`;
  // Efeito para iniciar o chat com a primeira pergunta
  useEffect(() => {
    if (messages.length > 0) return;

    initializeGuide(InitialGuide);

    const initialMessage: Message = {
      id: getNextMessageId(),
      text: `<strong>Saudações, Mestre!</strong> Seja bem-vindo ao seu Guia de Cenário RPG. Vamos criar uma aventura épica OneShot em ${totalQuestions} passos!`,
      sender: SENDER_BOT,
      timestamp: new Date().toLocaleString('pt-BR'),
      isStatus: true,
    };

    const firstQuestionData = formatBotQuestion(0);
    const firstQuestion: Message = {
      id: getNextMessageId(),
      text: firstQuestionData.text,
      suggestions: firstQuestionData.suggestions,
      sender: SENDER_BOT,
      timestamp: new Date().toLocaleString('pt-BR'),
      isStatus: false,
    };

    setMessages([initialMessage, firstQuestion]);
  }, [initializeGuide, messages.length, setMessages, totalQuestions]);

  // Efeito para rolar o chat para baixo
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Função para preencher o input com o texto da sugestão clicada
  const handleSuggestionClick = useCallback((text: string) => {
    setInputPreFill(text);
  }, []);

  // Função principal para lidar com o envio de mensagens do usuário
  const handleSendMessage = useCallback(
    (text: string) => {
      if (isFinished || !currentQuestion) return;

      // Limpa o preenchimento automático após o envio
      setInputPreFill('');

      // Cria a mensagem base do usuário
      const userMessage: Message = {
        id: getNextMessageId(),
        text: text,
        sender: SENDER_USER,
        timestamp: new Date().toLocaleString('pt-BR'),
        isStatus: false,
      };

      //setMessages((prev) => [...prev, userMessage]);
      addMessage(userMessage);

      // 1. Armazena a resposta no rascunho
      updateResponse(currentQuestion.question, text);

      const nextQuestionIndex = currentQuestionIndex + 1;
      const isLastQuestion = nextQuestionIndex >= InitialGuide.length;

      // 2. Verifica se o fluxo terminou
      if (isLastQuestion) {
        setIsFinished(true);

        const finalMessage: Message = {
          id: getNextMessageId(),
          text: `<strong>MISSÃO CUMPRIDA!</strong> Todas as ${totalQuestions} etapas foram concluídas com sucesso. Role a tela para baixo para revisar o seu Guia de Aventura final!`,
          sender: SENDER_BOT,
          timestamp: new Date().toLocaleString('pt-BR'),
          isStatus: true,
        };

        //setMessages((prev) => [...prev, finalMessage]);
        addMessage(finalMessage);
        return;
      }

      // 3. Prepara e envia a próxima pergunta
      const nextQuestionData = formatBotQuestion(nextQuestionIndex);
      const botQuestionMessage: Message = {
        id: getNextMessageId(),
        text: nextQuestionData.text,
        suggestions: nextQuestionData.suggestions, // Propriedade extendida
        sender: SENDER_BOT,
        timestamp: new Date().toLocaleString('pt-BR'),
        isStatus: false,
      };

      // 4. Atualiza o estado
      setCurrentQuestionIndex(nextQuestionIndex);
      //setMessages((prev) => [...prev, botQuestionMessage]);
      addMessage(botQuestionMessage);
    },
    [
      isFinished,
      currentQuestion,
      addMessage,
      updateResponse,
      currentQuestionIndex,
      totalQuestions,
    ],
  );

  return (
    <div className="flex flex-col h-full bg-gray-800">
      {/* Cabeçalho de Status */}
      <header className="p-4 bg-gray-900 text-white shadow-2xl sticky top-0 z-10 border-b border-indigo-700">
        <h1 className="text-3xl font-bold text-yellow-400">
          Guia de Cenário RPG
        </h1>
        <p
          className={`text-sm mt-1 font-mono ${isFinished ? 'text-green-400' : 'text-indigo-400'}`}
        >
          {isFinished ? 'Status: Aventura Completa' : `Status: ${progressText}`}
        </p>
      </header>

      {/* Área de Mensagens e Rascunho */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <MessageList
          onSuggestionClick={handleSuggestionClick}
          ref={messagesEndRef}
        />
        <ScenarioDraftSummaryComponent
          isFinished={isFinished}
          scenarioDraft={scenarioDraft}
        />
      </div>

      {/* Formulário de Envio */}
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
