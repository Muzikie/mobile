import React, {useEffect, useRef} from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import muzikieLogo from '../../assets/images/splashScreen.png';
import {usePresets} from '../../hooks/usePresets';
import type {Timeout} from '../../config/types';
import styles from './styles';

const SplashScreen = () => {
  const {presets} = usePresets();
  const navigation = useNavigation();
  const timeout = useRef<Timeout>();

  useEffect(() => {
    timeout.current = setTimeout(() => {
      if (presets.introShown) {
        navigation.navigate('Tabs' as never);
      } else {
        navigation.navigate('Intro' as never);
      }
    }, 1000);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [presets, navigation]);

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
