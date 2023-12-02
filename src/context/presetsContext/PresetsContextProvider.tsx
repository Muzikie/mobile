import React, {useState, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PresetsContext from './presetsContext';
import {USER_PRESETS} from '../../config/constants';
import {
  PresetsProviderProps,
  StoreResponse,
  StorePresetsProps,
  Themes,
  Presets,
} from './types';

const DEFAULT_PRESETS = {
  introShown: false,
  theme: Themes.light,
};

const PresetsProvider = ({children}: PresetsProviderProps) => {
  const [presets, setPresets] = useState<Presets>(DEFAULT_PRESETS);

  const storePresets = useCallback(
    async (params: StorePresetsProps): Promise<StoreResponse> => {
      console.log('Storing presets', params);
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
      console.log('storedValue', storedValue);
      if (storedValue) {
        value = JSON.parse(storedValue);
      } else {
        await AsyncStorage.setItem(USER_PRESETS, JSON.stringify(value));
      }
    } catch (e) {
      console.log(e);
    }

    console.log('Loading old presets', value);
    setPresets(value);
  }, [setPresets]);

  useEffect(() => {
    retrievePresets();
  }, [retrievePresets]);

  const value = {presets, storePresets};

  return (
    <PresetsContext.Provider value={value}>{children}</PresetsContext.Provider>
  );
};

export default PresetsProvider;
