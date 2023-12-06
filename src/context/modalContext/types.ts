import {ReactElement} from 'react';

export interface ModalProviderProps {
  children: ReactElement;
}

export interface ModalContent {
  title: string;
  description: string;
  image?: string;
  content?: ReactElement;
  onPrimaryPress?: () => void;
  onSecondaryPress?: () => void;
}

export type Show = (content: ModalContent) => void;
export type Hide = () => void;

export interface ModalContextType {
  show: Show;
  hide: Hide;
  isVisible: boolean;
}
