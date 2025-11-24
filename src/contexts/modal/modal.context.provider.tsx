import { useState } from 'react';
import { ModalDispatchContext, ModalStateContext } from './modal.context';
import type {
  ActiveModal,
  ModalDispatch,
  ModalProviderProps,
  ModalState,
} from './modal.context.types';

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);

  const modalState: ModalState = {
    activeModal,
  };

  const modalDispatch: ModalDispatch = {
    openModal: (modalType) => setActiveModal(modalType),
    closeModal: () => setActiveModal(null),
  };

  return (
    <ModalStateContext.Provider value={modalState}>
      <ModalDispatchContext.Provider value={modalDispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};

export { ModalProvider };
