import React, {useEffect, useRef, useState} from 'react';
import {View, Animated} from 'react-native';
import {IconButton} from '../Elements';
import Dots from './Dots';
import {useTheme} from '../../hooks/useTheme';
import themedStyles from './styles';
import {CarouselProps} from './types';

const Carousel = ({
  data,
  content,
  loop,
  onEnd,
}: CarouselProps<Record<string, unknown>>) => {
  const styles = useTheme(themedStyles);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleNext = () => {
    fadeOut();
    setCurrentIndex(prevIndex => {
      if (prevIndex === data.length - 1 && loop) {
        return 0;
      } else if (prevIndex === data.length - 1 && !loop) {
        return prevIndex;
      }
      return prevIndex + 1;
    });
    fadeIn();
  };

  const handlePrev = () => {
    fadeOut();
    setCurrentIndex(prevIndex => {
      if (prevIndex === 0 && loop) {
        return data.length - 1;
      } else if (prevIndex === 0 && !loop) {
        return 0;
      }
      return prevIndex - 1;
    });
    fadeIn();
  };

  useEffect(() => {
    fadeIn();
  }, []);

  const Content = content;

  return (
    <View style={styles.wrapper}>
      <View style={styles.contentWrapper}>
        <Animated.View style={[styles.animatedView, {opacity: fadeAnim}]}>
          <Content data={data[currentIndex]} />
        </Animated.View>
      </View>
      <View style={styles.navigation}>
        <IconButton
          onPress={handlePrev}
          iconName="leftChev"
          iconSize={32}
          style={styles.button}
          disabled={currentIndex === 0 && !loop}
        />
        <Dots count={data.length} current={currentIndex} />
        <IconButton
          onPress={
            currentIndex === data.length - 1 && onEnd ? onEnd : handleNext
          }
          iconName={
            currentIndex === data.length - 1 && onEnd ? 'check' : 'rightChev'
          }
          iconSize={32}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default Carousel;
