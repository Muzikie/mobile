import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {FetchStatus} from '../../config/types';
import {colors} from '../../config/stylesGuides';
import styles from './styles';

export const ListFooter = ({status}: {status: FetchStatus}) => (
  <View style={styles.wrapper}>
    <ActivityIndicator
      size="large"
      color={
        status === FetchStatus.pending
          ? colors.light.purple
          : colors.light.beige
      }
    />
  </View>
);

export default ListFooter;
