import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import Button from '../Button';
import {ButtonThemes} from '../Button/types';
import Feedback from '../Feedback';
import {SubmissionStatuses} from '../Feedback/types';
import Preview from '../Preview';
import type {SubmitFormProps} from './types';

const SubmitForm = ({style}: SubmitFormProps) => {
  const onSubmit = () => {};

  return (
    <View style={[styles.wrapper, style]}>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Song link" />
        <Button title="Submit" theme={ButtonThemes.purple} onPress={onSubmit} />
        <Feedback status={SubmissionStatuses.pending} message="" />
        <Preview submissionStatus={SubmissionStatuses.pending} />
      </View>
    </View>
  );
};

export default SubmitForm;
