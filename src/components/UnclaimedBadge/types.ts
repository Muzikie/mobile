import {Badge} from '../../config/types';
import {ModalContent} from '../../context/modalContext/types';
import {BroadcastData, BroadcastStatus} from '../../hooks/useTransaction/types';

export interface UnclaimedBadgeProps {
  badge: Badge;
  show: (content: ModalContent) => void;
  hide: () => void;
  signAndBroadcast: (tx: BroadcastData) => Promise<void>;
  broadcastStatus: BroadcastStatus;
}
