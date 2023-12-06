import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const BadgesHeader = ({title}: {title: string}) => (
  <Text style={styles.pageTitle}>{title}</Text>
);

export default BadgesHeader;
