import {ReactNode} from 'react';
import {Anchor} from '../../config/types';

export interface AudioContextType {
  audio: Anchor | undefined;
  setAudio: (audio: Anchor) => void;
}

export interface AudioContextProviderProps {
  children: ReactNode;
}
