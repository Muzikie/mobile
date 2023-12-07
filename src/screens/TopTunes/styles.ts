import {Themes} from '../../context/presetsContext/types';
import {colors, fonts, boxes} from '../../config/stylesGuides';

const styles = (theme: Themes) => ({
  screenContainer: {
    height: '100%',
    width: '100%',
  },
  topTunesScreen: {
    backgroundColor: colors[theme].beige,
  },
  pageTitle: {
    ...fonts.h2,
    paddingTop: boxes.boxPadding,
    paddingLeft: boxes.boxPadding,
    paddingRight: boxes.boxPadding,
  },
});

export default styles;
