import {bufferize} from '../utils/helpers';

export const SPOTIFY_ACCESS_TOKEN =
  'BQAQKfUOwM1-Qnx1B6w-Io0-3HpsaIYhtMNvmcpPlubtqVe5pUKtcMvHgiYZPyypI9c5QKBbmKo6cLieKUzAXHhoq-Bk8zcbiGKdD1USMrIwMZr9ZVI';

export const APPLE_ACCESS_TOKEN = '';

export const API_URLS = {
  STREAMER: 'http://localhost:3000',
  SPOTIFY: 'https://api.spotify.com/v1',
  APPLE_MUSIC: 'https://api.music.apple.com/v1',
};

export const API_VERSION = 'v3';

export const DERIVATION_PATH = "m/44'/134'/0'";

export const CHAIN_ID = bufferize('04000003');
