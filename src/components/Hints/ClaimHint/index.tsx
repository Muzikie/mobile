import React from 'react';
import {Text, View, Image} from 'react-native';
import party from '../../../assets/images/party.png';
import styles from './styles';
import {ClaimHintProps} from './types';

const ClaimHint = ({formattedPrize, badgeTitle}: ClaimHintProps) => (
  <View style={styles.wrapper}>
    <Image source={party} style={styles.image} />
    <View style={styles.descriptionWrapper}>
      <Text style={styles.description}>
        You are about to claim your&nbsp;
        <Text style={styles.bold}>{badgeTitle}</Text>
        &nbsp;badge and&nbsp;
        <Text style={styles.bold}>{formattedPrize}</Text>
        &nbsp;prize. You will pay a network fee of 0.0015 MZK.
      </Text>
    </View>
  </View>
);

export default ClaimHint;
