/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAlbum = /* GraphQL */ `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
      id
      ownder
      ownerId
      name
      createdAt
      updatedAt
      owner
      photos {
        items {
          id
          createdAt
          updatedAt
          album {
            id
            ownder
            ownerId
            name
            createdAt
            updatedAt
            owner
            photos {
              nextToken
            }
          }
          fullsize {
            region
            bucket
            key
          }
          thumbnail {
            region
            bucket
            key
          }
          contentType
          gps {
            latitude
            longitude
            altitude
          }
          height
          width
          owner
        }
        nextToken
      }
    }
  }
`;
export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ownder
        ownerId
        name
        createdAt
        updatedAt
        owner
        photos {
          items {
            id
            createdAt
            updatedAt
            album {
              id
              ownder
              ownerId
              name
              createdAt
              updatedAt
              owner
            }
            fullsize {
              region
              bucket
              key
            }
            thumbnail {
              region
              bucket
              key
            }
            contentType
            gps {
              latitude
              longitude
              altitude
            }
            height
            width
            owner
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPhoto = /* GraphQL */ `
  query GetPhoto($id: ID!) {
    getPhoto(id: $id) {
      id
      createdAt
      updatedAt
      album {
        id
        ownder
        ownerId
        name
        createdAt
        updatedAt
        owner
        photos {
          items {
            id
            createdAt
            updatedAt
            album {
              id
              ownder
              ownerId
              name
              createdAt
              updatedAt
              owner
            }
            fullsize {
              region
              bucket
              key
            }
            thumbnail {
              region
              bucket
              key
            }
            contentType
            gps {
              latitude
              longitude
              altitude
            }
            height
            width
            owner
          }
          nextToken
        }
      }
      fullsize {
        region
        bucket
        key
      }
      thumbnail {
        region
        bucket
        key
      }
      contentType
      gps {
        latitude
        longitude
        altitude
      }
      height
      width
      owner
    }
  }
`;
export const listPhotos = /* GraphQL */ `
  query ListPhotos(
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        album {
          id
          ownder
          ownerId
          name
          createdAt
          updatedAt
          owner
          photos {
            items {
              id
              createdAt
              updatedAt
              contentType
              height
              width
              owner
            }
            nextToken
          }
        }
        fullsize {
          region
          bucket
          key
        }
        thumbnail {
          region
          bucket
          key
        }
        contentType
        gps {
          latitude
          longitude
          altitude
        }
        height
        width
        owner
      }
      nextToken
    }
  }
`;
