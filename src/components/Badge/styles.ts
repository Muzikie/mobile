import {boxes} from '../../config/stylesGuides';

const styles = () => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: boxes.badgeSize,
    height: boxes.badgeSize,
    overflow: 'hidden',
  },
  badge: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
