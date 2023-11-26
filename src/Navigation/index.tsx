import React from 'react';
import '../../shim';
import AccountProvider from '../context/accountContext/AccountContextProvider';
import ModalProvider from '../context/modalContext/ModalContextProvider';
import Stacks from './Stacks';

const Main = (): JSX.Element => (
  <AccountProvider>
    <ModalProvider>
      <Stacks />
    </ModalProvider>
  </AccountProvider>
);

export default Main;
