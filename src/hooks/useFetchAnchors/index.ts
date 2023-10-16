import {useState} from 'react';
import {Link} from '../../config/types';
import {API_CALL_LIMIT} from '../../config/constants';
import {FetchStatus} from '../../config/types';
import {getAnchors} from '../../utils/api';
import {FetchDirection} from './types';

export const useFetchAnchors = () => {
  const [feedback, setFeedback] = useState({
    status: FetchStatus.idle,
    message: '',
  });
  const [anchors, setAnchors] = useState<Link[]>([]);
  const [offset, setOffset] = useState(0);

  const retrieveAnchors = async (direction: FetchDirection) => {
    setFeedback({
      status: FetchStatus.pending,
      message: 'Sit tight ...',
    });

    try {
      const response = await getAnchors({
        limit: API_CALL_LIMIT,
        offset: direction === FetchDirection.newer ? '0' : offset.toString(),
      });

      if (response?.data) {
        if (direction === FetchDirection.newer) {
          setAnchors([...response.data, ...anchors]);
        } else {
          setAnchors([...anchors, ...response.data]);
        }

        setOffset(
          direction === FetchDirection.newer
            ? offset
            : offset + response.data.length,
        );

        setFeedback({
          status: FetchStatus.success,
          message: 'Successfully retrieved.',
        });
      }
    } catch (error) {
      setFeedback({
        status: FetchStatus.error,
        message: 'Error retrieving data.',
      });
    }
  };

  const fetchOlderAnchors = () => {
    retrieveAnchors(FetchDirection.older);
  };

  const fetchNewerAnchors = () => {
    retrieveAnchors(FetchDirection.newer);
  };

  return {
    anchors,
    feedback,
    fetchOlderAnchors,
    fetchNewerAnchors,
  };
};
