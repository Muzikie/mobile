import {ImageSourcePropType} from 'react-native';

export interface MotivationsProps {
  style?: object;
}

export interface Motivation {
  id: string;
  title: string;
  source: ImageSourcePropType;
}

export interface MotivationProps {
  style?: object;
  item: Motivation;
}
