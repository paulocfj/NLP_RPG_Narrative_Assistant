import { Send } from 'lucide-react';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { sanitizeAndLimitInput } from '../../utils';
import { MAX_LENGTH } from '../../constants';

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

const useAutosizeTextarea = (
  textareaRef: React.RefObject<HTMLTextAreaElement | null>,
  value: string,
) => {
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;

      const maxHeight = 200;
      textareaRef.current.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
    }
  }, [textareaRef, value]);
};

const SendMessageForm = ({
  onSendMessage,
  isDisabled,
  onInputFilled,
  preFillText,
}: SendMessageFormProps) => {
  const [inputMessage, setInputMessage] = useState('');
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useAutosizeTextarea(inputRef, inputMessage);

  useEffect(() => {
    if (preFillText) {
      const limitedAndSanitizedText = sanitizeAndLimitInput(preFillText);

      setInputMessage(limitedAndSanitizedText);

      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.setSelectionRange(
          limitedAndSanitizedText.length,
          limitedAndSanitizedText.length,
        );
      }
    }
  }, [preFillText]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (value.length <= MAX_LENGTH) {
      const safeValue = sanitizeAndLimitInput(value);
      setInputMessage(safeValue);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const messageToSend = inputMessage.trim();

    if (messageToSend) {
      onSendMessage(messageToSend);
      setInputMessage('');
      onInputFilled();
    }
  };

  return (
    <footer className="p-4 border-t border-gray-700 bg-gray-800">
      <form onSubmit={handleSubmit} className="flex items-center space-x-3">
        <div className="flex-grow relative">
          <textarea
            ref={inputRef}
            rows={1}
            value={inputMessage}
            onChange={handleInputChange}
            placeholder={
              isDisabled
                ? `Cenário completo. Comece um novo guia! (Max ${MAX_LENGTH} caracteres)`
                : `Digite sua resposta ou clique em uma sugestão... (Max ${MAX_LENGTH} caracteres)`
            }
            maxLength={MAX_LENGTH}
            className="w-full resize-none pt-3 pb-8 pl-3 pr-12 border border-gray-600 bg-gray-900 text-gray-100 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150 overflow-hidden"
            disabled={isDisabled}
            style={{ minHeight: '52px' }}
          />

          <div className="absolute bottom-2 right-3 text-xs">
            <span
              className={`font-mono ${inputMessage.length === MAX_LENGTH ? 'text-red-400 font-medium' : 'text-yellow-400'}`}
            >
              {inputMessage.length}/{MAX_LENGTH}
            </span>
          </div>
        </div>

        <button
          type="submit"
          className={`p-3 rounded-xl text-white transition duration-200 shadow-lg h-[52px] shrink-0
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
