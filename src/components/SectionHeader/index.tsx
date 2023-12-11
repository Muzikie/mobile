import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import themedStyles from './styles';
import {SectionHeaderProps} from './types';

const SectionHeader = ({title, subtitle, style}: SectionHeaderProps) => {
  const styles = useTheme(themedStyles);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

export default SectionHeader;
