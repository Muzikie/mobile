import {StyleSheet} from 'react-native';
import {boxes, colors} from '../../config/stylesGuides';

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: boxes.badgeSize,
    height: boxes.badgeSize,
    backgroundColor: colors.light.iceberg,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: boxes.thumbnailRadius,
    overflow: 'hidden',
  },
  badge: {
    width: '90%',
    height: '90%',
  },
};

export default StyleSheet.create(styles);
