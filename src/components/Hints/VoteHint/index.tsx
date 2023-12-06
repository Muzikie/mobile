import React from 'react';
import {View, Text, Image} from 'react-native';
import heart from '../../../assets/images/heart.png';
import styles from './styles';

const VoteHint = () => (
  <View style={styles.wrapper}>
    <Image source={heart} />
    <Text style={styles.description}>
      Help others find and enjoy listening. Most popular tunes receive badge and
      prize.
    </Text>
    <Text style={styles.punchline}>Be the one to share and win!</Text>
  </View>
);

export default VoteHint;
