import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {BadgeNames, BadgeProps} from './types';

import dayBadge from '../../assets/images/badges/day-badge.png';
import weekBadge from '../../assets/images/badges/week-badge.png';
import monthBadge from '../../assets/images/badges/month-badge.png';
import videoBadge from '../../assets/images/badges/video-badge.png';
import superLinkBadge from '../../assets/images/badges/super-link-badge.png';

const badges = {
  [BadgeNames.day]: dayBadge,
  [BadgeNames.week]: weekBadge,
  [BadgeNames.month]: monthBadge,
  [BadgeNames.video]: videoBadge,
  [BadgeNames.superLink]: superLinkBadge,
};

const Badge = ({style, name}: BadgeProps) => (
  <View style={[styles.wrapper, style]}>
    <Image source={badges[name]} style={styles.badge} />
  </View>
);

export default Badge;
