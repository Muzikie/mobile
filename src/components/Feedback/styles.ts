import {Themes} from '../../context/presetsContext/types';
import {boxes, colors} from '../../config/stylesGuides';

const styles = (theme: Themes) => ({
  wrapper: {
    borderWidth: 1,
    borderColor: 'transparent',
    paddingLeft: boxes.boxPadding,
    paddingRight: boxes.boxPadding,
    marginTop: boxes.boxPadding,
  },
  success: {
    color: colors[theme].success,
  },
  error: {
    color: colors[theme].error,
  },
});

export default styles;
