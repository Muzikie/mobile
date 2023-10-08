import {StyleSheet} from 'react-native';
import {boxes, colors} from '../../config/stylesGuides';

const styles = {
  wrapper: {
    borderWidth: 1,
    borderColor: 'transparent',
    paddingLeft: boxes.boxPadding,
    paddingRight: boxes.boxPadding,
    marginTop: boxes.boxPadding,
  },
  success: {
    color: colors.light.success,
  },
  error: {
    color: colors.light.error,
  },
};

export default StyleSheet.create(styles);
