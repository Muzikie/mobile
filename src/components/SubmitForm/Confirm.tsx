import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import themedStyles from './styles';
import {Icon} from '../Elements';
import {colors} from '../../config/stylesGuides';

const Confirm = () => {
  const styles = useTheme(themedStyles);
  return (
    <View style={styles.confirmWrapper}>
      <Icon
        name="feather"
        color={colors.light.purple}
        size={50}
        style={styles.icon}
      />
      <Text style={styles.text}>
        You’re about to share a tune, and other users will love it!
      </Text>
      <Text style={styles.text}>
        You’ll pay a small fee of 0.0012 MZK and get a chance to win a prize.
      </Text>
    </View>
  );
};

export default Confirm;
