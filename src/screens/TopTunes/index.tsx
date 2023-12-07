import React from 'react';
import {View} from 'react-native';
import {Winners} from '../../components/Anchors';
import {useTheme} from '../../hooks/useTheme';
import themedStyles from './styles';

const TopTunesScreen = () => {
  const styles = useTheme(themedStyles);
  return (
    <View style={[styles.screenContainer, styles.topTunesScreen]}>
      <Winners />
    </View>
  );
};

export default TopTunesScreen;
