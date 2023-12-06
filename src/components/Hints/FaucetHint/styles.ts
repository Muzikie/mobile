import {StyleSheet} from 'react-native';
import {boxes, colors, fontSizes} from '../../../config/stylesGuides';

const styles = {
  wrapper: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingBottom: boxes.doublePadding,
  },
  image: {
    marginTop: -1 * boxes.boxPadding,
    marginBottom: boxes.boxPadding,
  },
  description: {
    fontSize: fontSizes.h3,
    color: colors.light.grey,
    paddingBottom: boxes.boxPadding,
  },
  button: {},
};

export default StyleSheet.create(styles);
