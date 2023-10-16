import {createContext} from 'react';
import {AudioContextType} from './types';

const AudioContext = createContext<AudioContextType>({} as AudioContextType);

export default AudioContext;
