import {useCallback, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {USER_PRESETS} from '../../config/constants';
import {StoreResponse, StorePresetsProps} from './types';

const DEFAULT_PRESETS = {
  introShown: false,
};

export const usePresets = () => {
  const [presets, setPresets] = useState(DEFAULT_PRESETS);

  const storePresets = useCallback(
    async (params: StorePresetsProps): Promise<StoreResponse> => {
      try {
        const previousValues = await AsyncStorage.getItem(USER_PRESETS);
        const previousValuesObject = previousValues
          ? JSON.parse(previousValues)
          : DEFAULT_PRESETS;

        const newValues = {
          ...previousValuesObject,
          ...params,
        };

        await AsyncStorage.setItem(USER_PRESETS, JSON.stringify(newValues));
        setPresets(newValues);
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
    },
    [setPresets],
  );

  const retrievePresets = useCallback(async (): Promise<void> => {
    let value = DEFAULT_PRESETS;
    try {
      const storedValue = await AsyncStorage.getItem(USER_PRESETS);
      if (storedValue) {
        value = JSON.parse(storedValue);
      } else {
        await AsyncStorage.setItem(USER_PRESETS, JSON.stringify(value));
      }
    } catch (e) {
      console.log(e);
    }
    setPresets(value);
  }, [setPresets]);

  useEffect(() => {
    retrievePresets();
  }, [retrievePresets]);

  return {
    storePresets,
    presets,
  };
};
