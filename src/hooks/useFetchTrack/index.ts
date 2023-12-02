import {useState, useEffect, useRef, useCallback} from 'react';
import {Anchor} from '../../config/types';
import {SPOTIFY_LINK_REG} from '../../config/constants';
import {getFromSpotify} from '../../utils/api';
import {FetchStatus, Timeout} from '../../config/types';

export const useFetchTrack = () => {
  const timer = useRef<Timeout>();
  const [url, setUrl] = useState({
    value: '',
    isValid: false,
  });
  const [feedback, setFeedback] = useState({
    status: FetchStatus.idle,
    message: '',
  });
  const [anchor, setAnchor] =
    useState<Omit<Anchor, 'anchorID' | 'submitter'>>();

  const retrieveInfo = useCallback(async () => {
    setFeedback({
      status: FetchStatus.pending,
      message: 'Hang tight ...',
    });

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
      const normalizedData: Omit<Anchor, 'anchorID' | 'submitter'> = {
        spotifyId: trackID,
        name: data.name,
        album: data.album.name,
        artists: data.artists
          .map((artist: {name: string}) => artist.name)
          .join(', '),
        images: data.album.images,
      };
      // Store the song data in the state
      setAnchor(normalizedData);
    }
  }, [url]);

  const updateUrl = (value: string) => {
    setUrl({
      value,
      isValid: SPOTIFY_LINK_REG.test(value),
    });
  };

  const reset = useCallback(() => {
    setUrl({
      value: '',
      isValid: false,
    });
    setAnchor(undefined);
    setFeedback({
      status: FetchStatus.idle,
      message: '',
    });
  }, []);

  useEffect(
    () => () => {
      clearTimeout(timer.current);
    },
    [],
  );

  useEffect(() => {
    clearTimeout(timer.current);
    if (url.isValid) {
      timer.current = setTimeout(() => {
        retrieveInfo();
      }, 500);
    }
  }, [url, retrieveInfo]);

  return {
    anchor,
    url,
    feedback,
    updateUrl,
    reset,
  };
};
