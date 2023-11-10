import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {fromBaseToken} from '../../utils/formatters';
import AchievedBadge from '../../components/AchievedBadge';
import Avatar from '../../components/Avatar';
import Wallet from '../../components/Wallet';
import UnclaimedBadges from '../../components/UnclaimedBadges';
import styles from './styles';
import {useAccount} from '../../hooks/useAccount';
import {fonts} from '../../config/stylesGuides';
import {useFetchBadges} from '../../hooks/useFetchBadges';

const BadgesHeader = ({title}: {title: string}) => (
  <Text style={styles.pageTitle}>{title}</Text>
);

const EmptyBadgeList = () => (
  <View style={styles.emptyState}>
    <Text style={[fonts.base]}>No badges earned yet</Text>
  </View>
);

const ProfileScreen = () => {
  const {account} = useAccount();
  const {badgesStats, unclaimed} = useFetchBadges();
  const balance = account?.balances.length
    ? fromBaseToken(account?.balances[0].availableBalance, 'MZK', 2)
    : '0 MZK';

  return (
    <ScrollView style={[styles.screenContainer, styles.profileScreen]}>
      <View>
        <View style={styles.details}>
          <Avatar />
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
