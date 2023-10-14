export interface KeyValue {
  [key: string]: any;
}

export interface Account {
  email: string;
  spotifyId: string;
  appleMusicId: string;
}

export interface Link {
  spotifyId?: string;
  appleMusicId?: string;
  name: string;
  album: string;
  artists: string[];
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  submitter: {
    address: string;
    name: string;
    username: string;
  };
}
