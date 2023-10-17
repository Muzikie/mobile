import React from 'react';
import {Text, View} from 'react-native';
import AnchorsList from '../../components/AnchorsList';
import styles from './styles';

const HomeScreen = () => (
  <View style={[styles.screenContainer, styles.homeScreen]}>
    <Text style={styles.pageTitle}>Which song do you like?</Text>
    <AnchorsList />
  </View>
);

export default HomeScreen;
