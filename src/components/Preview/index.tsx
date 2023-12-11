import React from 'react';
import {Text, View, Image} from 'react-native';
import {FetchStatus} from '../../config/types';
import {colors} from '../../config/stylesGuides';
import {Icon} from '../Elements';
import darkPreview from '../../assets/images/darkpreview.png';
import lightPreview from '../../assets/images/lightpreview.png';
import type {PreviewProps} from './types';
import {useTheme} from '../../hooks/useTheme';
import {usePresets} from '../../hooks/usePresets';
import themedStyles from './styles';

const previewPlaceholder = {
  light: lightPreview,
  dark: darkPreview,
};

const Preview = ({style, fetchStatus, data}: PreviewProps) => {
  const styles = useTheme(themedStyles);
  const {presets} = usePresets();
  if (fetchStatus !== FetchStatus.success || !data) {
    return (
      <Image
        source={previewPlaceholder[presets.theme]}
        style={styles.placeholder}
      />
    );
  }

  const albumArt = data?.images.sort((a, b) => a.width - b.width)[0].url;

  return (
    <View style={[styles.wrapper, styles.row, style]}>
      <Image source={{uri: albumArt}} style={styles.image} />
      <View style={styles.info}>
        <View style={styles.row}>
          <Icon
            name="disc"
            size={18}
            color={colors[presets.theme].neutralMild}
          />
          <Text style={styles.album}>{data.album}</Text>
        </View>
        <Text style={styles.title}>{data.name}</Text>
        <View style={styles.row}>
          <Icon
            name="mic"
            size={18}
            color={colors[presets.theme].neutralStrong}
          />
          <Text style={styles.artist}>{data.artists}</Text>
        </View>
      </View>
    </View>
  );
};

export default Preview;
