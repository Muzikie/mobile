import React from 'react';
import {View, Text, Image} from 'react-native';
import {fonts} from '../../config/stylesGuides';
import {useTheme} from '../../hooks/useTheme';
import themedStyles from './styles';
import pkg from '../../../package.json';
import logo from '../../assets/images/muzikie-logo.png';

const About = () => {
  const styles = useTheme(themedStyles);
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={logo} />
      <Text style={[fonts.h1, styles.title]}>Muzikie</Text>
      <Text style={fonts.h3}>{`Version: ${pkg.version}`}</Text>
    </View>
  );
};

export default About;
