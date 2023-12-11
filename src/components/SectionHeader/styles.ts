import {Themes} from '../../context/presetsContext/types';
import {
  boxes,
  colors,
  fontFamilies,
  fontSizes,
} from '../../config/stylesGuides';

const styles = (theme: Themes) => ({
  container: {
    paddingVertical: boxes.boxPadding,
  },
  title: {
    color: colors[theme].primaryStrong,
    fontSize: fontSizes.h2,
    fontFamily: fontFamilies.poppinsRegular,
  },
  subtitle: {
    color: colors[theme].neutralMild,
    fontSize: fontSizes.h4,
    fontFamily: fontFamilies.poppinsRegular,
  },
});

export default styles;
