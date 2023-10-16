import {createContext} from 'react';
import {AccountContextType} from './types';
import {Account} from '../../config/types';

const AccountContext = createContext<AccountContextType>({
  account: {} as Account,
});

export default AccountContext;
