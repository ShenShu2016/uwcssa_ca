/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserEducation = /* GraphQL */ `
  mutation CreateUserEducation(
    $input: CreateUserEducationInput!
    $condition: ModelUserEducationConditionInput
  ) {
    createUserEducation(input: $input, condition: $condition) {
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
export const updateUserEducation = /* GraphQL */ `
  mutation UpdateUserEducation(
    $input: UpdateUserEducationInput!
    $condition: ModelUserEducationConditionInput
  ) {
    updateUserEducation(input: $input, condition: $condition) {
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
export const deleteUserEducation = /* GraphQL */ `
  mutation DeleteUserEducation(
    $input: DeleteUserEducationInput!
    $condition: ModelUserEducationConditionInput
  ) {
    deleteUserEducation(input: $input, condition: $condition) {
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
export const createUserExperience = /* GraphQL */ `
  mutation CreateUserExperience(
    $input: CreateUserExperienceInput!
    $condition: ModelUserExperienceConditionInput
  ) {
    createUserExperience(input: $input, condition: $condition) {
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
export const updateUserExperience = /* GraphQL */ `
  mutation UpdateUserExperience(
    $input: UpdateUserExperienceInput!
    $condition: ModelUserExperienceConditionInput
  ) {
    updateUserExperience(input: $input, condition: $condition) {
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
export const deleteUserExperience = /* GraphQL */ `
  mutation DeleteUserExperience(
    $input: DeleteUserExperienceInput!
    $condition: ModelUserExperienceConditionInput
  ) {
    deleteUserExperience(input: $input, condition: $condition) {
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
export const createTopic = /* GraphQL */ `
  mutation CreateTopic(
    $input: CreateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    createTopic(input: $input, condition: $condition) {
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
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
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
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
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
export const createType = /* GraphQL */ `
  mutation CreateType(
    $input: CreateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    createType(input: $input, condition: $condition) {
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
export const updateType = /* GraphQL */ `
  mutation UpdateType(
    $input: UpdateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    updateType(input: $input, condition: $condition) {
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
export const deleteType = /* GraphQL */ `
  mutation DeleteType(
    $input: DeleteTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    deleteType(input: $input, condition: $condition) {
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
export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
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
        owner
        createdAt
        updatedAt
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
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
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
        owner
        createdAt
        updatedAt
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
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
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
        owner
        createdAt
        updatedAt
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
export const createArticleComment = /* GraphQL */ `
  mutation CreateArticleComment(
    $input: CreateArticleCommentInput!
    $condition: ModelArticleCommentConditionInput
  ) {
    createArticleComment(input: $input, condition: $condition) {
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
          owner
          createdAt
          updatedAt
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
export const updateArticleComment = /* GraphQL */ `
  mutation UpdateArticleComment(
    $input: UpdateArticleCommentInput!
    $condition: ModelArticleCommentConditionInput
  ) {
    updateArticleComment(input: $input, condition: $condition) {
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
          owner
          createdAt
          updatedAt
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
export const deleteArticleComment = /* GraphQL */ `
  mutation DeleteArticleComment(
    $input: DeleteArticleCommentInput!
    $condition: ModelArticleCommentConditionInput
  ) {
    deleteArticleComment(input: $input, condition: $condition) {
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
          owner
          createdAt
          updatedAt
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
export const createDepartment = /* GraphQL */ `
  mutation CreateDepartment(
    $input: CreateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    createDepartment(input: $input, condition: $condition) {
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
export const updateDepartment = /* GraphQL */ `
  mutation UpdateDepartment(
    $input: UpdateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    updateDepartment(input: $input, condition: $condition) {
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
export const deleteDepartment = /* GraphQL */ `
  mutation DeleteDepartment(
    $input: DeleteDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    deleteDepartment(input: $input, condition: $condition) {
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
export const createUwcssaJob = /* GraphQL */ `
  mutation CreateUwcssaJob(
    $input: CreateUwcssaJobInput!
    $condition: ModelUwcssaJobConditionInput
  ) {
    createUwcssaJob(input: $input, condition: $condition) {
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
      uwcssaJobResumes {
        items {
          id
          name
          email
          resumeFilePath
          phone
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const updateUwcssaJob = /* GraphQL */ `
  mutation UpdateUwcssaJob(
    $input: UpdateUwcssaJobInput!
    $condition: ModelUwcssaJobConditionInput
  ) {
    updateUwcssaJob(input: $input, condition: $condition) {
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
      uwcssaJobResumes {
        items {
          id
          name
          email
          resumeFilePath
          phone
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const deleteUwcssaJob = /* GraphQL */ `
  mutation DeleteUwcssaJob(
    $input: DeleteUwcssaJobInput!
    $condition: ModelUwcssaJobConditionInput
  ) {
    deleteUwcssaJob(input: $input, condition: $condition) {
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
      uwcssaJobResumes {
        items {
          id
          name
          email
          resumeFilePath
          phone
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const createUwcssaJobResume = /* GraphQL */ `
  mutation CreateUwcssaJobResume(
    $input: CreateUwcssaJobResumeInput!
    $condition: ModelUwcssaJobResumeConditionInput
  ) {
    createUwcssaJobResume(input: $input, condition: $condition) {
      id
      name
      email
      resumeFilePath
      phone
      createdAt
      updatedAt
      uwcssaJob {
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
export const updateUwcssaJobResume = /* GraphQL */ `
  mutation UpdateUwcssaJobResume(
    $input: UpdateUwcssaJobResumeInput!
    $condition: ModelUwcssaJobResumeConditionInput
  ) {
    updateUwcssaJobResume(input: $input, condition: $condition) {
      id
      name
      email
      resumeFilePath
      phone
      createdAt
      updatedAt
      uwcssaJob {
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
export const deleteUwcssaJobResume = /* GraphQL */ `
  mutation DeleteUwcssaJobResume(
    $input: DeleteUwcssaJobResumeInput!
    $condition: ModelUwcssaJobResumeConditionInput
  ) {
    deleteUwcssaJobResume(input: $input, condition: $condition) {
      id
      name
      email
      resumeFilePath
      phone
      createdAt
      updatedAt
      uwcssaJob {
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
export const createForumTopic = /* GraphQL */ `
  mutation CreateForumTopic(
    $input: CreateForumTopicInput!
    $condition: ModelForumTopicConditionInput
  ) {
    createForumTopic(input: $input, condition: $condition) {
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
export const updateForumTopic = /* GraphQL */ `
  mutation UpdateForumTopic(
    $input: UpdateForumTopicInput!
    $condition: ModelForumTopicConditionInput
  ) {
    updateForumTopic(input: $input, condition: $condition) {
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
export const deleteForumTopic = /* GraphQL */ `
  mutation DeleteForumTopic(
    $input: DeleteForumTopicInput!
    $condition: ModelForumTopicConditionInput
  ) {
    deleteForumTopic(input: $input, condition: $condition) {
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
export const createForumSubTopic = /* GraphQL */ `
  mutation CreateForumSubTopic(
    $input: CreateForumSubTopicInput!
    $condition: ModelForumSubTopicConditionInput
  ) {
    createForumSubTopic(input: $input, condition: $condition) {
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
export const updateForumSubTopic = /* GraphQL */ `
  mutation UpdateForumSubTopic(
    $input: UpdateForumSubTopicInput!
    $condition: ModelForumSubTopicConditionInput
  ) {
    updateForumSubTopic(input: $input, condition: $condition) {
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
export const deleteForumSubTopic = /* GraphQL */ `
  mutation DeleteForumSubTopic(
    $input: DeleteForumSubTopicInput!
    $condition: ModelForumSubTopicConditionInput
  ) {
    deleteForumSubTopic(input: $input, condition: $condition) {
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
export const createForumPost = /* GraphQL */ `
  mutation CreateForumPost(
    $input: CreateForumPostInput!
    $condition: ModelForumPostConditionInput
  ) {
    createForumPost(input: $input, condition: $condition) {
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
export const updateForumPost = /* GraphQL */ `
  mutation UpdateForumPost(
    $input: UpdateForumPostInput!
    $condition: ModelForumPostConditionInput
  ) {
    updateForumPost(input: $input, condition: $condition) {
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
export const deleteForumPost = /* GraphQL */ `
  mutation DeleteForumPost(
    $input: DeleteForumPostInput!
    $condition: ModelForumPostConditionInput
  ) {
    deleteForumPost(input: $input, condition: $condition) {
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
export const createForumPostComment = /* GraphQL */ `
  mutation CreateForumPostComment(
    $input: CreateForumPostCommentInput!
    $condition: ModelForumPostCommentConditionInput
  ) {
    createForumPostComment(input: $input, condition: $condition) {
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
export const updateForumPostComment = /* GraphQL */ `
  mutation UpdateForumPostComment(
    $input: UpdateForumPostCommentInput!
    $condition: ModelForumPostCommentConditionInput
  ) {
    updateForumPostComment(input: $input, condition: $condition) {
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
export const deleteForumPostComment = /* GraphQL */ `
  mutation DeleteForumPostComment(
    $input: DeleteForumPostCommentInput!
    $condition: ModelForumPostCommentConditionInput
  ) {
    deleteForumPostComment(input: $input, condition: $condition) {
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
export const createForumPostSubComment = /* GraphQL */ `
  mutation CreateForumPostSubComment(
    $input: CreateForumPostSubCommentInput!
    $condition: ModelForumPostSubCommentConditionInput
  ) {
    createForumPostSubComment(input: $input, condition: $condition) {
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
export const updateForumPostSubComment = /* GraphQL */ `
  mutation UpdateForumPostSubComment(
    $input: UpdateForumPostSubCommentInput!
    $condition: ModelForumPostSubCommentConditionInput
  ) {
    updateForumPostSubComment(input: $input, condition: $condition) {
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
export const deleteForumPostSubComment = /* GraphQL */ `
  mutation DeleteForumPostSubComment(
    $input: DeleteForumPostSubCommentInput!
    $condition: ModelForumPostSubCommentConditionInput
  ) {
    deleteForumPostSubComment(input: $input, condition: $condition) {
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
export const createMarketType = /* GraphQL */ `
  mutation CreateMarketType(
    $input: CreateMarketTypeInput!
    $condition: ModelMarketTypeConditionInput
  ) {
    createMarketType(input: $input, condition: $condition) {
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
export const updateMarketType = /* GraphQL */ `
  mutation UpdateMarketType(
    $input: UpdateMarketTypeInput!
    $condition: ModelMarketTypeConditionInput
  ) {
    updateMarketType(input: $input, condition: $condition) {
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
export const deleteMarketType = /* GraphQL */ `
  mutation DeleteMarketType(
    $input: DeleteMarketTypeInput!
    $condition: ModelMarketTypeConditionInput
  ) {
    deleteMarketType(input: $input, condition: $condition) {
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
export const createMarketItemCategory = /* GraphQL */ `
  mutation CreateMarketItemCategory(
    $input: CreateMarketItemCategoryInput!
    $condition: ModelMarketItemCategoryConditionInput
  ) {
    createMarketItemCategory(input: $input, condition: $condition) {
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
export const updateMarketItemCategory = /* GraphQL */ `
  mutation UpdateMarketItemCategory(
    $input: UpdateMarketItemCategoryInput!
    $condition: ModelMarketItemCategoryConditionInput
  ) {
    updateMarketItemCategory(input: $input, condition: $condition) {
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
export const deleteMarketItemCategory = /* GraphQL */ `
  mutation DeleteMarketItemCategory(
    $input: DeleteMarketItemCategoryInput!
    $condition: ModelMarketItemCategoryConditionInput
  ) {
    deleteMarketItemCategory(input: $input, condition: $condition) {
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
export const createMarketItem = /* GraphQL */ `
  mutation CreateMarketItem(
    $input: CreateMarketItemInput!
    $condition: ModelMarketItemConditionInput
  ) {
    createMarketItem(input: $input, condition: $condition) {
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
export const updateMarketItem = /* GraphQL */ `
  mutation UpdateMarketItem(
    $input: UpdateMarketItemInput!
    $condition: ModelMarketItemConditionInput
  ) {
    updateMarketItem(input: $input, condition: $condition) {
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
export const deleteMarketItem = /* GraphQL */ `
  mutation DeleteMarketItem(
    $input: DeleteMarketItemInput!
    $condition: ModelMarketItemConditionInput
  ) {
    deleteMarketItem(input: $input, condition: $condition) {
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
export const createMarketItemCar = /* GraphQL */ `
  mutation CreateMarketItemCar(
    $input: CreateMarketItemCarInput!
    $condition: ModelMarketItemCarConditionInput
  ) {
    createMarketItemCar(input: $input, condition: $condition) {
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
export const updateMarketItemCar = /* GraphQL */ `
  mutation UpdateMarketItemCar(
    $input: UpdateMarketItemCarInput!
    $condition: ModelMarketItemCarConditionInput
  ) {
    updateMarketItemCar(input: $input, condition: $condition) {
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
export const deleteMarketItemCar = /* GraphQL */ `
  mutation DeleteMarketItemCar(
    $input: DeleteMarketItemCarInput!
    $condition: ModelMarketItemCarConditionInput
  ) {
    deleteMarketItemCar(input: $input, condition: $condition) {
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
export const createMarketItemHome = /* GraphQL */ `
  mutation CreateMarketItemHome(
    $input: CreateMarketItemHomeInput!
    $condition: ModelMarketItemHomeConditionInput
  ) {
    createMarketItemHome(input: $input, condition: $condition) {
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
export const updateMarketItemHome = /* GraphQL */ `
  mutation UpdateMarketItemHome(
    $input: UpdateMarketItemHomeInput!
    $condition: ModelMarketItemHomeConditionInput
  ) {
    updateMarketItemHome(input: $input, condition: $condition) {
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
export const deleteMarketItemHome = /* GraphQL */ `
  mutation DeleteMarketItemHome(
    $input: DeleteMarketItemHomeInput!
    $condition: ModelMarketItemHomeConditionInput
  ) {
    deleteMarketItemHome(input: $input, condition: $condition) {
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
