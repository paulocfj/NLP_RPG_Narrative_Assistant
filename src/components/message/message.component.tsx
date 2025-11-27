import { ScrollText } from 'lucide-react';
import type { Message } from '../../types';
import ReactMarkdown from 'react-markdown';
import { SENDER_USER } from '../../constants';
import { SuggestionItem } from '../suggestion/suggestion.item.component';

type MessageProps = {
  message: Message;
  onSuggestionClick: (text: string) => void;
};

const MessageComponent = ({ message, onSuggestionClick }: MessageProps) => {
  const isUser = message.sender === SENDER_USER;
  if (message.isStatus && !isUser) {
    return (
      <div className="flex max-w-[90%] my-2 justify-center">
        <div className="p-3 rounded-xl shadow-md bg-amber-900/40 text-amber-100 flex items-center">
          <ScrollText className="w-5 h-5 mr-2" />
          <p className="whitespace-pre-wrap font-medium">{message.text}</p>
        </div>
      </div>
    );
  }

  const bubbleClasses = isUser
    ? 'bg-indigo-600 text-white rounded-tl-xl rounded-br-xl shadow-lg border border-indigo-700'
    : 'bg-gray-700 text-gray-200 rounded-tr-xl rounded-bl-xl border border-gray-600';

  const icon = isUser ? '🧙' : '🧙‍♂️';
  const hasSuggestions = message.suggestions && message.suggestions.length > 0;

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`flex items-start max-w-xs md:max-w-md lg:max-w-lg shadow-xl ${
          isUser ? 'ml-auto' : 'mr-auto'
        }`}
      >
        <span
          className={`text-xl mr-2 ${isUser ? 'text-yellow-300' : 'text-green-400'}`}
        >
          {icon}
        </span>
        <div className={`flex-shrink ${bubbleClasses}`}>
          <div className="p-4 prose prose-sm prose-invert">
            <ReactMarkdown>{message.text}</ReactMarkdown>
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
