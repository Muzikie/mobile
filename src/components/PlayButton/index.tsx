import React from 'react';
import {TouchableHighlight} from 'react-native';
import {Icon} from '../Elements';
import {colors} from '../../config/stylesGuides';
import {PlayButtonProps, PlayButtonStatus} from './types';
import {useTheme} from '../../hooks/useTheme';
import themedStyles from './styles';

const icons = {
  [PlayButtonStatus.PLAYING]: 'Pause',
  [PlayButtonStatus.PAUSED]: 'Play',
  [PlayButtonStatus.STOPPED]: 'Stop',
};

const PlayButton = ({onPress, status, style}: PlayButtonProps) => {
  const styles = useTheme(themedStyles);
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.light.purple}
      style={[styles.wrapper, style]}>
      <Icon
        name={icons[status]}
        color={colors.light.white}
        style={styles.icon}
      />
    </TouchableHighlight>
  );
};

export default PlayButton;
