import {StyleSheet} from 'react-native';
import {boxes, colors} from '../../config/stylesGuides';

const styles = {
  screenContainer: {
    height: '100%',
    width: '100%',
  },
  submitScreen: {
    backgroundColor: colors.light.beige,
  },
  pageTitle: {
    paddingTop: boxes.boxPadding,
    paddingLeft: boxes.boxPadding,
    paddingRight: boxes.boxPadding,
  },
};

export default StyleSheet.create(styles);
