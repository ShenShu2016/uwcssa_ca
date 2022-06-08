/*
 * @Author: Shen Shu
 * @Date: 2022-05-21 00:00:03
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-08 16:38:34
 * @FilePath: /uwcssa_ca/src/redux/article/custom_q_m_s.tsx
 * @Description:
 *
 */

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
        # active
        tags {
          items {
            tagID
          }
        }
        createdAt
        updatedAt
        owner
        user {
          id
          name
          avatarURL {
            objectURL
            objectCompressedURL
            objectThumbnailURL
          }
        }
      }
      nextToken
    }
  }
`;
export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!, $eq: ID = "d1f0729b-b5d6-4d7c-b3dd-36c17b1a1d44") {
    getArticle(id: $id) {
      id
      title
      content
      coverPageImgURL
      coverPageDescription
      tags {
        items {
          tagID
        }
      }
      comments(sortDirection: DESC, filter: { isDeleted: { eq: false } }) {
        items {
          id
          content
          createdAt
          likes(filter: { owner: { eq: $eq } }, limit: 1) {
            items {
              owner
              id
            }
          }
          user {
            avatarURL {
              objectURL
              objectCompressedURL
              objectThumbnailURL
            }
            id
            name
            createdAt
          }
          count {
            id
            count
            commentCount
            like
            targetTable
            createdAt
            updatedAt
            owner
            countArticleId
            countEventId
            countCommentId
          }
        }
      }
      active
      createdAt
      updatedAt
      owner
      user {
        id
        name
        avatarURL {
          objectURL
          objectCompressedURL
          objectThumbnailURL
        }
      }
    }
  }
`;

export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
      id
      title
      content
      coverPageImgURL
      coverPageDescription
      tags {
        items {
          tagID
        }
      }
      active
      createdAt
      updatedAt
      owner
      user {
        id
        name
        fullName
        contactEmail
        title
        about
        avatarURL {
          objectURL
          objectCompressedURL
          objectThumbnailURL
        }
        website
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
