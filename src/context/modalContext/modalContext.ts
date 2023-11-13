import {createContext} from 'react';
import {ModalContextType} from './types';

const ModalContext = createContext<ModalContextType>({
  show: () => {},
  hide: () => {},
});

export default ModalContext;
