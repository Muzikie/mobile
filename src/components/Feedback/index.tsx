import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {FeedbackProps} from './types';
import {FetchStatus} from '../../config/types';

const messages = {
  [FetchStatus.idle]: '',
  [FetchStatus.pending]: '',
  [FetchStatus.success]: 'Thank you for sharing.',
  [FetchStatus.error]: 'Oops, try again later.',
};

const Feedback = ({style, status, message}: FeedbackProps) => (
  <View style={[styles.wrapper, style]}>
    <Text style={status === FetchStatus.error ? styles.error : styles.success}>
      {message || messages[status]}
    </Text>
  </View>
);

export default Feedback;
