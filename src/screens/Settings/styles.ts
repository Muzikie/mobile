import {StyleSheet} from 'react-native';
import {colors, boxes} from '../../config/stylesGuides';

const styles = {
  screenContainer: {
    height: '100%',
    width: '100%',
  },
  settingsScreen: {
    backgroundColor: colors.light.beige,
  },
  title: {
    padding: boxes.boxPadding,
  },
};

export default StyleSheet.create(styles);
