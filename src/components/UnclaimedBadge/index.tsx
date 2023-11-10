import React from 'react';
import {Text, View} from 'react-native';
import {fromBaseToken} from '../../utils/formatters';
import Badge from '../Badge';
import {BADGE_TITLES} from '../../config/types';
import {fonts} from '../../config/stylesGuides';
import type {UnclaimedBadgeProps} from './types';
import Button from '../Button';
import {ButtonThemes} from '../Button/types';
import styles from './styles';

const UnclaimedBadge = ({badge}: UnclaimedBadgeProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Badge style={styles.badge} name={badge.type} />
        <Text style={[fonts.h4, styles.title]}>{BADGE_TITLES[badge.type]}</Text>
        <Text style={[fonts.base, styles.grey, styles.awardDate]}>
          {`Awarded on ${badge.awardDate}`}
        </Text>
      </View>
      <View style={styles.action}>
        <View style={styles.prizeWrapper}>
          <Text style={[fonts.base, styles.grey, styles.prizeTitle]}>Prize</Text>
          <Text style={[fonts.h4, styles.title]}>
            {fromBaseToken(badge.prize.toString(), 'MZK', 2)}
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Claim"
            onPress={() => {}}
            shadow={false}
            theme={ButtonThemes.white}
            style={styles.claim}
          />
        </View>
      </View>
    </View>
  );
};

export default UnclaimedBadge;
