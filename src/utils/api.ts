import {
  EndpointParams,
  PostOptions,
  AwaitedEndpointResult,
  transactionCreationProps,
  DryRunTxResponse,
  PostTxResponse,
} from './types';
import {Auth, Balance} from '../config/types';
import {
  SPOTIFY_ACCESS_TOKEN,
  APPLE_ACCESS_TOKEN,
  API_URLS,
  API_VERSION,
} from '../config/network';
import {removeNullValues} from './helpers';

interface IncomingHttpHeaders {
  'accept-patch'?: string;
  'accept-ranges'?: string;
  'www-authenticate'?: string;
  Authorization?: string;
  accept?: string;
  warning?: string;
  [header: string]: string | string[] | undefined;
}

const getList = (entity: string, params: EndpointParams) => {
  const validatedParams = removeNullValues(params);
  const search = new URLSearchParams(validatedParams);
  const queryString = search.toString();
  return fetch(
    `${API_URLS.STREAMER}/api/${API_VERSION}/${entity}?${queryString}`,
  )
    .then(res => res.json())
    .catch(err => {
      console.log(
        `API call to ${entity} failed with error:`,
        JSON.stringify(err),
      );
    });
};

const get = async (url: string, headers: IncomingHttpHeaders) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });
  const data = await response.json();
  return data;
};

const post = (url: string, body: any, options: PostOptions = {}) =>
  fetch(url, {
    method: 'POST',
    ...options,
    body,
  }).then(res => res.json());

export async function getAuth({
  params,
}: {
  params: EndpointParams;
}): Promise<Auth> {
  const results = await getList('auth', params);
  const newAccount = {
    nonce: '0',
    optionalKeys: [],
    mandatoryKeys: [],
  };
  return results?.data ?? newAccount;
}

export async function getTokenBalances({
  params,
}: {
  params: EndpointParams;
}): AwaitedEndpointResult<Array<Balance>> {
  return getList('token/balances', params);
}

export async function dryRunTransaction(
  params: transactionCreationProps,
): Promise<DryRunTxResponse> {
  const JsonPostOptions: PostOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  };
  return post(
    `${API_URLS.STREAMER}/api/${API_VERSION}/transactions/dryrun`,
    JSON.stringify(params),
    JsonPostOptions,
  ).catch(console.log);
}

export async function broadcastTransaction(
  params: transactionCreationProps,
): Promise<PostTxResponse> {
  const JsonPostOptions: PostOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return post(
    `${API_URLS.STREAMER}/api/${API_VERSION}/transactions`,
    JSON.stringify(params),
    JsonPostOptions,
  ).catch(console.log);
}

export const getFromAppleMusic = (storefront: string, id: string) =>
  get(`https://api.music.apple.com/v1/catalog/${storefront}/songs/${id}`, {
    Authorization: `Bearer ${APPLE_ACCESS_TOKEN}`,
  });

export const getFromSpotify = async (id: string) =>
  get(`https://api.spotify.com/v1/tracks/${id}`, {
    Authorization: `Bearer ${SPOTIFY_ACCESS_TOKEN}`,
  });

export const getAnchors = async (params: EndpointParams) =>
  getList('anchors', params);

export const getBadges = async (params: EndpointParams) =>
  getList('badges', params);
