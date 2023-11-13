import {StyleSheet} from 'react-native';

const styles = {
  wrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  icon: {
    zIndex: 1,
  },
  text: {
    width: 1,
    height: 1,
    fontSize: 1,
  },
};

export default StyleSheet.create(styles);
