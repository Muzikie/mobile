import React from 'react';
import {Text, View} from 'react-native';
import {SubmissionStatuses} from '../Feedback/types';
import type {PreviewProps} from './types';
import styles from './styles';

const Preview = ({style, submissionStatus}: PreviewProps) => {
  if (submissionStatus !== SubmissionStatuses.success) {
    return null;
  }

  return (
    <View style={[styles.wrapper, style]}>
      <Text>Preview</Text>
    </View>
  );
};

export default Preview;
