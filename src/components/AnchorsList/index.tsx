import React, {useState, useEffect} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {useFetchAnchors} from '../../hooks/useFetchAnchors';
import AnchorRow from '../AnchorRow';
import ListFooter from '../ListFooter';

const AnchorsList = () => {
  const {anchors, fetchOlderAnchors, fetchNewerAnchors} = useFetchAnchors();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = async () => {
    setIsRefreshing(true);
    await fetchNewerAnchors();
    setIsRefreshing(false);
  };

  useEffect(() => {
    fetchOlderAnchors();
  }, []);

  return (
    <FlatList
      data={anchors}
      renderItem={AnchorRow}
      keyExtractor={item => item.id}
      ListFooterComponent={ListFooter}
      onEndReachedThreshold={0.4}
      onEndReached={fetchOlderAnchors}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default AnchorsList;
