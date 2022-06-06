/*
 * @Author: Shen Shu
 * @Date: 2022-06-06 15:59:45
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-06 15:59:52
 * @FilePath: /uwcssa_ca/src/redux/researchDevelopmentTeam/custom_q_m_s.tsx
 * @Description:
 *
 */

export const listResearchDevelopmentTeams = /* GraphQL */ `
  query ListResearchDevelopmentTeams(
    $filter: ModelResearchDevelopmentTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResearchDevelopmentTeams(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        title
        subTitle
        content
        email
        linkedIn
        github
        website
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
      nextToken
    }
  }
`;
