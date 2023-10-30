import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import AccountProvider from '../context/accountContext/AccountContextProvider';
import {PASSPHRASE} from '../config/network';
import HomeScreen from '../screens/Home';
import SubmitScreen from '../screens/Submit';
import ProfileScreen from '../screens/Profile';
import BottomTabBar from '../components/BottomTabBar';

const Tab = createBottomTabNavigator();

const Navigation = (): JSX.Element => (
  <AccountProvider passphrase={PASSPHRASE}>
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" tabBar={BottomTabBar}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#09c',
            headerStyle: {
              backgroundColor: '#FEEAE3',
              shadowColor: 'transparent',
              elevation: 0,
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#09c',
            headerStyle: {
              backgroundColor: '#FEEAE3',
              shadowColor: 'transparent',
              elevation: 0,
            },
          }}
        />
        <Tab.Screen
          name="Submit"
          component={SubmitScreen}
          options={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#09c',
            headerStyle: {
              backgroundColor: '#FEEAE3',
              shadowColor: 'transparent',
              elevation: 0,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </AccountProvider>
);

export default Navigation;
