import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, View, LayoutChangeEvent} from 'react-native';
import {COMMANDS, MODULES} from '../../../config/constants';
import {useModal} from '../../../hooks/useModal';
import {useAccount} from '../../../hooks/useAccount';
import {useTransaction} from '../../../hooks/useTransaction';
import {useFetchAnchors, Filter} from '../../../hooks/useFetchAnchors';
import {usePresets} from '../../../hooks/usePresets';
import {FetchStatus} from '../../../config/types';
import {bufferize, calculateItemsToDisplay} from '../../../utils/helpers';
import Candidate from '../Candidate';
import {HomeHeader} from '../../Headers';
import ListFooter from '../../ListFooter';
import {useTheme} from '../../../hooks/useTheme';
import themedStyles from './styles';

const Candidates = () => {
  const [displaySize, setDisplaySize] = useState(0);
  const {account} = useAccount();
  const {presets} = usePresets();
  const {signAndBroadcast} = useTransaction();
  const {anchors, feedback, retrieve} = useFetchAnchors(Filter.all);
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
        ListHeaderComponent={HomeHeader}
        renderItem={({item}) => (
          <Candidate
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

export default Candidates;
