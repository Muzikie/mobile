import React, {useEffect, useRef} from 'react';
import {TextInput, View, Keyboard} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import themedStyles from './styles';
import {Button} from '../Elements';
import {ButtonThemes} from '../Elements/Button/types';
import Preview from '../Preview';
import {useFetchTrack} from '../../hooks/useFetchTrack';
import {usePresets} from '../../hooks/usePresets';
import {useModal} from '../../hooks/useModal';
import {useAccount} from '../../hooks/useAccount';
import {FetchStatus, Timeout} from '../../config/types';
import type {SubmitFormProps, Feedback} from './types';
import Confirm from './Confirm';
import {colors} from '../../config/stylesGuides';
import successImage from '../../assets/images/success.png';
import errorImage from '../../assets/images/error.png';

const finalMessages = (feedback: Feedback) => {
  if (feedback.status === FetchStatus.success) {
    return {
      title: 'Success!',
      description: 'Your song has been submitted.',
      image: successImage,
    };
  }
  return {
    title: 'Error!',
    description: feedback.message || 'Something went wrong.',
    image: errorImage,
  };
};

const SubmitForm = ({style}: SubmitFormProps) => {
  const timer = useRef<Timeout>();
  const {account} = useAccount();
  const {
    anchor,
    url,
    feedback: fetchFeedback,
    updateUrl,
    reset: resetTrack,
  } = useFetchTrack();

  const {show} = useModal();
  const styles = useTheme(themedStyles);
  const {presets} = usePresets();

  const onDone = (feedback: Feedback) => {
    resetTrack();
    show(finalMessages(feedback));
  };

  const onSubmit = async () => {
    Keyboard.dismiss();
    if (anchor && account) {
      show({
        title: 'Looking good!',
        description: '',
        content: <Confirm anchor={anchor} onDone={onDone} />,
      });
    } else {
      // @todo Replace this with an error display prompt
      console.log('No anchor data to submit');
    }
  };

  useEffect(
    () => () => {
      clearTimeout(timer.current);
    },
    [],
  );

  return (
    <View style={style}>
      <TextInput
        style={styles.input}
        placeholder="Spotify URL"
        onChangeText={updateUrl}
        value={url.value}
        placeholderTextColor={colors[presets.theme].neutralStrong}
      />
      <Preview fetchStatus={fetchFeedback.status} data={anchor} />
      <View style={styles.actionBar}>
        <Button
          title="Continue"
          theme={ButtonThemes.primary}
          onPress={onSubmit}
          disabled={fetchFeedback.status !== FetchStatus.success}
        />
      </View>
    </View>
  );
};

export default SubmitForm;
