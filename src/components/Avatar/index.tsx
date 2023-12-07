import React from 'react';
import {View, Image} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import themedStyles from './styles';
import type {AvatarProps} from './types';
import {avatars} from './assets';

const Avatar = ({style, id}: AvatarProps) => {
  const styles = useTheme(themedStyles);
  return (
    <View style={[styles.wrapper, style]}>
      <Image source={avatars[id]} style={styles.avatar} />
    </View>
  );
};

export default Avatar;
