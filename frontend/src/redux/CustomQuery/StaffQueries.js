// export const eventSortBySortKey = /* GraphQL */ `
//   query EventSortBySortKey(
//     $sortKey: SortKey
//     $createdAt: ModelStringKeyConditionInput
//     $sortDirection: ModelSortDirection
//     $filter: ModelEventFilterInput
//     $limit: Int
//     $nextToken: String
//   ) {
//     eventSortBySortKey(
//       sortKey: $sortKey
//       createdAt: $createdAt
//       sortDirection: $sortDirection
//       filter: $filter
//       limit: $limit
//       nextToken: $nextToken
//     ) {
//       items {
//         id
//         summary
//         title
//         startDate
//         endDate
//         online
//         group
//         backGroundImgURL
//         qrCodeImgURL
//         posterImgURL
//         imgURLs
//         content
//         address {
//           description
//           place_id
//           reference
//           terms
//           types
//           apartmentNumbers
//         }
//         user {
//           id
//           username
//           email
//           owner
//           firstName
//           lastName
//           intro
//           major
//           avatarImgURL
//           backGroundImgURL
//           linkedIn
//           github
//           sortKey
//           createdAt
//           updatedAt
//           badges
//         }
//         topic {
//           id
//           name
//           userID
//           createdAt
//           updatedAt
//         }
//         eventComments {
//           nextToken
//         }
//         eventParticipants(sortDirection: DESC) {
//           nextToken
//           items {
//             id
//             name
//             email
//             address {
//               description
//               place_id
//               reference
//               terms
//               types
//               apartmentNumbers
//             }
//             phone
//             weChat
//             message
//             numberOfPeople
//             active
//             createdAt
//             eventParticipantStatus
//             eventID
//             userID
//             updatedAt
//           }
//         }
//         likes {
//           nextToken
//         }
//       }
//       nextToken
//     }
//   }
// `;
export const eventSortBySortKey = /* GraphQL */ `
  query EventSortBySortKey(
    $sortKey: SortKey!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventSortBySortKey(
      sortKey: $sortKey
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        summary
        title
        startDate
        endDate
        online
        group
        backGroundImgURL
        qrCodeImgURL
        posterImgURL
        imgURLs
        content
        address {
          description
          place_id
          reference
          terms
          types
          apartmentNumbers
        }
        sponsor
        tags
        eventStatus
        active
        createdAt
        sortKey
        topicID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        eventComments {
          nextToken
        }
        eventParticipants(sortDirection: DESC) {
          nextToken
          items {
            id
            name
            email
            address {
              description
              place_id
              reference
              terms
              types
              apartmentNumbers
            }
            phone
            weChat
            message
            numberOfPeople
            active
            createdAt
            eventParticipantStatus
            eventID
            userID
            updatedAt
            owner
          }
        }
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
