/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
      badges
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
          createdAt
          userID
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
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      marketUserInfo {
        items {
          id
          phone
          weChat
          email
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      beingLiked {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      forumPosts {
        items {
          id
          title
          content
          imgURLs
          tags
          sortKey
          essential
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      marketItems {
        items {
          id
          name
          imgURLs
          title
          price
          marketType
          description
          location
          marketItemCondition
          marketItemCategory
          tags
          vehicleType
          year
          make
          model
          exteriorColor
          interiorColor
          fuelType
          marketRentalSaleRent
          propertyType
          bedroomCounts
          bathroomsCounts
          addressID
          propertySize
          dateAvailable
          laundryType
          airConditionType
          heatingType
          catFriendly
          dogFriendly
          contactPhone
          contactWeChat
          contactEmail
          sortKey
          active
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      kanbanAssignee {
        items {
          id
          title
          content
          kanbanStatus
          deadLine
          priority
          tags
          points
          active
          sortKey
          workSummary
          lastUpdatedID
          assigneeID
          departmentID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
      badges
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
          createdAt
          userID
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
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      marketUserInfo {
        items {
          id
          phone
          weChat
          email
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      beingLiked {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      forumPosts {
        items {
          id
          title
          content
          imgURLs
          tags
          sortKey
          essential
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      marketItems {
        items {
          id
          name
          imgURLs
          title
          price
          marketType
          description
          location
          marketItemCondition
          marketItemCategory
          tags
          vehicleType
          year
          make
          model
          exteriorColor
          interiorColor
          fuelType
          marketRentalSaleRent
          propertyType
          bedroomCounts
          bathroomsCounts
          addressID
          propertySize
          dateAvailable
          laundryType
          airConditionType
          heatingType
          catFriendly
          dogFriendly
          contactPhone
          contactWeChat
          contactEmail
          sortKey
          active
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      kanbanAssignee {
        items {
          id
          title
          content
          kanbanStatus
          deadLine
          priority
          tags
          points
          active
          sortKey
          workSummary
          lastUpdatedID
          assigneeID
          departmentID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
      badges
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
          createdAt
          userID
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
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      marketUserInfo {
        items {
          id
          phone
          weChat
          email
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      beingLiked {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      forumPosts {
        items {
          id
          title
          content
          imgURLs
          tags
          sortKey
          essential
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      marketItems {
        items {
          id
          name
          imgURLs
          title
          price
          marketType
          description
          location
          marketItemCondition
          marketItemCategory
          tags
          vehicleType
          year
          make
          model
          exteriorColor
          interiorColor
          fuelType
          marketRentalSaleRent
          propertyType
          bedroomCounts
          bathroomsCounts
          addressID
          propertySize
          dateAvailable
          laundryType
          airConditionType
          heatingType
          catFriendly
          dogFriendly
          contactPhone
          contactWeChat
          contactEmail
          sortKey
          active
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      kanbanAssignee {
        items {
          id
          title
          content
          kanbanStatus
          deadLine
          priority
          tags
          points
          active
          sortKey
          workSummary
          lastUpdatedID
          assigneeID
          departmentID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
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
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
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
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
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
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
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
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
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
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
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
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
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
      id
      name
      articles {
        items {
          id
          title
          summary
          content
          imgURLs
          qrCodeImgURL
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        nextToken
      }
      events {
        items {
          id
          summary
          title
          startDate
          endDate
          online
          group
          backGroundImgURL
          qrCodeImgURL
          posterImgURL
          imgURLs
          content
          addressID
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
      id
      name
      articles {
        items {
          id
          title
          summary
          content
          imgURLs
          qrCodeImgURL
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        nextToken
      }
      events {
        items {
          id
          summary
          title
          startDate
          endDate
          online
          group
          backGroundImgURL
          qrCodeImgURL
          posterImgURL
          imgURLs
          content
          addressID
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
      id
      name
      articles {
        items {
          id
          title
          summary
          content
          imgURLs
          qrCodeImgURL
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        nextToken
      }
      events {
        items {
          id
          summary
          title
          startDate
          endDate
          online
          group
          backGroundImgURL
          qrCodeImgURL
          posterImgURL
          imgURLs
          content
          addressID
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
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
      summary
      content
      imgURLs
      qrCodeImgURL
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      tags
      sortKey
      active
      createdAt
      topicID
      topic {
        id
        name
        articles {
          nextToken
        }
        events {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
      }
      articleComments {
        items {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
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
      summary
      content
      imgURLs
      qrCodeImgURL
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      tags
      sortKey
      active
      createdAt
      topicID
      topic {
        id
        name
        articles {
          nextToken
        }
        events {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
      }
      articleComments {
        items {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
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
      summary
      content
      imgURLs
      qrCodeImgURL
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      tags
      sortKey
      active
      createdAt
      topicID
      topic {
        id
        name
        articles {
          nextToken
        }
        events {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
      }
      articleComments {
        items {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
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
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      active
      articleID
      article {
        id
        title
        summary
        content
        imgURLs
        qrCodeImgURL
        likes {
          nextToken
        }
        tags
        sortKey
        active
        createdAt
        topicID
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articleComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      createdAt
      articleSubComments {
        items {
          id
          content
          active
          articleCommentID
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
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
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      active
      articleID
      article {
        id
        title
        summary
        content
        imgURLs
        qrCodeImgURL
        likes {
          nextToken
        }
        tags
        sortKey
        active
        createdAt
        topicID
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articleComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      createdAt
      articleSubComments {
        items {
          id
          content
          active
          articleCommentID
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
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
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      active
      articleID
      article {
        id
        title
        summary
        content
        imgURLs
        qrCodeImgURL
        likes {
          nextToken
        }
        tags
        sortKey
        active
        createdAt
        topicID
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articleComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      createdAt
      articleSubComments {
        items {
          id
          content
          active
          articleCommentID
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
      owner
    }
  }
`;
export const createArticleSubComment = /* GraphQL */ `
  mutation CreateArticleSubComment(
    $input: CreateArticleSubCommentInput!
    $condition: ModelArticleSubCommentConditionInput
  ) {
    createArticleSubComment(input: $input, condition: $condition) {
      id
      content
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      active
      articleCommentID
      articleComment {
        id
        content
        likes {
          nextToken
        }
        active
        articleID
        article {
          id
          title
          summary
          content
          imgURLs
          qrCodeImgURL
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        createdAt
        articleSubComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      createdAt
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
      owner
    }
  }
`;
export const updateArticleSubComment = /* GraphQL */ `
  mutation UpdateArticleSubComment(
    $input: UpdateArticleSubCommentInput!
    $condition: ModelArticleSubCommentConditionInput
  ) {
    updateArticleSubComment(input: $input, condition: $condition) {
      id
      content
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      active
      articleCommentID
      articleComment {
        id
        content
        likes {
          nextToken
        }
        active
        articleID
        article {
          id
          title
          summary
          content
          imgURLs
          qrCodeImgURL
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        createdAt
        articleSubComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      createdAt
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
      owner
    }
  }
`;
export const deleteArticleSubComment = /* GraphQL */ `
  mutation DeleteArticleSubComment(
    $input: DeleteArticleSubCommentInput!
    $condition: ModelArticleSubCommentConditionInput
  ) {
    deleteArticleSubComment(input: $input, condition: $condition) {
      id
      content
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      active
      articleCommentID
      articleComment {
        id
        content
        likes {
          nextToken
        }
        active
        articleID
        article {
          id
          title
          summary
          content
          imgURLs
          qrCodeImgURL
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        createdAt
        articleSubComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      createdAt
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
      owner
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      summary
      title
      startDate
      endDate
      online
      group
      backGroundImgURL
      qrCodeImgURL
      posterImgURL
      imgURLs
      content
      addressID
      address {
        id
        description
        place_id
        reference
        terms
        types
        apartmentNumbers
        geocodingResult
        lat
        lng
        itemID
        eventParticipant {
          id
          name
          email
          addressID
          phone
          weChat
          message
          numberOfPeople
          active
          createdAt
          eventParticipantStatus
          eventID
          userID
          updatedAt
          owner
        }
        event {
          id
          summary
          title
          startDate
          endDate
          online
          group
          backGroundImgURL
          qrCodeImgURL
          posterImgURL
          imgURLs
          content
          addressID
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        marketItem {
          id
          name
          imgURLs
          title
          price
          marketType
          description
          location
          marketItemCondition
          marketItemCategory
          tags
          vehicleType
          year
          make
          model
          exteriorColor
          interiorColor
          fuelType
          marketRentalSaleRent
          propertyType
          bedroomCounts
          bathroomsCounts
          addressID
          propertySize
          dateAvailable
          laundryType
          airConditionType
          heatingType
          catFriendly
          dogFriendly
          contactPhone
          contactWeChat
          contactEmail
          sortKey
          active
          createdAt
          userID
          updatedAt
          owner
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      sponsor
      tags
      eventStatus
      active
      createdAt
      sortKey
      topicID
      topic {
        id
        name
        articles {
          nextToken
        }
        events {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
      }
      eventComments {
        items {
          id
          content
          active
          eventID
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      eventParticipants {
        items {
          id
          name
          email
          addressID
          phone
          weChat
          message
          numberOfPeople
          active
          createdAt
          eventParticipantStatus
          eventID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      summary
      title
      startDate
      endDate
      online
      group
      backGroundImgURL
      qrCodeImgURL
      posterImgURL
      imgURLs
      content
      addressID
      address {
        id
        description
        place_id
        reference
        terms
        types
        apartmentNumbers
        geocodingResult
        lat
        lng
        itemID
        eventParticipant {
          id
          name
          email
          addressID
          phone
          weChat
          message
          numberOfPeople
          active
          createdAt
          eventParticipantStatus
          eventID
          userID
          updatedAt
          owner
        }
        event {
          id
          summary
          title
          startDate
          endDate
          online
          group
          backGroundImgURL
          qrCodeImgURL
          posterImgURL
          imgURLs
          content
          addressID
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        marketItem {
          id
          name
          imgURLs
          title
          price
          marketType
          description
          location
          marketItemCondition
          marketItemCategory
          tags
          vehicleType
          year
          make
          model
          exteriorColor
          interiorColor
          fuelType
          marketRentalSaleRent
          propertyType
          bedroomCounts
          bathroomsCounts
          addressID
          propertySize
          dateAvailable
          laundryType
          airConditionType
          heatingType
          catFriendly
          dogFriendly
          contactPhone
          contactWeChat
          contactEmail
          sortKey
          active
          createdAt
          userID
          updatedAt
          owner
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      sponsor
      tags
      eventStatus
      active
      createdAt
      sortKey
      topicID
      topic {
        id
        name
        articles {
          nextToken
        }
        events {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
      }
      eventComments {
        items {
          id
          content
          active
          eventID
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      eventParticipants {
        items {
          id
          name
          email
          addressID
          phone
          weChat
          message
          numberOfPeople
          active
          createdAt
          eventParticipantStatus
          eventID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      summary
      title
      startDate
      endDate
      online
      group
      backGroundImgURL
      qrCodeImgURL
      posterImgURL
      imgURLs
      content
      addressID
      address {
        id
        description
        place_id
        reference
        terms
        types
        apartmentNumbers
        geocodingResult
        lat
        lng
        itemID
        eventParticipant {
          id
          name
          email
          addressID
          phone
          weChat
          message
          numberOfPeople
          active
          createdAt
          eventParticipantStatus
          eventID
          userID
          updatedAt
          owner
        }
        event {
          id
          summary
          title
          startDate
          endDate
          online
          group
          backGroundImgURL
          qrCodeImgURL
          posterImgURL
          imgURLs
          content
          addressID
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        marketItem {
          id
          name
          imgURLs
          title
          price
          marketType
          description
          location
          marketItemCondition
          marketItemCategory
          tags
          vehicleType
          year
          make
          model
          exteriorColor
          interiorColor
          fuelType
          marketRentalSaleRent
          propertyType
          bedroomCounts
          bathroomsCounts
          addressID
          propertySize
          dateAvailable
          laundryType
          airConditionType
          heatingType
          catFriendly
          dogFriendly
          contactPhone
          contactWeChat
          contactEmail
          sortKey
          active
          createdAt
          userID
          updatedAt
          owner
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      sponsor
      tags
      eventStatus
      active
      createdAt
      sortKey
      topicID
      topic {
        id
        name
        articles {
          nextToken
        }
        events {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
      }
      eventComments {
        items {
          id
          content
          active
          eventID
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      eventParticipants {
        items {
          id
          name
          email
          addressID
          phone
          weChat
          message
          numberOfPeople
          active
          createdAt
          eventParticipantStatus
          eventID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const createEventComment = /* GraphQL */ `
  mutation CreateEventComment(
    $input: CreateEventCommentInput!
    $condition: ModelEventCommentConditionInput
  ) {
    createEventComment(input: $input, condition: $condition) {
      id
      content
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      active
      eventID
      event {
        id
        summary
        title
        startDate
        endDate
        online
        group
        backGroundImgURL
        qrCodeImgURL
        posterImgURL
        imgURLs
        content
        addressID
        address {
          id
          description
          place_id
          reference
          terms
          types
          apartmentNumbers
          geocodingResult
          lat
          lng
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        sponsor
        tags
        eventStatus
        active
        createdAt
        sortKey
        topicID
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        eventComments {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        likes {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      eventSubComments {
        items {
          id
          content
          active
          eventCommentID
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
      owner
    }
  }
`;
export const updateEventComment = /* GraphQL */ `
  mutation UpdateEventComment(
    $input: UpdateEventCommentInput!
    $condition: ModelEventCommentConditionInput
  ) {
    updateEventComment(input: $input, condition: $condition) {
      id
      content
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      active
      eventID
      event {
        id
        summary
        title
        startDate
        endDate
        online
        group
        backGroundImgURL
        qrCodeImgURL
        posterImgURL
        imgURLs
        content
        addressID
        address {
          id
          description
          place_id
          reference
          terms
          types
          apartmentNumbers
          geocodingResult
          lat
          lng
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        sponsor
        tags
        eventStatus
        active
        createdAt
        sortKey
        topicID
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        eventComments {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        likes {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      eventSubComments {
        items {
          id
          content
          active
          eventCommentID
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
      owner
    }
  }
`;
export const deleteEventComment = /* GraphQL */ `
  mutation DeleteEventComment(
    $input: DeleteEventCommentInput!
    $condition: ModelEventCommentConditionInput
  ) {
    deleteEventComment(input: $input, condition: $condition) {
      id
      content
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      active
      eventID
      event {
        id
        summary
        title
        startDate
        endDate
        online
        group
        backGroundImgURL
        qrCodeImgURL
        posterImgURL
        imgURLs
        content
        addressID
        address {
          id
          description
          place_id
          reference
          terms
          types
          apartmentNumbers
          geocodingResult
          lat
          lng
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        sponsor
        tags
        eventStatus
        active
        createdAt
        sortKey
        topicID
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        eventComments {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        likes {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      eventSubComments {
        items {
          id
          content
          active
          eventCommentID
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
      owner
    }
  }
`;
export const createEventSubComment = /* GraphQL */ `
  mutation CreateEventSubComment(
    $input: CreateEventSubCommentInput!
    $condition: ModelEventSubCommentConditionInput
  ) {
    createEventSubComment(input: $input, condition: $condition) {
      id
      content
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      active
      eventCommentID
      eventComment {
        id
        content
        likes {
          nextToken
        }
        active
        eventID
        event {
          id
          summary
          title
          startDate
          endDate
          online
          group
          backGroundImgURL
          qrCodeImgURL
          posterImgURL
          imgURLs
          content
          addressID
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        eventSubComments {
          nextToken
        }
        createdAt
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      createdAt
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
      owner
    }
  }
`;
export const updateEventSubComment = /* GraphQL */ `
  mutation UpdateEventSubComment(
    $input: UpdateEventSubCommentInput!
    $condition: ModelEventSubCommentConditionInput
  ) {
    updateEventSubComment(input: $input, condition: $condition) {
      id
      content
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      active
      eventCommentID
      eventComment {
        id
        content
        likes {
          nextToken
        }
        active
        eventID
        event {
          id
          summary
          title
          startDate
          endDate
          online
          group
          backGroundImgURL
          qrCodeImgURL
          posterImgURL
          imgURLs
          content
          addressID
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        eventSubComments {
          nextToken
        }
        createdAt
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      createdAt
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
      owner
    }
  }
`;
export const deleteEventSubComment = /* GraphQL */ `
  mutation DeleteEventSubComment(
    $input: DeleteEventSubCommentInput!
    $condition: ModelEventSubCommentConditionInput
  ) {
    deleteEventSubComment(input: $input, condition: $condition) {
      id
      content
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      active
      eventCommentID
      eventComment {
        id
        content
        likes {
          nextToken
        }
        active
        eventID
        event {
          id
          summary
          title
          startDate
          endDate
          online
          group
          backGroundImgURL
          qrCodeImgURL
          posterImgURL
          imgURLs
          content
          addressID
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        eventSubComments {
          nextToken
        }
        createdAt
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      createdAt
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
      owner
    }
  }
`;
export const createEventParticipant = /* GraphQL */ `
  mutation CreateEventParticipant(
    $input: CreateEventParticipantInput!
    $condition: ModelEventParticipantConditionInput
  ) {
    createEventParticipant(input: $input, condition: $condition) {
      id
      name
      email
      addressID
      address {
        id
        description
        place_id
        reference
        terms
        types
        apartmentNumbers
        geocodingResult
        lat
        lng
        itemID
        eventParticipant {
          id
          name
          email
          addressID
          phone
          weChat
          message
          numberOfPeople
          active
          createdAt
          eventParticipantStatus
          eventID
          userID
          updatedAt
          owner
        }
        event {
          id
          summary
          title
          startDate
          endDate
          online
          group
          backGroundImgURL
          qrCodeImgURL
          posterImgURL
          imgURLs
          content
          addressID
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        marketItem {
          id
          name
          imgURLs
          title
          price
          marketType
          description
          location
          marketItemCondition
          marketItemCategory
          tags
          vehicleType
          year
          make
          model
          exteriorColor
          interiorColor
          fuelType
          marketRentalSaleRent
          propertyType
          bedroomCounts
          bathroomsCounts
          addressID
          propertySize
          dateAvailable
          laundryType
          airConditionType
          heatingType
          catFriendly
          dogFriendly
          contactPhone
          contactWeChat
          contactEmail
          sortKey
          active
          createdAt
          userID
          updatedAt
          owner
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      phone
      weChat
      message
      numberOfPeople
      active
      createdAt
      eventParticipantStatus
      eventID
      event {
        id
        summary
        title
        startDate
        endDate
        online
        group
        backGroundImgURL
        qrCodeImgURL
        posterImgURL
        imgURLs
        content
        addressID
        address {
          id
          description
          place_id
          reference
          terms
          types
          apartmentNumbers
          geocodingResult
          lat
          lng
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        sponsor
        tags
        eventStatus
        active
        createdAt
        sortKey
        topicID
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        eventComments {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        likes {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
      owner
    }
  }
`;
export const updateEventParticipant = /* GraphQL */ `
  mutation UpdateEventParticipant(
    $input: UpdateEventParticipantInput!
    $condition: ModelEventParticipantConditionInput
  ) {
    updateEventParticipant(input: $input, condition: $condition) {
      id
      name
      email
      addressID
      address {
        id
        description
        place_id
        reference
        terms
        types
        apartmentNumbers
        geocodingResult
        lat
        lng
        itemID
        eventParticipant {
          id
          name
          email
          addressID
          phone
          weChat
          message
          numberOfPeople
          active
          createdAt
          eventParticipantStatus
          eventID
          userID
          updatedAt
          owner
        }
        event {
          id
          summary
          title
          startDate
          endDate
          online
          group
          backGroundImgURL
          qrCodeImgURL
          posterImgURL
          imgURLs
          content
          addressID
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        marketItem {
          id
          name
          imgURLs
          title
          price
          marketType
          description
          location
          marketItemCondition
          marketItemCategory
          tags
          vehicleType
          year
          make
          model
          exteriorColor
          interiorColor
          fuelType
          marketRentalSaleRent
          propertyType
          bedroomCounts
          bathroomsCounts
          addressID
          propertySize
          dateAvailable
          laundryType
          airConditionType
          heatingType
          catFriendly
          dogFriendly
          contactPhone
          contactWeChat
          contactEmail
          sortKey
          active
          createdAt
          userID
          updatedAt
          owner
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      phone
      weChat
      message
      numberOfPeople
      active
      createdAt
      eventParticipantStatus
      eventID
      event {
        id
        summary
        title
        startDate
        endDate
        online
        group
        backGroundImgURL
        qrCodeImgURL
        posterImgURL
        imgURLs
        content
        addressID
        address {
          id
          description
          place_id
          reference
          terms
          types
          apartmentNumbers
          geocodingResult
          lat
          lng
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        sponsor
        tags
        eventStatus
        active
        createdAt
        sortKey
        topicID
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        eventComments {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        likes {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
      owner
    }
  }
`;
export const deleteEventParticipant = /* GraphQL */ `
  mutation DeleteEventParticipant(
    $input: DeleteEventParticipantInput!
    $condition: ModelEventParticipantConditionInput
  ) {
    deleteEventParticipant(input: $input, condition: $condition) {
      id
      name
      email
      addressID
      address {
        id
        description
        place_id
        reference
        terms
        types
        apartmentNumbers
        geocodingResult
        lat
        lng
        itemID
        eventParticipant {
          id
          name
          email
          addressID
          phone
          weChat
          message
          numberOfPeople
          active
          createdAt
          eventParticipantStatus
          eventID
          userID
          updatedAt
          owner
        }
        event {
          id
          summary
          title
          startDate
          endDate
          online
          group
          backGroundImgURL
          qrCodeImgURL
          posterImgURL
          imgURLs
          content
          addressID
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        marketItem {
          id
          name
          imgURLs
          title
          price
          marketType
          description
          location
          marketItemCondition
          marketItemCategory
          tags
          vehicleType
          year
          make
          model
          exteriorColor
          interiorColor
          fuelType
          marketRentalSaleRent
          propertyType
          bedroomCounts
          bathroomsCounts
          addressID
          propertySize
          dateAvailable
          laundryType
          airConditionType
          heatingType
          catFriendly
          dogFriendly
          contactPhone
          contactWeChat
          contactEmail
          sortKey
          active
          createdAt
          userID
          updatedAt
          owner
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      phone
      weChat
      message
      numberOfPeople
      active
      createdAt
      eventParticipantStatus
      eventID
      event {
        id
        summary
        title
        startDate
        endDate
        online
        group
        backGroundImgURL
        qrCodeImgURL
        posterImgURL
        imgURLs
        content
        addressID
        address {
          id
          description
          place_id
          reference
          terms
          types
          apartmentNumbers
          geocodingResult
          lat
          lng
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        sponsor
        tags
        eventStatus
        active
        createdAt
        sortKey
        topicID
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        eventComments {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        likes {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
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
      id
      name
      introduction
      email
      leader
      uwcssaJobs {
        items {
          id
          introduction
          title
          requirements
          bonus
          imgURLs
          benefits
          schedule
          like
          unlike
          active
          createdAt
          departmentID
          userID
          updatedAt
        }
        nextToken
      }
      uwcssaMembers {
        items {
          id
          active
          leader
          title
          subTitle
          summary
          content
          imgURL
          startDate
          endDate
          createdAt
          departmentID
          owner
          userID
          updatedAt
        }
        nextToken
      }
      kanbans {
        items {
          id
          title
          content
          kanbanStatus
          deadLine
          priority
          tags
          points
          active
          sortKey
          workSummary
          lastUpdatedID
          assigneeID
          departmentID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateDepartment = /* GraphQL */ `
  mutation UpdateDepartment(
    $input: UpdateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    updateDepartment(input: $input, condition: $condition) {
      id
      name
      introduction
      email
      leader
      uwcssaJobs {
        items {
          id
          introduction
          title
          requirements
          bonus
          imgURLs
          benefits
          schedule
          like
          unlike
          active
          createdAt
          departmentID
          userID
          updatedAt
        }
        nextToken
      }
      uwcssaMembers {
        items {
          id
          active
          leader
          title
          subTitle
          summary
          content
          imgURL
          startDate
          endDate
          createdAt
          departmentID
          owner
          userID
          updatedAt
        }
        nextToken
      }
      kanbans {
        items {
          id
          title
          content
          kanbanStatus
          deadLine
          priority
          tags
          points
          active
          sortKey
          workSummary
          lastUpdatedID
          assigneeID
          departmentID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteDepartment = /* GraphQL */ `
  mutation DeleteDepartment(
    $input: DeleteDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    deleteDepartment(input: $input, condition: $condition) {
      id
      name
      introduction
      email
      leader
      uwcssaJobs {
        items {
          id
          introduction
          title
          requirements
          bonus
          imgURLs
          benefits
          schedule
          like
          unlike
          active
          createdAt
          departmentID
          userID
          updatedAt
        }
        nextToken
      }
      uwcssaMembers {
        items {
          id
          active
          leader
          title
          subTitle
          summary
          content
          imgURL
          startDate
          endDate
          createdAt
          departmentID
          owner
          userID
          updatedAt
        }
        nextToken
      }
      kanbans {
        items {
          id
          title
          content
          kanbanStatus
          deadLine
          priority
          tags
          points
          active
          sortKey
          workSummary
          lastUpdatedID
          assigneeID
          departmentID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUwcssaMember = /* GraphQL */ `
  mutation CreateUwcssaMember(
    $input: CreateUwcssaMemberInput!
    $condition: ModelUwcssaMemberConditionInput
  ) {
    createUwcssaMember(input: $input, condition: $condition) {
      id
      active
      leader
      title
      subTitle
      summary
      content
      imgURL
      startDate
      endDate
      createdAt
      departmentID
      department {
        id
        name
        introduction
        email
        leader
        uwcssaJobs {
          nextToken
        }
        uwcssaMembers {
          nextToken
        }
        kanbans {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
      }
      owner
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const updateUwcssaMember = /* GraphQL */ `
  mutation UpdateUwcssaMember(
    $input: UpdateUwcssaMemberInput!
    $condition: ModelUwcssaMemberConditionInput
  ) {
    updateUwcssaMember(input: $input, condition: $condition) {
      id
      active
      leader
      title
      subTitle
      summary
      content
      imgURL
      startDate
      endDate
      createdAt
      departmentID
      department {
        id
        name
        introduction
        email
        leader
        uwcssaJobs {
          nextToken
        }
        uwcssaMembers {
          nextToken
        }
        kanbans {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
      }
      owner
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const deleteUwcssaMember = /* GraphQL */ `
  mutation DeleteUwcssaMember(
    $input: DeleteUwcssaMemberInput!
    $condition: ModelUwcssaMemberConditionInput
  ) {
    deleteUwcssaMember(input: $input, condition: $condition) {
      id
      active
      leader
      title
      subTitle
      summary
      content
      imgURL
      startDate
      endDate
      createdAt
      departmentID
      department {
        id
        name
        introduction
        email
        leader
        uwcssaJobs {
          nextToken
        }
        uwcssaMembers {
          nextToken
        }
        kanbans {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
      }
      owner
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
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
      bonus
      imgURLs
      benefits
      schedule
      like
      unlike
      active
      createdAt
      departmentID
      department {
        id
        name
        introduction
        email
        leader
        uwcssaJobs {
          nextToken
        }
        uwcssaMembers {
          nextToken
        }
        kanbans {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
      }
      uwcssaJobResumes {
        items {
          id
          name
          email
          resumeFileS3Key
          phone
          message
          uwcssaJobResumeStatus
          createdAt
          uwcssaJobID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
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
      bonus
      imgURLs
      benefits
      schedule
      like
      unlike
      active
      createdAt
      departmentID
      department {
        id
        name
        introduction
        email
        leader
        uwcssaJobs {
          nextToken
        }
        uwcssaMembers {
          nextToken
        }
        kanbans {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
      }
      uwcssaJobResumes {
        items {
          id
          name
          email
          resumeFileS3Key
          phone
          message
          uwcssaJobResumeStatus
          createdAt
          uwcssaJobID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
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
      bonus
      imgURLs
      benefits
      schedule
      like
      unlike
      active
      createdAt
      departmentID
      department {
        id
        name
        introduction
        email
        leader
        uwcssaJobs {
          nextToken
        }
        uwcssaMembers {
          nextToken
        }
        kanbans {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
      }
      uwcssaJobResumes {
        items {
          id
          name
          email
          resumeFileS3Key
          phone
          message
          uwcssaJobResumeStatus
          createdAt
          uwcssaJobID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
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
      resumeFileS3Key
      phone
      message
      uwcssaJobResumeStatus
      createdAt
      uwcssaJobID
      uwcssaJob {
        id
        introduction
        title
        requirements
        bonus
        imgURLs
        benefits
        schedule
        like
        unlike
        active
        createdAt
        departmentID
        department {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobResumes {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
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
      resumeFileS3Key
      phone
      message
      uwcssaJobResumeStatus
      createdAt
      uwcssaJobID
      uwcssaJob {
        id
        introduction
        title
        requirements
        bonus
        imgURLs
        benefits
        schedule
        like
        unlike
        active
        createdAt
        departmentID
        department {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobResumes {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
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
      resumeFileS3Key
      phone
      message
      uwcssaJobResumeStatus
      createdAt
      uwcssaJobID
      uwcssaJob {
        id
        introduction
        title
        requirements
        bonus
        imgURLs
        benefits
        schedule
        like
        unlike
        active
        createdAt
        departmentID
        department {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobResumes {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
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
      id
      name
      forumSubTopics {
        items {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateForumTopic = /* GraphQL */ `
  mutation UpdateForumTopic(
    $input: UpdateForumTopicInput!
    $condition: ModelForumTopicConditionInput
  ) {
    updateForumTopic(input: $input, condition: $condition) {
      id
      name
      forumSubTopics {
        items {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteForumTopic = /* GraphQL */ `
  mutation DeleteForumTopic(
    $input: DeleteForumTopicInput!
    $condition: ModelForumTopicConditionInput
  ) {
    deleteForumTopic(input: $input, condition: $condition) {
      id
      name
      forumSubTopics {
        items {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createForumSubTopic = /* GraphQL */ `
  mutation CreateForumSubTopic(
    $input: CreateForumSubTopicInput!
    $condition: ModelForumSubTopicConditionInput
  ) {
    createForumSubTopic(input: $input, condition: $condition) {
      id
      name
      createdAt
      forumTopicID
      forumTopic {
        id
        name
        forumSubTopics {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
      }
      forumPosts {
        items {
          id
          title
          content
          imgURLs
          tags
          sortKey
          essential
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const updateForumSubTopic = /* GraphQL */ `
  mutation UpdateForumSubTopic(
    $input: UpdateForumSubTopicInput!
    $condition: ModelForumSubTopicConditionInput
  ) {
    updateForumSubTopic(input: $input, condition: $condition) {
      id
      name
      createdAt
      forumTopicID
      forumTopic {
        id
        name
        forumSubTopics {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
      }
      forumPosts {
        items {
          id
          title
          content
          imgURLs
          tags
          sortKey
          essential
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const deleteForumSubTopic = /* GraphQL */ `
  mutation DeleteForumSubTopic(
    $input: DeleteForumSubTopicInput!
    $condition: ModelForumSubTopicConditionInput
  ) {
    deleteForumSubTopic(input: $input, condition: $condition) {
      id
      name
      createdAt
      forumTopicID
      forumTopic {
        id
        name
        forumSubTopics {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
      }
      forumPosts {
        items {
          id
          title
          content
          imgURLs
          tags
          sortKey
          essential
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
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
      title
      content
      imgURLs
      tags
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      sortKey
      essential
      active
      createdAt
      lastReplyAt
      forumSubTopicID
      forumSubTopic {
        id
        name
        createdAt
        forumTopicID
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
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      forumPostComments {
        items {
          id
          content
          imgURLs
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      forumPostSubComments {
        items {
          id
          content
          active
          createdAt
          replyToUserID
          forumPostID
          forumPostCommentID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
      owner
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
      title
      content
      imgURLs
      tags
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      sortKey
      essential
      active
      createdAt
      lastReplyAt
      forumSubTopicID
      forumSubTopic {
        id
        name
        createdAt
        forumTopicID
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
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      forumPostComments {
        items {
          id
          content
          imgURLs
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      forumPostSubComments {
        items {
          id
          content
          active
          createdAt
          replyToUserID
          forumPostID
          forumPostCommentID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
      owner
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
      title
      content
      imgURLs
      tags
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      sortKey
      essential
      active
      createdAt
      lastReplyAt
      forumSubTopicID
      forumSubTopic {
        id
        name
        createdAt
        forumTopicID
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
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      forumPostComments {
        items {
          id
          content
          imgURLs
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      forumPostSubComments {
        items {
          id
          content
          active
          createdAt
          replyToUserID
          forumPostID
          forumPostCommentID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
      owner
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
      imgURLs
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      active
      forumPostID
      forumPost {
        id
        title
        content
        imgURLs
        tags
        likes {
          nextToken
        }
        sortKey
        essential
        active
        createdAt
        lastReplyAt
        forumSubTopicID
        forumSubTopic {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      forumPostSubComments {
        items {
          id
          content
          active
          createdAt
          replyToUserID
          forumPostID
          forumPostCommentID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
      owner
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
      imgURLs
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      active
      forumPostID
      forumPost {
        id
        title
        content
        imgURLs
        tags
        likes {
          nextToken
        }
        sortKey
        essential
        active
        createdAt
        lastReplyAt
        forumSubTopicID
        forumSubTopic {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      forumPostSubComments {
        items {
          id
          content
          active
          createdAt
          replyToUserID
          forumPostID
          forumPostCommentID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
      owner
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
      imgURLs
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      active
      forumPostID
      forumPost {
        id
        title
        content
        imgURLs
        tags
        likes {
          nextToken
        }
        sortKey
        essential
        active
        createdAt
        lastReplyAt
        forumSubTopicID
        forumSubTopic {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      forumPostSubComments {
        items {
          id
          content
          active
          createdAt
          replyToUserID
          forumPostID
          forumPostCommentID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
      owner
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
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      active
      createdAt
      replyToUserID
      replyTo {
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      forumPostID
      forumPost {
        id
        title
        content
        imgURLs
        tags
        likes {
          nextToken
        }
        sortKey
        essential
        active
        createdAt
        lastReplyAt
        forumSubTopicID
        forumSubTopic {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      forumPostCommentID
      forumPostComment {
        id
        content
        imgURLs
        likes {
          nextToken
        }
        createdAt
        active
        forumPostID
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          essential
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
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
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      active
      createdAt
      replyToUserID
      replyTo {
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      forumPostID
      forumPost {
        id
        title
        content
        imgURLs
        tags
        likes {
          nextToken
        }
        sortKey
        essential
        active
        createdAt
        lastReplyAt
        forumSubTopicID
        forumSubTopic {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      forumPostCommentID
      forumPostComment {
        id
        content
        imgURLs
        likes {
          nextToken
        }
        createdAt
        active
        forumPostID
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          essential
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
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
      likes {
        items {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      active
      createdAt
      replyToUserID
      replyTo {
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      forumPostID
      forumPost {
        id
        title
        content
        imgURLs
        tags
        likes {
          nextToken
        }
        sortKey
        essential
        active
        createdAt
        lastReplyAt
        forumSubTopicID
        forumSubTopic {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      forumPostCommentID
      forumPostComment {
        id
        content
        imgURLs
        likes {
          nextToken
        }
        createdAt
        active
        forumPostID
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          essential
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
      owner
    }
  }
`;
export const createMarketUserInfo = /* GraphQL */ `
  mutation CreateMarketUserInfo(
    $input: CreateMarketUserInfoInput!
    $condition: ModelMarketUserInfoConditionInput
  ) {
    createMarketUserInfo(input: $input, condition: $condition) {
      id
      phone
      weChat
      email
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateMarketUserInfo = /* GraphQL */ `
  mutation UpdateMarketUserInfo(
    $input: UpdateMarketUserInfoInput!
    $condition: ModelMarketUserInfoConditionInput
  ) {
    updateMarketUserInfo(input: $input, condition: $condition) {
      id
      phone
      weChat
      email
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteMarketUserInfo = /* GraphQL */ `
  mutation DeleteMarketUserInfo(
    $input: DeleteMarketUserInfoInput!
    $condition: ModelMarketUserInfoConditionInput
  ) {
    deleteMarketUserInfo(input: $input, condition: $condition) {
      id
      phone
      weChat
      email
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
      owner
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
      imgURLs
      title
      price
      marketType
      description
      location
      marketItemCondition
      marketItemCategory
      tags
      vehicleType
      year
      make
      model
      exteriorColor
      interiorColor
      fuelType
      marketRentalSaleRent
      propertyType
      bedroomCounts
      bathroomsCounts
      addressID
      address {
        id
        description
        place_id
        reference
        terms
        types
        apartmentNumbers
        geocodingResult
        lat
        lng
        itemID
        eventParticipant {
          id
          name
          email
          addressID
          phone
          weChat
          message
          numberOfPeople
          active
          createdAt
          eventParticipantStatus
          eventID
          userID
          updatedAt
          owner
        }
        event {
          id
          summary
          title
          startDate
          endDate
          online
          group
          backGroundImgURL
          qrCodeImgURL
          posterImgURL
          imgURLs
          content
          addressID
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        marketItem {
          id
          name
          imgURLs
          title
          price
          marketType
          description
          location
          marketItemCondition
          marketItemCategory
          tags
          vehicleType
          year
          make
          model
          exteriorColor
          interiorColor
          fuelType
          marketRentalSaleRent
          propertyType
          bedroomCounts
          bathroomsCounts
          addressID
          propertySize
          dateAvailable
          laundryType
          airConditionType
          heatingType
          catFriendly
          dogFriendly
          contactPhone
          contactWeChat
          contactEmail
          sortKey
          active
          createdAt
          userID
          updatedAt
          owner
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      propertySize
      dateAvailable
      laundryType
      airConditionType
      heatingType
      catFriendly
      dogFriendly
      contactPhone
      contactWeChat
      contactEmail
      sortKey
      active
      createdAt
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
      owner
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
      imgURLs
      title
      price
      marketType
      description
      location
      marketItemCondition
      marketItemCategory
      tags
      vehicleType
      year
      make
      model
      exteriorColor
      interiorColor
      fuelType
      marketRentalSaleRent
      propertyType
      bedroomCounts
      bathroomsCounts
      addressID
      address {
        id
        description
        place_id
        reference
        terms
        types
        apartmentNumbers
        geocodingResult
        lat
        lng
        itemID
        eventParticipant {
          id
          name
          email
          addressID
          phone
          weChat
          message
          numberOfPeople
          active
          createdAt
          eventParticipantStatus
          eventID
          userID
          updatedAt
          owner
        }
        event {
          id
          summary
          title
          startDate
          endDate
          online
          group
          backGroundImgURL
          qrCodeImgURL
          posterImgURL
          imgURLs
          content
          addressID
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        marketItem {
          id
          name
          imgURLs
          title
          price
          marketType
          description
          location
          marketItemCondition
          marketItemCategory
          tags
          vehicleType
          year
          make
          model
          exteriorColor
          interiorColor
          fuelType
          marketRentalSaleRent
          propertyType
          bedroomCounts
          bathroomsCounts
          addressID
          propertySize
          dateAvailable
          laundryType
          airConditionType
          heatingType
          catFriendly
          dogFriendly
          contactPhone
          contactWeChat
          contactEmail
          sortKey
          active
          createdAt
          userID
          updatedAt
          owner
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      propertySize
      dateAvailable
      laundryType
      airConditionType
      heatingType
      catFriendly
      dogFriendly
      contactPhone
      contactWeChat
      contactEmail
      sortKey
      active
      createdAt
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
      owner
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
      imgURLs
      title
      price
      marketType
      description
      location
      marketItemCondition
      marketItemCategory
      tags
      vehicleType
      year
      make
      model
      exteriorColor
      interiorColor
      fuelType
      marketRentalSaleRent
      propertyType
      bedroomCounts
      bathroomsCounts
      addressID
      address {
        id
        description
        place_id
        reference
        terms
        types
        apartmentNumbers
        geocodingResult
        lat
        lng
        itemID
        eventParticipant {
          id
          name
          email
          addressID
          phone
          weChat
          message
          numberOfPeople
          active
          createdAt
          eventParticipantStatus
          eventID
          userID
          updatedAt
          owner
        }
        event {
          id
          summary
          title
          startDate
          endDate
          online
          group
          backGroundImgURL
          qrCodeImgURL
          posterImgURL
          imgURLs
          content
          addressID
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        marketItem {
          id
          name
          imgURLs
          title
          price
          marketType
          description
          location
          marketItemCondition
          marketItemCategory
          tags
          vehicleType
          year
          make
          model
          exteriorColor
          interiorColor
          fuelType
          marketRentalSaleRent
          propertyType
          bedroomCounts
          bathroomsCounts
          addressID
          propertySize
          dateAvailable
          laundryType
          airConditionType
          heatingType
          catFriendly
          dogFriendly
          contactPhone
          contactWeChat
          contactEmail
          sortKey
          active
          createdAt
          userID
          updatedAt
          owner
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      propertySize
      dateAvailable
      laundryType
      airConditionType
      heatingType
      catFriendly
      dogFriendly
      contactPhone
      contactWeChat
      contactEmail
      sortKey
      active
      createdAt
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
      owner
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
      id
      description
      place_id
      reference
      terms
      types
      apartmentNumbers
      geocodingResult
      lat
      lng
      itemID
      eventParticipant {
        id
        name
        email
        addressID
        address {
          id
          description
          place_id
          reference
          terms
          types
          apartmentNumbers
          geocodingResult
          lat
          lng
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        phone
        weChat
        message
        numberOfPeople
        active
        createdAt
        eventParticipantStatus
        eventID
        event {
          id
          summary
          title
          startDate
          endDate
          online
          group
          backGroundImgURL
          qrCodeImgURL
          posterImgURL
          imgURLs
          content
          addressID
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      event {
        id
        summary
        title
        startDate
        endDate
        online
        group
        backGroundImgURL
        qrCodeImgURL
        posterImgURL
        imgURLs
        content
        addressID
        address {
          id
          description
          place_id
          reference
          terms
          types
          apartmentNumbers
          geocodingResult
          lat
          lng
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        sponsor
        tags
        eventStatus
        active
        createdAt
        sortKey
        topicID
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        eventComments {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        likes {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      marketItem {
        id
        name
        imgURLs
        title
        price
        marketType
        description
        location
        marketItemCondition
        marketItemCategory
        tags
        vehicleType
        year
        make
        model
        exteriorColor
        interiorColor
        fuelType
        marketRentalSaleRent
        propertyType
        bedroomCounts
        bathroomsCounts
        addressID
        address {
          id
          description
          place_id
          reference
          terms
          types
          apartmentNumbers
          geocodingResult
          lat
          lng
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        propertySize
        dateAvailable
        laundryType
        airConditionType
        heatingType
        catFriendly
        dogFriendly
        contactPhone
        contactWeChat
        contactEmail
        sortKey
        active
        createdAt
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
      id
      description
      place_id
      reference
      terms
      types
      apartmentNumbers
      geocodingResult
      lat
      lng
      itemID
      eventParticipant {
        id
        name
        email
        addressID
        address {
          id
          description
          place_id
          reference
          terms
          types
          apartmentNumbers
          geocodingResult
          lat
          lng
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        phone
        weChat
        message
        numberOfPeople
        active
        createdAt
        eventParticipantStatus
        eventID
        event {
          id
          summary
          title
          startDate
          endDate
          online
          group
          backGroundImgURL
          qrCodeImgURL
          posterImgURL
          imgURLs
          content
          addressID
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      event {
        id
        summary
        title
        startDate
        endDate
        online
        group
        backGroundImgURL
        qrCodeImgURL
        posterImgURL
        imgURLs
        content
        addressID
        address {
          id
          description
          place_id
          reference
          terms
          types
          apartmentNumbers
          geocodingResult
          lat
          lng
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        sponsor
        tags
        eventStatus
        active
        createdAt
        sortKey
        topicID
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        eventComments {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        likes {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      marketItem {
        id
        name
        imgURLs
        title
        price
        marketType
        description
        location
        marketItemCondition
        marketItemCategory
        tags
        vehicleType
        year
        make
        model
        exteriorColor
        interiorColor
        fuelType
        marketRentalSaleRent
        propertyType
        bedroomCounts
        bathroomsCounts
        addressID
        address {
          id
          description
          place_id
          reference
          terms
          types
          apartmentNumbers
          geocodingResult
          lat
          lng
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        propertySize
        dateAvailable
        laundryType
        airConditionType
        heatingType
        catFriendly
        dogFriendly
        contactPhone
        contactWeChat
        contactEmail
        sortKey
        active
        createdAt
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
      id
      description
      place_id
      reference
      terms
      types
      apartmentNumbers
      geocodingResult
      lat
      lng
      itemID
      eventParticipant {
        id
        name
        email
        addressID
        address {
          id
          description
          place_id
          reference
          terms
          types
          apartmentNumbers
          geocodingResult
          lat
          lng
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        phone
        weChat
        message
        numberOfPeople
        active
        createdAt
        eventParticipantStatus
        eventID
        event {
          id
          summary
          title
          startDate
          endDate
          online
          group
          backGroundImgURL
          qrCodeImgURL
          posterImgURL
          imgURLs
          content
          addressID
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      event {
        id
        summary
        title
        startDate
        endDate
        online
        group
        backGroundImgURL
        qrCodeImgURL
        posterImgURL
        imgURLs
        content
        addressID
        address {
          id
          description
          place_id
          reference
          terms
          types
          apartmentNumbers
          geocodingResult
          lat
          lng
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        sponsor
        tags
        eventStatus
        active
        createdAt
        sortKey
        topicID
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        eventComments {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        likes {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      marketItem {
        id
        name
        imgURLs
        title
        price
        marketType
        description
        location
        marketItemCondition
        marketItemCategory
        tags
        vehicleType
        year
        make
        model
        exteriorColor
        interiorColor
        fuelType
        marketRentalSaleRent
        propertyType
        bedroomCounts
        bathroomsCounts
        addressID
        address {
          id
          description
          place_id
          reference
          terms
          types
          apartmentNumbers
          geocodingResult
          lat
          lng
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        propertySize
        dateAvailable
        laundryType
        airConditionType
        heatingType
        catFriendly
        dogFriendly
        contactPhone
        contactWeChat
        contactEmail
        sortKey
        active
        createdAt
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createFoundingMember = /* GraphQL */ `
  mutation CreateFoundingMember(
    $input: CreateFoundingMemberInput!
    $condition: ModelFoundingMemberConditionInput
  ) {
    createFoundingMember(input: $input, condition: $condition) {
      id
      active
      title
      subTitle
      summary
      content
      mainParts
      imgURL
      owner
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFoundingMember = /* GraphQL */ `
  mutation UpdateFoundingMember(
    $input: UpdateFoundingMemberInput!
    $condition: ModelFoundingMemberConditionInput
  ) {
    updateFoundingMember(input: $input, condition: $condition) {
      id
      active
      title
      subTitle
      summary
      content
      mainParts
      imgURL
      owner
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFoundingMember = /* GraphQL */ `
  mutation DeleteFoundingMember(
    $input: DeleteFoundingMemberInput!
    $condition: ModelFoundingMemberConditionInput
  ) {
    deleteFoundingMember(input: $input, condition: $condition) {
      id
      active
      title
      subTitle
      summary
      content
      mainParts
      imgURL
      owner
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
      id
      like
      itemID
      article {
        id
        title
        summary
        content
        imgURLs
        qrCodeImgURL
        likes {
          nextToken
        }
        tags
        sortKey
        active
        createdAt
        topicID
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articleComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      articleComment {
        id
        content
        likes {
          nextToken
        }
        active
        articleID
        article {
          id
          title
          summary
          content
          imgURLs
          qrCodeImgURL
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        createdAt
        articleSubComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      articleSubComment {
        id
        content
        likes {
          nextToken
        }
        active
        articleCommentID
        articleComment {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        createdAt
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      event {
        id
        summary
        title
        startDate
        endDate
        online
        group
        backGroundImgURL
        qrCodeImgURL
        posterImgURL
        imgURLs
        content
        addressID
        address {
          id
          description
          place_id
          reference
          terms
          types
          apartmentNumbers
          geocodingResult
          lat
          lng
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        sponsor
        tags
        eventStatus
        active
        createdAt
        sortKey
        topicID
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        eventComments {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        likes {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      eventComment {
        id
        content
        likes {
          nextToken
        }
        active
        eventID
        event {
          id
          summary
          title
          startDate
          endDate
          online
          group
          backGroundImgURL
          qrCodeImgURL
          posterImgURL
          imgURLs
          content
          addressID
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        eventSubComments {
          nextToken
        }
        createdAt
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      eventSubComment {
        id
        content
        likes {
          nextToken
        }
        active
        eventCommentID
        eventComment {
          id
          content
          active
          eventID
          createdAt
          userID
          updatedAt
          owner
        }
        createdAt
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      forumPost {
        id
        title
        content
        imgURLs
        tags
        likes {
          nextToken
        }
        sortKey
        essential
        active
        createdAt
        lastReplyAt
        forumSubTopicID
        forumSubTopic {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      forumPostComment {
        id
        content
        imgURLs
        likes {
          nextToken
        }
        createdAt
        active
        forumPostID
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          essential
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      forumPostSubComment {
        id
        content
        likes {
          nextToken
        }
        active
        createdAt
        replyToUserID
        replyTo {
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
          badges
          updatedAt
        }
        forumPostID
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          essential
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        forumPostCommentID
        forumPostComment {
          id
          content
          imgURLs
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      userBeingLiked {
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
      id
      like
      itemID
      article {
        id
        title
        summary
        content
        imgURLs
        qrCodeImgURL
        likes {
          nextToken
        }
        tags
        sortKey
        active
        createdAt
        topicID
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articleComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      articleComment {
        id
        content
        likes {
          nextToken
        }
        active
        articleID
        article {
          id
          title
          summary
          content
          imgURLs
          qrCodeImgURL
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        createdAt
        articleSubComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      articleSubComment {
        id
        content
        likes {
          nextToken
        }
        active
        articleCommentID
        articleComment {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        createdAt
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      event {
        id
        summary
        title
        startDate
        endDate
        online
        group
        backGroundImgURL
        qrCodeImgURL
        posterImgURL
        imgURLs
        content
        addressID
        address {
          id
          description
          place_id
          reference
          terms
          types
          apartmentNumbers
          geocodingResult
          lat
          lng
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        sponsor
        tags
        eventStatus
        active
        createdAt
        sortKey
        topicID
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        eventComments {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        likes {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      eventComment {
        id
        content
        likes {
          nextToken
        }
        active
        eventID
        event {
          id
          summary
          title
          startDate
          endDate
          online
          group
          backGroundImgURL
          qrCodeImgURL
          posterImgURL
          imgURLs
          content
          addressID
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        eventSubComments {
          nextToken
        }
        createdAt
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      eventSubComment {
        id
        content
        likes {
          nextToken
        }
        active
        eventCommentID
        eventComment {
          id
          content
          active
          eventID
          createdAt
          userID
          updatedAt
          owner
        }
        createdAt
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      forumPost {
        id
        title
        content
        imgURLs
        tags
        likes {
          nextToken
        }
        sortKey
        essential
        active
        createdAt
        lastReplyAt
        forumSubTopicID
        forumSubTopic {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      forumPostComment {
        id
        content
        imgURLs
        likes {
          nextToken
        }
        createdAt
        active
        forumPostID
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          essential
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      forumPostSubComment {
        id
        content
        likes {
          nextToken
        }
        active
        createdAt
        replyToUserID
        replyTo {
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
          badges
          updatedAt
        }
        forumPostID
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          essential
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        forumPostCommentID
        forumPostComment {
          id
          content
          imgURLs
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      userBeingLiked {
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
      id
      like
      itemID
      article {
        id
        title
        summary
        content
        imgURLs
        qrCodeImgURL
        likes {
          nextToken
        }
        tags
        sortKey
        active
        createdAt
        topicID
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articleComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      articleComment {
        id
        content
        likes {
          nextToken
        }
        active
        articleID
        article {
          id
          title
          summary
          content
          imgURLs
          qrCodeImgURL
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        createdAt
        articleSubComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      articleSubComment {
        id
        content
        likes {
          nextToken
        }
        active
        articleCommentID
        articleComment {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        createdAt
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      event {
        id
        summary
        title
        startDate
        endDate
        online
        group
        backGroundImgURL
        qrCodeImgURL
        posterImgURL
        imgURLs
        content
        addressID
        address {
          id
          description
          place_id
          reference
          terms
          types
          apartmentNumbers
          geocodingResult
          lat
          lng
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        sponsor
        tags
        eventStatus
        active
        createdAt
        sortKey
        topicID
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        eventComments {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        likes {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
      }
      eventComment {
        id
        content
        likes {
          nextToken
        }
        active
        eventID
        event {
          id
          summary
          title
          startDate
          endDate
          online
          group
          backGroundImgURL
          qrCodeImgURL
          posterImgURL
          imgURLs
          content
          addressID
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        eventSubComments {
          nextToken
        }
        createdAt
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      eventSubComment {
        id
        content
        likes {
          nextToken
        }
        active
        eventCommentID
        eventComment {
          id
          content
          active
          eventID
          createdAt
          userID
          updatedAt
          owner
        }
        createdAt
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      forumPost {
        id
        title
        content
        imgURLs
        tags
        likes {
          nextToken
        }
        sortKey
        essential
        active
        createdAt
        lastReplyAt
        forumSubTopicID
        forumSubTopic {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      forumPostComment {
        id
        content
        imgURLs
        likes {
          nextToken
        }
        createdAt
        active
        forumPostID
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          essential
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      forumPostSubComment {
        id
        content
        likes {
          nextToken
        }
        active
        createdAt
        replyToUserID
        replyTo {
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
          badges
          updatedAt
        }
        forumPostID
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          essential
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        forumPostCommentID
        forumPostComment {
          id
          content
          imgURLs
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        userID
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
          badges
          updatedAt
        }
        updatedAt
        owner
      }
      userBeingLiked {
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createWebFeedBack = /* GraphQL */ `
  mutation CreateWebFeedBack(
    $input: CreateWebFeedBackInput!
    $condition: ModelWebFeedBackConditionInput
  ) {
    createWebFeedBack(input: $input, condition: $condition) {
      id
      rate
      reason
      improvement
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateWebFeedBack = /* GraphQL */ `
  mutation UpdateWebFeedBack(
    $input: UpdateWebFeedBackInput!
    $condition: ModelWebFeedBackConditionInput
  ) {
    updateWebFeedBack(input: $input, condition: $condition) {
      id
      rate
      reason
      improvement
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteWebFeedBack = /* GraphQL */ `
  mutation DeleteWebFeedBack(
    $input: DeleteWebFeedBackInput!
    $condition: ModelWebFeedBackConditionInput
  ) {
    deleteWebFeedBack(input: $input, condition: $condition) {
      id
      rate
      reason
      improvement
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createUserMutationLog = /* GraphQL */ `
  mutation CreateUserMutationLog(
    $input: CreateUserMutationLogInput!
    $condition: ModelUserMutationLogConditionInput
  ) {
    createUserMutationLog(input: $input, condition: $condition) {
      id
      eventName
      typename
      eventSourceARN
      record
      createdAt
      sortKey
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const updateUserMutationLog = /* GraphQL */ `
  mutation UpdateUserMutationLog(
    $input: UpdateUserMutationLogInput!
    $condition: ModelUserMutationLogConditionInput
  ) {
    updateUserMutationLog(input: $input, condition: $condition) {
      id
      eventName
      typename
      eventSourceARN
      record
      createdAt
      sortKey
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const deleteUserMutationLog = /* GraphQL */ `
  mutation DeleteUserMutationLog(
    $input: DeleteUserMutationLogInput!
    $condition: ModelUserMutationLogConditionInput
  ) {
    deleteUserMutationLog(input: $input, condition: $condition) {
      id
      eventName
      typename
      eventSourceARN
      record
      createdAt
      sortKey
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const createKanban = /* GraphQL */ `
  mutation CreateKanban(
    $input: CreateKanbanInput!
    $condition: ModelKanbanConditionInput
  ) {
    createKanban(input: $input, condition: $condition) {
      id
      title
      content
      kanbanStatus
      deadLine
      priority
      tags
      points
      active
      sortKey
      workSummary
      lastUpdatedID
      lastUpdated {
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      assigneeID
      assignee {
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      departmentID
      department {
        id
        name
        introduction
        email
        leader
        uwcssaJobs {
          nextToken
        }
        uwcssaMembers {
          nextToken
        }
        kanbans {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateKanban = /* GraphQL */ `
  mutation UpdateKanban(
    $input: UpdateKanbanInput!
    $condition: ModelKanbanConditionInput
  ) {
    updateKanban(input: $input, condition: $condition) {
      id
      title
      content
      kanbanStatus
      deadLine
      priority
      tags
      points
      active
      sortKey
      workSummary
      lastUpdatedID
      lastUpdated {
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      assigneeID
      assignee {
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      departmentID
      department {
        id
        name
        introduction
        email
        leader
        uwcssaJobs {
          nextToken
        }
        uwcssaMembers {
          nextToken
        }
        kanbans {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteKanban = /* GraphQL */ `
  mutation DeleteKanban(
    $input: DeleteKanbanInput!
    $condition: ModelKanbanConditionInput
  ) {
    deleteKanban(input: $input, condition: $condition) {
      id
      title
      content
      kanbanStatus
      deadLine
      priority
      tags
      points
      active
      sortKey
      workSummary
      lastUpdatedID
      lastUpdated {
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      assigneeID
      assignee {
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      departmentID
      department {
        id
        name
        introduction
        email
        leader
        uwcssaJobs {
          nextToken
        }
        uwcssaMembers {
          nextToken
        }
        kanbans {
          nextToken
        }
        userID
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
          badges
          updatedAt
        }
        createdAt
        updatedAt
      }
      userID
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
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketItems {
          nextToken
        }
        kanbanAssignee {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
