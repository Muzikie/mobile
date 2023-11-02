import {Anchor} from '../../config/types';
import {FetchStatus} from '../../config/types';

export interface PreviewProps {
  style?: object;
  fetchStatus: FetchStatus;
  data?: Omit<Anchor, 'anchorID' | 'submitter'>;
}
