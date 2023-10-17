import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import Button from '../Button';
import {ButtonThemes} from '../Button/types';
import Feedback from '../Feedback';
import Preview from '../Preview';
import {useFetchTrack} from '../../hooks/useFetchTrack';
import {useCreateAnchor} from '../../hooks/useCreateAnchor';
import {FetchStatus} from '../../config/types';
import type {SubmitFormProps} from './types';

const SubmitForm = ({style}: SubmitFormProps) => {
  const {url, anchor, feedback, updateUrl} = useFetchTrack();
  const {signAndBroadcast} = useCreateAnchor();

  const onSubmit = async () => {
    if (anchor) {
      // Submit the song data to the blockchain
      await signAndBroadcast({
        spotifyId: url,
        appleMusicId: '',
        ...anchor,
      });
    } else {
      // @todo Replace this with an error display prompt
      console.log('No anchor data to submit');
    }
  };

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
          disabled={feedback.status !== FetchStatus.success}
        />
        <Feedback status={feedback.status} message={feedback.message} />
        <Preview submissionStatus={feedback.status} data={anchor} />
      </View>
    </View>
  );
};

export default SubmitForm;
