import {useState} from 'react';
import {useAccount} from '../useAccount';
import {MODULES, COMMANDS} from '../../config/constants';
import {useBroadcast} from '../useBroadcast';
import {KeyValue} from '../../config/types';

export const useVoteAnchor = () => {
  const {account} = useAccount();
  const {broadcast} = useBroadcast();

  const [broadcastStatus, setBroadcastStatus] = useState({
    error: false,
    message: '',
    loading: false,
  });

  const signAndBroadcast = async (formValues: KeyValue) => {
    setBroadcastStatus({error: false, message: '', loading: true});

    if (!account) {
      return setBroadcastStatus({
        error: true,
        message: 'Please connect your wallet',
        loading: false,
      });
    }

    const result = await broadcast({
      module: MODULES.ANCHOR,
      command: COMMANDS.VOTE,
      params: {
        ...formValues,
      },
      account,
    });

    if (result.error) {
      return setBroadcastStatus({...result, loading: false});
    }
    return setBroadcastStatus({...result, loading: false});
  };

  return {
    signAndBroadcast,
    broadcastStatus,
  };
};
