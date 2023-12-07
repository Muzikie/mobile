import React from 'react';
import {View, Text} from 'react-native';
import {usePresets} from '../../hooks/usePresets';
import {Icon} from '../Elements';
import Checkbox from '../Elements/CheckBox';
import {useTheme} from '../../hooks/useTheme';
import themedStyles from './styles';

const VoteConfirmation = () => {
  const {presets, storePresets} = usePresets();
  const styles = useTheme(themedStyles);

  const onSelect = () => {
    storePresets({skipVoteConfirmation: !presets.skipVoteConfirmation});
  };

  return (
    <View style={styles.wrapper}>
      <Icon name="heart" size={48} />
      <Text style={styles.description}>
        Thanks for helping others find and enjoy a good tune! You’ll pay a small
        fee of 0.05 MZK.
      </Text>
      <Checkbox
        onSelect={onSelect}
        selected={presets.skipVoteConfirmation}
        title="Don’t show this again"
        style={styles.checkbox}
      />
    </View>
  );
};

export default VoteConfirmation;
