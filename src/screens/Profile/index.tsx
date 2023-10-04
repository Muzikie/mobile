import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={[styles.screenContainer, styles.profileScreen]}>
      <Text>Profile screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    height: '100%',
    width: '100%',
  },
  profileScreen: {
    backgroundColor: '#FEEAE3',
  },
});

export default ProfileScreen;
