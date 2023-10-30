import React from 'react';
import {View} from 'react-native';
import AnchorsList from '../../components/AnchorsList';
import styles from './styles';

const HomeScreen = () => (
  <View style={[styles.screenContainer, styles.homeScreen]}>
    <AnchorsList />
  </View>
);

export default HomeScreen;
