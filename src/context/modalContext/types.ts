import {ReactElement} from 'react';

export interface ModalProviderProps {
  children: ReactElement;
}

export interface ModalContent {
  title: string;
  description: string;
  image?: string;
  onPrimaryPress?: () => void;
  onSecondaryPress?: () => void;
}

export interface ModalContextType {
  show: (content: ModalContent) => void;
  hide: () => void;
}
