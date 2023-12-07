import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '../../../hooks/useTheme';
import themedStyles from './styles';

const HomeHeader = () => {
  const styles = useTheme(themedStyles);
  return (
    <View>
      <Text style={styles.pageTitle}>Songs of the day</Text>
    </View>
  );
};

export default HomeHeader;
