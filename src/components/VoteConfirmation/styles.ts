import {Themes} from '../../context/presetsContext/types';
import {
  boxes,
  colors,
  fontFamilies,
  fontSizes,
} from '../../config/stylesGuides';

const styles = (theme: Themes) => ({
  wrapper: {
    // paddingTop: boxes.boxPadding,
  },
  description: {
    paddingTop: boxes.elementPadding,
    color: colors[theme].darkGrey,
    fontSize: fontSizes.h4,
    fontFamily: fontFamilies.poppinsRegular,
  },
  checkbox: {
    paddingLeft: 0,
    paddingRight: 0,
  },
});

export default styles;
