import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {colors} from '../../config/stylesGuides';
import styles from './styles';

export const ListFooter = () => (
  <View style={styles.wrapper}>
    <ActivityIndicator size="large" color={colors.light.purple} />
  </View>
);

export default ListFooter;
