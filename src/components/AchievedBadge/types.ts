import {BadgeNames} from '../Badge/types';

export interface AchievedBadgeProps {
  item: {
    title: string;
    count: number;
    type: BadgeNames;
  };
}
