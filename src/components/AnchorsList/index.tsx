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
import {AnchorListProps} from './types';
import styles from './styles';

const AnchorsList = ({filter, header}: AnchorListProps) => {
  const [displaySize, setDisplaySize] = useState(0);
  const {account} = useAccount();
  const {signAndBroadcast} = useTransaction();
  const {anchors, feedback, retrieve} = useFetchAnchors(filter);

  const onRefresh = async () => {
    await retrieve(null, true);
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
      retrieve(null, false);
    }
  }, [feedback, retrieve]);

  return (
    <View onLayout={handleLayout} style={styles.wrapper}>
      <FlatList
        data={anchors}
        ListHeaderComponent={header}
        renderItem={({item}) => (
          <AnchorRow
            item={item}
            onVote={() => onVote(item.anchorID)}
            address={account?.address ?? ''}
            votingEnabled={filter === 'all'}
          />
        )}
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

export default AnchorsList;
