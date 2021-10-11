/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
      UserEducations {
        items {
          id
          school
          degree
          fieldOfStudy
          startDate
          endDate
          grade
          description
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      UserExperiences {
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
      UserEducations {
        items {
          id
          school
          degree
          fieldOfStudy
          startDate
          endDate
          grade
          description
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      UserExperiences {
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
      UserEducations {
        items {
          id
          school
          degree
          fieldOfStudy
          startDate
          endDate
          grade
          description
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      UserExperiences {
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
      createdAt
      updatedAt
      user {
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
        UserEducations {
          nextToken
        }
        UserExperiences {
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
      createdAt
      updatedAt
      user {
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
        UserEducations {
          nextToken
        }
        UserExperiences {
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
      createdAt
      updatedAt
      user {
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
        UserEducations {
          nextToken
        }
        UserExperiences {
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
      createdAt
      updatedAt
      user {
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
        UserEducations {
          nextToken
        }
        UserExperiences {
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
      createdAt
      updatedAt
      user {
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
        UserEducations {
          nextToken
        }
        UserExperiences {
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
      createdAt
      updatedAt
      user {
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
        UserEducations {
          nextToken
        }
        UserExperiences {
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
      name
      like
      unlike
      owner
      createdAt
      updatedAt
      articles {
        items {
          id
          title
          content
          imagePath
          like
          unlike
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
      name
      like
      unlike
      owner
      createdAt
      updatedAt
      articles {
        items {
          id
          title
          content
          imagePath
          like
          unlike
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
      name
      like
      unlike
      owner
      createdAt
      updatedAt
      articles {
        items {
          id
          title
          content
          imagePath
          like
          unlike
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
      createdAt
      ByCreatedAt
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
        owner
        createdAt
        updatedAt
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
          createdAt
          ArticleId
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
      createdAt
      ByCreatedAt
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
        owner
        createdAt
        updatedAt
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
          createdAt
          ArticleId
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
      createdAt
      ByCreatedAt
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
        owner
        createdAt
        updatedAt
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
          createdAt
          ArticleId
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
      ArticleId
      updatedAt
      article {
        id
        title
        content
        imagePath
        like
        unlike
        createdAt
        ByCreatedAt
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
          owner
          createdAt
          updatedAt
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
      createdAt
      ArticleId
      updatedAt
      article {
        id
        title
        content
        imagePath
        like
        unlike
        createdAt
        ByCreatedAt
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
          owner
          createdAt
          updatedAt
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
      createdAt
      ArticleId
      updatedAt
      article {
        id
        title
        content
        imagePath
        like
        unlike
        createdAt
        ByCreatedAt
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
          owner
          createdAt
          updatedAt
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
      benefits
      schedule
      like
      unlike
      active
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
      uwcssaJobResumes {
        items {
          id
          name
          email
          resumeFilePath
          phone
          message
          createdAt
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
      benefits
      schedule
      like
      unlike
      active
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
      uwcssaJobResumes {
        items {
          id
          name
          email
          resumeFilePath
          phone
          message
          createdAt
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
      benefits
      schedule
      like
      unlike
      active
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
      uwcssaJobResumes {
        items {
          id
          name
          email
          resumeFilePath
          phone
          message
          createdAt
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
      updatedAt
      uwcssaJob {
        id
        introduction
        title
        requirements
        bonus
        imagePath
        benefits
        schedule
        like
        unlike
        active
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
        }
        owner
        uwcssaJobResumes {
          nextToken
        }
      }
      owner
      uwcssaJobResumeStatus {
        status
        message
        createdAt
        updatedAt
        uwcssaJobResumes {
          nextToken
        }
        owner
      }
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
      updatedAt
      uwcssaJob {
        id
        introduction
        title
        requirements
        bonus
        imagePath
        benefits
        schedule
        like
        unlike
        active
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
        }
        owner
        uwcssaJobResumes {
          nextToken
        }
      }
      owner
      uwcssaJobResumeStatus {
        status
        message
        createdAt
        updatedAt
        uwcssaJobResumes {
          nextToken
        }
        owner
      }
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
      updatedAt
      uwcssaJob {
        id
        introduction
        title
        requirements
        bonus
        imagePath
        benefits
        schedule
        like
        unlike
        active
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
        }
        owner
        uwcssaJobResumes {
          nextToken
        }
      }
      owner
      uwcssaJobResumeStatus {
        status
        message
        createdAt
        updatedAt
        uwcssaJobResumes {
          nextToken
        }
        owner
      }
    }
  }
`;
export const onCreateUwcssaJobResumeStatus = /* GraphQL */ `
  subscription OnCreateUwcssaJobResumeStatus($owner: String) {
    onCreateUwcssaJobResumeStatus(owner: $owner) {
      status
      message
      createdAt
      updatedAt
      uwcssaJobResumes {
        items {
          id
          name
          email
          resumeFilePath
          phone
          message
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const onUpdateUwcssaJobResumeStatus = /* GraphQL */ `
  subscription OnUpdateUwcssaJobResumeStatus($owner: String) {
    onUpdateUwcssaJobResumeStatus(owner: $owner) {
      status
      message
      createdAt
      updatedAt
      uwcssaJobResumes {
        items {
          id
          name
          email
          resumeFilePath
          phone
          message
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const onDeleteUwcssaJobResumeStatus = /* GraphQL */ `
  subscription OnDeleteUwcssaJobResumeStatus($owner: String) {
    onDeleteUwcssaJobResumeStatus(owner: $owner) {
      status
      message
      createdAt
      updatedAt
      uwcssaJobResumes {
        items {
          id
          name
          email
          resumeFilePath
          phone
          message
          createdAt
          updatedAt
          owner
        }
        nextToken
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
          ByCreatedAt
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
          ByCreatedAt
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
          ByCreatedAt
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
      ByCreatedAt
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
          ForumPostId
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
      ByCreatedAt
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
          ForumPostId
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
      ByCreatedAt
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
          ForumPostId
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
      ForumPostId
      createdAt
      updatedAt
      forumPost {
        id
        content
        imagePath
        like
        unlike
        ByCreatedAt
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
          ForumPostCommentId
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
      ForumPostId
      createdAt
      updatedAt
      forumPost {
        id
        content
        imagePath
        like
        unlike
        ByCreatedAt
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
          ForumPostCommentId
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
      ForumPostId
      createdAt
      updatedAt
      forumPost {
        id
        content
        imagePath
        like
        unlike
        ByCreatedAt
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
          ForumPostCommentId
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
      ForumPostCommentId
      createdAt
      updatedAt
      forumPostComment {
        id
        content
        like
        unlike
        ForumPostId
        createdAt
        updatedAt
        forumPost {
          id
          content
          imagePath
          like
          unlike
          ByCreatedAt
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
      ForumPostCommentId
      createdAt
      updatedAt
      forumPostComment {
        id
        content
        like
        unlike
        ForumPostId
        createdAt
        updatedAt
        forumPost {
          id
          content
          imagePath
          like
          unlike
          ByCreatedAt
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
      ForumPostCommentId
      createdAt
      updatedAt
      forumPostComment {
        id
        content
        like
        unlike
        ForumPostId
        createdAt
        updatedAt
        forumPost {
          id
          content
          imagePath
          like
          unlike
          ByCreatedAt
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
export const onCreateMarketType = /* GraphQL */ `
  subscription OnCreateMarketType {
    onCreateMarketType {
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
          condition
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
          condition
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
          condition
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
          condition
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
          condition
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
          condition
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
      condition
      createdAt
      updatedAt
      marketType {
        name
        createdAt
        updatedAt
        owner
        marketItems {
          nextToken
        }
      }
      marketItemCategory {
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
          condition
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
          condition
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
      condition
      createdAt
      updatedAt
      marketType {
        name
        createdAt
        updatedAt
        owner
        marketItems {
          nextToken
        }
      }
      marketItemCategory {
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
          condition
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
          condition
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
      condition
      createdAt
      updatedAt
      marketType {
        name
        createdAt
        updatedAt
        owner
        marketItems {
          nextToken
        }
      }
      marketItemCategory {
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
          condition
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
          condition
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
        condition
        createdAt
        updatedAt
        marketType {
          name
          createdAt
          updatedAt
          owner
        }
        marketItemCategory {
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
        condition
        createdAt
        updatedAt
        marketType {
          name
          createdAt
          updatedAt
          owner
        }
        marketItemCategory {
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
        condition
        createdAt
        updatedAt
        marketType {
          name
          createdAt
          updatedAt
          owner
        }
        marketItemCategory {
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
        condition
        createdAt
        updatedAt
        marketType {
          name
          createdAt
          updatedAt
          owner
        }
        marketItemCategory {
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
        condition
        createdAt
        updatedAt
        marketType {
          name
          createdAt
          updatedAt
          owner
        }
        marketItemCategory {
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
        condition
        createdAt
        updatedAt
        marketType {
          name
          createdAt
          updatedAt
          owner
        }
        marketItemCategory {
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
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
