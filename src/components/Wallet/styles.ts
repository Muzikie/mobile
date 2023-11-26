import {StyleSheet} from 'react-native';
import {boxes, colors} from '../../config/stylesGuides';

const styles = {
  wrapper: {
    width: '100%',
    paddingLeft: boxes.boxPadding,
    paddingRight: boxes.boxPadding,
  },
  info: {
    flex: 1,
  },
  copied: {
    position: 'absolute',
    top: boxes.boxPadding - 1,
    right: boxes.boxPadding,
    color: colors.light.purple,
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  label: {
    color: colors.light.grey,
    paddingBottom: boxes.elementPadding,
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: boxes.boxPadding,
  },
  addressContainer: {
    backgroundColor: colors.light.white,
    borderRadius: boxes.boxBorderRadius,
  },
  address: {
    color: colors.light.purple,
    letterSpacing: 1,
    textAlign: 'center',
  },
  balanceContainer: {
    marginTop: boxes.boxPadding,
    paddingBottom: boxes.boxPadding,
  },
  balance: {
    color: colors.light.purple,
    textAlign: 'center',
  },
};

export default StyleSheet.create(styles);
