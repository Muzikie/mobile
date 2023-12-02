import {StyleSheet} from 'react-native';
import {colors, fonts, boxes} from '../../config/stylesGuides';

const styles = {
  screenContainer: {
    height: '100%',
    width: '100%',
  },
  homeScreen: {
    backgroundColor: colors.light.beige,
  },
  pageTitle: {
    ...fonts.h2,
    paddingTop: boxes.boxPadding,
    paddingLeft: boxes.boxPadding,
    paddingRight: boxes.boxPadding,
  },
  addSongButton: {
    position: 'absolute',
    bottom: boxes.boxPadding,
    right: boxes.boxPadding,
    backgroundColor: colors.light.white,
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  shadow: {
    shadowColor: colors.light.purple,
    shadowOffset: {
      width: 0,
      height: (-1 * boxes.shadowHeight) / 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: boxes.shadowHeight,
  },
};

export default StyleSheet.create(styles);
