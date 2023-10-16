import {Link} from '../../config/types';
import {FetchStatus} from '../../config/types';

export interface PreviewProps {
  style?: object;
  submissionStatus: FetchStatus;
  data?: Omit<Link, 'id' | 'submitter'>;
}
