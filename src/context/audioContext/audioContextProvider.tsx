import React, {useState} from 'react';
import AudioContext from './audioContext';
import {AudioContextProviderProps} from './types';
import {Link} from '../../config/types';

const AudioContextProvider = ({children}: AudioContextProviderProps) => {
  const [audio, setAudio] = useState<Link>();

  const value = {
    audio,
    setAudio,
  };

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
};

export default AudioContextProvider;
