import {StyleSheet} from 'react-native';
import {colors, fonts, boxes} from '../../config/stylesGuides';

const styles = {
  screenContainer: {
    height: '100%',
    width: '100%',
  },
  topTunesScreen: {
    backgroundColor: colors.light.beige,
  },
  pageTitle: {
    ...fonts.h2,
    paddingTop: boxes.boxPadding,
    paddingLeft: boxes.boxPadding,
    paddingRight: boxes.boxPadding,
  },
};

export default StyleSheet.create(styles);
