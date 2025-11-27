import { useState, useEffect, useRef } from 'react';
import { ModalDispatchContext, ModalStateContext } from './modal.context';
import type {
  ActiveModal,
  ModalDispatch,
  ModalProviderProps,
  ModalState,
} from './modal.context.types';
import { HAS_SEEN_WELCOME_MODAL_KEY } from '../../constants';

/**
 * `ModalProvider` is a React context provider component that manages the state
 * and dispatch functions for controlling application-wide modals (e.g., WELCOME,
 * GUIDE_QUESTION, ABOUT).
 *
 * It uses the React Context API to provide two values:
 * 1. ModalStateContext: Contains the current `activeModal` (e.g., 'WELCOME' or null).
 * 2. ModalDispatchContext: Contains functions to open and close modals.
 *
 * Special Initialization Logic:
 * - The provider checks local storage (`HAS_SEEN_WELCOME_MODAL_KEY`) on the first render.
 * - If the user has not seen the welcome modal, it is automatically opened after a
 * short delay (50ms) to ensure initialization is complete.
 * - The `hasInitialized` ref prevents this check from running on subsequent renders.
 *
 * @param {ModalProviderProps} props The props object containing the `children` nodes to be rendered within the context.
 * @returns {JSX.Element} The context provider wrapping the application children.
 */
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
