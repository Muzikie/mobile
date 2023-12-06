import React from 'react';
import {View, Text} from 'react-native';
import {fonts} from '../../config/stylesGuides';
import {usePresets} from '../../hooks/usePresets';
import {useModal} from '../../hooks/useModal';
import Option from '../../components/Option';
import SelectTheme from '../../components/SelectTheme';
import About from '../../components/About';
import BackupPassphrase from '../../components/BackupPassphrase';
import styles from './styles';

const config = {
  backup: {
    title: 'Backup',
    description:
      'Keep your secret key safe and private. It’s your only way to accessing your account. There is no way to recover it.',
  },
  theme: {
    title: 'Select a theme',
    description: '',
  },
  about: {
    title: 'About',
    description: '',
  },
};

const THEME_TITLES = {
  light: 'Light',
  dark: 'Dark',
  system: 'System',
};

const SettingsScreen = () => {
  const {presets} = usePresets();
  const {show} = useModal();
  const theme = THEME_TITLES[presets.theme];

  const backup = () => {
    show({
      ...config.backup,
      content: <BackupPassphrase />,
    });
  };

  const connect = () => {};

  const setTheme = () => {
    show({
      ...config.theme,
      content: <SelectTheme />,
    });
  };

  const showAbout = () => {
    show({
      ...config.about,
      content: <About />,
    });
  };

  return (
    <View style={[styles.screenContainer, styles.settingsScreen]}>
      <Text style={[fonts.h2, styles.title]}>Account</Text>
      <Option title="Backup" onPress={backup} />
      <Option title="Connect" state="Coming soon" onPress={connect} />
      <Text style={[fonts.h2, styles.title]}>Other settings</Text>
      <Option title="Theme" state={theme} onPress={setTheme} />
      <Option title="Terms of use" href="https://muzikie.com/terms" />
      <Option title="About" onPress={showAbout} />
    </View>
  );
};

export default SettingsScreen;
