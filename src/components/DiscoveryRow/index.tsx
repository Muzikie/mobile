import React from 'react';
import {Text, Image, View, TouchableHighlight} from 'react-native';
import {fonts} from '../../config/stylesGuides';
import Icon from '../Icon';
import {truncateText} from '../../utils/helpers';
import styles from './styles';
import type {DiscoveryRowProps} from './types';

import thumbnail from '../../assets/images/discovery-thumbnail.png';

const DiscoveryRow = ({item}: DiscoveryRowProps) => {
  const {name, artists, submitter} = item;

  const listen = () => {};
  const upvote = () => {};

  return (
    <View style={[styles.container, styles.row]}>
      <TouchableHighlight
        onPress={listen}
        underlayColor="transparent"
        style={[styles.link, styles.row]}>
        <>
          <Image source={thumbnail} style={styles.thumbnail} />
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
      <TouchableHighlight
        onPress={upvote}
        underlayColor="transparent"
        style={styles.button}>
        <Icon name="UpVote" style={styles.upvoteIcon} />
      </TouchableHighlight>
    </View>
  );
};

export default DiscoveryRow;
