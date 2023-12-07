import React, {useState} from 'react';
import {Text, Image, View, TouchableHighlight, Linking} from 'react-native';
import {Icon} from '../../Elements';
import VoteConfirmation from '../../VoteConfirmation';
import {truncateText} from '../../../utils/helpers';
import {useTheme} from '../../../hooks/useTheme';
import themedStyles from './styles';
import type {AnchorRowProps} from './types';

const AnchorRow = ({
  item,
  onVote,
  show,
  hide,
  skipVoteConfirmation,
  address,
}: AnchorRowProps) => {
  const [voted, setVoted] = useState(false);
  const styles = useTheme(themedStyles);
  const {name, artists, submitter, votes, images} = item;

  const onPress = () => {
    if (skipVoteConfirmation) {
      onVote();
      setVoted(true);
    } else {
      show({
        title: 'Vote',
        description: 'You’re about to vote a tune',
        content: <VoteConfirmation />,
        onPrimaryPress: () => {
          setVoted(true);
          onVote();
          hide();
        },
      });
    }
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
          <View style={styles.info}>
            <Text style={styles.submitter}>{truncateText(submitter, 10)}</Text>
            <Text style={styles.title}>{truncateText(name, 25)}</Text>
            <Text style={styles.artist}>{truncateText(artists, 15)}</Text>
          </View>
        </>
      </TouchableHighlight>
      {!voted &&
      votes.findIndex(voter => voter.senderAddress === address) === -1 ? (
        <TouchableHighlight
          onPress={onPress}
          underlayColor="transparent"
          style={styles.button}>
          <Icon name="heart" size={16} />
        </TouchableHighlight>
      ) : null}
    </View>
  );
};

export default AnchorRow;
