import {useState} from 'react';
import {useAccount} from '../useAccount';
import {useBroadcast} from '../useBroadcast';
import {BroadcastData} from './types';
import {FetchStatus} from '../../config/types';

export const useTransaction = () => {
  const {account} = useAccount();
  const {broadcast} = useBroadcast();
  const [broadcastStatus, setBroadcastStatus] = useState({
    message: '',
    status: FetchStatus.idle,
  });

  const signAndBroadcast = async (data: BroadcastData): Promise<void> => {
    setBroadcastStatus({
      status: FetchStatus.pending,
      message: 'Hang tight ...',
    });
    console.log('signAndBroadcast', data);

    if (!account) {
      setBroadcastStatus({
        message: 'Please connect your wallet',
        status: FetchStatus.error,
      });
    } else {
      const result = await broadcast({
        ...data,
        account,
      });
      console.log('result', result);

      if (result.error) {
        setBroadcastStatus({
          message: result.message,
          status: FetchStatus.error,
        });
      } else {
        setBroadcastStatus({
          message: '',
          status: FetchStatus.success,
        });
      }
    }
  };

  const reset = () => {
    setBroadcastStatus({
      message: '',
      status: FetchStatus.idle,
    });
  };

  return {
    signAndBroadcast,
    broadcastStatus,
    reset,
  };
};
