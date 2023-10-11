export enum PlayButtonStatus {
  PLAYING = 'PLAYING',
  PAUSED = 'PAUSED',
  STOPPED = 'STOPPED',
}

export interface PlayButtonProps {
  onPress: () => void;
  style?: object;
  status: PlayButtonStatus;
}
