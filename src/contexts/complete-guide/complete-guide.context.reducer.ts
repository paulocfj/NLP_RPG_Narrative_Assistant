import type {
  CompleteGuide,
  GuideQuestion,
  OneShotGuideQuestion,
} from '../../types';
import type { GuideActions } from './complete-guide.context.types';

const initialState: CompleteGuide = {
  guideQuestions: [], // Array vazio no início
  isFinished: false, // Não finalizado
};

/** O Reducer que gerencia a lógica de atualização do estado */
const completeGuideReducer = (
  state: CompleteGuide,
  action: GuideActions,
): CompleteGuide => {
  switch (action.type) {
    case 'GUIDE_COMPLETED':
      return {
        ...state,
        isFinished: true, // 🛑 Atualiza a flag de conclusão
      };

    case 'INITIALIZE_GUIDE': {
      // Devemos mapear para GuideQuestion[] (adicionando userResponse). // action.payload é CoreQuestionsGuide (OneShotGuideQuestion[]). // 🛑 CORREÇÃO AQUI
      const initialQuestions: GuideQuestion[] = (
        action.payload as OneShotGuideQuestion[]
      ).map((q) => ({
        ...q,
        // Adiciona a propriedade userResponse, satisfazendo o tipo GuideQuestion
        userResponse: '',
      }));

      return {
        ...state,
        guideQuestions: initialQuestions, // Atualiza o array dentro do objeto
        isFinished: false, // Garante que o estado não esteja finalizado ao inicializar
      };
    }

    case 'UPDATE_RESPONSE': {
      // Atualiza a resposta para uma pergunta específica dentro do array
      const updatedQuestions = state.guideQuestions.map((item) =>
        item.question === action.payload.question
          ? { ...item, userResponse: action.payload.userResponse }
          : item,
      );

      return {
        ...state,
        guideQuestions: updatedQuestions, // 🛑 Retorna o array atualizado
      };
    }

    case 'RESET_GUIDE': {
      // Reseta o array de perguntas, mantendo a estrutura do objeto
      const resetQuestions = state.guideQuestions.map((item) => ({
        ...item,
        userResponse: '',
      }));
      return {
        ...state,
        guideQuestions: resetQuestions,
        isFinished: false, // 🛑 Reseta a flag de conclusão
      };
    }

    default:
      // Garante que todas as ações sejam tratadas (TypeSafety)
      return state; // Retorna o estado inalterado
  }
};

export { completeGuideReducer, initialState };
