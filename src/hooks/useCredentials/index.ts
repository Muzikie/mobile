import EncryptedStorage from 'react-native-encrypted-storage';
import {USER_SESSION} from '../../config/constants';
import {generateMnemonic} from 'bip39';
import {StoreResponse, RetrieveResponse} from './types';

export const useCredentials = () => {
  const storeCredentials = async (
    passphrase: string,
  ): Promise<StoreResponse> => {
    try {
      await EncryptedStorage.setItem(USER_SESSION, passphrase);
      return {
        success: true,
        message: '',
      };
    } catch (error) {
      return {
        success: false,
        message: error?.message ?? 'An error occurred storing your session',
      };
    }
  };

  const retrieveCredentials = async (): Promise<RetrieveResponse> => {
    let value = '';
    let success = false;
    const generatedPassphrase = generateMnemonic();
    try {
      const storedValue = await EncryptedStorage.getItem(USER_SESSION);
      if (storedValue) {
        value = storedValue;
      } else {
        value = generatedPassphrase;
        await EncryptedStorage.setItem(USER_SESSION, generatedPassphrase);
      }
      success = true;
    } catch (error) {
      console.log(error);
    }

    return {
      value,
      success,
    };
  };

  return {
    storeCredentials,
    retrieveCredentials,
  };
};
