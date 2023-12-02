import {StyleSheet} from 'react-native';
import {
  boxes,
  colors,
  fontFamilies,
  fontSizes,
} from '../../config/stylesGuides';

const styles = {
  input: {
    width: '100%',
    height: boxes.buttonHeight,
    borderRadius: boxes.thumbnailRadius,
    backgroundColor: colors.light.paleGrey,
    paddingLeft: boxes.elementPadding,
    paddingRight: boxes.elementPadding,
  },
  confirmWrapper: {
    marginTop: boxes.boxPadding * -1,
    paddingBottom: boxes.boxPadding,
  },
  text: {
    color: colors.light.darkGrey,
    fontSize: fontSizes.h4,
    fontFamily: fontFamilies.poppinsRegular,
  },
  icon: {
    marginBottom: boxes.boxPadding,
  },
};

export default StyleSheet.create(styles);
