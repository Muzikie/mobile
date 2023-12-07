import React from 'react';
import {TouchableHighlight, Text, View} from 'react-native';
import {useTheme} from '../../../hooks/useTheme';
import themedStyles from './styles';
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
  const styles = useTheme(themedStyles);
  const disabledTouchable = disabled ? styles.disabled : {};
  const disabledText = disabled
    ? styles.disabled
    : styles[theme || ButtonThemes.purple];
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <View
        style={[
          styles.shadowWrapper,
          shadow === false || disabled ? {} : styles.shadow,
        ]}>
        <TouchableHighlight
          disabled={disabled}
          onPress={onPress}
          underlayColor="transparent"
          style={[styles.touchable, disabledTouchable, style]}>
          <Text style={[styles.title, disabledText]}>{title}</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Button;
