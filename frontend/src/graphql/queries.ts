/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      userName
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        userName
        name
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
      id
      name
      firstName
      contactEmail
      title
      about
      avatarURL
      website
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        firstName
        contactEmail
        title
        about
        avatarURL
        website
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      articles {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      id
      title
      content
      coverPageImgURL
      coverPageDescription
      tags {
        nextToken
      }
      comments {
        nextToken
      }
      active
      createdAt
      updatedAt
      owner
      user {
        id
        name
        firstName
        contactEmail
        title
        about
        avatarURL
        website
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        coverPageImgURL
        coverPageDescription
        active
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const articleSortByCreatedAt = /* GraphQL */ `
  query ArticleSortByCreatedAt(
    $active: ActiveType!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    articleSortByCreatedAt(
      active: $active
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        content
        coverPageImgURL
        coverPageDescription
        active
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      isDeleted
      articleCommentId
      article {
        id
        title
        content
        coverPageImgURL
        coverPageDescription
        active
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
      user {
        id
        name
        firstName
        contactEmail
        title
        about
        avatarURL
        website
        createdAt
        updatedAt
        owner
      }
      articleCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        isDeleted
        articleCommentId
        createdAt
        updatedAt
        owner
        articleCommentsId
      }
      nextToken
    }
  }
`;
export const getContactUs = /* GraphQL */ `
  query GetContactUs($id: ID!) {
    getContactUs(id: $id) {
      id
      fullName
      email
      message
      phone
      createdAt
      updatedAt
      owner
      user {
        id
        name
        firstName
        contactEmail
        title
        about
        avatarURL
        website
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const listContactuses = /* GraphQL */ `
  query ListContactuses(
    $filter: ModelContactUsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fullName
        email
        message
        phone
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUserImage = /* GraphQL */ `
  query GetUserImage($id: ID!) {
    getUserImage(id: $id) {
      id
      objectURL
      key
      targetTable
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUserImages = /* GraphQL */ `
  query ListUserImages(
    $filter: ModelUserImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        objectURL
        key
        targetTable
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getArticleTags = /* GraphQL */ `
  query GetArticleTags($id: ID!) {
    getArticleTags(id: $id) {
      id
      tagID
      articleID
      tag {
        id
        createdAt
        updatedAt
        owner
      }
      article {
        id
        title
        content
        coverPageImgURL
        coverPageDescription
        active
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const listArticleTags = /* GraphQL */ `
  query ListArticleTags(
    $filter: ModelArticleTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticleTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tagID
        articleID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
