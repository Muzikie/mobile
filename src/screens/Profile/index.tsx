import React, {useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {fromBaseToken} from '../../utils/formatters';
import {mapAddressToNumber} from '../../utils/helpers';
import AchievedBadge from '../../components/AchievedBadge';
import Avatar from '../../components/Avatar';
import Wallet from '../../components/Wallet';
import UnclaimedBadges from '../../components/UnclaimedBadges';
import {FaucetHint} from '../../components/Hints';
import {EmptyBadgeList} from '../../components/EmptyState';
import {useAccount} from '../../hooks/useAccount';
import {useModal} from '../../hooks/useModal';
import {usePresets} from '../../hooks/usePresets';
import {useFetchBadges} from '../../hooks/useFetchBadges';
import styles from './styles';

const BadgesHeader = ({title}: {title: string}) => (
  <Text style={styles.pageTitle}>{title}</Text>
);

const CURRENT_HINT_VERSION = '0.1.0';

const ProfileScreen = () => {
  const {account} = useAccount();
  const {show, isVisible} = useModal();
  const {presets, storePresets} = usePresets();
  const {badgesStats, unclaimed} = useFetchBadges();
  const balance = account?.balances?.length
    ? fromBaseToken(account?.balances[0].availableBalance, 'MZK', 2)
    : '0 MZK';

  useEffect(() => {
    if (
      balance === '0 MZK' &&
      presets?.visitedFaucetVersion !== CURRENT_HINT_VERSION &&
      !isVisible
    ) {
      storePresets({visitedFaucetVersion: CURRENT_HINT_VERSION});
      show({
        title: 'Get free tokens',
        description: '',
        content: <FaucetHint />,
      });
    }
  }, [balance, show, isVisible, storePresets, presets.visitedFaucetVersion]);

  return (
    <ScrollView style={[styles.screenContainer, styles.profileScreen]}>
      <View>
        <View style={styles.details}>
          <Avatar id={mapAddressToNumber(account?.address)} />
          <Wallet address={account?.address ?? ''} balance={balance} />
        </View>
      </View>

      <View>
        {badgesStats.length > 0 && <BadgesHeader title="Badges" />}
        {badgesStats.map(item => (
          <AchievedBadge item={item} key={item.type} />
        ))}
        {badgesStats.length === 0 && <EmptyBadgeList />}
        {unclaimed.length > 0 && <BadgesHeader title="Claim your prize" />}
        {unclaimed.length > 0 && <UnclaimedBadges badges={unclaimed} />}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
