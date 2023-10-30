import {Anchor} from '../../config/types';

export interface AnchorRowProps {
  item: Anchor;
  onVote: (id: string) => Promise<void>;
  address: string;
}
