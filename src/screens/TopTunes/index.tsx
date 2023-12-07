import React from 'react';
import {View} from 'react-native';
import {Winners} from '../../components/Anchors';
import styles from './styles';

const TopTunesScreen = () => (
  <View style={[styles.screenContainer, styles.topTunesScreen]}>
    <Winners />
  </View>
);

export default TopTunesScreen;
