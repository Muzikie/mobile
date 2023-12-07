import React from 'react';
import {Text, View} from 'react-native';
import {fonts} from '../../../config/stylesGuides';
import {useTheme} from '../../../hooks/useTheme';
import themedStyles from './styles';

const EmptyBadgeList = () => {
  const styles = useTheme(themedStyles);
  return (
    <View style={styles.wrapper}>
      <Text style={[fonts.base]}>No badges earned yet</Text>
    </View>
  );
};
export default EmptyBadgeList;
