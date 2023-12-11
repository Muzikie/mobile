import {Themes} from '../../context/presetsContext/types';
import {colors, boxes} from '../../config/stylesGuides';

const styles = (theme: Themes) => ({
  wrapper: {
    width: boxes.playButtonSize,
    height: boxes.playButtonSize,
    backgroundColor: colors[theme].primaryStrong,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: boxes.thumbnailRadius,
    overflow: 'hidden',
    padding: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default styles;
