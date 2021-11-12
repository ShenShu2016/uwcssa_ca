/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const userSortBySortKey = /* GraphQL */ `
  query UserSortBySortKey(
    $sortKey: SortKey
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userSortBySortKey(
      sortKey: $sortKey
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
      nextToken
    }
  }
`;
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
      avatarImgS3Key
      backGroundImgS3Key
      linkedIn
      github
      sortKey
      createdAt
      likes {
        id
        like
        itemID
        userID
        createdAt
        updatedAt
        userBeingLiked {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        article {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
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
        articleSubComment {
          id
          content
          active
          articleCommentID
          createdAt
          userID
          updatedAt
          owner
        }
        event {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventSubComment {
          id
          content
          active
          eventCommentID
          createdAt
          userID
          updatedAt
          owner
        }
        forumPost {
          id
          title
          content
          imgS3Keys
          tags
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        forumPostComment {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComment {
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
        owner
      }
      topics {
        id
        name
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        articles {
          nextToken
        }
        events {
          nextToken
        }
      }
      articles {
        id
        title
        content
        imgS3Keys
        tags
        sortKey
        active
        createdAt
        topicID
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
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
        likes {
          nextToken
        }
      }
      articleComments {
        id
        content
        active
        articleID
        createdAt
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        article {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        owner
        articleSubComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      events {
        id
        title
        startDate
        endDate
        online
        group
        backGroundImgS3Key
        qrCodeImgS3Key
        posterImgS3Key
        content
        location
        sponsor
        tags
        eventStatus
        active
        createdAt
        sortKey
        topicID
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
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
      }
      eventParticipants {
        id
        name
        email
        address
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
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        event {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        owner
      }
      departments {
        id
        name
        introduction
        email
        leader
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        uwcssaJobs {
          nextToken
        }
      }
      uwcssaJobs {
        id
        introduction
        title
        requirements
        bonus
        imgS3Key
        benefits
        schedule
        like
        unlike
        active
        createdAt
        departmentID
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
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
      }
      uwcssaJobResumes {
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
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        uwcssaJob {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        owner
      }
      forumTopics {
        id
        name
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumSubTopics {
          nextToken
        }
      }
      forumSubTopics {
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
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
      forumPostComments {
        id
        content
        createdAt
        active
        forumPostID
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumPost {
          id
          title
          content
          imgS3Keys
          tags
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        owner
        forumPostSubComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      forumPostSubComments {
        id
        content
        active
        createdAt
        replyToUserID
        forumPostID
        forumPostCommentID
        userID
        updatedAt
        replyTo {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumPost {
          id
          title
          content
          imgS3Keys
          tags
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        forumPostComment {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        owner
        likes {
          nextToken
        }
      }
      marketItems {
        id
        name
        imgS3Keys
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
        address
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
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        owner
      }
      foundingMember {
        id
        active
        title
        brief
        moreBrief
        mainPart
        imgS3Key
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
      }
      updatedAt
      uWindsorEmail
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
      forumPosts {
        items {
          id
          title
          content
          imgS3Keys
          tags
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
      webFeedBack {
        items {
          id
          like
          rate
          reason
          improvement
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
      articles {
        items {
          id
          title
          content
          imgS3Keys
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
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        articles {
          nextToken
        }
        events {
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
      imgS3Keys
      tags
      sortKey
      active
      createdAt
      topicID
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
      topic {
        id
        name
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        articles {
          nextToken
        }
        events {
          nextToken
        }
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
        imgS3Keys
        tags
        sortKey
        active
        createdAt
        topicID
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
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
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const articleSortBySortKey = /* GraphQL */ `
  query ArticleSortBySortKey(
    $sortKey: SortKey
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    articleSortBySortKey(
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
        imgS3Keys
        tags
        sortKey
        active
        createdAt
        topicID
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
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
        likes {
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
      active
      articleID
      createdAt
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
      article {
        id
        title
        content
        imgS3Keys
        tags
        sortKey
        active
        createdAt
        topicID
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
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
        likes {
          nextToken
        }
      }
      owner
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
        active
        articleID
        createdAt
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        article {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        owner
        articleSubComments {
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
export const articleCommentSortByArticleID = /* GraphQL */ `
  query ArticleCommentSortByArticleID(
    $articleID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelArticleCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    articleCommentSortByArticleID(
      articleID: $articleID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        active
        articleID
        createdAt
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        article {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        owner
        articleSubComments {
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
export const getArticleSubComment = /* GraphQL */ `
  query GetArticleSubComment($id: ID!) {
    getArticleSubComment(id: $id) {
      id
      content
      active
      articleCommentID
      createdAt
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
      articleComment {
        id
        content
        active
        articleID
        createdAt
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        article {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        owner
        articleSubComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      owner
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
    }
  }
`;
export const listArticleSubComments = /* GraphQL */ `
  query ListArticleSubComments(
    $filter: ModelArticleSubCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticleSubComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        active
        articleCommentID
        createdAt
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
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
        owner
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const articleSubCommentSortByArticleCommentID = /* GraphQL */ `
  query ArticleSubCommentSortByArticleCommentID(
    $articleCommentID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelArticleSubCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    articleSubCommentSortByArticleCommentID(
      articleCommentID: $articleCommentID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        active
        articleCommentID
        createdAt
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
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
        owner
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      title
      startDate
      endDate
      online
      group
      backGroundImgS3Key
      qrCodeImgS3Key
      posterImgS3Key
      content
      location
      sponsor
      tags
      eventStatus
      active
      createdAt
      sortKey
      topicID
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
      topic {
        id
        name
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        articles {
          nextToken
        }
        events {
          nextToken
        }
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
          address
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
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        startDate
        endDate
        online
        group
        backGroundImgS3Key
        qrCodeImgS3Key
        posterImgS3Key
        content
        location
        sponsor
        tags
        eventStatus
        active
        createdAt
        sortKey
        topicID
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
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
      }
      nextToken
    }
  }
`;
export const eventSortBySortKey = /* GraphQL */ `
  query EventSortBySortKey(
    $sortKey: SortKey
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventSortBySortKey(
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
        startDate
        endDate
        online
        group
        backGroundImgS3Key
        qrCodeImgS3Key
        posterImgS3Key
        content
        location
        sponsor
        tags
        eventStatus
        active
        createdAt
        sortKey
        topicID
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
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
      }
      nextToken
    }
  }
`;
export const getEventComment = /* GraphQL */ `
  query GetEventComment($id: ID!) {
    getEventComment(id: $id) {
      id
      content
      active
      eventID
      createdAt
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
      event {
        id
        title
        startDate
        endDate
        online
        group
        backGroundImgS3Key
        qrCodeImgS3Key
        posterImgS3Key
        content
        location
        sponsor
        tags
        eventStatus
        active
        createdAt
        sortKey
        topicID
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
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
      }
      owner
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
    }
  }
`;
export const listEventComments = /* GraphQL */ `
  query ListEventComments(
    $filter: ModelEventCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        active
        eventID
        createdAt
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        event {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        owner
        eventSubComments {
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
export const eventCommentSortByEventID = /* GraphQL */ `
  query EventCommentSortByEventID(
    $eventID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventCommentSortByEventID(
      eventID: $eventID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        active
        eventID
        createdAt
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        event {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        owner
        eventSubComments {
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
export const getEventSubComment = /* GraphQL */ `
  query GetEventSubComment($id: ID!) {
    getEventSubComment(id: $id) {
      id
      content
      active
      eventCommentID
      createdAt
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
      eventComment {
        id
        content
        active
        eventID
        createdAt
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        event {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        owner
        eventSubComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      owner
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
    }
  }
`;
export const listEventSubComments = /* GraphQL */ `
  query ListEventSubComments(
    $filter: ModelEventSubCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventSubComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        active
        eventCommentID
        createdAt
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
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
        owner
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const eventSubCommentSortByEventCommentID = /* GraphQL */ `
  query EventSubCommentSortByEventCommentID(
    $eventCommentID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventSubCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventSubCommentSortByEventCommentID(
      eventCommentID: $eventCommentID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        active
        eventCommentID
        createdAt
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
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
        owner
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getEventParticipant = /* GraphQL */ `
  query GetEventParticipant($id: ID!) {
    getEventParticipant(id: $id) {
      id
      name
      email
      address
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
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
      event {
        id
        title
        startDate
        endDate
        online
        group
        backGroundImgS3Key
        qrCodeImgS3Key
        posterImgS3Key
        content
        location
        sponsor
        tags
        eventStatus
        active
        createdAt
        sortKey
        topicID
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
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
      }
      owner
    }
  }
`;
export const listEventParticipants = /* GraphQL */ `
  query ListEventParticipants(
    $filter: ModelEventParticipantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventParticipants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        address
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
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        event {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        owner
      }
      nextToken
    }
  }
`;
export const eventParticipantSortByEventID = /* GraphQL */ `
  query EventParticipantSortByEventID(
    $eventID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventParticipantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EventParticipantSortByEventID(
      eventID: $eventID
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
        address
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
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        event {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
      uwcssaJobs {
        items {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
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
      imgS3Key
      benefits
      schedule
      like
      unlike
      active
      createdAt
      departmentID
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
      department {
        id
        name
        introduction
        email
        leader
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        uwcssaJobs {
          nextToken
        }
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
        imgS3Key
        benefits
        schedule
        like
        unlike
        active
        createdAt
        departmentID
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
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
      }
      nextToken
    }
  }
`;
export const uwcssaJobSortByDepartmentID = /* GraphQL */ `
  query UwcssaJobSortByDepartmentID(
    $departmentID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUwcssaJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    UwcssaJobSortByDepartmentID(
      departmentID: $departmentID
      createdAt: $createdAt
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
        imgS3Key
        benefits
        schedule
        like
        unlike
        active
        createdAt
        departmentID
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
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
      resumeFileS3Key
      phone
      message
      uwcssaJobResumeStatus
      createdAt
      uwcssaJobID
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
      uwcssaJob {
        id
        introduction
        title
        requirements
        bonus
        imgS3Key
        benefits
        schedule
        like
        unlike
        active
        createdAt
        departmentID
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
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
        resumeFileS3Key
        phone
        message
        uwcssaJobResumeStatus
        createdAt
        uwcssaJobID
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        uwcssaJob {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        owner
      }
      nextToken
    }
  }
`;
export const uwcssaJobResumeSortByUwcssaJobID = /* GraphQL */ `
  query UwcssaJobResumeSortByUwcssaJobID(
    $uwcssaJobID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUwcssaJobResumeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    uwcssaJobResumeSortByUwcssaJobID(
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
        resumeFileS3Key
        phone
        message
        uwcssaJobResumeStatus
        createdAt
        uwcssaJobID
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        uwcssaJob {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
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
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
      forumTopic {
        id
        name
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumSubTopics {
          nextToken
        }
      }
      forumPosts {
        items {
          id
          title
          content
          imgS3Keys
          tags
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
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
      imgS3Keys
      tags
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
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
      owner
      forumPostComments {
        items {
          id
          content
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
        imgS3Keys
        tags
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
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
export const forumPostSortByForumSubTopicID = /* GraphQL */ `
  query ForumPostSortByForumSubTopicID(
    $forumSubTopicID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelForumPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ForumPostSortByForumSubTopicID(
      forumSubTopicID: $forumSubTopicID
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
        imgS3Keys
        tags
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
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
    ForumPostSortByForumPostLastReplyAt(
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
        imgS3Keys
        tags
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
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
export const getForumPostComment = /* GraphQL */ `
  query GetForumPostComment($id: ID!) {
    getForumPostComment(id: $id) {
      id
      content
      createdAt
      active
      forumPostID
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
      forumPost {
        id
        title
        content
        imgS3Keys
        tags
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
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
      owner
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
        createdAt
        active
        forumPostID
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumPost {
          id
          title
          content
          imgS3Keys
          tags
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        owner
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
export const forumPostCommentSortByForumPostID = /* GraphQL */ `
  query ForumPostCommentSortByForumPostID(
    $forumPostID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelForumPostCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ForumPostCommentSortByForumPostID(
      forumPostID: $forumPostID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        createdAt
        active
        forumPostID
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumPost {
          id
          title
          content
          imgS3Keys
          tags
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        owner
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
export const getForumPostSubComment = /* GraphQL */ `
  query GetForumPostSubComment($id: ID!) {
    getForumPostSubComment(id: $id) {
      id
      content
      active
      createdAt
      replyToUserID
      forumPostID
      forumPostCommentID
      userID
      updatedAt
      replyTo {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
      forumPost {
        id
        title
        content
        imgS3Keys
        tags
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
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
      forumPostComment {
        id
        content
        createdAt
        active
        forumPostID
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumPost {
          id
          title
          content
          imgS3Keys
          tags
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        owner
        forumPostSubComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      owner
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
        active
        createdAt
        replyToUserID
        forumPostID
        forumPostCommentID
        userID
        updatedAt
        replyTo {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumPost {
          id
          title
          content
          imgS3Keys
          tags
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        forumPostComment {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        owner
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const forumPostSubCommentSortByForumPostCommentID = /* GraphQL */ `
  query ForumPostSubCommentSortByForumPostCommentID(
    $forumPostCommentID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelForumPostSubCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ForumPostSubCommentSortByForumPostCommentID(
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
        active
        createdAt
        replyToUserID
        forumPostID
        forumPostCommentID
        userID
        updatedAt
        replyTo {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumPost {
          id
          title
          content
          imgS3Keys
          tags
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        forumPostComment {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        owner
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getMarketUserInfo = /* GraphQL */ `
  query GetMarketUserInfo($id: ID!) {
    getMarketUserInfo(id: $id) {
      id
      phone
      weChat
      email
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listMarketUserInfos = /* GraphQL */ `
  query ListMarketUserInfos(
    $filter: ModelMarketUserInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarketUserInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        phone
        weChat
        email
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        owner
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
      imgS3Keys
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
      address
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
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
      owner
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
        imgS3Keys
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
        address
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
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        owner
      }
      nextToken
    }
  }
`;
export const marketItemSortBySortKey = /* GraphQL */ `
  query MarketItemSortBySortKey(
    $sortKey: SortKey
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMarketItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    marketItemSortBySortKey(
      sortKey: $sortKey
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        imgS3Keys
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
        address
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
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        owner
      }
      nextToken
    }
  }
`;
export const marketItemSortByMarketItemCategory = /* GraphQL */ `
  query MarketItemSortByMarketItemCategory(
    $marketItemCategory: MarketItemCategory
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMarketItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    marketItemSortByMarketItemCategory(
      marketItemCategory: $marketItemCategory
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        imgS3Keys
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
        address
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
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        owner
      }
      nextToken
    }
  }
`;
export const marketVehicleSortByVehicleType = /* GraphQL */ `
  query MarketVehicleSortByVehicleType(
    $vehicleType: VehicleType
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMarketItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    marketVehicleSortByVehicleType(
      vehicleType: $vehicleType
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        imgS3Keys
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
        address
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
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        owner
      }
      nextToken
    }
  }
`;
export const marketRentalSortByMarketRentalSaleRent = /* GraphQL */ `
  query MarketRentalSortByMarketRentalSaleRent(
    $marketRentalSaleRent: MarketRentalSaleRent
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMarketItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    marketRentalSortByMarketRentalSaleRent(
      marketRentalSaleRent: $marketRentalSaleRent
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        imgS3Keys
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
        address
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
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        owner
      }
      nextToken
    }
  }
`;
export const getFoundingMember = /* GraphQL */ `
  query GetFoundingMember($id: ID!) {
    getFoundingMember(id: $id) {
      id
      active
      title
      brief
      moreBrief
      mainPart
      imgS3Key
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
    }
  }
`;
export const listFoundingMembers = /* GraphQL */ `
  query ListFoundingMembers(
    $filter: ModelFoundingMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFoundingMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        active
        title
        brief
        moreBrief
        mainPart
        imgS3Key
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      like
      itemID
      userID
      createdAt
      updatedAt
      userBeingLiked {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
      article {
        id
        title
        content
        imgS3Keys
        tags
        sortKey
        active
        createdAt
        topicID
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
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
        likes {
          nextToken
        }
      }
      articleComment {
        id
        content
        active
        articleID
        createdAt
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        article {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        owner
        articleSubComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      articleSubComment {
        id
        content
        active
        articleCommentID
        createdAt
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
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
        owner
        likes {
          nextToken
        }
      }
      event {
        id
        title
        startDate
        endDate
        online
        group
        backGroundImgS3Key
        qrCodeImgS3Key
        posterImgS3Key
        content
        location
        sponsor
        tags
        eventStatus
        active
        createdAt
        sortKey
        topicID
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
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
      }
      eventComment {
        id
        content
        active
        eventID
        createdAt
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        event {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        owner
        eventSubComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      eventSubComment {
        id
        content
        active
        eventCommentID
        createdAt
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
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
        owner
        likes {
          nextToken
        }
      }
      forumPost {
        id
        title
        content
        imgS3Keys
        tags
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
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
      forumPostComment {
        id
        content
        createdAt
        active
        forumPostID
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumPost {
          id
          title
          content
          imgS3Keys
          tags
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        owner
        forumPostSubComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      forumPostSubComment {
        id
        content
        active
        createdAt
        replyToUserID
        forumPostID
        forumPostCommentID
        userID
        updatedAt
        replyTo {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumPost {
          id
          title
          content
          imgS3Keys
          tags
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        forumPostComment {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        owner
        likes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        like
        itemID
        userID
        createdAt
        updatedAt
        userBeingLiked {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        article {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
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
        articleSubComment {
          id
          content
          active
          articleCommentID
          createdAt
          userID
          updatedAt
          owner
        }
        event {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventSubComment {
          id
          content
          active
          eventCommentID
          createdAt
          userID
          updatedAt
          owner
        }
        forumPost {
          id
          title
          content
          imgS3Keys
          tags
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        forumPostComment {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComment {
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
        owner
      }
      nextToken
    }
  }
`;
export const getWebFeedBack = /* GraphQL */ `
  query GetWebFeedBack($id: ID!) {
    getWebFeedBack(id: $id) {
      id
      like
      rate
      reason
      improvement
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        likes {
          id
          like
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        topics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articles {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComments {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        events {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
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
        eventParticipants {
          id
          name
          email
          address
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
        departments {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobs {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
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
        uwcssaJobResumes {
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
        forumTopics {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumSubTopics {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        forumPostComments {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComments {
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
        marketItems {
          id
          name
          imgS3Keys
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
          address
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
        foundingMember {
          id
          active
          title
          brief
          moreBrief
          mainPart
          imgS3Key
          userID
          createdAt
          updatedAt
        }
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        forumPosts {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        beingLiked {
          nextToken
        }
        webFeedBack {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listWebFeedBacks = /* GraphQL */ `
  query ListWebFeedBacks(
    $filter: ModelWebFeedBackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWebFeedBacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        like
        rate
        reason
        improvement
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
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        owner
      }
      nextToken
    }
  }
`;
