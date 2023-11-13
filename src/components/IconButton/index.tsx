import React from 'react';
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
  Text,
  View,
} from 'react-native';
import Icon from '../Icon';
import {IconButtonProps} from './types';
import styles from './styles';

const IconButton = ({onPress, style, iconSize, iconName}: IconButtonProps) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={[styles.wrapper, style]}>
      <Icon name={iconName} size={iconSize} style={styles.icon} />
      <TouchableHighlight
        onPress={onPress}
        underlayColor="transparent"
        style={styles.touchable}>
        <Text style={styles.text}>.</Text>
      </TouchableHighlight>
    </View>
  </TouchableWithoutFeedback>
);

export default IconButton;
