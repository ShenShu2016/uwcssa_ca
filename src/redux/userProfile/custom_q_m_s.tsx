/*
 * @Author: Shen Shu
 * @Date: 2022-06-01 21:39:26
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-01 22:03:26
 * @FilePath: /uwcssa_ca/src/redux/userProfile/custom_q_m_s.tsx
 * @Description:
 *
 */
export const userProfileSortByCreatedAt = /* GraphQL */ `
  query UserProfileSortByCreatedAt(
    $active: ActiveType!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userProfileSortByCreatedAt(
      active: $active
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        avatarURL {
          id
          objectURL
          key
          name
          size
          type
          lastModified
          lastModifiedDate
          compressedWidth
          objectCompressedURL
          thumbnailWidth
          objectThumbnailURL
          targetTable
          active
          createdAt
          updatedAt
          owner
        }
        userProfileAvatarURLId
        website
        active
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
