import {StyleSheet} from 'react-native';
import {usePresets} from '../usePresets';
import {GetStyles} from './types';

export const useTheme = (getStyles: GetStyles) => {
  const {presets} = usePresets();
  const styles = getStyles(presets.theme);

  return StyleSheet.create(styles);
};
