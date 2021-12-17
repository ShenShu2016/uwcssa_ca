export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      active
      content
      createdAt
      id
      imgURLs
      qrCodeImgURL
      summary
      tags
      title
      #owner
      topic {
        id
        name
      }
      topicID
      updatedAt
      userID
      user {
        username
        avatarImgURL
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
            avatarImgURL
            badges
          }
        }
      }
      articleComments(filter: { active: { eq: true } }, sortDirection: ASC) {
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
            avatarImgURL
            badges
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
                avatarImgURL
                badges
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
