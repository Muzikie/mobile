import React from 'react';
import {View} from 'react-native';
import {Badge} from '../../config/types';
import {useTransaction} from '../../hooks/useTransaction';
import {useModal} from '../../hooks/useModal';
import UnclaimedBadge from '../UnclaimedBadge';
import {useTheme} from '../../hooks/useTheme';
import themedStyles from './styles';

const UnclaimedBadges = ({badges}: {badges: Badge[]}) => {
  const {show, hide} = useModal();
  const {signAndBroadcast, broadcastStatus} = useTransaction();
  const styles = useTheme(themedStyles);

  return (
    <View style={styles.wrapper}>
      {badges.map(badge => (
        <UnclaimedBadge
          key={badge.badgeID}
          badge={badge}
          show={show}
          hide={hide}
          signAndBroadcast={signAndBroadcast}
          broadcastStatus={broadcastStatus}
        />
      ))}
    </View>
  );
};

export default UnclaimedBadges;
