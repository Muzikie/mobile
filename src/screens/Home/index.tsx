import React from 'react';
import {View, Text} from 'react-native';
import {useModal} from '../../hooks/useModal';
import AnchorsList from '../../components/AnchorsList';
import IconButton from '../../components/IconButton';
import SubmitForm from '../../components/SubmitForm';
import styles from './styles';

const Header = () => (
  <View>
    <Text style={styles.pageTitle}>Songs of the day</Text>
  </View>
);

const HomeScreen = () => {
  const {show} = useModal();

  const showAddSongModal = () => {
    show({
      title: 'Share a tune',
      description: 'From Spotify (and soon Apple Music)',
      content: <SubmitForm />,
    });
  };

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
