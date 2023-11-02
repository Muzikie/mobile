import {FetchStatus} from '../../config/types';

export const getStatus = (
  broadcastStatus: FetchStatus,
  fetchStatus: FetchStatus,
): FetchStatus => {
  // FetchStatus.idle id both are idle
  if (
    broadcastStatus === FetchStatus.idle &&
    fetchStatus === FetchStatus.idle
  ) {
    return FetchStatus.idle;
  }
  // FetchStatus.pending if either is pending
  if (
    broadcastStatus === FetchStatus.pending ||
    fetchStatus === FetchStatus.pending ||
    (broadcastStatus === FetchStatus.idle &&
      fetchStatus === FetchStatus.success)
  ) {
    return FetchStatus.pending;
  }
  // FetchStatus.success if both are success
  if (
    broadcastStatus === FetchStatus.success &&
    fetchStatus === FetchStatus.success
  ) {
    return FetchStatus.success;
  }
  // FetchStatus.error if either is error
  return FetchStatus.error;
};
