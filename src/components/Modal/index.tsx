import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import Modal from 'react-native-modal';
import {colors} from '../../config/stylesGuides';
import {IconButton} from '../Elements';
import {Button} from '../Elements';
import {ModalProps} from './types';
import {useTheme} from '../../hooks/useTheme';
import themedStyles from './styles';
import SectionHeader from '../SectionHeader';

const ModalHolder = ({data, hide, isVisible}: ModalProps) => {
  const [primaryPressed, setPrimaryPressed] = useState(false);
  const styles = useTheme(themedStyles);

  useEffect(() => {
    if (primaryPressed) {
      setTimeout(() => {
        setPrimaryPressed(false);
      }, 100);
    }
  }, [data, primaryPressed, setPrimaryPressed]);

  return (
    <Modal
      useNativeDriver={true}
      isVisible={isVisible}
      backdropColor={colors.light.backdrop}
      onBackdropPress={hide}
      animationOutTiming={300}
      avoidKeyboard={true}
      style={styles.modal}>
      <View style={styles.wrapper}>
        <View style={[styles.container, styles.shadow]}>
          <SectionHeader
            title={data?.title as string}
            subtitle={data?.description}
          />
          <IconButton
            onPress={hide}
            style={styles.closeButton}
            iconSize={24}
            iconName="cross"
          />
          {data?.image && <Image source={data?.image} style={styles.image} />}
          {data?.content}
          <View style={styles.actionBar}>
            {typeof data?.onSecondaryPress === 'function' && (
              <Button
                onPress={data.onSecondaryPress}
                title="Cancel"
                wrapperStyle={styles.secondaryButton}
              />
            )}
            {typeof data?.onPrimaryPress === 'function' && (
              <Button
                onPress={() => {
                  setPrimaryPressed(true);
                  if (data.onPrimaryPress) {
                    data.onPrimaryPress();
                  }
                }}
                title="Confirm"
                wrapperStyle={styles.primaryButton}
                disabled={primaryPressed}
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalHolder;
