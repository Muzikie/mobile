import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={[styles.screenContainer, styles.homeScreen]}>
      <Text>Home screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    height: '100%',
    width: '100%',
  },
  homeScreen: {
    backgroundColor: '#FEEAE3',
  },
});

export default HomeScreen;
