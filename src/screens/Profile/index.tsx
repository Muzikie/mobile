import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import AchievedBadge from '../../components/AchievedBadge';
import Avatar from '../../components/Avatar';
import Wallet from '../../components/Wallet';
import styles from './styles';
import {fonts} from '../../config/stylesGuides';

const data = [
  {title: 'Song Of The Day', type: 'dayBadge', count: 23},
  {title: 'Song Of The Week', type: 'weekBadge', count: 7},
  {title: 'Song Of The Month', type: 'monthBadge', count: 1},
  {title: 'Video Of The Day', type: 'videoBadge', count: 1},
  {title: 'Super Link', type: 'superLinkBadge', count: 2},
];
const profile = {
  name: 'Full Name',
  username: 'username',
  address: 'lskh96jgzfftzff2fta2zvsmba9mvs5cnz9ahr3ke',
  balance: '12.5 MZK',
};

const HomeScreen = () => {
  return (
    <ScrollView style={[styles.screenContainer, styles.profileScreen]}>
      <View>
        <Text style={styles.pageTitle}>Profile</Text>
        <View style={styles.details}>
          <Avatar />
          <Text style={[styles.name, fonts.h1]}>{profile.name}</Text>
          <Text style={[styles.username, fonts.h2]}>{profile.username}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.pageTitle}>Badges</Text>
        {data.map(item => (
          <AchievedBadge item={item} key={item.title} />
        ))}
      </View>

      <Wallet address={profile.address} balance={profile.balance} />
    </ScrollView>
  );
};

export default HomeScreen;
