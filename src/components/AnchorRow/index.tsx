import React, {useState} from 'react';
import {Text, Image, View, TouchableHighlight, Linking} from 'react-native';
import {fonts} from '../../config/stylesGuides';
import Icon from '../Icon';
import {truncateText} from '../../utils/helpers';
import styles from './styles';
import type {AnchorRowProps} from './types';

const AnchorRow = ({
  item,
  onVote,
  address,
  votingEnabled = false,
}: AnchorRowProps) => {
  const [voted, setVoted] = useState(false);
  const {name, artists, submitter, votes, images} = item;

  const onPress = () => {
    setVoted(true);
    onVote();
  };

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
    <View style={[styles.container, styles.row]}>
      <TouchableHighlight
        onPress={() => openSpotifyLink(item.spotifyId)}
        underlayColor="transparent"
        style={[styles.link, styles.row]}>
        <>
          <Image source={{uri: images[0].url}} style={styles.thumbnail} />
          <View>
            <Text style={[fonts.h4, styles.title]}>
              {truncateText(name, 25)}
            </Text>
            <View style={styles.row}>
              <Text style={fonts.base}>{truncateText(artists, 15)}</Text>
              <Text style={fonts.base}> • </Text>
              <Text style={fonts.base}>{truncateText(submitter, 10)}</Text>
            </View>
          </View>
        </>
      </TouchableHighlight>
      {!voted &&
      votingEnabled &&
      votes.findIndex(voter => voter.senderAddress === address) === -1 ? (
        <TouchableHighlight
          onPress={onPress}
          underlayColor="transparent"
          style={styles.button}>
          <Icon name="UpVote" style={styles.upvoteIcon} />
        </TouchableHighlight>
      ) : null}
    </View>
  );
};

export default AnchorRow;
