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
  artists: string[];
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  submitter: string;
  id: string;
}

interface ProjectOfDayBadge {
  badgeId: number;
  linkId: number;
  date: string;
  rank: number;
  prize: string; // 45%, 25%, 15%, 10%, 5%
  owner: string;
}

// Badge representing a weekly award
interface ProjectOfWeekBadge {
  badgeId: number;
  linkId: number[];
  weekStartDate: string;
  weekEndDate: string;
  owner: string;
}

// Badge representing a monthly award
interface ProjectOfMonthBadge {
  badgeId: number;
  linkId: number[];
  monthYear: string;
  owner: string;
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
