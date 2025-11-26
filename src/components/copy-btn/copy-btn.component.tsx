import { useState, useCallback } from 'react';
import { Scroll, ClipboardCheck, XOctagon } from 'lucide-react';
/**
 * @interface CopyButtonProps
 * @description Props for the CopyButton component.
 */
type CopyButtonProps = {
  /**
   * @property {string} textToCopy - The content string that will be copied to the clipboard.
   * This is a required property and should contain the generated content (e.g., story).
   */
  textToCopy: string;

  /**
   * @property {string} [buttonText] - The default text displayed on the button before copying.
   * Defaults to 'Copiar'.
   */
  buttonText?: string;

  /**
   * @property {string} [className] - Optional Tailwind CSS classes to apply custom styling
   * or spacing to the button component container.
   */
  className?: string;
};

/**
 * @component CopyButton
 * @description A reusable button component to copy a given text string to the user's clipboard,
 * providing visual feedback upon successful copy.
 *
 * It uses the modern navigator.clipboard.writeText() API and supports RPG-themed icons.
 *
 * @param {CopyButtonProps} props - The props object.
 * @returns The CopyButton component.
 */
const CopyButton = ({
  textToCopy,
  buttonText = 'Copiar',
  className = '',
}: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const [copyError, setCopyError] = useState<string | null>(null);

  const isDisabled = !textToCopy || isCopied || !!copyError;

  /**
   * @function handleCopy
   * @description Handles the clipboard copy action. Copies 'textToCopy' to the clipboard,
   * sets the 'isCopied' state to true, and resets it after 3 seconds.
   */
  const handleCopy = useCallback(async () => {
    const resetTimeAfter3Seconds = 3000;
    const resetTimeErrorAfter5Seconds = 5000;
    setCopyError(null);

    if (textToCopy) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        setIsCopied(true);

        setTimeout(() => {
          setIsCopied(false);
        }, resetTimeAfter3Seconds);
      } catch (err) {
        console.error('Failed to copy text: ', err);
        setCopyError('Falha de permissão.');

        setTimeout(() => {
          setCopyError(null);
        }, resetTimeErrorAfter5Seconds);
      }
    }
  }, [textToCopy]);

  let Icon = Scroll;
  let displayButtonText = buttonText;

  if (copyError) {
    Icon = XOctagon;
    displayButtonText = 'Erro de Cópia';
  } else if (isCopied) {
    Icon = ClipboardCheck;
    displayButtonText = 'Copiado!';
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`
        px-6 py-2 rounded-lg font-bold transition-colors duration-200 flex items-center gap-2 shadow-lg font-extrabold

        ${isDisabled ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}

        ${
          copyError
            ? 'bg-red-700 text-white'
            : isCopied
              ? 'text-gray-500 bg-gray-700/30 cursor-not-allowed'
              : 'bg-yellow-800/80 hover:bg-yellow-900 text-yellow-400 cursor-pointer'
        }
        ${className}
      `}
      disabled={isDisabled}
    >
      <Icon size={20} />
      <span className="font-semibold">{displayButtonText}</span>
    </button>
  );
};

export { CopyButton };
