/*
 * @Author: Shen Shu
 * @Date: 2022-05-21 00:00:03
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-22 23:23:07
 * @FilePath: /uwcssa_ca/frontend/src/redux/article/custom_q_m_s.tsx
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
        # content
        coverPageImgURL
        coverPageDescription
        # active
        tags {
          items {
            tagID
          }
        }
        # comments(sortDirection: ASC, filter: { isDeleted: { eq: false } }) {
        #   items {
        #     content
        #     createdAt
        #     user {
        #       avatarURL
        #       id
        #       name
        #       createdAt
        #     }
        #   }
        # }
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
