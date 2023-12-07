import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Modal from 'react-native-modal';
import {colors, fonts} from '../../config/stylesGuides';
import {IconButton} from '../Elements';
import {Button} from '../Elements';
import {ModalProps} from './types';
import {useTheme} from '../../hooks/useTheme';
import themedStyles from './styles';

const ModalHolder = ({data, hide, isVisible}: ModalProps) => {
  const [primaryPressed, setPrimaryPressed] = useState(false);
  const styles = useTheme(themedStyles);

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
          <View style={styles.closeButtonWrapper}>
            <Text style={[fonts.h2, styles.title]}>{data?.title}</Text>
            <IconButton
              onPress={hide}
              style={styles.closeButton}
              iconSize={24}
              iconName="cross"
            />
          </View>
          <Text style={[fonts.h4, styles.description]}>{data?.description}</Text>
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
