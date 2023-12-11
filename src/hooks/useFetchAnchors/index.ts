import {useState} from 'react';
import {Anchor} from '../../config/types';
import {API_CALL_LIMIT} from '../../config/constants';
import {FetchStatus} from '../../config/types';
import {getAnchors} from '../../utils/api';

export const useFetchAnchors = (filter: 'winner' | 'all') => {
  const [feedback, setFeedback] = useState({
    status: FetchStatus.idle,
    message: '',
  });
  const [anchors, setAnchors] = useState<Anchor[]>([]);
  const [offset, setOffset] = useState(0);
  const [ended, setEnded] = useState(false);

  const retrieve = async (_option: unknown, refresh?: boolean) => {
    if (!ended || refresh) {
      setFeedback({
        status: FetchStatus.pending,
        message: 'Hang tight ...',
      });
      try {
        const response = await getAnchors({
          limit: API_CALL_LIMIT,
          offset: refresh ? 0 : offset,
          ...(filter === 'winner' ? {winner: 1} : {}),
        });

        if (response.meta.count < API_CALL_LIMIT) {
          setEnded(true);
        } else if (ended && refresh) {
          setEnded(false);
        }

        if (response?.data?.length) {
          if (refresh) {
            setAnchors(response.data);
          } else {
            setAnchors([...anchors, ...response.data]);
          }
          setOffset((refresh ? 0 : offset) + response.data.length);
          setFeedback({
            status: FetchStatus.success,
            message: '',
          });
        }
      } catch (error) {
        setFeedback({
          status: FetchStatus.error,
          message: 'Error retrieving data.',
        });
      }
    }
  };

  return {
    anchors,
    feedback,
    retrieve,
  };
};
