/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableHighlight, Linking} from 'react-native';
import Icon from '../Icon';
import {fonts} from '../../config/stylesGuides';
import {OptionProps} from './types';
import styles from './styles';

const Option = ({
  title, state, href, onPress, style,
}: OptionProps) => {
  const iconName = href ? 'link' : 'rightChev';

  if (href && !onPress) {
    onPress = () => {
      Linking.openURL(href);
    };
  }

  return (
    <TouchableHighlight
      underlayColor="transparent"
      onPress={onPress}
      style={[styles.container, styles.rowNoWrap, style]}>
      <>
        <View style={styles.titleWrapper}>
          <Text style={[fonts.h4, styles.title]}>{title}</Text>
        </View>
        <View style={styles.rowNoWrap}>
          <Text style={[fonts.base, styles.state]}>{state}</Text>
          <View style={styles.iconWrapper}>
            <Icon name={iconName} style={styles.icon} />
          </View>
        </View>
      </>
    </TouchableHighlight>
  );
}

export default Option;
