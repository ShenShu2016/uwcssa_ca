export const eventSortBySortKey = /* GraphQL */ `
  query EventSortBySortKey(
    $sortKey: SortKey
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
        title
        startDate
        endDate
        online
        group
        backGroundImgS3Key
        qrCodeImgS3Key
        posterImgS3Key
        content
        location
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
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
            userID
            weChat
            updatedAt
            phone
            owner
            numberOfPeople
            name
            message
            id
            eventParticipantStatus
            email
            createdAt
            address
            active
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
