import {Anchor} from '../../config/types';

export interface AnchorRowProps {
  item: Required<Anchor>;
  onVote: () => Promise<void>;
  address: string;
  votingEnabled: boolean;
}
