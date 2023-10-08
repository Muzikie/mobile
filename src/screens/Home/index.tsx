import React from 'react';
import {Text, View, FlatList} from 'react-native';
import DiscoveryRow from '../../components/DiscoveryRow';
import styles from './styles';

const data = [
  {title: 'Stars dance', artist: 'Lana del rey', submitter: 'hamid', id: '1'},
  {title: 'Rare', artist: 'KJ', submitter: 'ali', id: '2'},
  {title: 'Remmber', artist: 'Ebi', submitter: 'ali', id: '3'},
  {title: 'The Next Episode', artist: 'Kiosk', submitter: 'ali', id: '4'},
  {title: 'How To Fight Loneliness', artist: 'Michael Jackson', submitter: 'ali', id: '5'},
  {title: 'Bang Bang (My Baby Shot Me Down)', artist: 'Cher', submitter: 'ali', id: '6'},
  {title: 'Roadmap', artist: 'Chloe Adams', submitter: 'ali', id: '7'},
  {title: 'Escapism', artist: 'RAYE & TO Shakes', submitter: 'ali', id: '8'},
];

const HomeScreen = () => {
  return (
    <View style={[styles.screenContainer, styles.homeScreen]}>
      <Text style={styles.pageTitle}>Which song do you like?</Text>
      <FlatList
        data={data}
        renderItem={DiscoveryRow}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;
