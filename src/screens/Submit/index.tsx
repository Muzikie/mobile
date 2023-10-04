import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SubmitScreen = () => {
  return (
    <View style={[styles.screenContainer, styles.submitScreen]}>
      <Text>Submit screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    height: '100%',
    width: '100%',
  },
  submitScreen: {
    backgroundColor: '#FEEAE3',
  },
});

export default SubmitScreen;
