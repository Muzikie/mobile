import {StyleSheet} from 'react-native';
import {boxes} from '../../config/stylesGuides';

const styles = {
  wrapper: {
    display: 'block',
    width: boxes.avatarSize,
    height: boxes.avatarSize,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: boxes.avatarRadius,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
};

export default StyleSheet.create(styles);
