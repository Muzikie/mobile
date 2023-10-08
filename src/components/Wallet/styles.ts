import {StyleSheet} from 'react-native';
import {boxes, colors} from '../../config/stylesGuides';

const styles = {
  wrapper: {
    width: '100%',
    paddingLeft: boxes.boxPadding,
    paddingRight: boxes.boxPadding,
    marginTop: boxes.boxPadding * 3,
    marginBottom: boxes.boxPadding * 3,
  },
  shadowWrapper: {
    flex: 1,
    borderRadius: boxes.avatarRadius,
    shadowColor: colors.light.lavender,
    shadowOffset: {
      width: 0,
      height: -25,
    },
    shadowOpacity: 0.4,
    shadowRadius: 25,
  },
  background: {
    width: '100%',
    borderRadius: boxes.avatarRadius,
    overflow: 'hidden',
  },
  info: {
    paddingTop: boxes.boxPadding * 3,
    paddingBottom: boxes.boxPadding * 2,
    paddingLeft: boxes.boxPadding * 2,
    paddingRight: boxes.boxPadding * 2,
    flex: 1,
  },
  copied: {
    position: 'absolute',
    top: boxes.boxPadding,
    left: '50%',
    color: colors.light.white,
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  address: {
    color: colors.light.white,
    lineHeight: 40,
    letterSpacing: 1,
  },
  label: {
    color: colors.light.white,
    paddingTop: boxes.boxPadding * 3,
    paddingBottom: boxes.boxPadding,
  },
  balance: {
    color: colors.light.white,
  },
};

export default StyleSheet.create(styles);
