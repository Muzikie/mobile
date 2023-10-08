import React, {useEffect, useRef, useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {useClipboard} from '@react-native-community/clipboard';
import {fonts} from '../../config/stylesGuides';
import styles from './styles';
import type {WalletProps, Timeout} from './types';

import walletGradient from '../../assets/images/wallet-gradient.png';

const Wallet = ({style, address, balance}: WalletProps) => {
  const [_, setString] = useClipboard();
  const [copied, setCopied] = useState(false);
  const timeout = useRef<Timeout>();

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
      <View style={styles.shadowWrapper}>
        <ImageBackground
          source={walletGradient}
          resizeMode="stretch"
          style={styles.background}>
          <View style={styles.info}>
            <Text
              style={[fonts.h3, styles.copied, copied ? styles.visible : {}]}>
              Copied
            </Text>
            <Text style={[fonts.h2, styles.address]} onPress={copyToClipboard}>
              {address}
            </Text>
            <Text style={[fonts.h3, styles.label]}>Balance:</Text>
            <Text style={[fonts.h1, styles.balance]}>{balance}</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Wallet;
