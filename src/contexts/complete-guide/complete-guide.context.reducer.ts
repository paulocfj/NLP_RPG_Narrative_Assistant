import type { CompleteGuide } from '../../types';
import type { GuideAction } from './complete-guide.context.types';

/** O estado inicial (um guia vazio) */
const initialState: CompleteGuide = [];

/** O Reducer que gerencia a lógica de atualização do estado */
const completeGuideReducer = (
  state: CompleteGuide,
  action: GuideAction,
): CompleteGuide => {
  switch (action.type) {
    case 'INITIALIZE_GUIDE':
      // Define o estado inicial com as perguntas (respostas vazias)
      return action.payload.map((q) => ({
        ...q, // Inclui todas as propriedades de OneShotGuideQuestion
        userResponse: '', // Inicializa a resposta
      }));

    case 'UPDATE_RESPONSE':
      // Atualiza a resposta para uma pergunta específica
      return state.map((item) =>
        item.question === action.payload.question
          ? { ...item, userResponse: action.payload.userResponse }
          : item,
      );

    case 'RESET_GUIDE':
      // Reseta para o estado inicial (vazio ou pode ser resetado para respostas vazias)
      return state.map((item) => ({ ...item, userResponse: '' }));

    default:
      // Garante que todas as ações sejam tratadas (TypeSafety)
      throw new Error(`Unhandled action type`);
  }
};

export { completeGuideReducer, initialState };
