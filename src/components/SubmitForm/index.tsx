import React, {useEffect, useRef} from 'react';
import {TextInput, View, Keyboard} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import themedStyles from './styles';
import {Button} from '../Elements';
import {ButtonThemes} from '../Elements/Button/types';
import Feedback from '../Feedback';
import Preview from '../Preview';
import {useFetchTrack} from '../../hooks/useFetchTrack';
import {useTransaction} from '../../hooks/useTransaction';
import {usePresets} from '../../hooks/usePresets';
import {useModal} from '../../hooks/useModal';
import {useAccount} from '../../hooks/useAccount';
import {FetchStatus, Timeout} from '../../config/types';
import {getStatus} from './utils';
import type {SubmitFormProps} from './types';
import Confirm from './Confirm';
import {COMMANDS, MODULES} from '../../config/constants';
import {colors} from '../../config/stylesGuides';

const SubmitForm = ({style}: SubmitFormProps) => {
  const timer = useRef<Timeout>();
  const {account} = useAccount();
  const {
    anchor,
    url,
    feedback: fetchFeedback,
    updateUrl,
    reset: resetTrack,
  } = useFetchTrack();
  const {
    signAndBroadcast,
    broadcastStatus,
    reset: resetTransaction,
  } = useTransaction();
  const {show, hide} = useModal();
  const styles = useTheme(themedStyles);
  const {presets} = usePresets();

  const onSubmit = async () => {
    Keyboard.dismiss();
    if (anchor && account) {
      show({
        title: 'Looking good!',
        description: '',
        content: <Confirm />,
        onPrimaryPress: async () => {
          hide();
          // Submit the song data to the blockchain
          await signAndBroadcast({
            params: {
              ...anchor,
              appleMusicId: '',
            },
            module: MODULES.ANCHOR,
            command: COMMANDS.CREATE,
          });
        },
      });
    } else {
      // @todo Replace this with an error display prompt
      console.log('No anchor data to submit');
    }
  };

  useEffect(() => {
    if (broadcastStatus.status === FetchStatus.success) {
      timer.current = setTimeout(() => {
        resetTrack();
        resetTransaction();
      }, 2000);
    }
  }, [broadcastStatus, resetTrack, resetTransaction]);

  useEffect(
    () => () => {
      clearTimeout(timer.current);
    },
    [],
  );

  const status = getStatus(broadcastStatus.status, fetchFeedback.status);

  return (
    <View style={style}>
      <TextInput
        style={styles.input}
        placeholder="Spotify URL"
        onChangeText={updateUrl}
        value={url.value}
        placeholderTextColor={colors[presets.theme].neutralStrong}
      />
      <Preview fetchStatus={fetchFeedback.status} data={anchor} />
      <View style={styles.actionBar}>
        <Button
          title="Continue"
          theme={ButtonThemes.primary}
          onPress={onSubmit}
          disabled={fetchFeedback.status !== FetchStatus.success}
        />
      </View>
      <Feedback
        status={status}
        message={broadcastStatus.message || fetchFeedback.message}
      />
    </View>
  );
};

export default SubmitForm;
