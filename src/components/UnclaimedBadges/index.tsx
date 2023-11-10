import React from 'react';
import {View} from 'react-native';
import {Badge} from '../../config/types';
import UnclaimedBadge from '../UnclaimedBadge';
import styles from './styles';

const UnclaimedBadges = ({badges}: {badges: Badge[]}) => (
  <View style={styles.wrapper}>
    {badges.map(badge => (
      <UnclaimedBadge badge={badge} />
    ))}
  </View>
);

export default UnclaimedBadges;
