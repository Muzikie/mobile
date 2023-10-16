import {useContext} from 'react';
import AccountContext from '../../context/accountContext/accountContext';
import {AccountContextType} from '../../context/accountContext/types';

export const useAccount = (): AccountContextType => useContext(AccountContext);
