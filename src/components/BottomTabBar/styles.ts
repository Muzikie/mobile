import {StyleSheet} from 'react-native';

const styles = {
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEEAE3',
    paddingBottom: 30,
  },
  wrapper: {
    backgroundColor: '#fff',
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
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: '#fff',
  },
  inactiveTab: {
    color: '#999',
  },
  activeTab: {
    color: '#453248',
  },
};

export default StyleSheet.create(styles);
