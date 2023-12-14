import {Anchor} from '../../../config/types';
import {Show, Hide} from '../../../context/modalContext/types';

export interface CandidateProps {
  item: Required<Anchor>;
  onVote: () => Promise<void>;
  address: string;
  skipVoteConfirmation: boolean;
  show: Show;
  hide: Hide;
}
