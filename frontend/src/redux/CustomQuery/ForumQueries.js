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

export const getForumTopic = /* GraphQL */ `
  query GetForumTopic($id: ID!) {
    getForumTopic(id: $id) {
      id
      name
      userID
      createdAt
      updatedAt
      forumSubTopics {
        items {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
          forumPosts(filter: { active: { eq: true } }, sortDirection: DESC) {
            items {
              id
              title
              content
              imgS3Keys
              tags
              active
              createdAt
              lastReplyAt
              forumSubTopicID
              userID
              updatedAt
              user {
                username
                avatarImgS3Key
                badges
              }
              owner
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;

export const listForumTopics = /* GraphQL */ `
  query ListForumTopics(
    $filter: ModelForumTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForumTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        userID
        createdAt
        updatedAt
        forumSubTopics {
          items {
            id
            name
            createdAt
            forumTopicID
            userID
            updatedAt
            forumPosts(filter: { active: { eq: true } }, sortDirection: DESC) {
              items {
                id
                title
                content
                imgS3Keys
                tags
                active
                createdAt
                lastReplyAt
                forumSubTopicID
                userID
                updatedAt
                user {
                  username
                  avatarImgS3Key
                  badges
                }
                owner
              }
              nextToken
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;

export const listForumPosts = /* GraphQL */ `
  query ListForumPosts(
    $filter: ModelForumPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForumPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        content
        imgS3Keys
        tags
        active
        createdAt
        lastReplyAt
        forumSubTopicID
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
        forumSubTopic {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        owner
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;

export const forumPostSortByForumPostLastReplyAt = /* GraphQL */ `
  query ForumPostSortByForumPostLastReplyAt(
    $forumSubTopicID: ID
    $lastReplyAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelForumPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ForumPostSortByForumPostLastReplyAt(
      forumSubTopicID: $forumSubTopicID
      lastReplyAt: $lastReplyAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        content
        imgS3Keys
        tags
        active
        createdAt
        lastReplyAt
        forumSubTopicID
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
        forumSubTopic {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        owner
        forumPostComments(
          filter: { active: { eq: true } }
          sortDirection: DESC
        ) {
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
        forumPostSubComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
