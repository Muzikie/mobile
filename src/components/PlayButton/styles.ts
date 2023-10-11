import {StyleSheet} from 'react-native';
import {colors, boxes} from '../../config/stylesGuides';

const styles = {
  wrapper: {
    display: 'block',
    width: boxes.playButtonSize,
    height: boxes.playButtonSize,
    backgroundColor: colors.light.purple,
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
};

export default StyleSheet.create(styles);
