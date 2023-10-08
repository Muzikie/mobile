import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import type {AvatarProps} from './types';

import avatarPlaceholder from '../../assets/images/avatar-placeholder.png';

const Avatar = ({style, source}: AvatarProps) => (
  <View style={[styles.wrapper, style]}>
    <Image source={source || avatarPlaceholder} style={styles.avatar} />
  </View>
);

export default Avatar;
