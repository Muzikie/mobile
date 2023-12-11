import React, {useEffect} from 'react';
import {View} from 'react-native';
import Carousel from '../../components/Carousel';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../config/stylesGuides';
import IntroContent from '../../components/IntroContent';
import whyImage from '../../assets/images/why.png';
import howImage from '../../assets/images/how.png';
import whatImage from '../../assets/images/what.png';
import corpsImage from '../../assets/images/corps.png';
import {useTheme} from '../../hooks/useTheme';
import themedStyles from './styles';
import {usePresets} from '../../hooks/usePresets';

const entries = [
  {
    image: whyImage,
    description: 'Muzikie helps you discover wonderful tunes',
    backgroundColor: colors.light.primaryMild,
    color: colors.light.neutralZero,
  },
  {
    image: howImage,
    description:
      'Share the music you loved or upvote tunes shared by others to help everyone find wonderful music',
    backgroundColor: colors.light.reassureMild,
    color: colors.light.primaryStrong,
  },
  {
    image: whatImage,
    description:
      'Three most popular tunes of each day receive a badge and prize',
    backgroundColor: colors.light.warnMild,
    color: colors.light.neutralZero,
  },
  {
    image: corpsImage,
    description: 'Listen and share songs directly from Spotify and Apple Music',
    backgroundColor: colors.light.warnStrong,
    color: colors.light.primaryStrong,
  },
];

export const CURRENT_INTRO_VERSION = '0.1.0';

const IntroScreen = () => {
  const {presets, storePresets} = usePresets();
  const navigation = useNavigation();
  const styles = useTheme(themedStyles);

  useEffect(() => {
    if (presets.visitedIntroVersion >= CURRENT_INTRO_VERSION) {
      navigation.navigate('Tabs' as never);
    }
  }, [navigation, presets.visitedIntroVersion]);

  const onEnd = () => {
    storePresets({visitedIntroVersion: CURRENT_INTRO_VERSION});
  };

  return (
    <View style={styles.screenContainer}>
      <Carousel data={entries} content={IntroContent} onEnd={onEnd} />
    </View>
  );
};

export default IntroScreen;
