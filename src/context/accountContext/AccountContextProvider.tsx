import React, {useState, useEffect, useCallback} from 'react';
import io from 'socket.io-client';

import AccountContext from './accountContext';
import {AccountProviderProps, NewTransactionEvent} from './types';
import {Account} from '../../config/types';
import {API_URLS} from '../../config/network';
import {extractCredentials} from '../../utils/cryptography';
import {getAuth, getTokenBalances} from '../../utils/api';

const AccountProvider = ({passphrase, children}: AccountProviderProps) => {
  const [account, setAccount] = useState<Account>({} as Account);

  const update = useCallback(async () => {
    // Fetch data
    const authData = await getAuth({params: {address: account.address}});
    const {data: balanceData} = await getTokenBalances({
      params: {address: account.address},
    });

    // Prepare the new value
    const newValue = {
      ...account,
      auth: authData,
    };
    if (balanceData.length) {
      newValue.balances = balanceData;
    }

    // Update the value
    setAccount(newValue);
  }, [account]);

  const signIn = useCallback(
    async (value: string) => {
      const {address, publicKey, privateKey} = await extractCredentials(value);
      const auth = await getAuth({params: {address}});
      const {data: balances} = await getTokenBalances({params: {address}});

      setAccount({
        ...account,
        passphrase: value,
        privateKey,
        publicKey,
        address,
        nonce: auth.nonce,
        balances,
      });
    },
    [account],
  );

  // Connect to WebSocket
  useEffect(() => {
    if (account.address) {
      const connection = io(`${API_URLS.STREAMER}/blockchain`, {
        transports: ['websocket'],
      });

      connection.on('new.transactions', (transactions: NewTransactionEvent) => {
        const relevantTxs = transactions.data.filter(tx => {
          return (
            tx.sender.address === account.address ||
            tx.params.recipientAddress === account.address
          );
        });
        if (relevantTxs.length) {
          update();
        }
      });
    }
  }, [account, update]);

  useEffect(() => {
    if (passphrase && !account.address) {
      signIn(passphrase);
    }
  }, [passphrase, account, signIn]);

  const value = {
    account,
  };

  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};

export default AccountProvider;
