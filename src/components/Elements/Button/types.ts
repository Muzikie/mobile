export enum ButtonThemes {
  primary = 'primary',
  secondary = 'secondary',
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
