import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, View, LayoutChangeEvent} from 'react-native';
import {useFetchAnchors, Filter} from '../../../hooks/useFetchAnchors';
import {useTheme} from '../../../hooks/useTheme';
import {FetchStatus} from '../../../config/types';
import {calculateItemsToDisplay} from '../../../utils/helpers';
import Winner from '../Winner';
import ListFooter from '../../ListFooter';
import themedStyles from './styles';

const Winners = () => {
  const [displaySize, setDisplaySize] = useState(0);
  const {anchors, feedback, retrieve} = useFetchAnchors(Filter.winner);
  const styles = useTheme(themedStyles);

  const onRefresh = async () => {
    await retrieve(null, true);
  };

  const handleLayout = (event: LayoutChangeEvent) => {
    const {height} = event.nativeEvent.layout;
    const calculatedItemsToDisplay = calculateItemsToDisplay(height);
    setDisplaySize(calculatedItemsToDisplay);
  };

  useEffect(() => {
    if (
      feedback.status === FetchStatus.idle &&
      !anchors.length &&
      displaySize > 0
    ) {
      retrieve(null, false);
    }
  }, [feedback, retrieve, anchors, displaySize]);

  return (
    <View onLayout={handleLayout} style={styles.wrapper}>
      <FlatList
        data={anchors}
        renderItem={({item}) => <Winner item={item} />}
        keyExtractor={item => item.anchorID}
        ListFooterComponent={
          anchors.length > displaySize ? (
            <ListFooter status={feedback.status} />
          ) : null
        }
        onEndReachedThreshold={0.4}
        onEndReached={retrieve}
        refreshControl={
          <RefreshControl
            refreshing={feedback.status === FetchStatus.pending}
            onRefresh={onRefresh}
          />
        }
      />
    </View>
  );
};

export default Winners;
