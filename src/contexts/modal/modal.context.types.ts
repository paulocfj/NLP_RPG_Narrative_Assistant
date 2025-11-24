import type { ReactNode } from 'react';

type ModalProviderProps = {
  children: ReactNode;
};

// Define todos os modais possíveis
type ActiveModal = 'DRAFT_SUMMARY' | 'WELCOME' | null;

type ModalState = {
  activeModal: ActiveModal; // Armazena a string do modal aberto
};

/**
 * @typedef {object} ModalDispatch
 * @description As funções de ação (SET) para o contexto do Modal.
 */
type ModalDispatch = {
  openModal: (modalType: ActiveModal) => void;
  closeModal: () => void;
};

export type { ActiveModal, ModalState, ModalProviderProps, ModalDispatch };
