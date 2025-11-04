import { useState } from 'react';
import './send-message-form.component.css';
// TIPO: Definimos as props que o componente espera receber
type SendMessageFormProps = {
  onSendMessage: (messageText: string) => void; // Espera uma função que recebe string e não retorna nada
};

// TIPO: Aplicamos a interface de Props ao componente
const SendMessageForm = ({ onSendMessage }: SendMessageFormProps) => {
  // TIPO: useState infere que 'inputText' é string, mas podemos ser explícitos
  const [inputText, setInputText] = useState<string>('');

  // TIPO: Evento de submissão de formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.trim()) {
      onSendMessage(inputText);
      setInputText('');
    }
  };

  // TIPO: Evento de mudança no input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <form className="send-message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite sua mensagem..."
        value={inputText}
        onChange={handleChange}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export { SendMessageForm };
