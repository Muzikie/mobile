import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {FeedbackProps, SubmissionStatuses} from './types';

const Feedback = ({style, status, message}: FeedbackProps) => {
  if (status === SubmissionStatuses.pending) {
    return null;
  }

  return (
    <View style={[styles.wrapper, style]}>
      <Text
        style={
          status === SubmissionStatuses.error ? styles.error : styles.success
        }>
        {message || 'Oops, try again later.'}
      </Text>
    </View>
  );
};

export default Feedback;
