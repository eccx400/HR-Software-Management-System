/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getS3Object = /* GraphQL */ `
  query GetS3Object($id: ID!) {
    getS3Object(id: $id) {
      id
      bucket
      region
      key
      createdAt
      updatedAt
    }
  }
`;
export const listS3Objects = /* GraphQL */ `
  query ListS3Objects(
    $filter: ModelS3ObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listS3Objects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bucket
        region
        key
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPicture = /* GraphQL */ `
  query GetPicture($id: ID!) {
    getPicture(id: $id) {
      id
      name
      tag
      owner
      paygrade
      designation
      lastActivity
      empId
      department
      createdAt
      updatedAt
    }
  }
`;
export const listPictures = /* GraphQL */ `
  query ListPictures(
    $filter: ModelPictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        tag
        owner
        paygrade
        designation
        lastActivity
        empId
        department
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
