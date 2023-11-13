import {useContext} from 'react';
import ModalContext from '../../context/modalContext/modalContext';
import {ModalContextType} from '../../context/modalContext/types';

export const useModal = (): ModalContextType => useContext(ModalContext);
