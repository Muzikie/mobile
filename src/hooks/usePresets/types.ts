export interface Presets {
  introShown: boolean;
}

export type StorePresetsProps = Partial<Presets>;

export interface StoreResponse {
  success: boolean;
  message: string;
}
