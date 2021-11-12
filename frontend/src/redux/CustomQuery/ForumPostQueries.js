export const getForumPost = /* GraphQL */ `
  query GetForumPost($id: ID!) {
    getForumPost(id: $id) {
      id
      content
      createdAt
      active
      imgS3Keys
      tags
      title
      lastReplyAt
      forumSubTopicID
      forumSubTopic {
        id
        name
        createdAt
        forumTopicID
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
        forumTopic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumPosts {
          nextToken
        }
      }
      updatedAt
      userID
      user {
        username
        avatarImgS3Key
        badges
      }
      likes(sortDirection: DESC) {
        items {
          createdAt
          id
          itemID
          like
          userID
          owner
          user {
            username
            avatarImgS3Key
          }
        }
      }
      forumPostComments(filter: { active: { eq: true } }, sortDirection: DESC) {
        nextToken
        items {
          content
          createdAt
          id
          owner
          forumPostID
          updatedAt
          userID
          user {
            username
            avatarImgS3Key
          }
          likes(sortDirection: DESC) {
            nextToken
            items {
              id
              itemID
              like
              owner
              updatedAt
              userID
            }
          }
          forumPostSubComments(
            filter: { active: { eq: true } }
            sortDirection: DESC
          ) {
            nextToken
            items {
              content
              createdAt
              id
              owner
              updatedAt
              replyToUserID
              replyTo {
                username
                avatarImgS3Key
              }
              userID
              user {
                username
                avatarImgS3Key
              }
              likes(sortDirection: DESC) {
                nextToken
                items {
                  id
                  itemID
                  like
                  owner
                  updatedAt
                  userID
                }
              }
            }
          }
        }
      }
    }
  }
`;
