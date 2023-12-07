import {boxes} from '../../config/stylesGuides';

const styles = () => ({
  wrapper: {
    width: boxes.avatarSize,
    height: boxes.avatarSize,
    borderRadius: boxes.avatarRadius,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
