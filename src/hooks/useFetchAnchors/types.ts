interface JSON {
  [key: string]: any;
}

export type EndpointParams = Partial<
  Record<
    | 'offset'
    | 'limit'
    | 'sort'
    | 'audioID'
    | 'transactionID'
    | 'blockID'
    | 'creatorAddress'
    | 'address',
    string
  >
>;

export interface PostOptions {
  headers?: JSON;
  mode?: RequestMode;
  credentials?: RequestCredentials;
  redirect?: RequestRedirect;
}

export interface transactionCreationProps {
  transaction: string;
}

export interface BlockEvent {
  module: string;
  name: string;
  topics: string[];
  data: Record<string, unknown>;
}

interface DryRunTxData {
  events: BlockEvent[];
  success: boolean;
  result: number;
}

interface PostTxData {
  transactionID: string;
}

export enum Method {
  postTransaction = 'post.transactions',
  dryRunTransaction = 'post.transactions.dryrun',
}

export interface ErrorResponse {
  message: string;
  error: true;
}

export interface DefaultValues {
  [Method.postTransaction]: PostTxData;
  [Method.dryRunTransaction]: DryRunTxData;
}

export interface SuccessResponse<T extends Method> {
  data: DefaultValues[T];
  error: false;
}

export type DryRunTxResponse =
  | SuccessResponse<Method.dryRunTransaction>
  | ErrorResponse;

export type PostTxResponse =
  | SuccessResponse<Method.postTransaction>
  | ErrorResponse;
