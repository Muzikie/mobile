import {useContext} from 'react';
import PresetsContext from '../../context/presetsContext/presetsContext';
import {PresetsContextType} from '../../context/presetsContext/types';

export const usePresets = (): PresetsContextType => useContext(PresetsContext);
