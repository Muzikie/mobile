import React from 'react';
import {Text, View} from 'react-native';
import SubmitForm from '../../components/SubmitForm';
import Motivations from '../../components/Motivations';
import {fonts} from '../../config/stylesGuides';
import styles from './styles';

const SubmitScreen = () => {
  return (
    <View style={[styles.screenContainer, styles.submitScreen]}>
      <View style={styles.pageTitle}>
        <Text style={fonts.h4}>Hi there</Text>
        <Text style={fonts.h2}>Have a cool song to share?</Text>
      </View>
      <SubmitForm />
      <Motivations />
    </View>
  );
};

export default SubmitScreen;
