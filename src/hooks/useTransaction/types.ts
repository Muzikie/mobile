import {KeyValue, FetchStatus} from '../../config/types';

export interface BroadcastData {
  module: string;
  command: string;
  params: KeyValue;
}

export interface BroadcastStatus {
  message: string;
  status: FetchStatus;
}
