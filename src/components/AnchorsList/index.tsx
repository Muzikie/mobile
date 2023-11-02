import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, View, LayoutChangeEvent} from 'react-native';
import {COMMANDS, MODULES} from '../../config/constants';
import {useAccount} from '../../hooks/useAccount';
import {useTransaction} from '../../hooks/useTransaction';
import {useFetchAnchors} from '../../hooks/useFetchAnchors';
import {FetchStatus} from '../../config/types';
import {bufferize, calculateItemsToDisplay} from '../../utils/helpers';
import AnchorRow from '../AnchorRow';
import ListFooter from '../ListFooter';
import AnchorsHeader from '../AnchorsHeader';

const AnchorsList = () => {
  const [displaySize, setDisplaySize] = useState(0);
  const {account} = useAccount();
  const {signAndBroadcast} = useTransaction();
  const {anchors, feedback, retrieve} = useFetchAnchors();

  const onRefresh = async () => {
    await retrieve(true);
  };

  const handleLayout = (event: LayoutChangeEvent) => {
    const {height} = event.nativeEvent.layout;
    const calculatedItemsToDisplay = calculateItemsToDisplay(height);
    setDisplaySize(calculatedItemsToDisplay);
  };

  const onVote = async (anchorID: string) => {
    await signAndBroadcast({
      params: {
        anchorID: bufferize(anchorID),
      },
      module: MODULES.ANCHOR,
      command: COMMANDS.VOTE,
    });
  };

  useEffect(() => {
    if (feedback.message === FetchStatus.idle) {
      retrieve();
    }
  }, [feedback, retrieve]);

  return (
    <View onLayout={handleLayout}>
      <FlatList
        data={anchors}
        ListHeaderComponent={AnchorsHeader}
        renderItem={({item}) => (
          <AnchorRow
            item={item}
            onVote={() => onVote(item.anchorID)}
            address={account?.address ?? ''}
          />
        )}
        keyExtractor={item => item.anchorID}
        ListFooterComponent={anchors.length > displaySize ? ListFooter : null}
        onEndReachedThreshold={0.4}
        onEndReached={retrieve}
        refreshControl={
          <RefreshControl
            refreshing={feedback.message === FetchStatus.pending}
            onRefresh={onRefresh}
          />
        }
      />
    </View>
  );
};

export default AnchorsList;
