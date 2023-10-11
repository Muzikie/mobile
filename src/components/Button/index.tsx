import React from 'react';
import {TouchableHighlight, Text, View} from 'react-native';
import styles from './styles';
import {ButtonProps, ButtonThemes} from './types';

const Button = ({onPress, style, theme, title}: ButtonProps) => (
  <View style={styles.wrapper}>
    <View style={styles.shadowWrapper}>
      <TouchableHighlight
        onPress={onPress}
        underlayColor="transparent"
        style={[styles.touchable, style]}>
        <Text style={[styles.title, styles[theme || ButtonThemes.purple]]}>
          {title}
        </Text>
      </TouchableHighlight>
    </View>
  </View>
);

export default Button;
