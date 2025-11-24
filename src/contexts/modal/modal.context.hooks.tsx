import { useContext } from 'react';
import type { ModalDispatch, ModalState } from './modal.context.types';
import { ModalDispatchContext, ModalStateContext } from './modal.context';

/**
 * Hook (GET) para obter o estado de visibilidade do modal.
 * Componentes que usam este hook serão re-renderizados quando o estado do modal mudar.
 *
 * @returns {ModalState} O estado atual do modal (isDraftModalOpen).
 */
const useModalState = (): ModalState => {
  const context = useContext(ModalStateContext);
  if (context === undefined) {
    throw new Error('useModalState must be used within a ModalProvider');
  }
  return context;
};

/**
 * Hook (SET) para obter as ações (funções setters) do modal.
 * Componentes que usam este hook NÃO serão re-renderizados quando o estado do modal mudar.
 *
 * @returns {ModalDispatch} O objeto com as funções de ação (openDraftModal, closeDraftModal).
 */
const useModalDispatch = (): ModalDispatch => {
  const context = useContext(ModalDispatchContext);
  if (context === undefined) {
    throw new Error('useModalDispatch must be used within a ModalProvider');
  }
  return context;
};

export { useModalState, useModalDispatch };
