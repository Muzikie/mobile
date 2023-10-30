import React from 'react';
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
import type {SubmitFormProps} from './types';
import {COMMANDS, MODULES} from '../../config/constants';

const getStatus = (
  broadcastStatus: FetchStatus,
  fetchStatus: FetchStatus,
): FetchStatus => {
  // FetchStatus.idle id both are idle
  if (
    broadcastStatus === FetchStatus.idle &&
    fetchStatus === FetchStatus.idle
  ) {
    return FetchStatus.idle;
  }
  // FetchStatus.pending if either is pending
  if (
    broadcastStatus === FetchStatus.pending ||
    fetchStatus === FetchStatus.pending
  ) {
    return FetchStatus.pending;
  }
  // FetchStatus.success if both are success
  if (
    (broadcastStatus === FetchStatus.success &&
      fetchStatus !== FetchStatus.error) ||
    (broadcastStatus !== FetchStatus.error &&
      fetchStatus === FetchStatus.success)
  ) {
    return FetchStatus.success;
  }
  // FetchStatus.error if either is error
  return FetchStatus.error;
};

const SubmitForm = ({style}: SubmitFormProps) => {
  const {account} = useAccount();
  const {anchor, feedback: fetchFeedback, updateUrl} = useFetchTrack();
  const {signAndBroadcast, broadcastStatus} = useTransaction();

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

  const status = getStatus(broadcastStatus.status, fetchFeedback.status);

  return (
    <View style={[styles.wrapper, style]}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Song link"
          onChangeText={updateUrl}
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
        <Preview submissionStatus={status} data={anchor} />
      </View>
    </View>
  );
};

export default SubmitForm;
