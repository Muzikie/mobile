import {StyleSheet} from 'react-native';
import {boxes, fonts, colors} from '../../config/stylesGuides';

const styles = {
  screenContainer: {
    height: '100%',
    width: '100%',
  },
  pageTitle: {
    ...fonts.h2,
    paddingTop: boxes.boxPadding,
    paddingLeft: boxes.boxPadding,
    paddingRight: boxes.boxPadding,
  },
  homeScreen: {
    backgroundColor: colors.light.beige,
  },
};

export default StyleSheet.create(styles);
