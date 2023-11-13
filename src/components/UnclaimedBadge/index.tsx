import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {fromBaseToken} from '../../utils/formatters';
import BadgeIcon from '../Badge';
import {BADGE_TITLES, FetchStatus} from '../../config/types';
import {fonts} from '../../config/stylesGuides';
import type {UnclaimedBadgeProps} from './types';
import Button from '../Button';
import {ButtonThemes} from '../Button/types';
import {COMMANDS, MODULES} from '../../config/constants';
import {bufferize} from '../../utils/helpers';
import styles from './styles';

const UnclaimedBadge = ({
  badge,
  show,
  hide,
  signAndBroadcast,
  broadcastStatus,
}: UnclaimedBadgeProps) => {
  const formattedPrize = fromBaseToken(badge.prize.toString(), 'MZK', 2);
  const badgeTitle = `${BADGE_TITLES[badge.type]} #${badge.rank}`;
  const title = 'Claim you badge and prize';
  const description = `You are about to claim your ${badgeTitle} badge and ${formattedPrize} prize.\nYou will pay a network fee of 0.0015 MZK.`;
  const tx = {
    params: {
      badgeID: bufferize(badge.badgeID),
    },
    module: MODULES.BADGE,
    command: COMMANDS.CLAIM,
  };

  useEffect(() => {
    if (broadcastStatus.status === FetchStatus.success) {
      hide();
    } else if (broadcastStatus.status === FetchStatus.error) {
      show({
        title: 'Error claiming your badge',
        description: broadcastStatus.message,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [broadcastStatus]);

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <BadgeIcon style={styles.badge} name={badge.type} />
        <Text style={[fonts.h4, styles.title]}>{badgeTitle}</Text>
        <Text style={[fonts.base, styles.grey, styles.awardDate]}>
          {`Awarded on ${badge.awardDate}`}
        </Text>
      </View>
      <View style={styles.action}>
        <View style={styles.prizeWrapper}>
          <Text style={[fonts.base, styles.grey, styles.prizeTitle]}>
            Prize
          </Text>
          <Text style={[fonts.h4, styles.title]}>{formattedPrize}</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Claim"
            onPress={() => {
              show({
                title,
                description,
                onPrimaryPress: () => signAndBroadcast(tx),
              });
            }}
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
