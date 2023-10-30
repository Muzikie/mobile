import React from 'react';
import {Text, Image, View, TouchableHighlight} from 'react-native';
import {fonts} from '../../config/stylesGuides';
import Icon from '../Icon';
import {truncateText} from '../../utils/helpers';
import styles from './styles';
import type {AnchorRowProps} from './types';

const AnchorRow = ({item, onVote, address}: AnchorRowProps) => {
  const {name, artists, submitter, votes, images} = item;

  const listen = () => {
    console.log('Implement the play functionality');
  };

  return (
    <View style={[styles.container, styles.row]}>
      <TouchableHighlight
        onPress={listen}
        underlayColor="transparent"
        style={[styles.link, styles.row]}>
        <>
          <Image source={{url: images[0].url}} style={styles.thumbnail} />
          <View>
            <Text style={[fonts.h4, styles.title]}>
              {truncateText(name, 25)}
            </Text>
            <View style={styles.row}>
              <Text style={fonts.base}>{truncateText(artists[0], 15)}</Text>
              <Text style={fonts.base}> • </Text>
              <Text style={fonts.base}>{truncateText(submitter, 10)}</Text>
            </View>
          </View>
        </>
      </TouchableHighlight>
      {votes.findIndex(voter => voter.senderAddress === address) === -1 ? (
        <TouchableHighlight
          onPress={onVote}
          underlayColor="transparent"
          style={styles.button}>
          <Icon name="UpVote" style={styles.upvoteIcon} />
        </TouchableHighlight>
      ) : null}
    </View>
  );
};

export default AnchorRow;