import {StyleSheet} from 'react-native';
import {
  boxes,
  colors,
  fontFamilies,
  fontSizes,
} from '../../config/stylesGuides';

const styles = {
  wrapper: {
    paddingBottom: boxes.doublePadding,
  },
  description: {
    fontFamily: fontFamilies.poppinsRegular,
    fontSize: fontSizes.h3,
    color: colors.light.grey,
    paddingTop: boxes.elementPadding,
  },
  punchline: {
    fontFamily: fontFamilies.poppinsRegular,
    fontSize: fontSizes.h2,
    color: colors.light.purple,
  },
};

export default StyleSheet.create(styles);
