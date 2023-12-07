import React from 'react';
import {Text} from 'react-native';
import {useTheme} from '../../../hooks/useTheme';
import themedStyles from './styles';

const BadgesHeader = ({title}: {title: string}) => {
  const styles = useTheme(themedStyles);
  return <Text style={styles.pageTitle}>{title}</Text>;
};

export default BadgesHeader;
