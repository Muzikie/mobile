import {Anchor} from '../../config/types';
import {Show, Hide} from '../../context/modalContext/types';

export interface AnchorRowProps {
  item: Required<Anchor>;
  onVote: () => Promise<void>;
  address: string;
  votingEnabled: boolean;
  skipVoteConfirmation: boolean;
  show: Show;
  hide: Hide;
}
