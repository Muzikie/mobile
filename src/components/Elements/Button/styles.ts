import {Themes} from '../../../context/presetsContext/types';
import {
  fontSizes,
  colors,
  boxes,
  fontFamilies,
} from '../../../config/stylesGuides';

const styles = (theme: Themes) => ({
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
    shadowColor: colors[theme].purple,
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
    color: colors[theme].white,
    backgroundColor: colors[theme].purple,
  },
  white: {
    color: colors[theme].purple,
    backgroundColor: colors[theme].white,
  },
  disabled: {
    color: colors[theme].lightGrey,
    backgroundColor: colors[theme].darkGrey,
  },
});

export default styles;
