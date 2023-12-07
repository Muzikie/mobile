import {ViewStyle, TextStyle, ImageStyle, StyleProp} from 'react-native';
import {Themes} from '../usePresets/types';

export type GetStyles = (
  theme: Themes,
) => Record<string, StyleProp<ViewStyle | TextStyle | ImageStyle>>;
