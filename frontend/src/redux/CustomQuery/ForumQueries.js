export const getForumPost = /* GraphQL */ `
  query GetForumPost($id: ID!) {
    getForumPost(id: $id) {
      id
      content
      createdAt
      active
      imgURLs
      sortKey
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt

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
                avatarImgURL
              }
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
              imgURLs
              sortKey
              tags
              active
              createdAt
              lastReplyAt
              forumSubTopicID
              userID
              updatedAt
              user {
                username
                avatarImgURL
                badges
              }
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
                    avatarImgURL
                    badges
                  }
                }
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
                imgURLs
                tags
                sortKey
                active
                createdAt
                lastReplyAt
                forumSubTopicID
                userID
                updatedAt
                user {
                  username
                  avatarImgURL
                  badges
                }
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
                      avatarImgURL
                      badges
                    }
                  }
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
    listForumPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        imgURLs
        tags
        sortKey
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt

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
    forumPostSortByForumPostLastReplyAt(
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
        imgURLs
        tags
        sortKey
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        essential
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
              avatarImgURL
              badges
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

export const forumPostSortBySortKey = /* GraphQL */ `
  query ForumPostSortBySortKey(
    $sortKey: SortKey
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelForumPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    forumPostSortBySortKey(
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
        content
        imgURLs
        tags
        sortKey
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        essential
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
              avatarImgURL
              badges
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
