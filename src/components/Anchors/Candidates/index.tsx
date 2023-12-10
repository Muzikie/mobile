import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, View, LayoutChangeEvent} from 'react-native';
import {COMMANDS, MODULES} from '../../../config/constants';
import {useModal} from '../../../hooks/useModal';
import {useAccount} from '../../../hooks/useAccount';
import {useTransaction} from '../../../hooks/useTransaction';
import {useFetchAnchors} from '../../../hooks/useFetchAnchors';
import {usePresets} from '../../../hooks/usePresets';
import {FetchStatus} from '../../../config/types';
import {bufferize, calculateItemsToDisplay} from '../../../utils/helpers';
import AnchorRow from '../Candidate';
import {HomeHeader} from '../../Headers';
import ListFooter from '../../ListFooter';
import {useTheme} from '../../../hooks/useTheme';
import themedStyles from './styles';

const AnchorsList = () => {
  const [displaySize, setDisplaySize] = useState(0);
  const {account} = useAccount();
  const {presets} = usePresets();
  const {signAndBroadcast, broadcastStatus} = useTransaction();
  const {anchors, feedback, retrieve} = useFetchAnchors('all');
  const {show, hide} = useModal();
  const styles = useTheme(themedStyles);

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

  useEffect(() => {
    if (broadcastStatus.status === FetchStatus.error) {
      show({
        title: 'Error!',
        description: account?.balances.length
          ? 'Error voting for the anchor'
          : 'You need tokens',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [broadcastStatus, account?.balances]);

  return (
    <View onLayout={handleLayout} style={styles.wrapper}>
      <FlatList
        data={anchors}
        ListHeaderComponent={HomeHeader}
        renderItem={({item}) => (
          <AnchorRow
            item={item}
            skipVoteConfirmation={presets.skipVoteConfirmation}
            onVote={() => onVote(item.anchorID)}
            show={show}
            hide={hide}
            address={account?.address ?? ''}
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