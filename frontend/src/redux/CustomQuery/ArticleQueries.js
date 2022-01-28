export const articleSortBySortKey = /* GraphQL */ `
  query ArticleSortBySortKey(
    $sortKey: SortKey!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    articleSortBySortKey(
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
        summary
        active
        createdAt
        topicID
        userID
        imgURLs
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
`;

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
      comments(filter: { active: { eq: true } }, sortDirection: ASC) {
        items {
          id
          content
          active
          targetID
          createdAt
          userID
          updatedAt
          owner
          user {
            username
            avatarImgURL
            badges
          }
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
          subComments(filter: { active: { eq: true } }, sortDirection: ASC) {
            items {
              id
              content
              active
              targetID
              commentID
              createdAt
              userID
              replyToUserID
              updatedAt
              owner
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
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
