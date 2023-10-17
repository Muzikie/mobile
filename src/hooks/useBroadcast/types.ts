import {KeyValue, Account} from '../../config/types';

export interface BroadcastProps {
  command: string;
  module: string;
  params: KeyValue;
  account: Account;
}

type TransactionProp =
  | 'id'
  | 'params'
  | 'module'
  | 'command'
  | 'signatures'
  | 'nonce'
  | 'fee'
  | 'senderPublicKey';

export interface SignTransactionResult {
  transaction: Record<TransactionProp, any>;
  txId: string;
  txBytes: Buffer;
}
