/*
 * @Author: Shen Shu
 * @Date: 2022-05-21 00:00:03
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-21 00:23:15
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
        content
        active
        createdAt
        updatedAt
        owner
        tags {
          items {
            tagID
          }
        }
        user {
          id
          name
          avatarURL
        }
        comments(sortDirection: ASC, filter: { isDeleted: { eq: false } }) {
          items {
            content
            createdAt
            user {
              avatarURL
              id
              name
              createdAt
            }
          }
        }
      }
      nextToken
    }
  }
`;
