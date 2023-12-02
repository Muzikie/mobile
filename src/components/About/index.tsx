import React from 'react';
import {View, Text, Image} from 'react-native';
import {fonts} from '../../config/stylesGuides';
import styles from './styles';
import pkg from '../../../package.json';

const About = () => (
  <View style={styles.wrapper}>
    <Image style={styles.image} source={require('../../assets/images/muzikie-logo.png')} />
    <Text style={[fonts.h1, styles.title]}>Muzikie</Text>
    <Text style={fonts.h3}>{`Version: ${pkg.version}`}</Text>
  </View>
);

export default About;
