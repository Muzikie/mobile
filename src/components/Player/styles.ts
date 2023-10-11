import {StyleSheet} from 'react-native';
import {boxes, colors} from '../../config/stylesGuides';

const styles = {
  wrapper: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: boxes.elementPadding,
  },
  songTitle: {
    color: colors.light.purple,
  },
  artist: {
    color: colors.light.grey,
  },
};

export default StyleSheet.create(styles);
