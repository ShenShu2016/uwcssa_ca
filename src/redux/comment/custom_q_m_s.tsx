/*
 * @Author: Shen Shu
 * @Date: 2022-05-26 17:34:52
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-26 18:34:47
 * @FilePath: /uwcssa_ca/src/redux/comment/custom_q_m_s.tsx
 * @Description:
 *
 */

export const commentSortByArticleCommentsIdCreatedAt = /* GraphQL */ `
  query CommentSortByArticleCommentsIdCreatedAt(
    $articleCommentsId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentSortByArticleCommentsIdCreatedAt(
      articleCommentsId: $articleCommentsId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        isDeleted
        articleCommentsId
        createdAt
        updatedAt
        owner
        user {
          id
          name
          avatarURL
        }
      }
      nextToken
    }
  }
`;

export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      content
      isDeleted
      articleCommentsId
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
    }
  }
`;
