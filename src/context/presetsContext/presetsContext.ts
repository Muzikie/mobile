import {createContext} from 'react';
import {PresetsContextType, Presets} from './types';

const PresetsContext = createContext<PresetsContextType>({
  presets: {} as Presets,
  storePresets: async () => ({success: false, message: ''}),
});

export default PresetsContext;
