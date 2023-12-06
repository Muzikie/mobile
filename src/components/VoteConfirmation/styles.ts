import {StyleSheet} from 'react-native';
import {
  boxes,
  colors,
  fontFamilies,
  fontSizes,
} from '../../config/stylesGuides';

const styles = {
  wrapper: {
    // paddingTop: boxes.boxPadding,
  },
  description: {
    paddingTop: boxes.elementPadding,
    color: colors.light.darkGrey,
    fontSize: fontSizes.h4,
    fontFamily: fontFamilies.poppinsRegular,
  },
  checkbox: {
    paddingLeft: 0,
    paddingRight: 0,
  },
};

export default StyleSheet.create(styles);
