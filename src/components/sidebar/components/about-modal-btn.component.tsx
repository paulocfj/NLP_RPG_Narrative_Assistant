import { Info } from 'lucide-react';
import { useModalDispatch } from '../../../contexts';

const AboutModalBtn = () => {
  const { openModal } = useModalDispatch();

  const handleClick = () => {
    openModal('ABOUT');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full flex items-center justify-start p-3 rounded-lg
                text-yellow-400 hover:text-yellow-200 transition duration-200
                transform hover:scale-[1.02]"
      aria-label="Abrir informações sobre o projeto"
    >
      <Info className="w-5 h-5 mr-3" />
      <span>Sobre o Projeto</span>
    </button>
  );
};

export { AboutModalBtn };
