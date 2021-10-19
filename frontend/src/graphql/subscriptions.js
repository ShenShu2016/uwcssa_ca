/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      email
      owner
      firstName
      lastName
      intro
      major
      avatarImgPath
      backGroundImgPath
      linkedin
      github
      createdAt
      updatedAt
      uWindsorEmail
      tags
      userEducations {
        items {
          id
          school
          degree
          fieldOfStudy
          startDate
          endDate
          grade
          description
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      userExperiences {
        items {
          id
          title
          employmentType
          companyName
          location
          startDate
          endDate
          industry
          description
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      email
      owner
      firstName
      lastName
      intro
      major
      avatarImgPath
      backGroundImgPath
      linkedin
      github
      createdAt
      updatedAt
      uWindsorEmail
      tags
      userEducations {
        items {
          id
          school
          degree
          fieldOfStudy
          startDate
          endDate
          grade
          description
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      userExperiences {
        items {
          id
          title
          employmentType
          companyName
          location
          startDate
          endDate
          industry
          description
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      email
      owner
      firstName
      lastName
      intro
      major
      avatarImgPath
      backGroundImgPath
      linkedin
      github
      createdAt
      updatedAt
      uWindsorEmail
      tags
      userEducations {
        items {
          id
          school
          degree
          fieldOfStudy
          startDate
          endDate
          grade
          description
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      userExperiences {
        items {
          id
          title
          employmentType
          companyName
          location
          startDate
          endDate
          industry
          description
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateUserEducation = /* GraphQL */ `
  subscription OnCreateUserEducation {
    onCreateUserEducation {
      id
      school
      degree
      fieldOfStudy
      startDate
      endDate
      grade
      description
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
        avatarImgPath
        backGroundImgPath
        linkedin
        github
        createdAt
        updatedAt
        uWindsorEmail
        tags
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateUserEducation = /* GraphQL */ `
  subscription OnUpdateUserEducation {
    onUpdateUserEducation {
      id
      school
      degree
      fieldOfStudy
      startDate
      endDate
      grade
      description
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
        avatarImgPath
        backGroundImgPath
        linkedin
        github
        createdAt
        updatedAt
        uWindsorEmail
        tags
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteUserEducation = /* GraphQL */ `
  subscription OnDeleteUserEducation {
    onDeleteUserEducation {
      id
      school
      degree
      fieldOfStudy
      startDate
      endDate
      grade
      description
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
        avatarImgPath
        backGroundImgPath
        linkedin
        github
        createdAt
        updatedAt
        uWindsorEmail
        tags
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onCreateUserExperience = /* GraphQL */ `
  subscription OnCreateUserExperience {
    onCreateUserExperience {
      id
      title
      employmentType
      companyName
      location
      startDate
      endDate
      industry
      description
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
        avatarImgPath
        backGroundImgPath
        linkedin
        github
        createdAt
        updatedAt
        uWindsorEmail
        tags
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateUserExperience = /* GraphQL */ `
  subscription OnUpdateUserExperience {
    onUpdateUserExperience {
      id
      title
      employmentType
      companyName
      location
      startDate
      endDate
      industry
      description
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
        avatarImgPath
        backGroundImgPath
        linkedin
        github
        createdAt
        updatedAt
        uWindsorEmail
        tags
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteUserExperience = /* GraphQL */ `
  subscription OnDeleteUserExperience {
    onDeleteUserExperience {
      id
      title
      employmentType
      companyName
      location
      startDate
      endDate
      industry
      description
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
        avatarImgPath
        backGroundImgPath
        linkedin
        github
        createdAt
        updatedAt
        uWindsorEmail
        tags
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
      }
      owner
    }
  }
`;
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
          topicID
          typeID
          active
          createdAt
          ByCreatedAt
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
          topicID
          typeID
          active
          createdAt
          ByCreatedAt
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
          topicID
          typeID
          active
          createdAt
          ByCreatedAt
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
          topicID
          typeID
          active
          createdAt
          ByCreatedAt
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
          topicID
          typeID
          active
          createdAt
          ByCreatedAt
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
          topicID
          typeID
          active
          createdAt
          ByCreatedAt
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
      topicID
      typeID
      active
      createdAt
      ByCreatedAt
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
      articleComments {
        items {
          id
          content
          like
          unlike
          active
          articleID
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
      topicID
      typeID
      active
      createdAt
      ByCreatedAt
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
      articleComments {
        items {
          id
          content
          like
          unlike
          active
          articleID
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
      topicID
      typeID
      active
      createdAt
      ByCreatedAt
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
      articleComments {
        items {
          id
          content
          like
          unlike
          active
          articleID
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
      active
      articleID
      createdAt
      updatedAt
      article {
        id
        title
        content
        imagePath
        like
        unlike
        topicID
        typeID
        active
        createdAt
        ByCreatedAt
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
        articleComments {
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
      active
      articleID
      createdAt
      updatedAt
      article {
        id
        title
        content
        imagePath
        like
        unlike
        topicID
        typeID
        active
        createdAt
        ByCreatedAt
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
        articleComments {
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
      active
      articleID
      createdAt
      updatedAt
      article {
        id
        title
        content
        imagePath
        like
        unlike
        topicID
        typeID
        active
        createdAt
        ByCreatedAt
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
        articleComments {
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
          bonus
          imagePath
          departmentID
          benefits
          schedule
          like
          unlike
          active
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
          bonus
          imagePath
          departmentID
          benefits
          schedule
          like
          unlike
          active
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
          bonus
          imagePath
          departmentID
          benefits
          schedule
          like
          unlike
          active
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
      bonus
      imagePath
      departmentID
      benefits
      schedule
      like
      unlike
      active
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
      uwcssaJobResumes {
        items {
          id
          name
          email
          resumeFilePath
          phone
          message
          createdAt
          uwcssaJobID
          uwcssaJobResumeStatus
          updatedAt
          owner
        }
        nextToken
      }
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
      bonus
      imagePath
      departmentID
      benefits
      schedule
      like
      unlike
      active
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
      uwcssaJobResumes {
        items {
          id
          name
          email
          resumeFilePath
          phone
          message
          createdAt
          uwcssaJobID
          uwcssaJobResumeStatus
          updatedAt
          owner
        }
        nextToken
      }
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
      bonus
      imagePath
      departmentID
      benefits
      schedule
      like
      unlike
      active
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
      uwcssaJobResumes {
        items {
          id
          name
          email
          resumeFilePath
          phone
          message
          createdAt
          uwcssaJobID
          uwcssaJobResumeStatus
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateUwcssaJobResume = /* GraphQL */ `
  subscription OnCreateUwcssaJobResume($owner: String) {
    onCreateUwcssaJobResume(owner: $owner) {
      id
      name
      email
      resumeFilePath
      phone
      message
      createdAt
      uwcssaJobID
      uwcssaJobResumeStatus
      updatedAt
      uwcssaJob {
        id
        introduction
        title
        requirements
        bonus
        imagePath
        departmentID
        benefits
        schedule
        like
        unlike
        active
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
        }
        owner
        uwcssaJobResumes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateUwcssaJobResume = /* GraphQL */ `
  subscription OnUpdateUwcssaJobResume($owner: String) {
    onUpdateUwcssaJobResume(owner: $owner) {
      id
      name
      email
      resumeFilePath
      phone
      message
      createdAt
      uwcssaJobID
      uwcssaJobResumeStatus
      updatedAt
      uwcssaJob {
        id
        introduction
        title
        requirements
        bonus
        imagePath
        departmentID
        benefits
        schedule
        like
        unlike
        active
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
        }
        owner
        uwcssaJobResumes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteUwcssaJobResume = /* GraphQL */ `
  subscription OnDeleteUwcssaJobResume($owner: String) {
    onDeleteUwcssaJobResume(owner: $owner) {
      id
      name
      email
      resumeFilePath
      phone
      message
      createdAt
      uwcssaJobID
      uwcssaJobResumeStatus
      updatedAt
      uwcssaJob {
        id
        introduction
        title
        requirements
        bonus
        imagePath
        departmentID
        benefits
        schedule
        like
        unlike
        active
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
        }
        owner
        uwcssaJobResumes {
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
      id
      name
      like
      unlike
      createdAt
      updatedAt
      owner
      forumSubTopics {
        items {
          id
          name
          like
          unlike
          active
          forumTopicID
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
      id
      name
      like
      unlike
      createdAt
      updatedAt
      owner
      forumSubTopics {
        items {
          id
          name
          like
          unlike
          active
          forumTopicID
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
      id
      name
      like
      unlike
      createdAt
      updatedAt
      owner
      forumSubTopics {
        items {
          id
          name
          like
          unlike
          active
          forumTopicID
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
      id
      name
      like
      unlike
      active
      forumTopicID
      createdAt
      updatedAt
      forumTopic {
        id
        name
        like
        unlike
        createdAt
        updatedAt
        owner
        forumSubTopics {
          nextToken
        }
      }
      owner
      forumPosts {
        items {
          id
          title
          content
          imagePath
          like
          unlike
          createdAt
          active
          forumSubTopicID
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
      id
      name
      like
      unlike
      active
      forumTopicID
      createdAt
      updatedAt
      forumTopic {
        id
        name
        like
        unlike
        createdAt
        updatedAt
        owner
        forumSubTopics {
          nextToken
        }
      }
      owner
      forumPosts {
        items {
          id
          title
          content
          imagePath
          like
          unlike
          createdAt
          active
          forumSubTopicID
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
      id
      name
      like
      unlike
      active
      forumTopicID
      createdAt
      updatedAt
      forumTopic {
        id
        name
        like
        unlike
        createdAt
        updatedAt
        owner
        forumSubTopics {
          nextToken
        }
      }
      owner
      forumPosts {
        items {
          id
          title
          content
          imagePath
          like
          unlike
          createdAt
          active
          forumSubTopicID
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
      title
      content
      imagePath
      like
      unlike
      createdAt
      active
      forumSubTopicID
      updatedAt
      forumSubTopic {
        id
        name
        like
        unlike
        active
        forumTopicID
        createdAt
        updatedAt
        forumTopic {
          id
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
          active
          forumPostID
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
      title
      content
      imagePath
      like
      unlike
      createdAt
      active
      forumSubTopicID
      updatedAt
      forumSubTopic {
        id
        name
        like
        unlike
        active
        forumTopicID
        createdAt
        updatedAt
        forumTopic {
          id
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
          active
          forumPostID
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
      title
      content
      imagePath
      like
      unlike
      createdAt
      active
      forumSubTopicID
      updatedAt
      forumSubTopic {
        id
        name
        like
        unlike
        active
        forumTopicID
        createdAt
        updatedAt
        forumTopic {
          id
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
          active
          forumPostID
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
      active
      forumPostID
      updatedAt
      forumPost {
        id
        title
        content
        imagePath
        like
        unlike
        createdAt
        active
        forumSubTopicID
        updatedAt
        forumSubTopic {
          id
          name
          like
          unlike
          active
          forumTopicID
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
          forumPostCommentID
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
      active
      forumPostID
      updatedAt
      forumPost {
        id
        title
        content
        imagePath
        like
        unlike
        createdAt
        active
        forumSubTopicID
        updatedAt
        forumSubTopic {
          id
          name
          like
          unlike
          active
          forumTopicID
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
          forumPostCommentID
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
      active
      forumPostID
      updatedAt
      forumPost {
        id
        title
        content
        imagePath
        like
        unlike
        createdAt
        active
        forumSubTopicID
        updatedAt
        forumSubTopic {
          id
          name
          like
          unlike
          active
          forumTopicID
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
          forumPostCommentID
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
      forumPostCommentID
      updatedAt
      forumPostComment {
        id
        content
        like
        unlike
        createdAt
        active
        forumPostID
        updatedAt
        forumPost {
          id
          title
          content
          imagePath
          like
          unlike
          createdAt
          active
          forumSubTopicID
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
      forumPostCommentID
      updatedAt
      forumPostComment {
        id
        content
        like
        unlike
        createdAt
        active
        forumPostID
        updatedAt
        forumPost {
          id
          title
          content
          imagePath
          like
          unlike
          createdAt
          active
          forumSubTopicID
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
      forumPostCommentID
      updatedAt
      forumPostComment {
        id
        content
        like
        unlike
        createdAt
        active
        forumPostID
        updatedAt
        forumPost {
          id
          title
          content
          imagePath
          like
          unlike
          createdAt
          active
          forumSubTopicID
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
export const onCreateMarketType = /* GraphQL */ `
  subscription OnCreateMarketType {
    onCreateMarketType {
      id
      name
      createdAt
      updatedAt
      owner
      marketItems {
        items {
          id
          name
          imagePath
          title
          price
          description
          location
          marketTypeID
          condition
          marketItemCategoryID
          marketItemCarID
          marketItemHomeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateMarketType = /* GraphQL */ `
  subscription OnUpdateMarketType {
    onUpdateMarketType {
      id
      name
      createdAt
      updatedAt
      owner
      marketItems {
        items {
          id
          name
          imagePath
          title
          price
          description
          location
          marketTypeID
          condition
          marketItemCategoryID
          marketItemCarID
          marketItemHomeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteMarketType = /* GraphQL */ `
  subscription OnDeleteMarketType {
    onDeleteMarketType {
      id
      name
      createdAt
      updatedAt
      owner
      marketItems {
        items {
          id
          name
          imagePath
          title
          price
          description
          location
          marketTypeID
          condition
          marketItemCategoryID
          marketItemCarID
          marketItemHomeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateMarketItemCategory = /* GraphQL */ `
  subscription OnCreateMarketItemCategory {
    onCreateMarketItemCategory {
      id
      name
      createdAt
      updatedAt
      owner
      marketItems {
        items {
          id
          name
          imagePath
          title
          price
          description
          location
          marketTypeID
          condition
          marketItemCategoryID
          marketItemCarID
          marketItemHomeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateMarketItemCategory = /* GraphQL */ `
  subscription OnUpdateMarketItemCategory {
    onUpdateMarketItemCategory {
      id
      name
      createdAt
      updatedAt
      owner
      marketItems {
        items {
          id
          name
          imagePath
          title
          price
          description
          location
          marketTypeID
          condition
          marketItemCategoryID
          marketItemCarID
          marketItemHomeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteMarketItemCategory = /* GraphQL */ `
  subscription OnDeleteMarketItemCategory {
    onDeleteMarketItemCategory {
      id
      name
      createdAt
      updatedAt
      owner
      marketItems {
        items {
          id
          name
          imagePath
          title
          price
          description
          location
          marketTypeID
          condition
          marketItemCategoryID
          marketItemCarID
          marketItemHomeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateMarketItem = /* GraphQL */ `
  subscription OnCreateMarketItem {
    onCreateMarketItem {
      id
      name
      imagePath
      title
      price
      description
      location
      marketTypeID
      condition
      marketItemCategoryID
      marketItemCarID
      marketItemHomeID
      createdAt
      updatedAt
      marketType {
        id
        name
        createdAt
        updatedAt
        owner
        marketItems {
          nextToken
        }
      }
      marketItemCategory {
        id
        name
        createdAt
        updatedAt
        owner
        marketItems {
          nextToken
        }
      }
      owner
      marketItemCar {
        id
        year
        make
        model
        marketItemID
        createdAt
        updatedAt
        marketItem {
          id
          name
          imagePath
          title
          price
          description
          location
          marketTypeID
          condition
          marketItemCategoryID
          marketItemCarID
          marketItemHomeID
          createdAt
          updatedAt
          owner
        }
        owner
      }
      marketItemHome {
        id
        saleOrRent
        property
        bedroomCounts
        bathroomsCounts
        propertySize
        laundryType
        airCondition
        heating
        marketItemID
        createdAt
        updatedAt
        marketItem {
          id
          name
          imagePath
          title
          price
          description
          location
          marketTypeID
          condition
          marketItemCategoryID
          marketItemCarID
          marketItemHomeID
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const onUpdateMarketItem = /* GraphQL */ `
  subscription OnUpdateMarketItem {
    onUpdateMarketItem {
      id
      name
      imagePath
      title
      price
      description
      location
      marketTypeID
      condition
      marketItemCategoryID
      marketItemCarID
      marketItemHomeID
      createdAt
      updatedAt
      marketType {
        id
        name
        createdAt
        updatedAt
        owner
        marketItems {
          nextToken
        }
      }
      marketItemCategory {
        id
        name
        createdAt
        updatedAt
        owner
        marketItems {
          nextToken
        }
      }
      owner
      marketItemCar {
        id
        year
        make
        model
        marketItemID
        createdAt
        updatedAt
        marketItem {
          id
          name
          imagePath
          title
          price
          description
          location
          marketTypeID
          condition
          marketItemCategoryID
          marketItemCarID
          marketItemHomeID
          createdAt
          updatedAt
          owner
        }
        owner
      }
      marketItemHome {
        id
        saleOrRent
        property
        bedroomCounts
        bathroomsCounts
        propertySize
        laundryType
        airCondition
        heating
        marketItemID
        createdAt
        updatedAt
        marketItem {
          id
          name
          imagePath
          title
          price
          description
          location
          marketTypeID
          condition
          marketItemCategoryID
          marketItemCarID
          marketItemHomeID
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const onDeleteMarketItem = /* GraphQL */ `
  subscription OnDeleteMarketItem {
    onDeleteMarketItem {
      id
      name
      imagePath
      title
      price
      description
      location
      marketTypeID
      condition
      marketItemCategoryID
      marketItemCarID
      marketItemHomeID
      createdAt
      updatedAt
      marketType {
        id
        name
        createdAt
        updatedAt
        owner
        marketItems {
          nextToken
        }
      }
      marketItemCategory {
        id
        name
        createdAt
        updatedAt
        owner
        marketItems {
          nextToken
        }
      }
      owner
      marketItemCar {
        id
        year
        make
        model
        marketItemID
        createdAt
        updatedAt
        marketItem {
          id
          name
          imagePath
          title
          price
          description
          location
          marketTypeID
          condition
          marketItemCategoryID
          marketItemCarID
          marketItemHomeID
          createdAt
          updatedAt
          owner
        }
        owner
      }
      marketItemHome {
        id
        saleOrRent
        property
        bedroomCounts
        bathroomsCounts
        propertySize
        laundryType
        airCondition
        heating
        marketItemID
        createdAt
        updatedAt
        marketItem {
          id
          name
          imagePath
          title
          price
          description
          location
          marketTypeID
          condition
          marketItemCategoryID
          marketItemCarID
          marketItemHomeID
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const onCreateMarketItemCar = /* GraphQL */ `
  subscription OnCreateMarketItemCar {
    onCreateMarketItemCar {
      id
      year
      make
      model
      marketItemID
      createdAt
      updatedAt
      marketItem {
        id
        name
        imagePath
        title
        price
        description
        location
        marketTypeID
        condition
        marketItemCategoryID
        marketItemCarID
        marketItemHomeID
        createdAt
        updatedAt
        marketType {
          id
          name
          createdAt
          updatedAt
          owner
        }
        marketItemCategory {
          id
          name
          createdAt
          updatedAt
          owner
        }
        owner
        marketItemCar {
          id
          year
          make
          model
          marketItemID
          createdAt
          updatedAt
          owner
        }
        marketItemHome {
          id
          saleOrRent
          property
          bedroomCounts
          bathroomsCounts
          propertySize
          laundryType
          airCondition
          heating
          marketItemID
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const onUpdateMarketItemCar = /* GraphQL */ `
  subscription OnUpdateMarketItemCar {
    onUpdateMarketItemCar {
      id
      year
      make
      model
      marketItemID
      createdAt
      updatedAt
      marketItem {
        id
        name
        imagePath
        title
        price
        description
        location
        marketTypeID
        condition
        marketItemCategoryID
        marketItemCarID
        marketItemHomeID
        createdAt
        updatedAt
        marketType {
          id
          name
          createdAt
          updatedAt
          owner
        }
        marketItemCategory {
          id
          name
          createdAt
          updatedAt
          owner
        }
        owner
        marketItemCar {
          id
          year
          make
          model
          marketItemID
          createdAt
          updatedAt
          owner
        }
        marketItemHome {
          id
          saleOrRent
          property
          bedroomCounts
          bathroomsCounts
          propertySize
          laundryType
          airCondition
          heating
          marketItemID
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const onDeleteMarketItemCar = /* GraphQL */ `
  subscription OnDeleteMarketItemCar {
    onDeleteMarketItemCar {
      id
      year
      make
      model
      marketItemID
      createdAt
      updatedAt
      marketItem {
        id
        name
        imagePath
        title
        price
        description
        location
        marketTypeID
        condition
        marketItemCategoryID
        marketItemCarID
        marketItemHomeID
        createdAt
        updatedAt
        marketType {
          id
          name
          createdAt
          updatedAt
          owner
        }
        marketItemCategory {
          id
          name
          createdAt
          updatedAt
          owner
        }
        owner
        marketItemCar {
          id
          year
          make
          model
          marketItemID
          createdAt
          updatedAt
          owner
        }
        marketItemHome {
          id
          saleOrRent
          property
          bedroomCounts
          bathroomsCounts
          propertySize
          laundryType
          airCondition
          heating
          marketItemID
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const onCreateMarketItemHome = /* GraphQL */ `
  subscription OnCreateMarketItemHome {
    onCreateMarketItemHome {
      id
      saleOrRent
      property
      bedroomCounts
      bathroomsCounts
      propertySize
      laundryType
      airCondition
      heating
      marketItemID
      createdAt
      updatedAt
      marketItem {
        id
        name
        imagePath
        title
        price
        description
        location
        marketTypeID
        condition
        marketItemCategoryID
        marketItemCarID
        marketItemHomeID
        createdAt
        updatedAt
        marketType {
          id
          name
          createdAt
          updatedAt
          owner
        }
        marketItemCategory {
          id
          name
          createdAt
          updatedAt
          owner
        }
        owner
        marketItemCar {
          id
          year
          make
          model
          marketItemID
          createdAt
          updatedAt
          owner
        }
        marketItemHome {
          id
          saleOrRent
          property
          bedroomCounts
          bathroomsCounts
          propertySize
          laundryType
          airCondition
          heating
          marketItemID
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const onUpdateMarketItemHome = /* GraphQL */ `
  subscription OnUpdateMarketItemHome {
    onUpdateMarketItemHome {
      id
      saleOrRent
      property
      bedroomCounts
      bathroomsCounts
      propertySize
      laundryType
      airCondition
      heating
      marketItemID
      createdAt
      updatedAt
      marketItem {
        id
        name
        imagePath
        title
        price
        description
        location
        marketTypeID
        condition
        marketItemCategoryID
        marketItemCarID
        marketItemHomeID
        createdAt
        updatedAt
        marketType {
          id
          name
          createdAt
          updatedAt
          owner
        }
        marketItemCategory {
          id
          name
          createdAt
          updatedAt
          owner
        }
        owner
        marketItemCar {
          id
          year
          make
          model
          marketItemID
          createdAt
          updatedAt
          owner
        }
        marketItemHome {
          id
          saleOrRent
          property
          bedroomCounts
          bathroomsCounts
          propertySize
          laundryType
          airCondition
          heating
          marketItemID
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const onDeleteMarketItemHome = /* GraphQL */ `
  subscription OnDeleteMarketItemHome {
    onDeleteMarketItemHome {
      id
      saleOrRent
      property
      bedroomCounts
      bathroomsCounts
      propertySize
      laundryType
      airCondition
      heating
      marketItemID
      createdAt
      updatedAt
      marketItem {
        id
        name
        imagePath
        title
        price
        description
        location
        marketTypeID
        condition
        marketItemCategoryID
        marketItemCarID
        marketItemHomeID
        createdAt
        updatedAt
        marketType {
          id
          name
          createdAt
          updatedAt
          owner
        }
        marketItemCategory {
          id
          name
          createdAt
          updatedAt
          owner
        }
        owner
        marketItemCar {
          id
          year
          make
          model
          marketItemID
          createdAt
          updatedAt
          owner
        }
        marketItemHome {
          id
          saleOrRent
          property
          bedroomCounts
          bathroomsCounts
          propertySize
          laundryType
          airCondition
          heating
          marketItemID
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
