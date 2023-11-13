import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import type {AvatarProps} from './types';
import {avatars} from './assets';

const Avatar = ({style, id}: AvatarProps) => (
  <View style={[styles.wrapper, style]}>
    <Image source={avatars[id]} style={styles.avatar} />
  </View>
);

export default Avatar;
