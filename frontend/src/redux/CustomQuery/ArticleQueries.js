export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      active
      content
      createdAt
      id
      imgS3Keys
      tags
      title
      topic {
        id
        name
      }
      topicID
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
      articleComments(filter: { active: { eq: true } }, sortDirection: DESC) {
        nextToken
        items {
          content
          createdAt
          id
          owner
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
          articleSubComments(
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
