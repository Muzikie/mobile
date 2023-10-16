import {ReactNode} from 'react';
import {Link} from '../../config/types';

export interface AudioContextType {
  audio: Link | undefined;
  setAudio: (audio: Link) => void;
}

export interface AudioContextProviderProps {
  children: ReactNode;
}
