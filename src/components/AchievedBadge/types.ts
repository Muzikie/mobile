import {Badges} from '../../config/types';

export interface AchievedBadgeProps {
  item: {
    count: number;
    type: Badges;
  };
}
