import React from 'react';
import {Text, Image, View, TouchableHighlight, Linking} from 'react-native';
import {truncateText} from '../../../utils/helpers';
import styles from './styles';
import type {WinnerRowProps} from './types';

const shorten = (date: string) => {
  const dateArray = date.split('-');
  const day = dateArray[2];
  const month = dateArray[1];
  return `${day}.${month}`;
};

const WinnerRow = ({item}: WinnerRowProps) => {
  const {name, artists, submitter, images} = item;

  const openSpotifyLink = async (songID: string) => {
    // Check if Spotify app is installed
    let isSpotifyInstalled = false;
    isSpotifyInstalled = await Linking.canOpenURL('spotify:');
    if (isSpotifyInstalled) {
      // Open the Spotify app
      await Linking.openURL(`spotify:track:${songID}`);
    } else {
      // If Spotify app is not installed, open the default browser
      await Linking.openURL(`https://open.spotify.com/track/${songID}`);
    }
  };

  return (
    <TouchableHighlight
      onPress={() => openSpotifyLink(item.spotifyId)}
      underlayColor="transparent"
      style={[styles.container, styles.row]}>
      <>
        <View style={[styles.link, styles.row]}>
          <Image source={{uri: images[0].url}} style={styles.thumbnail} />
          <View style={styles.info}>
            <Text style={styles.submitter}>{truncateText(submitter, 10)}</Text>
            <Text style={styles.title}>{truncateText(name, 25)}</Text>
            <Text style={styles.artist}>{truncateText(artists, 15)}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.date}>{shorten(item.createdAt)}</Text>
          {item.rank && (
            <View style={styles.rankWrapper}>
              <Text style={styles.hashTag}>#</Text>
              <Text style={styles.rank}>{item.rank}</Text>
            </View>
          )}
        </View>
      </>
    </TouchableHighlight>
  );
};

export default WinnerRow;
