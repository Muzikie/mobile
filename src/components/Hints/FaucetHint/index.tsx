import React from 'react';
import {Text, View, Linking, Image} from 'react-native';
import {useClipboard} from '@react-native-community/clipboard';
import {Button} from '../../Elements';
import {useAccount} from '../../../hooks/useAccount';
import {useTheme} from '../../../hooks/useTheme';
import themedStyles from './styles';
import coin from '../../../assets/images/coin.png';

const FaucetHint = () => {
  const {account} = useAccount();
  const [_, setString] = useClipboard();
  const styles = useTheme(themedStyles);

  const onPress = async () => {
    setString(account?.address ?? '');
    await Linking.openURL('https://muzikie.com/faucet');
  };

  return (
    <View style={styles.wrapper}>
      <Image source={coin} style={styles.image} />
      <Text style={styles.description}>
        You need tokens to use the app. You can receive free tokens from the
        Testnet faucet. Simply copy your address and visit to the Faucet.
      </Text>
      <Button
        title="Copy my address & open Faucet"
        onPress={onPress}
        style={styles.button}
      />
    </View>
  );
};

export default FaucetHint;
