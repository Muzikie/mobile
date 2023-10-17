export const ANCHOR_CREATE_SCHEMA = {
  $id: 'anchor/create',
  title: 'CreateAsset transaction asset for anchor module',
  type: 'object',
  required: ['spotifyId', 'appleMusicId', 'name', 'album', 'artists', 'images'],
  properties: {
    spotifyId: {
      dataType: 'string',
      fieldNumber: 1,
    },
    appleMusicId: {
      dataType: 'string',
      fieldNumber: 2,
    },
    name: {
      dataType: 'string',
      fieldNumber: 3,
    },
    album: {
      dataType: 'string',
      fieldNumber: 4,
    },
    artists: {
      type: 'array',
      fieldNumber: 5,
      items: {
        dataType: 'string',
      },
    },
    images: {
      type: 'array',
      fieldNumber: 6,
      items: {
        $id: 'anchor/create/images',
        type: 'object',
        required: ['url', 'height', 'width'],
        properties: {
          url: {
            dataType: 'string',
            fieldNumber: 1,
          },
          height: {
            dataType: 'uint32',
            fieldNumber: 2,
          },
          width: {
            dataType: 'uint32',
            fieldNumber: 3,
          },
        },
      },
    },
  },
};

export const ANCHOR_VOTE_SCHEMA = {
  $id: 'anchor/vote',
  title: 'VoteAsset transaction asset for anchor module',
  type: 'object',
  required: ['anchorID'],
  properties: {
    anchorID: {
      dataType: 'bytes',
      fieldNumber: 1,
    },
  },
};

export const SCHEMAS = {
  [ANCHOR_CREATE_SCHEMA.$id]: ANCHOR_CREATE_SCHEMA,
  [ANCHOR_VOTE_SCHEMA.$id]: ANCHOR_VOTE_SCHEMA,
};
