import React, {useState, useEffect, useCallback} from 'react';
import io from 'socket.io-client';
import {useCredentials} from '../../hooks/useCredentials';
import AccountContext from './accountContext';
import {AccountProviderProps, NewTransactionEvent} from './types';
import {Account} from '../../config/types';
import {API_URLS} from '../../config/network';
import {extractCredentials} from '../../utils/cryptography';
import {getAuth, getTokenBalances} from '../../utils/api';

const AccountProvider = ({children}: AccountProviderProps) => {
  const [account, setAccount] = useState<Account>({} as Account);
  const {retrieveCredentials} = useCredentials();

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

  const signIn = useCallback(async () => {
    const retrieveRes = await retrieveCredentials();
    // @todo Show an error to the user if the credentials are not found
    const {address, publicKey, privateKey} = await extractCredentials(
      retrieveRes.value,
    );
    const auth = await getAuth({params: {address}});
    const {data: balances} = await getTokenBalances({params: {address}});

    setAccount({
      ...account,
      passphrase: retrieveRes.value,
      privateKey,
      publicKey,
      address,
      nonce: auth.nonce,
      balances,
    });
  }, [account, retrieveCredentials]);

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
    if (!account.address) {
      signIn();
    }
  }, [account, signIn]);

  const value = {
    account,
  };

  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};

export default AccountProvider;
