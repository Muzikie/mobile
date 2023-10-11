import React from 'react';
import {TouchableHighlight} from 'react-native';
import Icon from '../Icon';
import {colors} from '../../config/stylesGuides';
import {PlayButtonProps, PlayButtonStatus} from './types';
import styles from './styles';

const icons = {
  [PlayButtonStatus.PLAYING]: 'Pause',
  [PlayButtonStatus.PAUSED]: 'Play',
  [PlayButtonStatus.STOPPED]: 'Stop',
};

const PlayButton = ({onPress, status, style}: PlayButtonProps) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor={colors.light.purple}
    style={[styles.wrapper, style]}>
    <Icon name={icons[status]} color={colors.light.white} style={styles.icon} />
  </TouchableHighlight>
);

export default PlayButton;
