import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {FeedbackProps} from './types';
import {FetchStatus} from '../../config/types';

const Feedback = ({style, status, message}: FeedbackProps) => {
  if (status === FetchStatus.idle || status === FetchStatus.pending) {
    return null;
  }

  const defaultMessage =
    status === FetchStatus.error
      ? 'Oops, try again later.'
      : 'Thank you for sharing.';

  return (
    <View style={[styles.wrapper, style]}>
      <Text
        style={status === FetchStatus.error ? styles.error : styles.success}>
        {message || defaultMessage}
      </Text>
    </View>
  );
};

export default Feedback;
