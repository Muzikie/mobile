export interface KeyValue {
  [key: string]: any;
}

interface LockedBalance {
  amount: string;
  height: number;
}

export interface Balance {
  tokenID: string;
  availableBalance: string;
  lockedBalances: LockedBalance[];
}

export interface Auth {
  nonce: bigint;
  optionalKeys: Buffer[];
  mandatoryKeys: Buffer[];
}

export interface Account {
  name: string;
  username: string;
  address: string;
  publicKey: Buffer;
  privateKey: Buffer;
  passphrase: string;
  nonce: bigint;
  balances: Balance[];
  spotifyId: string;
  appleMusicId: string;
}

export interface Anchor {
  spotifyId?: string;
  appleMusicId?: string;
  name: string;
  album: string;
  artists: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  submitter: string;
  anchorID: string;
  votes?: {senderAddress: string}[];
}

export enum Badges {
  AOTD = 'anchor_of_the_day',
  AOTW = 'anchor_of_the_week',
  AOTM = 'anchor_of_the_month',
}

export interface Badge {
  badgeID: Buffer;
  anchorID: Buffer;
  awardedTo: Buffer;
  type: Badges;
  awardDate: string;
  rank: number;
  prize: bigint;
  claimed: boolean;
}

export interface BadgeStat {
  type: Badges;
  count: number;
}

export enum FetchStatus {
  idle = 'idle',
  pending = 'pending',
  success = 'success',
  error = 'error',
}

export enum MODULES {
  ANCHOR = 'anchor',
  BADGE = 'badge',
}

export enum COMMANDS {
  CREATE = 'create',
  VOTE = 'vote',
}
