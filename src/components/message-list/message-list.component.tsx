import React, { type ForwardedRef } from 'react'; // Importe 'ForwardedRef'
import type { Message } from '../../types';
import { MessageComponent } from '../message/message.component';

type MessageListProps = {
  messages: Message[];
  onSuggestionClick: (text: string) => void;
};

const MessageList = React.forwardRef(
  (
    { messages, onSuggestionClick }: MessageListProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div className="flex-grow p-4 overflow-y-auto flex flex-col space-y-3">
        {messages.map((msg) => (
          <MessageComponent
            key={msg.id}
            message={msg}
            onSuggestionClick={onSuggestionClick}
          />
        ))}
        <div ref={ref} id="scroll-anchor" />
      </div>
    );
  },
);

export { MessageList };
