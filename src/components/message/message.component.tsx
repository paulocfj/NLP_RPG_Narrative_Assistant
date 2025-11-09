import { Zap } from 'lucide-react';
import type { Message } from '../../types';

type MessageProps = {
  message: Message;
  onSuggestionClick: (text: string) => void;
};
//const SENDER_BOT = 'bot';
const SENDER_USER = 'user';

type SuggestionItemProps = {
  text: string;
  onClick: () => void;
};

const SuggestionItem = ({ text, onClick }: SuggestionItemProps) => (
  <li
    onClick={onClick}
    className="p-2 border border-gray-600 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-150 cursor-pointer text-sm font-medium shadow-inner"
  >
    <span className="font-bold text-yellow-500 mr-2">➜</span> {text}
  </li>
);

const MessageComponent = ({ message, onSuggestionClick }: MessageProps) => {
  // message é o objeto Message base
  const isUser = message.sender === SENDER_USER;

  // Se for uma mensagem de status/introdução do BOT (e não do USER)
  if (message.isStatus && !isUser) {
    return (
      <div className="flex max-w-[90%] my-2 justify-center">
        <div className="p-3 rounded-xl shadow-md bg-green-800 text-green-100 flex items-center">
          <Zap className="w-5 h-5 mr-2" />
          <p className="whitespace-pre-wrap font-medium">{message.text}</p>
        </div>
      </div>
    );
  }

  // Classes e ícones baseados no componente fornecido pelo usuário
  const bubbleClasses = isUser
    ? 'bg-indigo-600 text-white rounded-tl-xl rounded-br-xl shadow-lg border border-indigo-700'
    : 'bg-gray-700 text-gray-200 rounded-tr-xl rounded-bl-xl border border-gray-600';

  // Ícones de emoji para Mago/Usuário e Mago/Bot
  const icon = isUser ? '🧙' : '🧙‍♂️';

  // Verifica a propriedade 'suggestions' recebida por prop
  const hasSuggestions = message.suggestions && message.suggestions.length > 0;

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`flex items-start max-w-xs md:max-w-md lg:max-w-lg shadow-xl ${
          isUser ? 'ml-auto' : 'mr-auto'
        }`}
      >
        {/* Ícone de Emoji */}
        <span
          className={`text-xl mr-2 ${isUser ? 'text-yellow-300' : 'text-green-400'}`}
        >
          {icon}
        </span>

        {/* Bolha da Mensagem */}
        <div className={`flex-shrink ${bubbleClasses}`}>
          <div className="p-4 prose prose-sm prose-invert">
            {/* Renderiza o texto principal (pergunta/resposta) - message.text é string */}
            <div dangerouslySetInnerHTML={{ __html: message.text }} />

            {/* Renderiza as sugestões clicáveis se houver */}
            {hasSuggestions && (
              <div className="mt-4 pt-3 border-t border-gray-600 w-full">
                <p className="text-gray-300 mb-2 text-xs font-normal">
                  Escolha uma sugestão (ou digite a sua própria resposta):
                </p>
                <ul className="list-none ml-0 space-y-2">
                  {message?.suggestions?.map((text, index) => (
                    <SuggestionItem
                      key={index}
                      text={text}
                      onClick={() => onSuggestionClick(text)}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { MessageComponent };
