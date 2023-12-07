/* eslint-disable prettier/prettier */
import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import {useClipboard} from '@react-native-community/clipboard';
import {fonts} from '../../config/stylesGuides';
import type {Timeout} from '../../config/types';
import {useTheme} from '../../hooks/useTheme';
import themedStyles from './styles';
import {useAccount} from '../../hooks/useAccount';
import {IconButton} from '../Elements';

const BackupPassphrase = () => {
  const {account} = useAccount();
  const [_, setString] = useClipboard();
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(false);
  const timeout = useRef<Timeout>();
  const styles = useTheme(themedStyles);

  const copyToClipboard = () => {
    setCopied(true);
    setString(account?.passphrase ?? '');

    timeout.current = setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <View style={styles.wrapper}>
      <Text
        style={[fonts.base, styles.copied, copied ? styles.visible : {}]}>
        Copied
      </Text>
      <Text style={[styles.passphrase, visible ? {} : styles.hiddenPassphrase]} onPress={copyToClipboard}>{account?.passphrase}</Text>
      <IconButton
        iconSize={24}
        iconName={visible ? 'eyeOff' : 'eye'}
        style={styles.iconButton}
        onPress={() => setVisible(!visible)}
      />
    </View>
  );
};

export default BackupPassphrase;
