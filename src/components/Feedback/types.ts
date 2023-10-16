import {FetchStatus} from '../../config/types';

export interface FeedbackProps {
  style?: object;
  status: FetchStatus;
  message?: string;
}
