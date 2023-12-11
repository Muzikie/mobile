import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import {usePresets} from '../../hooks/usePresets';
import {useTransaction} from '../../hooks/useTransaction';
import themedStyles from './styles';
import {Button, Icon} from '../Elements';
import {colors} from '../../config/stylesGuides';
import {COMMANDS, MODULES} from '../../config/constants';
import {FetchStatus} from '../../config/types';
import {ConfirmProps} from './types';

const Confirm = ({anchor, onDone}: ConfirmProps) => {
  const styles = useTheme(themedStyles);
  const {presets} = usePresets();
  const {signAndBroadcast, broadcastStatus, reset} = useTransaction();

  const onPress = async () => {
    // Submit the song data to the blockchain
    await signAndBroadcast({
      params: {
        ...anchor,
        appleMusicId: '',
      },
      module: MODULES.ANCHOR,
      command: COMMANDS.CREATE,
    });
  };

  useEffect(() => {
    if (
      broadcastStatus.status === FetchStatus.success ||
      broadcastStatus.status === FetchStatus.error
    ) {
      reset();
      onDone(broadcastStatus);
    }
  }, [broadcastStatus, reset, onDone]);

  return (
    <View style={styles.confirmWrapper}>
      <Icon
        name="feather"
        color={colors[presets.theme].primaryStrong}
        size={50}
        style={styles.icon}
      />
      <Text style={styles.text}>
        You’re about to share a tune, and other users will love it!
      </Text>
      <Text style={styles.text}>
        You’ll pay a small fee of 0.0012 MZK and get a chance to win a prize.
      </Text>

      <View style={styles.actionBar}>
        <Button title="Continue" onPress={onPress} />
      </View>
    </View>
  );
};

export default Confirm;
