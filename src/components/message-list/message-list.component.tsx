import type { Message } from '../../types';
import { MessageComponent } from '../message/message.component';
import './message-list.component.css';

type MessageListProps = {
  messages: Message[];
};

const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div className="message-list-container">
      {messages.map((msg) => (
        <MessageComponent key={msg.id} text={msg.text} sender={msg.sender} />
      ))}
    </div>
  );
};

export { MessageList };
