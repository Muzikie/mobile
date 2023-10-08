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
  profileScreen: {
    backgroundColor: colors.light.beige,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'nowrap',
    paddingTop: boxes.boxPadding,
  },
  name: {
    paddingTop: boxes.boxPadding,
    fontFamily: fonts.family,
  },
  username: {},
};

export default StyleSheet.create(styles);
