import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import styles from './styles';
// import Player from '../Player';
import RouteButton from './RouteButton';

const BottomTabBar = ({state, navigation}: BottomTabBarProps) => (
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

export default BottomTabBar;
