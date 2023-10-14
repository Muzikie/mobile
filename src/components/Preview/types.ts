import {Link} from '../../config/types';
import {SubmissionStatuses} from '../Feedback/types';

export interface PreviewProps {
  style?: object;
  submissionStatus: SubmissionStatuses;
  data?: Link;
}
