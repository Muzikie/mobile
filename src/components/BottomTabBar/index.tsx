import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {View, TouchableHighlight} from 'react-native';
import styles from './styles';
// import Player from '../Player';
import Icon from '../Icon';
import {colors} from '../../config/stylesGuides';

const RouteButton = ({route, navigation, stateIndex, index}: any) => {
  const isFocused = stateIndex === index;

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

  const iconColor = isFocused ? colors.light.grey : colors.light.purple;

  return (
    <TouchableHighlight
      onPress={onPress}
      key={route.key}
      underlayColor="transparent"
      style={styles.tab}>
      <View style={styles.iconWrapper}>
        <Icon name={route.name} color={iconColor} />
      </View>
    </TouchableHighlight>
  );
};

const BottomTabBar = ({state, navigation}: BottomTabBarProps) => {
  return (
    <View style={styles.tabBar}>
      <View style={styles.wrapper}>
        {/* <Player /> */}
        <View style={styles.tabs}>
          {state.routes.map((route, index: number) => (
            <RouteButton
              navigation={navigation}
              route={route}
              stateIndex={state.index}
              index={index}
              key={index}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default BottomTabBar;
