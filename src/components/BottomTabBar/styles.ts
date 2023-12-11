import {StyleSheet} from 'react-native';
import {colors} from '../../config/stylesGuides';

const styles = {
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  darkTabBar: {
    backgroundColor: colors.dark.secondaryStrong,
  },
  lightTabBar: {
    backgroundColor: colors.light.secondaryStrong,
  },
  wrapper: {
    width: '90%',
    height: 60,
    borderRadius: 18,
    shadowColor: '#453248',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  darkWrapper: {
    backgroundColor: colors.dark.neutralZero,
  },
  lightWrapper: {
    backgroundColor: colors.light.neutralZero,
  },
  tabs: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 27,
  },
};

export default StyleSheet.create(styles);
