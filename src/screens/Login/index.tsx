import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={[styles.screenContainer, styles.loginScreen]}>
      <Text>Login screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    height: '100%',
    width: '100%',
  },
  loginScreen: {
    backgroundColor: '#FEEAE3',
  },
});

export default LoginScreen;
