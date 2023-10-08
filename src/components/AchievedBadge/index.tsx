import React from 'react';
import {Text, View} from 'react-native';
import Badge from '../Badge';
import {fonts} from '../../config/stylesGuides';
import type {AchievedBadgeProps} from './types';
import styles from './styles';

const AchievedBadge = ({item}: AchievedBadgeProps) => {
  const {title, count, type} = item;

  return (
    <View style={[styles.container, styles.row]}>
      <Badge style={styles.badge} name={type} />
      <View style={styles.info}>
        <Text style={[fonts.h4, styles.title]}>{title}</Text>
        <Text style={[fonts.base, styles.count]}>{`x ${count}`}</Text>
      </View>
    </View>
  );
};

export default AchievedBadge;
