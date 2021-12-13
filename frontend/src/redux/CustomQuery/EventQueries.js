export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      title
      startDate
      endDate
      online
      group
      posterImgURL
      qrCodeImgURL
      backGroundImgURL
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
        avatarImgURL
        linkedIn
        github
        sortKey
        createdAt
        badges
      }
      eventComments {
        items {
          id
          content
          active
          eventID
          createdAt
          userID
          updatedAt
          owner
          likes {
            items {
              id
              like
              itemID
              userID
              createdAt
              updatedAt
              owner
              user {
                id
                username
                owner
                avatarImgURL
                badges
              }
            }
            nextToken
          }
          user {
            id
            username
            owner
            avatarImgURL
            badges
          }
          eventSubComments {
            items {
              id
              content
              active
              eventCommentID
              createdAt
              userID
              updatedAt
              owner
              likes {
                items {
                  id
                  like
                  itemID
                  userID
                  createdAt
                  updatedAt
                  owner
                  user {
                    id
                    username
                    owner
                    avatarImgURL
                    badges
                  }
                }
                nextToken
              }
              user {
                id
                username
                owner
                avatarImgURL
                badges
              }
            }
            nextToken
          }
        }
        nextToken
      }
      eventParticipants {
        items {
          id
          name
          email
          address
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
        nextToken
      }
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
          user {
            id
            username
            owner
            avatarImgURL
            badges
          }
        }
        nextToken
      }
      topic {
        id
        name
        userID
        createdAt
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
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
      }
    }
  }
`;
