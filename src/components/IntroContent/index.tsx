import React, {useEffect, useState} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {boxes} from '../../config/stylesGuides';
import {useTheme} from '../../hooks/useTheme';
import themedStyles from './styles';
import {IntroContentProps} from './types';

const IntroContent = ({data}: IntroContentProps) => {
  const [dimensions, setDimensions] = useState([0, 0]);
  const styles = useTheme(themedStyles);
  const {backgroundColor, image, description, color} = data;

  useEffect(() => {
    const {width, height} = Dimensions.get('window');
    setDimensions([
      width - boxes.boxPadding * 2,
      height - width - boxes.boxPadding * 3,
    ]);
  }, []);

  return (
    <View style={[styles.stepContainer, {backgroundColor}]}>
      <View style={[styles.imageContainer, {height: dimensions[0]}]}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={[styles.descriptionContainer, {height: dimensions[1]}]}>
        <Text style={[styles.description, {color}]}>{description}</Text>
      </View>
    </View>
  );
};

export default IntroContent;
