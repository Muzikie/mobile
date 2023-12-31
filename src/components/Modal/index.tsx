import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {fonts} from '../../config/stylesGuides';
import IconButton from '../IconButton';
import Button from '../Button';
import {ModalProps} from './types';
import styles from './styles';

const Modal = ({data, hide}: ModalProps) => {
  const [primaryPressed, setPrimaryPressed] = useState(false);

  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, styles.shadow]}>
        <View style={styles.closeButtonWrapper}>
          <IconButton
            onPress={hide}
            style={styles.closeButton}
            iconSize={24}
            iconName="cross"
          />
        </View>
        {data?.image && <Image source={data.image} style={styles.image} />}
        <Text style={[fonts.h3, styles.title]}>{data.title}</Text>
        <Text style={[fonts.base, styles.description]}>{data.description}</Text>
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
  );
}

export default Modal;
