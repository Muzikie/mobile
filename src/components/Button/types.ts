export enum ButtonThemes {
  purple = 'purple',
  white = 'white',
}

export interface ButtonProps {
  onPress: () => void;
  style?: object;
  wrapperStyle?: object;
  theme?: ButtonThemes;
  title: string;
  shadow?: boolean;
  disabled?: boolean;
}
