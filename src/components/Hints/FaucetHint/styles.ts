import {Themes} from '../../../context/presetsContext/types';
import {boxes, colors, fontSizes} from '../../../config/stylesGuides';

const styles = (theme: Themes) => ({
  wrapper: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingBottom: boxes.doublePadding,
  },
  image: {
    marginTop: -1 * boxes.boxPadding,
    marginBottom: boxes.boxPadding,
  },
  description: {
    fontSize: fontSizes.h3,
    color: colors[theme].neutralMild,
    paddingBottom: boxes.boxPadding,
  },
  button: {},
});

export default styles;
