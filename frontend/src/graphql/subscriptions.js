/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic {
    onCreateTopic {
      name
      like
      unlike
      createdAt
      updatedAt
      owner
      articles {
        items {
          id
          title
          content
          imagePath
          like
          unlike
          byDate
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic {
    onUpdateTopic {
      name
      like
      unlike
      createdAt
      updatedAt
      owner
      articles {
        items {
          id
          title
          content
          imagePath
          like
          unlike
          byDate
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic {
    onDeleteTopic {
      name
      like
      unlike
      createdAt
      updatedAt
      owner
      articles {
        items {
          id
          title
          content
          imagePath
          like
          unlike
          byDate
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateType = /* GraphQL */ `
  subscription OnCreateType {
    onCreateType {
      name
      like
      unlike
      createdAt
      updatedAt
      owner
      articles {
        items {
          id
          title
          content
          imagePath
          like
          unlike
          byDate
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateType = /* GraphQL */ `
  subscription OnUpdateType {
    onUpdateType {
      name
      like
      unlike
      createdAt
      updatedAt
      owner
      articles {
        items {
          id
          title
          content
          imagePath
          like
          unlike
          byDate
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteType = /* GraphQL */ `
  subscription OnDeleteType {
    onDeleteType {
      name
      like
      unlike
      createdAt
      updatedAt
      owner
      articles {
        items {
          id
          title
          content
          imagePath
          like
          unlike
          byDate
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle {
    onCreateArticle {
      id
      title
      content
      imagePath
      like
      unlike
      byDate
      createdAt
      updatedAt
      topic {
        name
        like
        unlike
        createdAt
        updatedAt
        owner
        articles {
          nextToken
        }
      }
      type {
        name
        like
        unlike
        createdAt
        updatedAt
        owner
        articles {
          nextToken
        }
      }
      owner
      ArticleComments {
        items {
          id
          content
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle {
    onUpdateArticle {
      id
      title
      content
      imagePath
      like
      unlike
      byDate
      createdAt
      updatedAt
      topic {
        name
        like
        unlike
        createdAt
        updatedAt
        owner
        articles {
          nextToken
        }
      }
      type {
        name
        like
        unlike
        createdAt
        updatedAt
        owner
        articles {
          nextToken
        }
      }
      owner
      ArticleComments {
        items {
          id
          content
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle {
    onDeleteArticle {
      id
      title
      content
      imagePath
      like
      unlike
      byDate
      createdAt
      updatedAt
      topic {
        name
        like
        unlike
        createdAt
        updatedAt
        owner
        articles {
          nextToken
        }
      }
      type {
        name
        like
        unlike
        createdAt
        updatedAt
        owner
        articles {
          nextToken
        }
      }
      owner
      ArticleComments {
        items {
          id
          content
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateArticleComment = /* GraphQL */ `
  subscription OnCreateArticleComment {
    onCreateArticleComment {
      id
      content
      like
      unlike
      createdAt
      updatedAt
      article {
        id
        title
        content
        imagePath
        like
        unlike
        byDate
        createdAt
        updatedAt
        topic {
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        type {
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        owner
        ArticleComments {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateArticleComment = /* GraphQL */ `
  subscription OnUpdateArticleComment {
    onUpdateArticleComment {
      id
      content
      like
      unlike
      createdAt
      updatedAt
      article {
        id
        title
        content
        imagePath
        like
        unlike
        byDate
        createdAt
        updatedAt
        topic {
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        type {
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        owner
        ArticleComments {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteArticleComment = /* GraphQL */ `
  subscription OnDeleteArticleComment {
    onDeleteArticleComment {
      id
      content
      like
      unlike
      createdAt
      updatedAt
      article {
        id
        title
        content
        imagePath
        like
        unlike
        byDate
        createdAt
        updatedAt
        topic {
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        type {
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        owner
        ArticleComments {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onCreateDepartment = /* GraphQL */ `
  subscription OnCreateDepartment {
    onCreateDepartment {
      name
      introduction
      email
      leader
      like
      unlike
      createdAt
      updatedAt
      owner
      uwcssaJobs {
        items {
          id
          introduction
          title
          requirements
          Bonus
          imagePath
          Benefits
          Schedule
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateDepartment = /* GraphQL */ `
  subscription OnUpdateDepartment {
    onUpdateDepartment {
      name
      introduction
      email
      leader
      like
      unlike
      createdAt
      updatedAt
      owner
      uwcssaJobs {
        items {
          id
          introduction
          title
          requirements
          Bonus
          imagePath
          Benefits
          Schedule
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteDepartment = /* GraphQL */ `
  subscription OnDeleteDepartment {
    onDeleteDepartment {
      name
      introduction
      email
      leader
      like
      unlike
      createdAt
      updatedAt
      owner
      uwcssaJobs {
        items {
          id
          introduction
          title
          requirements
          Bonus
          imagePath
          Benefits
          Schedule
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateUwcssaJob = /* GraphQL */ `
  subscription OnCreateUwcssaJob {
    onCreateUwcssaJob {
      id
      introduction
      title
      requirements
      Bonus
      imagePath
      Benefits
      Schedule
      like
      unlike
      createdAt
      updatedAt
      department {
        name
        introduction
        email
        leader
        like
        unlike
        createdAt
        updatedAt
        owner
        uwcssaJobs {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateUwcssaJob = /* GraphQL */ `
  subscription OnUpdateUwcssaJob {
    onUpdateUwcssaJob {
      id
      introduction
      title
      requirements
      Bonus
      imagePath
      Benefits
      Schedule
      like
      unlike
      createdAt
      updatedAt
      department {
        name
        introduction
        email
        leader
        like
        unlike
        createdAt
        updatedAt
        owner
        uwcssaJobs {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteUwcssaJob = /* GraphQL */ `
  subscription OnDeleteUwcssaJob {
    onDeleteUwcssaJob {
      id
      introduction
      title
      requirements
      Bonus
      imagePath
      Benefits
      Schedule
      like
      unlike
      createdAt
      updatedAt
      department {
        name
        introduction
        email
        leader
        like
        unlike
        createdAt
        updatedAt
        owner
        uwcssaJobs {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onCreateForumTopic = /* GraphQL */ `
  subscription OnCreateForumTopic {
    onCreateForumTopic {
      name
      like
      unlike
      createdAt
      updatedAt
      owner
      subTopics {
        items {
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateForumTopic = /* GraphQL */ `
  subscription OnUpdateForumTopic {
    onUpdateForumTopic {
      name
      like
      unlike
      createdAt
      updatedAt
      owner
      subTopics {
        items {
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteForumTopic = /* GraphQL */ `
  subscription OnDeleteForumTopic {
    onDeleteForumTopic {
      name
      like
      unlike
      createdAt
      updatedAt
      owner
      subTopics {
        items {
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateForumSubTopic = /* GraphQL */ `
  subscription OnCreateForumSubTopic {
    onCreateForumSubTopic {
      name
      like
      unlike
      createdAt
      updatedAt
      forumTopic {
        name
        like
        unlike
        createdAt
        updatedAt
        owner
        subTopics {
          nextToken
        }
      }
      owner
      forumPosts {
        items {
          id
          content
          imagePath
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateForumSubTopic = /* GraphQL */ `
  subscription OnUpdateForumSubTopic {
    onUpdateForumSubTopic {
      name
      like
      unlike
      createdAt
      updatedAt
      forumTopic {
        name
        like
        unlike
        createdAt
        updatedAt
        owner
        subTopics {
          nextToken
        }
      }
      owner
      forumPosts {
        items {
          id
          content
          imagePath
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteForumSubTopic = /* GraphQL */ `
  subscription OnDeleteForumSubTopic {
    onDeleteForumSubTopic {
      name
      like
      unlike
      createdAt
      updatedAt
      forumTopic {
        name
        like
        unlike
        createdAt
        updatedAt
        owner
        subTopics {
          nextToken
        }
      }
      owner
      forumPosts {
        items {
          id
          content
          imagePath
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateForumPost = /* GraphQL */ `
  subscription OnCreateForumPost {
    onCreateForumPost {
      id
      content
      imagePath
      like
      unlike
      createdAt
      updatedAt
      forumSubTopic {
        name
        like
        unlike
        createdAt
        updatedAt
        forumTopic {
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        owner
        forumPosts {
          nextToken
        }
      }
      owner
      forumPostComments {
        items {
          id
          content
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateForumPost = /* GraphQL */ `
  subscription OnUpdateForumPost {
    onUpdateForumPost {
      id
      content
      imagePath
      like
      unlike
      createdAt
      updatedAt
      forumSubTopic {
        name
        like
        unlike
        createdAt
        updatedAt
        forumTopic {
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        owner
        forumPosts {
          nextToken
        }
      }
      owner
      forumPostComments {
        items {
          id
          content
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteForumPost = /* GraphQL */ `
  subscription OnDeleteForumPost {
    onDeleteForumPost {
      id
      content
      imagePath
      like
      unlike
      createdAt
      updatedAt
      forumSubTopic {
        name
        like
        unlike
        createdAt
        updatedAt
        forumTopic {
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        owner
        forumPosts {
          nextToken
        }
      }
      owner
      forumPostComments {
        items {
          id
          content
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateForumPostComment = /* GraphQL */ `
  subscription OnCreateForumPostComment {
    onCreateForumPostComment {
      id
      content
      like
      unlike
      createdAt
      updatedAt
      forumPost {
        id
        content
        imagePath
        like
        unlike
        createdAt
        updatedAt
        forumSubTopic {
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        owner
        forumPostComments {
          nextToken
        }
      }
      owner
      forumPostSubComments {
        items {
          id
          content
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateForumPostComment = /* GraphQL */ `
  subscription OnUpdateForumPostComment {
    onUpdateForumPostComment {
      id
      content
      like
      unlike
      createdAt
      updatedAt
      forumPost {
        id
        content
        imagePath
        like
        unlike
        createdAt
        updatedAt
        forumSubTopic {
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        owner
        forumPostComments {
          nextToken
        }
      }
      owner
      forumPostSubComments {
        items {
          id
          content
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteForumPostComment = /* GraphQL */ `
  subscription OnDeleteForumPostComment {
    onDeleteForumPostComment {
      id
      content
      like
      unlike
      createdAt
      updatedAt
      forumPost {
        id
        content
        imagePath
        like
        unlike
        createdAt
        updatedAt
        forumSubTopic {
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        owner
        forumPostComments {
          nextToken
        }
      }
      owner
      forumPostSubComments {
        items {
          id
          content
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateForumPostSubComment = /* GraphQL */ `
  subscription OnCreateForumPostSubComment {
    onCreateForumPostSubComment {
      id
      content
      like
      unlike
      createdAt
      updatedAt
      forumPostComment {
        id
        content
        like
        unlike
        createdAt
        updatedAt
        forumPost {
          id
          content
          imagePath
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        owner
        forumPostSubComments {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateForumPostSubComment = /* GraphQL */ `
  subscription OnUpdateForumPostSubComment {
    onUpdateForumPostSubComment {
      id
      content
      like
      unlike
      createdAt
      updatedAt
      forumPostComment {
        id
        content
        like
        unlike
        createdAt
        updatedAt
        forumPost {
          id
          content
          imagePath
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        owner
        forumPostSubComments {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteForumPostSubComment = /* GraphQL */ `
  subscription OnDeleteForumPostSubComment {
    onDeleteForumPostSubComment {
      id
      content
      like
      unlike
      createdAt
      updatedAt
      forumPostComment {
        id
        content
        like
        unlike
        createdAt
        updatedAt
        forumPost {
          id
          content
          imagePath
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        owner
        forumPostSubComments {
          nextToken
        }
      }
      owner
    }
  }
`;
