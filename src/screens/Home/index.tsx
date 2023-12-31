import React from 'react';
import {View, Text} from 'react-native';
import AnchorsList from '../../components/AnchorsList';
import styles from './styles';

const Header = () => (
  <View>
    <Text style={styles.pageTitle}>Which song do you like?</Text>
  </View>
);

const HomeScreen = () => (
  <View style={[styles.screenContainer, styles.homeScreen]}>
    <AnchorsList filter="all" header={Header} />
  </View>
);

export default HomeScreen;
