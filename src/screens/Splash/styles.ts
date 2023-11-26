import {StyleSheet} from 'react-native';
import {colors} from '../../config/stylesGuides';

const styles = {
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light.beige,
  },
  splashImageContainer: {
    height: 75,
    width: 262,
  },
  splashLogo: {
    height: '100%',
    width: '100%',
  },
};

export default StyleSheet.create(styles);
