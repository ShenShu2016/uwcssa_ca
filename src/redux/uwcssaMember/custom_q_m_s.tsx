/*
 * @Author: Shen Shu
 * @Date: 2022-06-06 15:59:45
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-06 16:40:46
 * @FilePath: /uwcssa_ca/src/redux/uwcssaMember/custom_q_m_s.tsx
 * @Description:
 *
 */
export const listUwcssaMembers = /* GraphQL */ `
  query ListUwcssaMembers(
    $filter: ModelUwcssaMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUwcssaMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        title
        subTitle
        content
        email
        linkedIn
        website
        github
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
        uwcssaDepartmentUwcssaMembersId
      }
      nextToken
    }
  }
`;
