import {useState, useEffect, useRef} from 'react';
import {Anchor} from '../../config/types';
import {SPOTIFY_LINK_REG} from '../../config/constants';
import {getFromSpotify} from '../../utils/api';
import {FetchStatus} from '../../config/types';

export const useFetchTrack = () => {
  const timer = useRef<NodeJS.Timeout>();
  const [url, setUrl] = useState({
    value: '',
    isValid: false,
  });
  const [feedback, setFeedback] = useState({
    status: FetchStatus.idle,
    message: '',
  });
  const [anchor, setAnchor] = useState<Omit<Anchor, 'id' | 'submitter'>>();

  const retrieveInfo = async () => {
    if (!url.isValid) {
      setFeedback({
        status: FetchStatus.error,
        message: 'Please enter a valid Spotify link',
      });
    } else {
      // Request song data from Spotify API
      const trackID = url.value
        .replace('https://open.spotify.com/track/', '')
        .split('?')[0];
      const data = await getFromSpotify(trackID);
      if (!data?.name) {
        setFeedback({
          status: FetchStatus.error,
          message: 'Could not get song data',
        });
      } else {
        setFeedback({
          status: FetchStatus.success,
          message: '',
        });
        const normalizedData: Omit<Anchor, 'id' | 'submitter'> = {
          spotifyId: trackID,
          name: data.name,
          album: data.album.name,
          artists: data.artists.map((artist: {name: string}) => artist.name),
          images: data.album.images,
        };
        // Store the song data in the state
        setAnchor(normalizedData);
      }
    }
  };

  const updateUrl = (value: string) => {
    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setUrl({
        value,
        isValid: SPOTIFY_LINK_REG.test(value),
      });
      setFeedback({
        status: FetchStatus.pending,
        message: '',
      });
      retrieveInfo();
    }, 500);
  };

  useEffect(
    () => () => {
      clearTimeout(timer.current);
    },
    [],
  );

  return {
    anchor,
    url,
    feedback,
    updateUrl,
  };
};
