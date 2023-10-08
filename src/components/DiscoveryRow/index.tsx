import React from 'react';
import {Text, Image, View, TouchableHighlight} from 'react-native';
import {fonts} from '../../config/stylesGuides';
import {truncateText} from '../../utils/helpers';
import styles from './styles';
import type {DiscoveryRowProps} from './types';

import thumbnail from '../../assets/images/discovery-thumbnail.png';
import upvoteIcon from '../../assets/images/upvote.png';

const DiscoveryRow = ({item}: DiscoveryRowProps) => {
  const {title, artist, submitter} = item;

  const listen = () => {};
  const upvote = () => {};

  return (
    <View style={[styles.container, styles.row]}>
      <TouchableHighlight onPress={listen} style={[styles.link, styles.row]}>
        <>
          <Image source={thumbnail} style={styles.thumbnail} />
          <View>
            <Text style={[fonts.h4, styles.title]}>
              {truncateText(title, 25)}
            </Text>
            <View style={styles.row}>
              <Text style={fonts.base}>{truncateText(artist, 15)}</Text>
              <Text style={fonts.base}> • </Text>
              <Text style={fonts.base}>{truncateText(submitter, 10)}</Text>
            </View>
          </View>
        </>
      </TouchableHighlight>
      <TouchableHighlight onPress={upvote} style={styles.button}>
        <Image source={upvoteIcon} style={styles.upvoteIcon} />
      </TouchableHighlight>
    </View>
  );
};

export default DiscoveryRow;
