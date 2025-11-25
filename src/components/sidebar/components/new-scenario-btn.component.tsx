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
      className="flex items-center w-full text-left p-3 rounded-lg bg-yellow-800/30 hover:bg-yellow-800/50 text-yellow-300 cursor-pointer"
      onClick={handleNewCampaign}
      title="Iniciar uma nova aventura e zerar o guia atual."
    >
      <Zap className="w-5 h-5 mr-3" />
      <span className="font-semibold">Nova Campanha</span>
    </button>
  );
};

export { NewScenarioBtn };
