/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($username: String!) {
    getUser(username: $username) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $username: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      username: $username
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
        }
        owner
      }
      nextToken
    }
  }
`;
export const getTopic = /* GraphQL */ `
  query GetTopic($name: String!) {
    getTopic(name: $name) {
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
export const listTopics = /* GraphQL */ `
  query ListTopics(
    $name: String
    $filter: ModelTopicFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTopics(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
  query GetType($name: String!) {
    getType(name: $name) {
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
export const listTypes = /* GraphQL */ `
  query ListTypes(
    $name: String
    $filter: ModelTypeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTypes(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const articlesByDate = /* GraphQL */ `
  query ArticlesByDate(
    $byDate: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    articlesByDate(
      byDate: $byDate
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
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const getDepartment = /* GraphQL */ `
  query GetDepartment($name: String!) {
    getDepartment(name: $name) {
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
    $name: String
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listDepartments(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      benefits
      schedule
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
          message
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
        benefits
        schedule
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
      active
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
        active
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
          createdAt
          updatedAt
          owner
        }
        owner
        uwcssaJobResumeStatus {
          status
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const getUwcssaJobResumeStatus = /* GraphQL */ `
  query GetUwcssaJobResumeStatus($status: String!) {
    getUwcssaJobResumeStatus(status: $status) {
      status
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
          active
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
export const listUwcssaJobResumeStatuses = /* GraphQL */ `
  query ListUwcssaJobResumeStatuses(
    $status: String
    $filter: ModelUwcssaJobResumeStatusFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUwcssaJobResumeStatuses(
      status: $status
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        status
        createdAt
        updatedAt
        uwcssaJobResumes {
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const getForumTopic = /* GraphQL */ `
  query GetForumTopic($name: String!) {
    getForumTopic(name: $name) {
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
export const listForumTopics = /* GraphQL */ `
  query ListForumTopics(
    $name: String
    $filter: ModelForumTopicFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listForumTopics(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getForumSubTopic = /* GraphQL */ `
  query GetForumSubTopic($name: String!) {
    getForumSubTopic(name: $name) {
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
export const listForumSubTopics = /* GraphQL */ `
  query ListForumSubTopics(
    $name: String
    $filter: ModelForumSubTopicFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listForumSubTopics(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getForumPost = /* GraphQL */ `
  query GetForumPost($id: ID!) {
    getForumPost(id: $id) {
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
export const listForumPosts = /* GraphQL */ `
  query ListForumPosts(
    $filter: ModelForumPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForumPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        updatedAt
        forumPostComment {
          id
          content
          like
          unlike
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
export const getMarketType = /* GraphQL */ `
  query GetMarketType($name: String!) {
    getMarketType(name: $name) {
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
export const listMarketTypes = /* GraphQL */ `
  query ListMarketTypes(
    $name: String
    $filter: ModelMarketTypeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMarketTypes(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
  query GetMarketItemCategory($name: String!) {
    getMarketItemCategory(name: $name) {
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
export const listMarketItemCategories = /* GraphQL */ `
  query ListMarketItemCategories(
    $name: String
    $filter: ModelMarketItemCategoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMarketItemCategories(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
          condition
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
          condition
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
