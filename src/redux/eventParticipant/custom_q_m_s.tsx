/*
 * @Author: Shen Shu
 * @Date: 2022-07-26 13:47:49
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-26 16:07:13
 * @FilePath: /uwcssa_ca/src/redux/eventParticipant/custom_q_m_s.tsx
 * @Description:
 *
 */

// eslint-disable-next-line import/prefer-default-export
export const listEventParticipants = /* GraphQL */ `
  query ListEventParticipants(
    $filter: ModelEventParticipantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventParticipants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content1
        content2
        content3
        content4
        content5
        content6
        content7
        content8
        content9
        content10
        content11
        content12
        content13
        content14
        content15
        content16
        content17
        content18
        content19
        eventParticipantStatus
        createdAt
        updatedAt
        owner
        eventEventParticipantsId
        user {
          id
          name
          email
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
