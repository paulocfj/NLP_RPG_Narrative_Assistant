import type { ReactNode } from 'react';

type ModalProviderProps = {
  children: ReactNode;
};

type ActiveModal = 'ABOUT' | 'DRAFT_SUMMARY' | 'WELCOME' | null;

type ModalState = {
  activeModal: ActiveModal;
};

/**
 * @typedef {object} ModalDispatch
 * @description The action functions (SET) for the Modal context.
 */
type ModalDispatch = {
  openModal: (modalType: ActiveModal) => void;
  closeModal: () => void;
};

export type { ActiveModal, ModalState, ModalProviderProps, ModalDispatch };
