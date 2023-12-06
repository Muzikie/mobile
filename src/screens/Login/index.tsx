import React from 'react';
import {Text, View, Image} from 'react-native';
import {Button} from '../../components/Elements';
import styles from './styles';
import {fonts} from '../../config/stylesGuides';

import muzikieLogo from '../../assets/images/muzikie-logo.png';
import appleMusicLogo from '../../assets/images/apple-music-logo.png';
import spotifyLogo from '../../assets/images/spotify-logo.png';

const LoginScreen = () => {
  const connectAppleMusic = () => {};
  const connectSpotify = () => {};

  return (
    <View style={[styles.screenContainer, styles.loginScreen]}>
      <View style={styles.logos}>
        <View style={styles.muzikieLogoWrapper}>
          <Image source={muzikieLogo} style={styles.muzikieLogo} />
        </View>
        <View style={styles.otherLogos}>
          <Image source={appleMusicLogo} style={styles.appleMusicLogo} />
          <Image source={spotifyLogo} style={styles.spotifyLogo} />
        </View>
      </View>

      <View style={styles.info}>
        <Text style={fonts.h4}>Connect your</Text>
        <Text style={fonts.h4}>Apple Music or Spotify account</Text>
        <Text style={fonts.h4}>to listen to the entire songs</Text>
      </View>

      <View style={styles.buttons}>
        <Button onPress={connectAppleMusic} title="Connect Apple Music" />
        <Button onPress={connectSpotify} title="Connect Spotify" />
      </View>
    </View>
  );
};

export default LoginScreen;
