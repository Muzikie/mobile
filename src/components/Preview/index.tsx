import React from 'react';
import {Text, View, Image} from 'react-native';
import {FetchStatus} from '../../config/types';
import type {PreviewProps} from './types';
import styles from './styles';
import {fonts} from '../../config/stylesGuides';

const Preview = ({style, submissionStatus, data}: PreviewProps) => {
  if (submissionStatus !== FetchStatus.success || !data) {
    return null;
  }

  const albumArt = data?.images.sort((a, b) => a.width - b.width)[0].url;

  return (
    <View style={[styles.wrapper, style]}>
      <Image source={{uri: albumArt}} style={styles.image} />
      <View style={styles.info}>
        <Text style={[fonts.h3]}>{data.name}</Text>
        <Text
          style={[
            fonts.base,
          ]}>{`From ${data.album} • by ${data.artists[0]}`}</Text>
      </View>
    </View>
  );
};

export default Preview;
