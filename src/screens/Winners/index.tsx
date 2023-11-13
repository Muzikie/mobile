import React from 'react';
import {View, Text} from 'react-native';
import AnchorsList from '../../components/AnchorsList';
import styles from './styles';

const Header = () => (
  <View>
    <Text style={styles.pageTitle}>Top songs</Text>
  </View>
);

const HomeScreen = () => (
  <View style={[styles.screenContainer, styles.winnersScreen]}>
    <AnchorsList filter="winner" header={Header} />
  </View>
);

export default HomeScreen;
