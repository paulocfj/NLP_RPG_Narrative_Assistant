import { useState } from 'react';

type SendMessageFormProps = {
  onSendMessage: (messageText: string) => void;
  isDisabled: boolean;
};
const SendMessageForm = ({
  onSendMessage,
  isDisabled,
}: SendMessageFormProps) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() && !isDisabled) {
      onSendMessage(inputText);
      setInputText('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <form
      className="p-4 bg-gray-900 border-t border-gray-700 flex shadow-inner"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder={
          isDisabled
            ? 'A missão está completa! Revise o Guia...'
            : 'Responda ao Guia ou escolha uma sugestão...'
        }
        value={inputText}
        onChange={handleChange}
        disabled={isDisabled}
        className="flex-1 p-3 border-2 border-gray-600 bg-gray-700 text-gray-100 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 disabled:bg-gray-800 disabled:text-gray-500 placeholder:text-gray-500"
      />
      <button
        type="submit"
        disabled={isDisabled || !inputText.trim()}
        className="px-6 py-3 bg-yellow-600 text-gray-900 font-extrabold rounded-r-lg hover:bg-yellow-500 transition duration-150 disabled:bg-gray-500 disabled:text-gray-700"
      >
        Enviar
      </button>
    </form>
  );
};

export { SendMessageForm };
