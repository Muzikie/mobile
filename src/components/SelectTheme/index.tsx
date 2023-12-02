import React from 'react';
import {View} from 'react-native';
import {usePresets} from '../../hooks/usePresets';
import {Themes} from '../../hooks/usePresets/types';
import CheckBox from '../../components/CheckBox';

const SelectTheme = () => {
  const {presets, storePresets} = usePresets();

  const onSelect = async (theme: Themes) => {
    const result = await storePresets({theme});
    console.log(result);
  };

  return (
    <View>
      <CheckBox
        title="Light"
        onSelect={() => onSelect(Themes.light)}
        selected={presets.theme === Themes.light}
      />
      <CheckBox
        title="Dark"
        onSelect={() => onSelect(Themes.dark)}
        selected={presets.theme === Themes.dark}
      />
    </View>
  );
};

export default SelectTheme;
