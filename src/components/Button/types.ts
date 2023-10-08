export enum ButtonThemes {
  purple = 'purple',
  white = 'white',
}

export interface ButtonProps {
  onPress: () => void;
  style?: object;
  theme?: ButtonThemes;
  title: string;
}
