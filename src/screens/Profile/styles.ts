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
  label: {
    paddingTop: boxes.elementPadding,
    color: colors.light.grey,
  },
  name: {
    fontFamily: fonts.body,
  },
  username: {
    width: 230,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  emptyState: {
    height: 200,
    flexFlow: 'row noWrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default StyleSheet.create(styles);
