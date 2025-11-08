import type { Message } from '../../types';

type MessageProps = Pick<Message, 'text' | 'sender'>;
const SENDER_BOT = 'bot';

const MessageComponent = ({ text, sender }: MessageProps) => {
  const isBot = sender === SENDER_BOT;
  const bubbleClasses = isBot
    ? 'bg-gray-700 text-gray-200 rounded-tr-xl rounded-bl-xl border border-gray-600'
    : 'bg-indigo-600 text-white rounded-tl-xl rounded-br-xl shadow-lg';

  const icon = isBot ? '🧙‍♂️' : '🧙';

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div
        className={`flex items-start max-w-xs md:max-w-md lg:max-w-lg p-3 shadow-xl ${
          isBot ? 'mr-auto' : 'ml-auto'
        }`}
      >
        <span
          className={`text-xl mr-2 ${isBot ? 'text-green-400' : 'text-yellow-300'}`}
        >
          {icon}
        </span>
        <div className={`flex-shrink p-4 ${bubbleClasses}`}>
          {/* Usamos dangerouslySetInnerHTML para renderizar o HTML formatado pelo bot */}
          <div
            className="prose prose-sm prose-invert"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export { MessageComponent };
