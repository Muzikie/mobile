import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './styles';
import type {BottomTabBarProps} from './types';

const BottomTabBar = ({state, navigation}: BottomTabBarProps) => {
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

export default BottomTabBar;
