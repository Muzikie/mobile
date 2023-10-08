export enum BadgeNames {
  day = 'dayBadge',
  week = 'weekBadge',
  month = 'monthBadge',
  video = 'videoBadge',
  superLink = 'superLinkBadge',
}

export interface BadgeProps {
  style?: object;
  name: BadgeNames;
}
