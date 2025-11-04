import { useState } from 'react';
import './chat-window.component.css';
import { MessageList } from '../message-list/message-list.component';
import { SendMessageForm } from '../send-message-form/send-message-form.component';
import type { Message } from '../../types';

const ChatWindow = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Olá! Como posso ajudar?',
      sender: 'bot',
      timestamp: Date.now().toLocaleString(),
    },
    {
      id: '2',
      text: 'Gostaria de saber sobre o plano Pro.',
      sender: 'user',
      timestamp: Date.now().toLocaleString(),
    },
  ]);

  const handleSendMessage = (newMessageText: string) => {
    const newMessage: Message = {
      id: (messages.length + 1).toString(),
      text: newMessageText,
      sender: 'user',
      timestamp: Date.now().toString(),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-window-container">
      <MessageList messages={messages} />
      <SendMessageForm onSendMessage={handleSendMessage} />
    </div>
  );
};

export { ChatWindow };
