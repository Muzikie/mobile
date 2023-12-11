import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {useClipboard} from '@react-native-community/clipboard';
import {Themes} from '../../context/presetsContext/types';
import {fonts} from '../../config/stylesGuides';
import type {Timeout} from '../../config/types';
import lightCarrot from '../../assets/images/lightcarrot.png';
import darkCarrot from '../../assets/images/darkcarrot.png';
import {usePresets} from '../../hooks/usePresets';
import {useTheme} from '../../hooks/useTheme';
import themedStyles from './styles';
import type {WalletProps} from './types';

const carrots = {
  [Themes.light]: lightCarrot,
  [Themes.dark]: darkCarrot,
};

const Wallet = ({style, address, balance}: WalletProps) => {
  const [_, setString] = useClipboard();
  const [copied, setCopied] = useState(false);
  const timeout = useRef<Timeout>();
  const styles = useTheme(themedStyles);
  const {presets} = usePresets();

  const copyToClipboard = () => {
    setCopied(true);
    setString(address);

    timeout.current = setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeout.current);
    };
  }, []);

  return (
    <View style={[styles.wrapper, style]}>
      <Image source={carrots[presets.theme]} />
      <View style={styles.info}>
        <View style={styles.balanceContainer}>
          <Text style={[fonts.base, styles.label]}>Balance:</Text>
          <Text style={[fonts.h1, styles.balance]}>{balance}</Text>
        </View>
        <View style={styles.addressContainer}>
          <Text style={[fonts.base, styles.label]}>Address:</Text>
          <Text
            style={[fonts.base, styles.copied, copied ? styles.visible : {}]}>
            Copied
          </Text>
          <Text style={[fonts.h3, styles.address]} onPress={copyToClipboard}>
            {address}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Wallet;
