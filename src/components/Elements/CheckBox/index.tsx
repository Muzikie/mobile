/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {Icon} from '../Icon';
import {fonts} from '../../../config/stylesGuides';
import {useTheme} from '../../../hooks/useTheme';
import {CheckboxProps} from './types';
import themedStyles from './styles';

const Checkbox = ({
  title, selected, onSelect, style,
}: CheckboxProps) => {
  const styles = useTheme(themedStyles);
  const selectedStyle = selected ? styles.selected : {};

  return (
    <TouchableHighlight
      underlayColor="transparent"
      onPress={onSelect}
      style={[styles.container, styles.rowNoWrap, style]}>
      <>
        <View>
          <Text style={[fonts.h4, styles.title]}>{title}</Text>
        </View>
        <View style={[styles.box, selectedStyle]}>
          {selected && <Icon name="check" />}
        </View>
      </>
    </TouchableHighlight>
  );
}

export default Checkbox;
