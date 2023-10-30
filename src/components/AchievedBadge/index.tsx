import React from 'react';
import {Text, View} from 'react-native';
import Badge from '../Badge';
import {Badges} from '../../config/types';
import {fonts} from '../../config/stylesGuides';
import type {AchievedBadgeProps} from './types';
import styles from './styles';

const titles = {
  [Badges.AOTD]: 'Song Of The Day',
  [Badges.AOTW]: 'Song Of The Week',
  [Badges.AOTM]: 'Song Of The Month',
};

const AchievedBadge = ({item}: AchievedBadgeProps) => {
  const {count, type} = item;

  return (
    <View style={[styles.container, styles.row]}>
      <Badge style={styles.badge} name={type} />
      <View style={styles.info}>
        <Text style={[fonts.h4, styles.title]}>{titles[type]}</Text>
        <Text style={[fonts.base, styles.count]}>{`x ${count}`}</Text>
      </View>
    </View>
  );
};

export default AchievedBadge;
