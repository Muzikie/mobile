import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const BottomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.tabBar}>
      <View style={styles.wrapper}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // Navigate to the tab if it's not focused already
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableHighlight
              onPress={onPress}
              key={route.key}
              style={styles.tab}>
              <Text style={isFocused ? styles.activeTab : styles.inactiveTab}>
                {route.name}
              </Text>
            </TouchableHighlight>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default BottomTabBar;
