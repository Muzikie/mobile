import React, {useEffect, useRef, useState} from 'react';
import {View, Text} from 'react-native';
import {useClipboard} from '@react-native-community/clipboard';
import {fonts} from '../../config/stylesGuides';
import styles from './styles';
import type {WalletProps, Timeout} from './types';

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
      <View style={styles.info}>
        <View style={styles.balanceContainer}>
          <Text style={[fonts.base, styles.label]}>Balance:</Text>
          <Text style={[fonts.h1, styles.balance]}>{balance} MZK</Text>
        </View>
        <View style={[styles.container, styles.addressContainer]}>
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
