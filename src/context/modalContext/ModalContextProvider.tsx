import React, {useState} from 'react';
import ModelContext from './modalContext';
import {ModalProviderProps, ModalContent} from './types';
import Modal from '../../components/Modal';

const ModalProvider = ({children}: ModalProviderProps) => {
  const [content, setContent] = useState<ModalContent | null>(null);

  const show = (value: ModalContent) => {
    setContent(value);
  };

  const hide = () => {
    setContent(null);
  };

  const value = {
    show,
    hide,
  };

  return (
    <ModelContext.Provider value={value}>
      {children}
      {content && <Modal data={content} hide={hide} />}
    </ModelContext.Provider>
  );
};

export default ModalProvider;
