/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArticleTags = /* GraphQL */ `
  subscription OnCreateArticleTags {
    onCreateArticleTags {
      id
      tagID
      articleID
      tag {
        id
        label
        articles {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      article {
        id
        title
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateArticleTags = /* GraphQL */ `
  subscription OnUpdateArticleTags {
    onUpdateArticleTags {
      id
      tagID
      articleID
      tag {
        id
        label
        articles {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      article {
        id
        title
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteArticleTags = /* GraphQL */ `
  subscription OnDeleteArticleTags {
    onDeleteArticleTags {
      id
      tagID
      articleID
      tag {
        id
        label
        articles {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      article {
        id
        title
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
      createdAt
      updatedAt
    }
  }
`;
