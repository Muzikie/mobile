import React from 'react';
import {TouchableHighlight, Text, View} from 'react-native';
import styles from './styles';
import {ButtonProps, ButtonThemes} from './types';

const Button = ({
  onPress,
  style,
  wrapperStyle,
  shadow,
  theme,
  title,
  disabled,
}: ButtonProps) => {
  const disabledStyle = disabled ? styles.disabled : {};
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <View
        style={[styles.shadowWrapper, shadow === false ? {} : styles.shadow]}>
        <TouchableHighlight
          disabled={disabled}
          onPress={onPress}
          underlayColor="transparent"
          style={[styles.touchable, disabledStyle, style]}>
          <Text style={[styles.title, styles[theme || ButtonThemes.purple]]}>
            {title}
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Button;
