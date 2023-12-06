import React from 'react';
import {View} from 'react-native';
import AnchorsList from '../../components/AnchorsList';
import {WinnersHeader} from '../../components/Headers';
import styles from './styles';

const WinnersScreen = () => (
  <View style={[styles.screenContainer, styles.winnersScreen]}>
    <AnchorsList filter="winner" header={WinnersHeader} />
  </View>
);

export default WinnersScreen;
