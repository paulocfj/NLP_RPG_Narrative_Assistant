import { useContext } from 'react';
import type { ModalDispatch, ModalState } from './modal.context.types';
import { ModalDispatchContext, ModalStateContext } from './modal.context';

/**
 * Hook (GET) to retrieve the modal visibility state.
 * Components using this hook will re-render whenever the modal state changes (e.g., when a modal opens or closes).
 *
 * @returns {ModalState} The current modal state, including the `activeModal` type.
 * @throws {Error} Throws an error if the hook is not used within a ModalProvider.
 */
const useModalState = (): ModalState => {
  const context = useContext(ModalStateContext);
  if (context === undefined) {
    throw new Error('useModalState must be used within a ModalProvider');
  }
  return context;
};

/**
 * Hook (SET) to retrieve the modal action functions (setters).
 * Components using this hook WILL NOT re-render when the modal state changes,
 * as they only consume the dispatch functions.
 *
 * @returns {ModalDispatch} The object containing the action functions (e.g., openModal, closeModal).
 * @throws {Error} Throws an error if the hook is not used within a ModalProvider.
 */
const useModalDispatch = (): ModalDispatch => {
  const context = useContext(ModalDispatchContext);
  if (context === undefined) {
    throw new Error('useModalDispatch must be used within a ModalProvider');
  }
  return context;
};

export { useModalState, useModalDispatch };
