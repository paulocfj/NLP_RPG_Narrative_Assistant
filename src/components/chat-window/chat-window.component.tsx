import { useCallback, useEffect, useState } from 'react';
import { MessageList } from '../message-list/message-list.component';
import { SendMessageForm } from '../send-message-form/send-message-form.component';
import { InitialGuide, MedievalTheme } from '../../data';
import type { CompleteGuide, Message } from '../../types';
import { ScenarioDraftSummaryComponent } from '../scenario-draft-summary/scenario-draft-summary.component';

let messageIdCounter = 0;
const getNextMessageId = () => messageIdCounter++;
const SENDER_BOT = 'bot';
const SENDER_USER = 'user';

const ChatWindow = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scenarioDraft, setScenarioDraft] = useState<CompleteGuide>([]);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = InitialGuide[currentQuestionIndex];
  const totalQuestions = InitialGuide.length;
  const progressText = `Passo ${currentQuestionIndex + 1} de ${totalQuestions}`;

  // Função que formata a pergunta do bot com as 3 sugestões do cenário
  const formatBotQuestion = useCallback((questionIndex: number): string => {
    const questionData = InitialGuide[questionIndex];
    if (!questionData) return '';

    const questionText = questionData.question;
    const scenarioSection = MedievalTheme[4].themeSuggestions.find(
      (s) => s.id === questionData.id,
    );

    // Se não houver sugestões, mostra apenas a pergunta
    if (!scenarioSection || scenarioSection.suggestion.length === 0) {
      return `<strong>${questionText}</strong><br><br>Sem sugestões disponíveis.`;
    }

    const suggestions = scenarioSection.suggestion.slice(0, 3);
    let suggestionsHtml = '<ul class="list-none ml-0 mt-3 space-y-2 text-sm">';

    suggestions.forEach((item, index) => {
      let text = '';
      const itemAsObj = item;

      if (typeof itemAsObj === 'string') {
        text = itemAsObj;
      } else if (
        itemAsObj &&
        typeof itemAsObj === 'object' &&
        'challenge' in itemAsObj
      ) {
        // Caso especial para sugestões estruturadas (Pergunta 7)
        text = itemAsObj.challenge.replace(/\[[^\]]+\]/g, '').trim();
      }

      // Estilo temático para as sugestões
      suggestionsHtml += `<li class="p-2 border border-gray-600 rounded-md bg-gray-800 hover:bg-gray-700 transition duration-150 cursor-pointer">
                            <span class="font-bold text-yellow-500">${index + 1}.</span> ${text}
                            </li>`;
    });
    suggestionsHtml += '</ul>';

    return `<strong>${questionText}</strong><br><br>Escolha uma das sugestões abaixo (ou digite a sua própria resposta).<br>${suggestionsHtml}`;
  }, []);

  // Efeito para iniciar o chat com a primeira pergunta
  useEffect(() => {
    // Evita rodar duas vezes no React.StrictMode
    if (messages.length > 0) return;

    const initialMessage: Message = {
      id: getNextMessageId(),
      text: `<strong>Saudações, Mestre!</strong> Seja bem-vindo ao seu Guia de Cenário RPG. Vamos criar uma aventura épica OneShot em 9 passos!`,
      sender: SENDER_BOT,
      timestamp: Date.now().toLocaleString('pr-BR'),
    };

    const firstQuestion: Message = {
      id: getNextMessageId(),
      text: formatBotQuestion(0),
      sender: SENDER_BOT,
      timestamp: Date.now().toLocaleString('pr-BR'),
    };

    setMessages([initialMessage, firstQuestion]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Dependência vazia, roda apenas na montagem

  // Efeito para rolar o chat para baixo
  useEffect(() => {
    const anchor = document.getElementById('scroll-anchor');
    if (anchor) {
      // Pequeno timeout para garantir que o DOM foi atualizado
      setTimeout(() => {
        anchor.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [messages]);

  // Função principal para lidar com o envio de mensagens do usuário
  const handleSendMessage = useCallback(
    (text: string) => {
      if (isFinished || !currentQuestion) return;

      const userMessage: Message = {
        id: getNextMessageId(),
        text: text,
        sender: SENDER_USER,
        timestamp: Date.now().toLocaleString('pt-BR'),
      };

      setMessages((prev) => [...prev, userMessage]);

      // 1. Armazena a resposta no rascunho
      setScenarioDraft((prev) => [
        ...prev,
        {
          question: currentQuestion.question,
          userResponse: text,
        },
      ]);

      const nextQuestionIndex = currentQuestionIndex + 1;
      const isLastQuestion = nextQuestionIndex >= InitialGuide.length;

      // 2. Verifica se o fluxo terminou
      if (isLastQuestion) {
        setIsFinished(true);

        const finalMessage: Message = {
          id: getNextMessageId(),
          text: `<strong>MISSÃO CUMPRIDA!</strong> Todas as 9 etapas foram concluídas com sucesso. Role a tela para baixo para revisar o seu Guia de Aventura final!`,
          sender: SENDER_BOT,
          timestamp: Date.now().toLocaleString('pt-BR'),
        };

        setMessages((prev) => [...prev, finalMessage]);
        return;
      }

      // 3. Prepara e envia a próxima pergunta
      const botQuestionMessage: Message = {
        id: getNextMessageId(),
        text: formatBotQuestion(nextQuestionIndex),
        sender: SENDER_BOT,
        timestamp: Date.now().toLocaleString('pt-BR'),
      };

      // 4. Atualiza o estado
      setCurrentQuestionIndex(nextQuestionIndex);
      setMessages((prev) => [...prev, botQuestionMessage]);
    },
    [currentQuestionIndex, formatBotQuestion, isFinished, currentQuestion],
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
        <MessageList messages={messages} />
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
        />
      </div>
    </div>
  );
};

export { ChatWindow };
