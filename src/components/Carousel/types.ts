import {ReactElement} from 'react';

export interface DotsProps {
  current: number;
  count: number;
}

export interface CarouselProps<T> {
  data: T[];
  content: (item: T) => ReactElement;
  onEnd?: () => void;
  loop: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
}
