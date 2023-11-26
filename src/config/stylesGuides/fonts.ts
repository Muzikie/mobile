import {StyleSheet} from 'react-native';
import colors from './colors';

const fontFamilies = {
  poppinsThin: 'Poppins-Thin',
  poppinsLight: 'Poppins-Light',
  poppinsRegular: 'Poppins-Regular',
  poppinsMedium: 'Poppins-Medium',
  poppinsSemiBold: 'Poppins-SemiBold',
  poppinsBold: 'Poppins-Bold',
  poppinsExtraBold: 'Poppins-ExtraBold',
  poppinsBlack: 'Poppins-Black',
};

const fontSizes = {
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
    color: colors.light.purple,
    fontFamily: fontFamilies.poppinsBlack,
    fontWeight: '900',
  },
  h2: {
    fontSize: fontSizes.h2,
    color: colors.light.grey,
    fontFamily: fontFamilies.poppinsSemiBold,
  },
  h3: {
    fontSize: fontSizes.h3,
    color: colors.light.purple,
  },
  h4: {
    fontSize: fontSizes.h4,
    color: colors.light.purple,
    fontFamily: fontFamilies.poppinsRegular,
    marginBottom: 4,
  },
  base: {
    fontSize: fontSizes.base,
    color: colors.light.grey,
    fontFamily: fontFamilies.poppinsRegular,
  },
  small: {
    color: colors.light.purple,
    fontSize: fontSizes.small,
  },
};

export default StyleSheet.create(styles);
