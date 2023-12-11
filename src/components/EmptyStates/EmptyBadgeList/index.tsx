import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '../../../hooks/useTheme';
import themedStyles from './styles';

const EmptyBadgeList = () => {
  const styles = useTheme(themedStyles);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>No badges earned yet</Text>
    </View>
  );
};
export default EmptyBadgeList;
