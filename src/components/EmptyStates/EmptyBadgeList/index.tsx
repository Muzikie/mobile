import React from 'react';
import {Text, View} from 'react-native';
import {fonts} from '../../../config/stylesGuides';
import styles from './styles';

const EmptyBadgeList = () => (
  <View style={styles.wrapper}>
    <Text style={[fonts.base]}>No badges earned yet</Text>
  </View>
);

export default EmptyBadgeList;
