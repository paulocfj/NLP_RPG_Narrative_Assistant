import { Send } from 'lucide-react';
import { useEffect, useRef, useState, type FormEvent } from 'react';

type SendMessageFormProps = {
  /**
   * Função chamada ao submeter o formulário com o texto da mensagem.
   */
  onSendMessage: (messageText: string) => void;

  /**
   * Determina se o campo de input e o botão de envio devem estar desabilitados.
   */
  isDisabled: boolean;

  /**
   * Texto opcional para pré-preencher o campo de input (geralmente vindo de sugestões).
   */
  preFillText: string | null;

  /**
   * Função chamada após o envio bem-sucedido de uma mensagem, tipicamente para
   * limpar o estado `preFillText` no componente pai.
   */
  onInputFilled: () => void;
};
const SendMessageForm = ({
  onSendMessage,
  isDisabled,
  onInputFilled,
  preFillText,
}: SendMessageFormProps) => {
  const [inputMessage, setInputMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  // Efeito para preencher o input quando preFillText muda
  useEffect(() => {
    if (preFillText) {
      setInputMessage(preFillText);
      // Foca no input e move o cursor para o final
      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.setSelectionRange(
          preFillText.length,
          preFillText.length,
        );
      }
    }
  }, [preFillText]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      onSendMessage(inputMessage.trim());
      setInputMessage('');
      // Notifica o componente pai que o preenchimento foi usado (para limpar o estado preFillText)
      onInputFilled();
    }
  };

  return (
    <footer className="p-4 border-t border-gray-700 bg-gray-800">
      <form onSubmit={handleSubmit} className="flex space-x-3">
        <input
          ref={inputRef}
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder={
            isDisabled
              ? 'Cenário completo. Comece um novo guia!'
              : 'Digite sua resposta ou clique em uma sugestão...'
          }
          className="flex-grow p-3 border border-gray-600 bg-gray-900 text-gray-100 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150"
          disabled={isDisabled}
        />
        <button
          type="submit"
          className={`p-3 rounded-xl text-white transition duration-200 shadow-lg 
                ${
                  inputMessage.trim() && !isDisabled
                    ? 'bg-yellow-600 hover:bg-yellow-700 text-gray-900 active:scale-95'
                    : 'bg-yellow-800/50 cursor-not-allowed text-gray-400'
                }`}
          disabled={!inputMessage.trim() || isDisabled}
        >
          <Send className="w-6 h-6" />
        </button>
      </form>
    </footer>
  );
};

export { SendMessageForm };
