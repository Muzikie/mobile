import React from 'react';
import '../../shim';
import AccountProvider from '../context/accountContext/AccountContextProvider';
import ModalProvider from '../context/modalContext/ModalContextProvider';
import PresetsProvider from '../context/presetsContext/PresetsContextProvider';
import Stacks from './Stacks';

const Main = (): JSX.Element => (
  <PresetsProvider>
    <AccountProvider>
      <ModalProvider>
        <Stacks />
      </ModalProvider>
    </AccountProvider>
  </PresetsProvider>
);

export default Main;
