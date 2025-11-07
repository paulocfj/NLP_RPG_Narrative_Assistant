import type { Message } from '../../types';
import './message.component.css';

type MessageProps = Pick<Message, 'text' | 'sender'>;

const MessageComponent = ({ text, sender }: MessageProps) => {
  const bubbleClass =
    sender === 'bot'
      ? 'message-bubble bot-bubble'
      : 'message-bubble user-bubble';

  return (
    <div className={bubbleClass}>
      <p>{text}</p>
    </div>
  );
};

export { MessageComponent };
