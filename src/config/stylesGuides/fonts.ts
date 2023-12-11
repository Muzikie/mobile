import {StyleSheet} from 'react-native';
import colors from './colors';

export const fontFamilies = {
  poppinsThin: 'Poppins-Thin',
  poppinsLight: 'Poppins-Light',
  poppinsRegular: 'Poppins-Regular',
  poppinsMedium: 'Poppins-Medium',
  poppinsSemiBold: 'Poppins-SemiBold',
  poppinsBold: 'Poppins-Bold',
  poppinsExtraBold: 'Poppins-ExtraBold',
  poppinsBlack: 'Poppins-Black',
  mono: 'mono',
  dots: 'dots',
};

export const fontSizes = {
  h1: 28,
  h2: 22,
  h3: 18,
  h4: 16,
  base: 14,
  small: 12,
  input: 15,
};

const styles = {
  body: {
    fontFamily: fontFamilies.poppinsRegular,
  },
  h1: {
    fontSize: fontSizes.h1,
    fontFamily: fontFamilies.poppinsBlack,
    fontWeight: '900',
  },
  h2: {
    fontSize: fontSizes.h2,
    fontFamily: fontFamilies.poppinsMedium,
  },
  h3: {
    fontSize: fontSizes.h3,
  },
  h4: {
    fontSize: fontSizes.h4,
    fontFamily: fontFamilies.poppinsRegular,
    marginBottom: 4,
  },
  base: {
    fontSize: fontSizes.base,
    fontFamily: fontFamilies.poppinsRegular,
  },
  small: {
    fontSize: fontSizes.small,
  },
  passphrase: {
    fontFamily: fontFamilies.mono,
    fontSize: fontSizes.h2,
    lineHeight: 30,
  },
  hiddenPassphrase: {
    fontFamily: fontFamilies.dots,
    fontSize: 13,
    lineHeight: 30,
  },
};

export default StyleSheet.create(styles);
