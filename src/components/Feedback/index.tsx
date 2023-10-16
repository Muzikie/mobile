import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {FeedbackProps} from './types';
import {FetchStatus} from '../../config/types';

const Feedback = ({style, status, message}: FeedbackProps) => {
  if (status !== FetchStatus.error) {
    return null;
  }

  return (
    <View style={[styles.wrapper, style]}>
      <Text
        style={status === FetchStatus.error ? styles.error : styles.success}>
        {message || 'Oops, try again later.'}
      </Text>
    </View>
  );
};

export default Feedback;
