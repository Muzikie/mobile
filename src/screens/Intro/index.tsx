import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {fonts} from '../../config/stylesGuides';
import muzikieLogo from '../../assets/images/splashScreen.png';
import engageImage from '../../assets/images/motivation1.png';
import futureImage from '../../assets/images/motivation2.png';
import discoverImage from '../../assets/images/motivation3.png';
import styles from './styles';
import IconButton from '../../components/IconButton';
import {usePresets} from '../../hooks/usePresets';

const DiscoverStep = ({setStep}) => (
  <View style={styles.stepContainer}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={discoverImage} />
    </View>
    <View style={styles.titleContainer}>
      <Text style={[fonts.h1, styles.title]}>Discover</Text>
      <Text style={[fonts.base, styles.subtitle]}>
        Find fresh beats from emerging artists. Share Spotify links and upvote
        the best tracks to elevate new talent.
      </Text>
    </View>
    <View style={styles.buttonContainer}>
      <IconButton iconName="Play" iconSize={60} onPress={() => setStep(2)} />
    </View>
  </View>
);

const EngageStep = ({setStep}) => (
  <View style={styles.stepContainer}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={engageImage} />
    </View>
    <View style={styles.titleContainer}>
      <Text style={[fonts.h1, styles.title]}>Engage</Text>
      <Text style={[fonts.base, styles.subtitle]}>
        Join a vibrant community passionate about music. Your likes and shares
        drive the spotlight onto rising stars.
      </Text>
    </View>
    <View style={styles.buttonContainer}>
      <IconButton iconName="Play" iconSize={60} onPress={() => setStep(3)} />
    </View>
  </View>
);

const FutureStep = ({setStep}) => (
  <View style={styles.stepContainer}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={futureImage} />
    </View>
    <View style={styles.titleContainer}>
      <Text style={[fonts.h1, styles.title]}>Future</Text>
      <Text style={[fonts.base, styles.subtitle]}>
        Coming soon: Share music via Apple Music! Artists can share exclusive
        updates about upcoming albums and EPs.
      </Text>
    </View>
    <View style={styles.buttonContainer}>
      <IconButton iconName="Play" iconSize={60} onPress={() => setStep(4)} />
    </View>
  </View>
);

const IntroScreen = () => {
  const {storePresets, presets} = usePresets();
  const navigation = useNavigation();
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (presets.introShown) {
      navigation.navigate('Tabs' as never);
    }
  }, [step, navigation, presets]);

  useEffect(() => {
    if (step === 4) {
      storePresets({introShown: true});
    }
  }, [step, storePresets]);

  return (
    <View style={[styles.screenContainer, styles.introScreen]}>
      {step === 1 && <DiscoverStep setStep={setStep} />}
      {step === 2 && <EngageStep setStep={setStep} />}
      {step >= 3 && <FutureStep setStep={setStep} />}
    </View>
  );
};

export default IntroScreen;
