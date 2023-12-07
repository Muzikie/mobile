import React, {useEffect, useState} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {boxes} from '../../config/stylesGuides';
import {useTheme} from '../../hooks/useTheme';
import themedStyles from './styles';
import {IntroContentProps} from './types';

const IntroContent = ({data}: IntroContentProps) => {
  const [imageBox, setImageBox] = useState(0);
  const styles = useTheme(themedStyles);
  const {backgroundColor, image, description, color} = data;

  useEffect(() => {
    const {width} = Dimensions.get('window');
    setImageBox(width - boxes.boxPadding * 2);
  }, []);

  return (
    <View style={[styles.stepContainer, {backgroundColor}]}>
      <View style={[styles.imageContainer, {height: imageBox}]}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={[styles.titleContainer, {height: imageBox * 0.6}]}>
        <Text style={[styles.subtitle, {color}]}>{description}</Text>
      </View>
    </View>
  );
};

export default IntroContent;
