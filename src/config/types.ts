export interface KeyValue {
  [key: string]: any;
}

export interface Account {
  email: string;
  spotifyId: string;
  appleMusicId: string;
}

export interface Link {
  spotifyId: string;
  appleMusicId: string;
  title: string;
  artist: string;
  submitter: string;
  id: string;
}
