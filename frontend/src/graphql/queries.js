/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUserEducation = /* GraphQL */ `
  query GetUserEducation($id: ID!) {
    getUserEducation(id: $id) {
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
export const listUserEducations = /* GraphQL */ `
  query ListUserEducations(
    $filter: ModelUserEducationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserEducations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        }
        owner
      }
      nextToken
    }
  }
`;
export const getUserExperience = /* GraphQL */ `
  query GetUserExperience($id: ID!) {
    getUserExperience(id: $id) {
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
export const listUserExperiences = /* GraphQL */ `
  query ListUserExperiences(
    $filter: ModelUserExperienceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserExperiences(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        }
        owner
      }
      nextToken
    }
  }
`;
export const getTopic = /* GraphQL */ `
  query GetTopic($id: ID!) {
    getTopic(id: $id) {
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
export const listTopics = /* GraphQL */ `
  query ListTopics(
    $filter: ModelTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getType = /* GraphQL */ `
  query GetType($id: ID!) {
    getType(id: $id) {
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
export const listTypes = /* GraphQL */ `
  query ListTypes(
    $filter: ModelTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
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
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const articleByCreatedAt = /* GraphQL */ `
  query ArticleByCreatedAt(
    $ByCreatedAt: String
    $activeCreatedAt: ModelArticleArticleByCreatedAtCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    articleByCreatedAt(
      ByCreatedAt: $ByCreatedAt
      activeCreatedAt: $activeCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const getArticleComment = /* GraphQL */ `
  query GetArticleComment($id: ID!) {
    getArticleComment(id: $id) {
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
export const listArticleComments = /* GraphQL */ `
  query ListArticleComments(
    $filter: ModelArticleCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticleComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const byArticleID = /* GraphQL */ `
  query ByArticleID(
    $articleID: ID
    $activeCreatedAt: ModelArticleCommentByArticleIDCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelArticleCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byArticleID(
      articleID: $articleID
      activeCreatedAt: $activeCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const getDepartment = /* GraphQL */ `
  query GetDepartment($id: ID!) {
    getDepartment(id: $id) {
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
export const listDepartments = /* GraphQL */ `
  query ListDepartments(
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUwcssaJob = /* GraphQL */ `
  query GetUwcssaJob($id: ID!) {
    getUwcssaJob(id: $id) {
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
export const listUwcssaJobs = /* GraphQL */ `
  query ListUwcssaJobs(
    $filter: ModelUwcssaJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUwcssaJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const byDepartmentID = /* GraphQL */ `
  query ByDepartmentID(
    $departmentID: ID
    $activeCreatedAt: ModelUwcssaJobByDepartmentIDCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUwcssaJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byDepartmentID(
      departmentID: $departmentID
      activeCreatedAt: $activeCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const getUwcssaJobResume = /* GraphQL */ `
  query GetUwcssaJobResume($id: ID!) {
    getUwcssaJobResume(id: $id) {
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
export const listUwcssaJobResumes = /* GraphQL */ `
  query ListUwcssaJobResumes(
    $filter: ModelUwcssaJobResumeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUwcssaJobResumes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const byUwcssaJobID = /* GraphQL */ `
  query ByUwcssaJobID(
    $uwcssaJobID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUwcssaJobResumeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byUwcssaJobID(
      uwcssaJobID: $uwcssaJobID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const getForumTopic = /* GraphQL */ `
  query GetForumTopic($id: ID!) {
    getForumTopic(id: $id) {
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
        like
        unlike
        createdAt
        updatedAt
        owner
        forumSubTopics {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getForumSubTopic = /* GraphQL */ `
  query GetForumSubTopic($id: ID!) {
    getForumSubTopic(id: $id) {
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
export const listForumSubTopics = /* GraphQL */ `
  query ListForumSubTopics(
    $filter: ModelForumSubTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForumSubTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getForumPost = /* GraphQL */ `
  query GetForumPost($id: ID!) {
    getForumPost(id: $id) {
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
      nextToken
    }
  }
`;
export const byForumSubTopicID = /* GraphQL */ `
  query ByForumSubTopicID(
    $forumSubTopicID: ID
    $activeCreatedAt: ModelForumPostByForumSubTopicIDCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelForumPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byForumSubTopicID(
      forumSubTopicID: $forumSubTopicID
      activeCreatedAt: $activeCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const getForumPostComment = /* GraphQL */ `
  query GetForumPostComment($id: ID!) {
    getForumPostComment(id: $id) {
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
export const listForumPostComments = /* GraphQL */ `
  query ListForumPostComments(
    $filter: ModelForumPostCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForumPostComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const byForumPostID = /* GraphQL */ `
  query ByForumPostID(
    $forumPostID: ID
    $activeCreatedAt: ModelForumPostCommentByForumPostIDCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelForumPostCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byForumPostID(
      forumPostID: $forumPostID
      activeCreatedAt: $activeCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getForumPostSubComment = /* GraphQL */ `
  query GetForumPostSubComment($id: ID!) {
    getForumPostSubComment(id: $id) {
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
export const listForumPostSubComments = /* GraphQL */ `
  query ListForumPostSubComments(
    $filter: ModelForumPostSubCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForumPostSubComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const byForumPostCommentID = /* GraphQL */ `
  query ByForumPostCommentID(
    $forumPostCommentID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelForumPostSubCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byForumPostCommentID(
      forumPostCommentID: $forumPostCommentID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const getMarketType = /* GraphQL */ `
  query GetMarketType($id: ID!) {
    getMarketType(id: $id) {
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listMarketTypes = /* GraphQL */ `
  query ListMarketTypes(
    $filter: ModelMarketTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarketTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        owner
        marketItems {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getMarketItemCategory = /* GraphQL */ `
  query GetMarketItemCategory($id: ID!) {
    getMarketItemCategory(id: $id) {
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listMarketItemCategories = /* GraphQL */ `
  query ListMarketItemCategories(
    $filter: ModelMarketItemCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarketItemCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        owner
        marketItems {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getMarketItem = /* GraphQL */ `
  query GetMarketItem($id: ID!) {
    getMarketItem(id: $id) {
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
          marketTypeID
          condition
          marketItemCategoryID
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const listMarketItems = /* GraphQL */ `
  query ListMarketItems(
    $filter: ModelMarketItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarketItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getMarketItemCar = /* GraphQL */ `
  query GetMarketItemCar($id: ID!) {
    getMarketItemCar(id: $id) {
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
        marketTypeID
        condition
        marketItemCategoryID
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
export const listMarketItemCars = /* GraphQL */ `
  query ListMarketItemCars(
    $filter: ModelMarketItemCarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarketItemCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          marketTypeID
          condition
          marketItemCategoryID
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const getMarketItemHome = /* GraphQL */ `
  query GetMarketItemHome($id: ID!) {
    getMarketItemHome(id: $id) {
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
        marketTypeID
        condition
        marketItemCategoryID
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
export const listMarketItemHomes = /* GraphQL */ `
  query ListMarketItemHomes(
    $filter: ModelMarketItemHomeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarketItemHomes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          marketTypeID
          condition
          marketItemCategoryID
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
