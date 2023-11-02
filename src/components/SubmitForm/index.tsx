import React, {useEffect, useRef} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import Button from '../Button';
import {ButtonThemes} from '../Button/types';
import Feedback from '../Feedback';
import Preview from '../Preview';
import {useFetchTrack} from '../../hooks/useFetchTrack';
import {useTransaction} from '../../hooks/useTransaction';
import {useAccount} from '../../hooks/useAccount';
import {FetchStatus} from '../../config/types';
import {getStatus} from './utils';
import type {SubmitFormProps} from './types';
import {COMMANDS, MODULES} from '../../config/constants';

const SubmitForm = ({style}: SubmitFormProps) => {
  const timer = useRef<NodeJS.Timeout>();
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

  const onSubmit = async () => {
    if (anchor && account) {
      // Submit the song data to the blockchain
      await signAndBroadcast({
        params: {
          ...anchor,
          appleMusicId: '',
        },
        module: MODULES.ANCHOR,
        command: COMMANDS.CREATE,
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
  }, [broadcastStatus, resetTrack, resetTransaction, fetchFeedback, url]);

  useEffect(
    () => () => {
      clearTimeout(timer.current);
    },
    [],
  );

  const status = getStatus(broadcastStatus.status, fetchFeedback.status);

  return (
    <View style={[styles.wrapper, style]}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Spotify URL"
          onChangeText={updateUrl}
          value={url.value}
        />
        <Button
          title="Submit"
          theme={ButtonThemes.purple}
          onPress={onSubmit}
          disabled={fetchFeedback.status !== FetchStatus.success}
        />
        <Feedback
          status={status}
          message={broadcastStatus.message || fetchFeedback.message}
        />
        <Preview fetchStatus={fetchFeedback.status} data={anchor} />
      </View>
    </View>
  );
};

export default SubmitForm;
