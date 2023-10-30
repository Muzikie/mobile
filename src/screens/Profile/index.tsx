import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {fromBaseToken} from '../../utils/formatters';
import AchievedBadge from '../../components/AchievedBadge';
import Avatar from '../../components/Avatar';
import Wallet from '../../components/Wallet';
import styles from './styles';
import {useAccount} from '../../hooks/useAccount';
import {fonts} from '../../config/stylesGuides';
import {useFetchBadges} from '../../hooks/useFetchBadges';

const BadgesHeader = () => <Text style={styles.pageTitle}>Badges</Text>;

const EmptyBadgeList = () => (
  <View style={styles.emptyState}>
    <Text style={[fonts.base]}>No badges earned yet</Text>
  </View>
);

const ProfileScreen = () => {
  const {account} = useAccount();
  const {badgesStats} = useFetchBadges();
  const balance = account?.balances.length
    ? fromBaseToken(account?.balances[0].availableBalance)
    : '0';

  return (
    <ScrollView style={[styles.screenContainer, styles.profileScreen]}>
      <View>
        <View style={styles.details}>
          <Avatar />
          <Wallet address={account?.address ?? ''} balance={balance} />
        </View>
      </View>

      <View>
        {badgesStats.length > 0 && <BadgesHeader />}
        {badgesStats.map(item => (
          <AchievedBadge item={item} key={item.type} />
        ))}
        {badgesStats.length === 0 && <EmptyBadgeList />}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
