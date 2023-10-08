export interface WalletProps {
  style?: object;
  address: string;
  balance: string;
}

export type Timeout = ReturnType<typeof setTimeout>;