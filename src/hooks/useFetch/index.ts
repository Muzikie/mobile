const SPOTIFY_ACCESS_TOKEN =
  'BQAPPdBtYAOx-DsZCGO4KvUN_vS960F6FlZfGduIz0VCbyTEHy9vjDNuQmnZmEGTB2UUYKUDDDf6dsrEG1ehAJv5i62cwqKeKpRx36uHz1B2s4-MURg';

const APPLE_ACCESS_TOKEN = '';

export const useFetch = () => {
  return {
    getFromAppleMusic: async (storefront: string, id: string) => {
      const response = await fetch(
        `https://api.music.apple.com/v1/catalog/${storefront}/songs/${id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${APPLE_ACCESS_TOKEN}`,
          },
        },
      );
      console.log('response', response);
      const data = await response.json();
      return data;
    },
    getFromSpotify: async (id: string) => {
      const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SPOTIFY_ACCESS_TOKEN}`,
        },
      });
      console.log('response', response);
      const data = await response.json();
      return data;
    },
    get: async (url: string) => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    },
    post: async (url: string, body: any) => {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
    },
  };
};
