import { createContext } from 'react';
import type { ModalState, ModalDispatch } from './modal.context.types';

const ModalStateContext = createContext<ModalState | undefined>(undefined);

const ModalDispatchContext = createContext<ModalDispatch | undefined>(
  undefined,
);

export { ModalStateContext, ModalDispatchContext };
