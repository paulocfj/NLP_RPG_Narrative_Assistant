import type { Message } from '../../types';
import { MessageComponent } from '../message/message.component';

type MessageListProps = {
  messages: Message[];
};

const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-800/80">
      {messages.map((msg) => (
        <MessageComponent key={msg.id} text={msg.text} sender={msg.sender} />
      ))}
      <div id="scroll-anchor" className="h-0" />{' '}
    </div>
  );
};

export { MessageList };
