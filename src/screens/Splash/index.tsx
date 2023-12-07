import React, {useEffect, useRef} from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import muzikieLogo from '../../assets/images/splashScreen.png';
import {usePresets} from '../../hooks/usePresets';
import type {Timeout} from '../../config/types';
import {CURRENT_INTRO_VERSION} from '../Intro';
import {useTheme} from '../../hooks/useTheme';
import themedStyles from './styles';

const SplashScreen = () => {
  const {presets} = usePresets();
  const navigation = useNavigation();
  const timeout = useRef<Timeout>();
  const styles = useTheme(themedStyles);

  useEffect(() => {
    timeout.current = setTimeout(() => {
      if (presets.visitedIntroVersion >= CURRENT_INTRO_VERSION) {
        navigation.navigate('Tabs' as never);
      } else {
        navigation.navigate('Intro' as never);
      }
    }, 1000);
  }, [presets, navigation]);

  useEffect(() => () => clearTimeout(timeout.current), []);

  return (
    <View style={styles.splashContainer}>
      <View style={styles.splashImageContainer}>
        <Image
          style={styles.splashLogo}
          source={muzikieLogo}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default SplashScreen;
