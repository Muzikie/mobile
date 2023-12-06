import React, {useCallback, useEffect, useRef} from 'react';
import {View, Text} from 'react-native';
import {useModal} from '../../hooks/useModal';
import {usePresets} from '../../hooks/usePresets';
import AnchorsList from '../../components/AnchorsList';
import IconButton from '../../components/IconButton';
import SubmitForm from '../../components/SubmitForm';
import {VoteHint} from '../../components/Hints';
import {Timeout} from '../../config/types';
import styles from './styles';

const CURRENT_VOTE_HINT_VERSION = '0.1.0';

const Header = () => (
  <View>
    <Text style={styles.pageTitle}>Songs of the day</Text>
  </View>
);

const HomeScreen = () => {
  const {show, isVisible} = useModal();
  const {presets, storePresets} = usePresets();
  const timer = useRef<Timeout>();

  const showAddSongModal = useCallback(() => {
    show({
      title: 'Share a tune',
      description: 'From Spotify (and soon Apple Music)',
      content: <SubmitForm />,
    });
  }, [show]);

  const showVoteHint = useCallback(() => {
    timer.current = setTimeout(() => {
      show({
        title: 'Remember to vote',
        description: 'The tunes you like',
        content: <VoteHint />,
      });
      storePresets({visitedVoteHintVersion: CURRENT_VOTE_HINT_VERSION});
    }, 1000);
  }, [show, storePresets]);

  useEffect(() => {
    if (
      presets.visitedVoteHintVersion < CURRENT_VOTE_HINT_VERSION &&
      !isVisible
    ) {
      showVoteHint();
    }
  }, [presets, isVisible, showVoteHint]);

  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <View style={[styles.screenContainer, styles.homeScreen]}>
      <AnchorsList filter="all" header={Header} />
      <IconButton
        iconName="plus"
        iconSize={28}
        style={[styles.addSongButton, styles.shadow]}
        onPress={showAddSongModal}
      />
    </View>
  );
};

export default HomeScreen;
