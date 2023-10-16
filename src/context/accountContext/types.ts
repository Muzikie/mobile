import {ReactElement} from 'react';
import {Account} from '../../config/types';

export interface AccountProviderProps {
  children: ReactElement;
  passphrase: string;
}

export interface AccountContextType {
  account: Account | undefined;
}

interface Transaction {
  block: {
    id: string;
    height: number;
    timestamp: number;
  };
  executionStatus: 'success' | 'failure';
  id: string;
  nonce: string;
  senderPublicKey: string;
  sender: {
    address: string;
    publicKey: string;
    name: string;
  };
  fee: string;
  minFee: string;
  moduleCommand: string;
  params: Record<string, unknown>;
  signatures: string[];
}

export interface NewTransactionEvent {
  data: Transaction[];
  meta: {
    count: number;
    offset: number;
    total: number;
  };
}
