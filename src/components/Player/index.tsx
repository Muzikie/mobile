import React from 'react';
import {View, Text} from 'react-native';
import type {PlayerProps} from './types';
import {PlayButtonStatus} from '../PlayButton/types';
import PlayButton from '../PlayButton';
import {fonts} from '../../config/stylesGuides';
import {useTheme} from '../../hooks/useTheme';
import themedStyles from './styles';

const Player = ({style}: PlayerProps) => {
  const styles = useTheme(themedStyles);
  return (
    <View style={[styles.wrapper, style]}>
      <PlayButton onPress={() => {}} status={PlayButtonStatus.PAUSED} />
      <View style={styles.info}>
        <Text style={[fonts.h4, styles.songTitle]}>Revival</Text>
        <Text style={[fonts.base, styles.artist]}>Marlyn Manson</Text>
      </View>
    </View>
  );
};

export default Player;
