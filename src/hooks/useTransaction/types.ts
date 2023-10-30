import {KeyValue} from '../../config/types';

export interface BroadcastData {
  module: string;
  command: string;
  params: KeyValue;
}
