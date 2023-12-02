export enum Themes {
  light = 'light',
  dark = 'dark',
}

export interface Presets {
  introShown: boolean;
  theme: Themes;
}

export type StorePresetsProps = Partial<Presets>;

type StorePresets = (props: StorePresetsProps) => Promise<StoreResponse>;

export interface StoreResponse {
  success: boolean;
  message: string;
}

export type UsePreset = [Presets, StorePresets];
