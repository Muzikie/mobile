import React from 'react';
import {View, FlatList} from 'react-native';
import MotivationItem from './Motivation';
import styles from './styles';
import type {MotivationsProps, Motivation} from './types';

import motivation1 from '../../assets/images/motivation1.png';
import motivation2 from '../../assets/images/motivation2.png';
import motivation3 from '../../assets/images/motivation3.png';
import motivation4 from '../../assets/images/motivation4.png';

const data: Motivation[] = [
  { id: 1, title: 'Discover coolest songs and share it with others', source: motivation1 },
  { id: 2, title: 'Upvote songs that you listened and liked', source: motivation2 },
  { id: 3, title: 'Submitters receive badge and tokens', source: motivation3 },
  { id: 4, title: 'Randomly selected voters receive tokens', source: motivation4 },
];

const Motivations = ({style}: MotivationsProps) => (
  <View style={[styles.motivations, style]}>
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={MotivationItem}
      horizontal
    />
  </View>
);

export default Motivations;
