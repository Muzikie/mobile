import {useContext} from 'react';
import AudioContext from '../../context/audioContext/audioContext';
import {AudioContextType} from '../../context/audioContext/types';

export const useAudio = (): AudioContextType => useContext(AudioContext);
