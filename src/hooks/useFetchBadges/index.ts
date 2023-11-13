import {useState, useEffect, useCallback} from 'react';
import {Badges, Badge, BadgeStat, FetchStatus} from '../../config/types';
import {API_CALL_LIMIT} from '../../config/constants';
import {useAccount} from '../../hooks/useAccount';
import {getBadges} from '../../utils/api';

export const useFetchBadges = () => {
  const [feedback, setFeedback] = useState({
    status: FetchStatus.idle,
    message: '',
  });
  const [badges, setBadges] = useState<Badge[]>([]);
  const [badgesStats, setBadgesStats] = useState<BadgeStat[]>([]);
  const {account} = useAccount();

  const categorizeBadges = useCallback(() => {
    const categorizedStats: Record<Badges, number> = {
      [Badges.AOTD]: 0,
      [Badges.AOTM]: 0,
      [Badges.AOTW]: 0,
    };

    badges
      .filter(item => item.claimed)
      .forEach(item => {
        categorizedStats[item.type] += 1;
      });

    const badgeStatsArray: BadgeStat[] = Object.keys(categorizedStats)
      .map(type => ({
        type: type as Badges,
        count: categorizedStats[type as keyof typeof categorizedStats],
      }))
      .filter(badge => badge.count > 0);

    setBadgesStats(badgeStatsArray);
  }, [setBadgesStats, badges]);

  const fetchBadges = useCallback(
    async (offset: number, limit = API_CALL_LIMIT) => {
      try {
        const response = await getBadges({
          awardedTo: account?.address,
          offset,
          limit,
        });
        const newBadges = response?.data || [];
        setBadges(prevBadges => [...prevBadges, ...newBadges]);

        if (response.meta.total > offset + newBadges.length) {
          fetchBadges(offset + limit, limit);
        }
      } catch (error) {
        setFeedback({status: FetchStatus.error, message: error.message});
      }
    },
    [setFeedback, setBadges, account],
  );

  const update = async () => {
    try {
      const response = await getBadges({
        awardedTo: account?.address,
        offset: '0',
        limit: API_CALL_LIMIT,
      });
      if (response.meta.total !== badges.length) {
        setBadges([]);
        fetchBadges(0);
      }
    } catch (error) {
      setFeedback({status: FetchStatus.error, message: error.message});
    }
  };

  useEffect(() => {
    if (account?.address) {
      fetchBadges(0);
    }
  }, [account, fetchBadges]);

  useEffect(() => {
    if (badges.length) {
      categorizeBadges();
    }
  }, [badges, categorizeBadges]);

  return {
    badgesStats,
    feedback,
    // filter unique badges based on badgeID
    unclaimed: badges
      .filter(item => !item.claimed)
      .filter(
        (item, index, self) =>
          self.findIndex(t => t.badgeID === item.badgeID) === index,
      ),
    update,
  };
};
