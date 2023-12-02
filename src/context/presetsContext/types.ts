import {ReactElement} from 'react';

export interface PresetsProviderProps {
  children: ReactElement;
}

export enum Themes {
  light = 'light',
  dark = 'dark',
}

export interface Presets {
  introShown: boolean;
  theme: Themes;
}

export type StorePresetsProps = Partial<Presets>;

export interface StoreResponse {
  success: boolean;
  message: string;
}

type StorePresets = (props: StorePresetsProps) => Promise<StoreResponse>;

export type PresetsContextType = {
  presets: Presets;
  storePresets: StorePresets;
};
