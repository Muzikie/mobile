import React, {useRef, useState} from 'react';
import ModelContext from './modalContext';
import {ModalProviderProps, ModalContent} from './types';
import {Timeout} from '../../config/types';
import Modal from '../../components/Modal';

export const MODAL_ANIMATION_DURATION = 300;

const ModalProvider = ({children}: ModalProviderProps) => {
  const timer = useRef<Timeout>();
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState<ModalContent | null>(null);

  const show = (value: ModalContent) => {
    setContent(value);
    setIsVisible(true);
  };

  const hide = () => {
    setIsVisible(false);
    timer.current = setTimeout(() => {
      setContent(null);
    }, MODAL_ANIMATION_DURATION);
  };

  const value = {
    show,
    hide,
    isVisible,
  };

  return (
    <ModelContext.Provider value={value}>
      {children}
      <Modal data={content} isVisible={isVisible} hide={hide} />
    </ModelContext.Provider>
  );
};

export default ModalProvider;
