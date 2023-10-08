import React from 'react';
import {View, Text, Image} from 'react-native';
import {fonts} from '../../config/stylesGuides';
import styles from './styles';
import type {MotivationProps} from './types';

const Motivation = ({style, item}: MotivationProps) => (
  <View style={[styles.motivation, style]}>
    <View style={styles.motivationContainer}>
      <Image source={item.source} style={styles.image} />
    </View>
    <Text style={[fonts.h3, styles.title]}>{item.title}</Text>
  </View>
);

export default Motivation;
