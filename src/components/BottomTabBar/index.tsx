import React from 'react';
import {View} from 'react-native';
import styles from './styles';
// import Player from '../Player';
import RouteButton from '../RouteButton';
import {EnhancedBottomTabBarProps} from './types';

const BottomTabBar = ({
  state,
  navigation,
  theme,
}: EnhancedBottomTabBarProps) => (
  <View style={[styles.tabBar, styles[`${theme}TabBar`]]}>
    <View style={[styles.wrapper, styles[`${theme}Wrapper`]]}>
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
