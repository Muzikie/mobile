/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, FlatList} from 'react-native';
import DiscoveryRow from '../../components/DiscoveryRow';
import styles from './styles';
import { Link } from '../../config/types';

const data = [
  {name: 'Stars dance', artists: ['Lana del rey'], album: 'Some Album', submitter: {name: 'Hamid H.', username: 'hamid', address: 'lskhqy429nwm2tew3j5j29ef6pguyynf6jxcmgrh2'}, spotifyID: '1', appleMusicId: '', images: [{width: 64, height: 64, url: 'https://i.scdn.co/image/ab67616d0000485180c82761e4335b3a6ae6f7c5'}]},
  {name: 'Rare', artists: ['KJ'], album: 'Some Album', submitter: {name: 'Ali H.', username: 'ali', address: 'lskk3qzuz8rpbpqd9j9mwwed2gd2dn39pqpdfgwyh'}, spotifyID: '2', appleMusicId: '', images: [{width: 64, height: 64, url: 'https://i.scdn.co/image/ab67616d0000485180c82761e4335b3a6ae6f7c5'}]},
  {name: 'Remmber', artists: ['Ebi'], album: 'Some Album', submitter: {name: 'Ali H.', username: 'ali', address: 'lskk3qzuz8rpbpqd9j9mwwed2gd2dn39pqpdfgwyh'}, spotifyID: '3', appleMusicId: '', images: [{width: 64, height: 64, url: 'https://i.scdn.co/image/ab67616d0000485180c82761e4335b3a6ae6f7c5'}]},
  {name: 'The Next Episode', artists: ['Kiosk'], album: 'Some Album', submitter: {name: 'Ali H.', username: 'ali', address: 'lskk3qzuz8rpbpqd9j9mwwed2gd2dn39pqpdfgwyh'}, spotifyID: '4', appleMusicId: '', images: [{width: 64, height: 64, url: 'https://i.scdn.co/image/ab67616d0000485180c82761e4335b3a6ae6f7c5'}]},
  {name: 'How To Fight Loneliness', artists: ['Michael Jackson'], album: 'Some Album', submitter: {name: 'Ali H.', username: 'ali', address: 'lskk3qzuz8rpbpqd9j9mwwed2gd2dn39pqpdfgwyh'}, spotifyID: '5', appleMusicId: '', images: [{width: 64, height: 64, url: 'https://i.scdn.co/image/ab67616d0000485180c82761e4335b3a6ae6f7c5'}]},
  {name: 'Bang Bang (My Baby Shot Me Down)', artists: ['Cher'], album: 'Some Album', submitter: {name: 'Ali H.', username: 'ali', address: 'lskk3qzuz8rpbpqd9j9mwwed2gd2dn39pqpdfgwyh'}, spotifyID: '6', appleMusicId: '', images: [{width: 64, height: 64, url: 'https://i.scdn.co/image/ab67616d0000485180c82761e4335b3a6ae6f7c5'}]},
  {name: 'Roadmap', artists: ['Chloe Adams'], album: 'Some Album', submitter: {name: 'Ali H.', username: 'ali', address: 'lskk3qzuz8rpbpqd9j9mwwed2gd2dn39pqpdfgwyh'}, spotifyID: '7', appleMusicId: '', images: [{width: 64, height: 64, url: 'https://i.scdn.co/image/ab67616d0000485180c82761e4335b3a6ae6f7c5'}]},
  {name: 'Escapism', artists: ['RAYE & TO Shakes'], album: 'Some Album', submitter: {name: 'Ali H.', username: 'ali', address: 'lskk3qzuz8rpbpqd9j9mwwed2gd2dn39pqpdfgwyh'}, spotifyID: '8', appleMusicId: '', images: [{width: 64, height: 64, url: 'https://i.scdn.co/image/ab67616d0000485180c82761e4335b3a6ae6f7c5'}]},
];

const HomeScreen = () => {
  return (
    <View style={[styles.screenContainer, styles.homeScreen]}>
      <Text style={styles.pageTitle}>Which song do you like?</Text>
      <FlatList
        data={data as Link[]}
        renderItem={DiscoveryRow}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default HomeScreen;
