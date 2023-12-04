import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';
import Winners from '../screens/Winners';
import BottomTabBar from '../components/BottomTabBar';
import {colors} from '../config/stylesGuides';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  tabBarShowLabel: false,
  headerStyle: {
    backgroundColor: colors.light.beige,
    shadowColor: 'transparent',
    elevation: 0,
  },
};

const Navigation = (): JSX.Element => (
  <Tab.Navigator initialRouteName="Home" tabBar={BottomTabBar}>
    <Tab.Screen name="Home" component={HomeScreen} options={tabBarOptions} />
    <Tab.Screen name="Winners" component={Winners} options={tabBarOptions} />
    <Tab.Screen name="Profile" component={Profile} options={tabBarOptions} />
    <Tab.Screen name="Settings" component={Settings} options={tabBarOptions} />
  </Tab.Navigator>
);

export default Navigation;
