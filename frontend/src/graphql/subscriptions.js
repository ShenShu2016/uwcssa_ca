/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic {
    onCreateTopic {
      id
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
      id
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
      id
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
      id
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
      id
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
      id
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
        id
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
        id
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
        id
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
        id
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
        id
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
        id
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
          id
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        type {
          id
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
          id
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        type {
          id
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
          id
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        type {
          id
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
      id
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
      id
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
      id
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
        id
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
        id
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
        id
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
