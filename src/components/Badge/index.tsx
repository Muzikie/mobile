import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {Badges} from '../../config/types';
import {BadgeProps} from './types';

import dayBadge from '../../assets/images/badges/day-badge.png';
import weekBadge from '../../assets/images/badges/week-badge.png';
import monthBadge from '../../assets/images/badges/month-badge.png';

const badges = {
  [Badges.AOTD]: dayBadge,
  [Badges.AOTM]: weekBadge,
  [Badges.AOTW]: monthBadge,
};

const Badge = ({style, name}: BadgeProps) => (
  <View style={[styles.wrapper, style]}>
    <Image source={badges[name]} style={styles.badge} />
  </View>
);

export default Badge;
