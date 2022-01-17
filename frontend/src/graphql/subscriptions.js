/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateUserEducation = /* GraphQL */ `
  subscription OnCreateUserEducation($owner: String) {
    onCreateUserEducation(owner: $owner) {
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
export const onUpdateUserEducation = /* GraphQL */ `
  subscription OnUpdateUserEducation($owner: String) {
    onUpdateUserEducation(owner: $owner) {
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
export const onDeleteUserEducation = /* GraphQL */ `
  subscription OnDeleteUserEducation($owner: String) {
    onDeleteUserEducation(owner: $owner) {
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
export const onCreateUserExperience = /* GraphQL */ `
  subscription OnCreateUserExperience($owner: String) {
    onCreateUserExperience(owner: $owner) {
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
export const onUpdateUserExperience = /* GraphQL */ `
  subscription OnUpdateUserExperience($owner: String) {
    onUpdateUserExperience(owner: $owner) {
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
export const onDeleteUserExperience = /* GraphQL */ `
  subscription OnDeleteUserExperience($owner: String) {
    onDeleteUserExperience(owner: $owner) {
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
export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic {
    onCreateTopic {
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
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic {
    onUpdateTopic {
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
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic {
    onDeleteTopic {
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
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle {
    onCreateArticle {
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
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle {
    onUpdateArticle {
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
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle {
    onDeleteArticle {
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
export const onCreateArticleComment = /* GraphQL */ `
  subscription OnCreateArticleComment($owner: String) {
    onCreateArticleComment(owner: $owner) {
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
export const onUpdateArticleComment = /* GraphQL */ `
  subscription OnUpdateArticleComment($owner: String) {
    onUpdateArticleComment(owner: $owner) {
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
export const onDeleteArticleComment = /* GraphQL */ `
  subscription OnDeleteArticleComment($owner: String) {
    onDeleteArticleComment(owner: $owner) {
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
export const onCreateArticleSubComment = /* GraphQL */ `
  subscription OnCreateArticleSubComment($owner: String) {
    onCreateArticleSubComment(owner: $owner) {
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
export const onUpdateArticleSubComment = /* GraphQL */ `
  subscription OnUpdateArticleSubComment($owner: String) {
    onUpdateArticleSubComment(owner: $owner) {
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
export const onDeleteArticleSubComment = /* GraphQL */ `
  subscription OnDeleteArticleSubComment($owner: String) {
    onDeleteArticleSubComment(owner: $owner) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
export const onCreateEventComment = /* GraphQL */ `
  subscription OnCreateEventComment($owner: String) {
    onCreateEventComment(owner: $owner) {
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
export const onUpdateEventComment = /* GraphQL */ `
  subscription OnUpdateEventComment($owner: String) {
    onUpdateEventComment(owner: $owner) {
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
export const onDeleteEventComment = /* GraphQL */ `
  subscription OnDeleteEventComment($owner: String) {
    onDeleteEventComment(owner: $owner) {
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
export const onCreateEventSubComment = /* GraphQL */ `
  subscription OnCreateEventSubComment($owner: String) {
    onCreateEventSubComment(owner: $owner) {
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
export const onUpdateEventSubComment = /* GraphQL */ `
  subscription OnUpdateEventSubComment($owner: String) {
    onUpdateEventSubComment(owner: $owner) {
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
export const onDeleteEventSubComment = /* GraphQL */ `
  subscription OnDeleteEventSubComment($owner: String) {
    onDeleteEventSubComment(owner: $owner) {
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
export const onCreateEventParticipant = /* GraphQL */ `
  subscription OnCreateEventParticipant($owner: String) {
    onCreateEventParticipant(owner: $owner) {
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
export const onUpdateEventParticipant = /* GraphQL */ `
  subscription OnUpdateEventParticipant($owner: String) {
    onUpdateEventParticipant(owner: $owner) {
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
export const onDeleteEventParticipant = /* GraphQL */ `
  subscription OnDeleteEventParticipant($owner: String) {
    onDeleteEventParticipant(owner: $owner) {
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
export const onCreateDepartment = /* GraphQL */ `
  subscription OnCreateDepartment {
    onCreateDepartment {
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
export const onUpdateDepartment = /* GraphQL */ `
  subscription OnUpdateDepartment {
    onUpdateDepartment {
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
export const onDeleteDepartment = /* GraphQL */ `
  subscription OnDeleteDepartment {
    onDeleteDepartment {
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
export const onCreateUwcssaMember = /* GraphQL */ `
  subscription OnCreateUwcssaMember($owner: String) {
    onCreateUwcssaMember(owner: $owner) {
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
export const onUpdateUwcssaMember = /* GraphQL */ `
  subscription OnUpdateUwcssaMember($owner: String) {
    onUpdateUwcssaMember(owner: $owner) {
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
export const onDeleteUwcssaMember = /* GraphQL */ `
  subscription OnDeleteUwcssaMember($owner: String) {
    onDeleteUwcssaMember(owner: $owner) {
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
export const onCreateUwcssaJob = /* GraphQL */ `
  subscription OnCreateUwcssaJob {
    onCreateUwcssaJob {
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
export const onUpdateUwcssaJob = /* GraphQL */ `
  subscription OnUpdateUwcssaJob {
    onUpdateUwcssaJob {
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
export const onDeleteUwcssaJob = /* GraphQL */ `
  subscription OnDeleteUwcssaJob {
    onDeleteUwcssaJob {
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
export const onCreateUwcssaJobResume = /* GraphQL */ `
  subscription OnCreateUwcssaJobResume($owner: String) {
    onCreateUwcssaJobResume(owner: $owner) {
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
export const onUpdateUwcssaJobResume = /* GraphQL */ `
  subscription OnUpdateUwcssaJobResume($owner: String) {
    onUpdateUwcssaJobResume(owner: $owner) {
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
export const onDeleteUwcssaJobResume = /* GraphQL */ `
  subscription OnDeleteUwcssaJobResume($owner: String) {
    onDeleteUwcssaJobResume(owner: $owner) {
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
export const onCreateForumTopic = /* GraphQL */ `
  subscription OnCreateForumTopic {
    onCreateForumTopic {
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
export const onUpdateForumTopic = /* GraphQL */ `
  subscription OnUpdateForumTopic {
    onUpdateForumTopic {
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
export const onDeleteForumTopic = /* GraphQL */ `
  subscription OnDeleteForumTopic {
    onDeleteForumTopic {
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
export const onCreateForumSubTopic = /* GraphQL */ `
  subscription OnCreateForumSubTopic {
    onCreateForumSubTopic {
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
export const onUpdateForumSubTopic = /* GraphQL */ `
  subscription OnUpdateForumSubTopic {
    onUpdateForumSubTopic {
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
export const onDeleteForumSubTopic = /* GraphQL */ `
  subscription OnDeleteForumSubTopic {
    onDeleteForumSubTopic {
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
export const onCreateForumPost = /* GraphQL */ `
  subscription OnCreateForumPost($owner: String) {
    onCreateForumPost(owner: $owner) {
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
export const onUpdateForumPost = /* GraphQL */ `
  subscription OnUpdateForumPost($owner: String) {
    onUpdateForumPost(owner: $owner) {
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
export const onDeleteForumPost = /* GraphQL */ `
  subscription OnDeleteForumPost($owner: String) {
    onDeleteForumPost(owner: $owner) {
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
export const onCreateForumPostComment = /* GraphQL */ `
  subscription OnCreateForumPostComment($owner: String) {
    onCreateForumPostComment(owner: $owner) {
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
export const onUpdateForumPostComment = /* GraphQL */ `
  subscription OnUpdateForumPostComment($owner: String) {
    onUpdateForumPostComment(owner: $owner) {
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
export const onDeleteForumPostComment = /* GraphQL */ `
  subscription OnDeleteForumPostComment($owner: String) {
    onDeleteForumPostComment(owner: $owner) {
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
export const onCreateForumPostSubComment = /* GraphQL */ `
  subscription OnCreateForumPostSubComment($owner: String) {
    onCreateForumPostSubComment(owner: $owner) {
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
export const onUpdateForumPostSubComment = /* GraphQL */ `
  subscription OnUpdateForumPostSubComment($owner: String) {
    onUpdateForumPostSubComment(owner: $owner) {
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
export const onDeleteForumPostSubComment = /* GraphQL */ `
  subscription OnDeleteForumPostSubComment($owner: String) {
    onDeleteForumPostSubComment(owner: $owner) {
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
export const onCreateMarketUserInfo = /* GraphQL */ `
  subscription OnCreateMarketUserInfo($owner: String) {
    onCreateMarketUserInfo(owner: $owner) {
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
export const onUpdateMarketUserInfo = /* GraphQL */ `
  subscription OnUpdateMarketUserInfo($owner: String) {
    onUpdateMarketUserInfo(owner: $owner) {
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
export const onDeleteMarketUserInfo = /* GraphQL */ `
  subscription OnDeleteMarketUserInfo($owner: String) {
    onDeleteMarketUserInfo(owner: $owner) {
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
export const onCreateMarketItem = /* GraphQL */ `
  subscription OnCreateMarketItem($owner: String) {
    onCreateMarketItem(owner: $owner) {
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
export const onUpdateMarketItem = /* GraphQL */ `
  subscription OnUpdateMarketItem($owner: String) {
    onUpdateMarketItem(owner: $owner) {
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
export const onDeleteMarketItem = /* GraphQL */ `
  subscription OnDeleteMarketItem($owner: String) {
    onDeleteMarketItem(owner: $owner) {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress($owner: String) {
    onCreateAddress(owner: $owner) {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress($owner: String) {
    onUpdateAddress(owner: $owner) {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress($owner: String) {
    onDeleteAddress(owner: $owner) {
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
export const onCreateFoundingMember = /* GraphQL */ `
  subscription OnCreateFoundingMember($owner: String) {
    onCreateFoundingMember(owner: $owner) {
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
export const onUpdateFoundingMember = /* GraphQL */ `
  subscription OnUpdateFoundingMember($owner: String) {
    onUpdateFoundingMember(owner: $owner) {
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
export const onDeleteFoundingMember = /* GraphQL */ `
  subscription OnDeleteFoundingMember($owner: String) {
    onDeleteFoundingMember(owner: $owner) {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($owner: String) {
    onCreateLike(owner: $owner) {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($owner: String) {
    onUpdateLike(owner: $owner) {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($owner: String) {
    onDeleteLike(owner: $owner) {
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
export const onCreateWebFeedBack = /* GraphQL */ `
  subscription OnCreateWebFeedBack($owner: String) {
    onCreateWebFeedBack(owner: $owner) {
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
export const onUpdateWebFeedBack = /* GraphQL */ `
  subscription OnUpdateWebFeedBack($owner: String) {
    onUpdateWebFeedBack(owner: $owner) {
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
export const onDeleteWebFeedBack = /* GraphQL */ `
  subscription OnDeleteWebFeedBack($owner: String) {
    onDeleteWebFeedBack(owner: $owner) {
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
export const onCreateUserMutationLog = /* GraphQL */ `
  subscription OnCreateUserMutationLog {
    onCreateUserMutationLog {
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
export const onUpdateUserMutationLog = /* GraphQL */ `
  subscription OnUpdateUserMutationLog {
    onUpdateUserMutationLog {
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
export const onDeleteUserMutationLog = /* GraphQL */ `
  subscription OnDeleteUserMutationLog {
    onDeleteUserMutationLog {
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
export const onCreateKanban = /* GraphQL */ `
  subscription OnCreateKanban {
    onCreateKanban {
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
export const onUpdateKanban = /* GraphQL */ `
  subscription OnUpdateKanban {
    onUpdateKanban {
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
export const onDeleteKanban = /* GraphQL */ `
  subscription OnDeleteKanban {
    onDeleteKanban {
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
