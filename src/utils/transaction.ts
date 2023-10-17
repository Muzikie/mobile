import {HTTP_STATUS} from '../config/constants';
import {DryRunTxResponse, BlockEvent} from './types';

export const getTransactionExecutionStatus = (
  module: string,
  id: string,
  response: DryRunTxResponse,
) => {
  if (response.error || !response.data.events.length) {
    return HTTP_STATUS.BAD_REQUEST.CODE;
  }

  const expectedEventName = `${module}:commandExecutionResult`;
  const commandExecResultEvents = response.data.events.filter(
    e => `${e.module}:${e.name}` === expectedEventName,
  );
  const txExecResultEvent = commandExecResultEvents.find(e =>
    e.topics.includes(id),
  );
  if (!txExecResultEvent) {
    return HTTP_STATUS.BAD_REQUEST.CODE;
  }
  return txExecResultEvent?.data?.success
    ? HTTP_STATUS.OK.CODE
    : HTTP_STATUS.BAD_REQUEST.CODE;
};

export const getEntityEvent = (
  module: string,
  response: DryRunTxResponse,
): BlockEvent[] => {
  if (response.error || !response.data.events.length) {
    return [];
  }
  return response.data.events.filter(
    e => e.module === module && e.name !== 'commandExecutionResult',
  );
};
