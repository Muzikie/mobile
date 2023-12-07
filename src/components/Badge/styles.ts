import {Themes} from '../../context/presetsContext/types';
import {boxes, colors} from '../../config/stylesGuides';

const styles = (theme: Themes) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: boxes.badgeSize,
    height: boxes.badgeSize,
    backgroundColor: colors[theme].iceberg,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: boxes.thumbnailRadius,
    overflow: 'hidden',
  },
  badge: {
    width: '90%',
    height: '90%',
  },
});

export default styles;
