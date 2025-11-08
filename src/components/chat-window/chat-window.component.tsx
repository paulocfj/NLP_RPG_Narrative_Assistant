import { useCallback, useEffect, useRef, useState } from 'react';
import { MessageList } from '../message-list/message-list.component';
import { SendMessageForm } from '../send-message-form/send-message-form.component';
import { InitialGuide, MedievalTheme } from '../../data';
import type { CompleteGuide, Message, NpcChallenge } from '../../types';
import { ScenarioDraftSummaryComponent } from '../scenario-draft-summary/scenario-draft-summary.component';

let messageIdCounter = 0;
const getNextMessageId = () => messageIdCounter++;
const SENDER_BOT = 'bot';
const SENDER_USER = 'user';

const ChatWindow = () => {
  // Nota: O estado 'messages' armazena o tipo Message + as propriedades extendidas (suggestions, isStatus)
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scenarioDraft, setScenarioDraft] = useState<CompleteGuide>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [inputPreFill, setInputPreFill] = useState('');

  const currentQuestion = InitialGuide[currentQuestionIndex];
  const totalQuestions = InitialGuide.length;
  const progressText = `Passo ${currentQuestionIndex + 1} de ${totalQuestions}`;

  /**
   * Normaliza um item de sugestão para uma string.
   * Se for NpcChallenge, extrai o texto do desafio e remove o que estiver entre colchetes.
   * @param item O item da sugestão, que pode ser string ou NpcChallenge.
   * @returns A sugestão como string.
   */
  function normalizeSuggestion(item: string | NpcChallenge): string {
    if (typeof item === 'string') {
      return item;
    }

    if (item && typeof item === 'object' && 'challenge' in item) {
      // Caso NpcChallenge: Extrai o texto do desafio e remove o conteúdo entre colchetes
      return item.challenge.replace(/\[[^\]]+\]/g, '').trim();
    }

    // Retorna uma string vazia como fallback seguro
    return '';
  }

  // Função que retorna o texto e a lista de sugestões separadamente.
  const formatBotQuestion = useCallback((questionIndex: number) => {
    const questionData = InitialGuide[questionIndex];
    if (!questionData) return { text: '', suggestions: undefined };

    const questionText = `<strong>${questionData.question}</strong>`;
    const scenarioSection = MedievalTheme[4].themeSuggestions.find(
      (s) => s.id === questionData.id,
    );

    const rawSuggestions = scenarioSection?.suggestion || [];

    // 1. Mapeia o array de sugestões (que pode ser string[] | NpcChallenge[])
    // 2. Chama normalizeSuggestion para cada item, garantindo que o resultado seja string.
    const suggestions: string[] = rawSuggestions
      .map(normalizeSuggestion)
      .slice(0, 3)
      .filter((text) => text.length > 0); // Opcional: Remove sugestões vazias após a normalização
    return {
      text: questionText,
      suggestions: suggestions ?? [],
    };
  }, []);

  // Efeito para iniciar o chat com a primeira pergunta
  useEffect(() => {
    if (messages.length > 0) return;

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
      suggestions: firstQuestionData.suggestions, // Propriedade extendida
      sender: SENDER_BOT,
      timestamp: new Date().toLocaleString('pt-BR'),
      isStatus: false,
    };

    setMessages([initialMessage, firstQuestion]);
  }, [formatBotQuestion, messages.length, totalQuestions]);

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
          text: `<strong>MISSÃO CUMPRIDA!</strong> Todas as ${totalQuestions} etapas foram concluídas com sucesso. Role a tela para baixo para revisar o seu Guia de Aventura final!`,
          sender: SENDER_BOT,
          timestamp: new Date().toLocaleString('pt-BR'),
          isStatus: true,
        };

        setMessages((prev) => [...prev, finalMessage]);
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
      setMessages((prev) => [...prev, botQuestionMessage]);
    },
    [
      currentQuestionIndex,
      isFinished,
      currentQuestion,
      formatBotQuestion,
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
          messages={messages}
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
