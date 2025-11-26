import { useState, useEffect, useRef } from 'react';
import { ModalDispatchContext, ModalStateContext } from './modal.context';
import type {
  ActiveModal,
  ModalDispatch,
  ModalProviderProps,
  ModalState,
} from './modal.context.types';
import { HAS_SEEN_WELCOME_MODAL_KEY } from '../../constants';

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!hasInitialized.current) {
      const hasSeen = localStorage.getItem(HAS_SEEN_WELCOME_MODAL_KEY);

      if (!hasSeen) {
        setTimeout(() => {
          setActiveModal('WELCOME');
        }, 50);
      }
      hasInitialized.current = true;
    }
  }, []);

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
