import {StyleSheet} from 'react-native';
import {
  fontSizes,
  colors,
  boxes,
  fontFamilies,
} from '../../../config/stylesGuides';

const styles = {
  wrapper: {
    width: '100%',
    height: boxes.buttonHeight + boxes.shadowHeight,
    paddingTop: boxes.shadowHeight,
    position: 'relative',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  shadowWrapper: {
    width: '100%',
    height: boxes.buttonHeight,
    borderRadius: boxes.buttonBorderRadius,
  },
  shadow: {
    shadowColor: colors.light.purple,
    shadowOffset: {
      width: 0,
      height: (-1 * boxes.shadowHeight) / 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: boxes.shadowHeight,
  },
  touchable: {
    // height: boxes.buttonHeight,
    borderRadius: boxes.buttonBorderRadius,
    overflow: 'hidden',
  },
  title: {
    width: '100%',
    lineHeight: boxes.buttonHeight,
    textAlign: 'center',
    fontSize: fontSizes.h4,
    fontFamily: fontFamilies.poppinsRegular,
    marginBottom: 0,
  },
  purple: {
    color: colors.light.white,
    backgroundColor: colors.light.purple,
  },
  white: {
    color: colors.light.purple,
    backgroundColor: colors.light.white,
  },
  disabled: {
    color: colors.light.lightGrey,
    backgroundColor: colors.light.darkGrey,
  },
};

export default StyleSheet.create(styles);
