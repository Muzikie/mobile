import {Themes} from '../../../context/presetsContext/types';
import {
  boxes,
  colors,
  fontFamilies,
  fontSizes,
} from '../../../config/stylesGuides';

const styles = (theme: Themes) => ({
  wrapper: {
    paddingBottom: boxes.doublePadding,
  },
  description: {
    fontFamily: fontFamilies.poppinsRegular,
    fontSize: fontSizes.h3,
    color: colors[theme].grey,
    paddingTop: boxes.elementPadding,
  },
  punchline: {
    fontFamily: fontFamilies.poppinsRegular,
    fontSize: fontSizes.h2,
    color: colors[theme].purple,
  },
});

export default styles;
