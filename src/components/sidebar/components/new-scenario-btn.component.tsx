import { Zap } from 'lucide-react';
import { useChatMessage, useGuide } from '../../../hooks';

const NewScenarioBtn = () => {
  const { clearMessages } = useChatMessage();
  const { resetGuide } = useGuide();

  const handleNewCampaign = () => {
    clearMessages();
    resetGuide();
    console.log('Iniciando Nova Campanha...');
  };

  return (
    <button
      type="button"
      className="flex items-center w-full text-left p-3 rounded-lg bg-indigo-700/50 hover:bg-indigo-700 transition duration-200 cursor-pointer text-white"
      onClick={handleNewCampaign}
      title="Iniciar uma nova aventura e zerar o guia atual."
    >
      <Zap className="w-5 h-5 mr-3 text-indigo-300" />
      <span className="font-semibold">Nova Campanha</span>
    </button>
  );
};

export { NewScenarioBtn };
