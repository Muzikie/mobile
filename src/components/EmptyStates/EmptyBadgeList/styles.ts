import {colors, fontFamilies, fontSizes} from '../../../config/stylesGuides';
import {Themes} from '../../../context/presetsContext/types';

const styles = (theme: Themes) => ({
  wrapper: {
    height: 200,
    flexFlow: 'row noWrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors[theme].neutralStrong,
    fontSize: fontSizes.h3,
    fontFamily: fontFamilies.poppinsRegular,
  },
});

export default styles;
