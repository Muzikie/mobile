import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {FetchStatus} from '../../config/types';
import {colors} from '../../config/stylesGuides';
import {useTheme} from '../../hooks/useTheme';
import themedStyles from './styles';

export const ListFooter = ({status}: {status: FetchStatus}) => {
  const styles = useTheme(themedStyles);
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator
        size="large"
        color={
          status === FetchStatus.pending
            ? colors.light.purple
            : colors.light.beige
        }
      />
    </View>
  );
};

export default ListFooter;
