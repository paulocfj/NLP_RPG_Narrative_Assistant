import React, { type ForwardedRef } from 'react';
import { MessageComponent } from '../message/message.component';
import { useChatState } from '../../contexts';

type MessageListProps = {
  onSuggestionClick: (text: string) => void;
};

const MessageList = React.forwardRef(
  (
    { onSuggestionClick }: MessageListProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const messages = useChatState();

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
