import type { Message } from '../../types';
import './message.component.css';

// TIPO: Podemos "reaproveitar" partes da interface Message
// Aqui, dizemos que as props são o 'text' e o 'sender' da nossa interface Message
type MessageProps = Pick<Message, 'text' | 'sender'>;

const MessageComponent = ({ text, sender }: MessageProps) => {
  // Lógica para aplicar classes diferentes
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
