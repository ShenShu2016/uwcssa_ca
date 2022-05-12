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
      nextToken
    }
  }
`;
export const userSortBySortKey = /* GraphQL */ `
  query UserSortBySortKey(
    $sortKey: SortKey!
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
      userID
      user {
        id
        username
        email
        owner
        firstName
        lastName
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
        userID
        user {
          id
          username
          email
          owner
          firstName
          lastName
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
      userID
      user {
        id
        username
        email
        owner
        firstName
        lastName
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
        userID
        user {
          id
          username
          email
          owner
          firstName
          lastName
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
      nextToken
    }
  }
`;
export const getTopic = /* GraphQL */ `
  query GetTopic($id: ID!) {
    getTopic(id: $id) {
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
      nextToken
    }
  }
`;
export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
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
      comments {
        items {
          id
          content
          active
          targetID
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      subComments {
        items {
          id
          content
          active
          targetID
          commentID
          createdAt
          userID
          replyToUserID
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
        comments {
          nextToken
        }
        subComments {
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
      nextToken
    }
  }
`;
export const articleSortBySortKey = /* GraphQL */ `
  query ArticleSortBySortKey(
    $sortKey: SortKey!
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
        comments {
          nextToken
        }
        subComments {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
      targetID
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
        comments {
          nextToken
        }
        subComments {
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
        forms {
          nextToken
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
        comments {
          nextToken
        }
        subComments {
          nextToken
        }
        updatedAt
      }
      createdAt
      subComments {
        items {
          id
          content
          active
          targetID
          commentID
          createdAt
          userID
          replyToUserID
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        likes {
          nextToken
        }
        active
        targetID
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
        createdAt
        subComments {
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
      nextToken
    }
  }
`;
export const getSubComment = /* GraphQL */ `
  query GetSubComment($id: ID!) {
    getSubComment(id: $id) {
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
      targetID
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
        comments {
          nextToken
        }
        subComments {
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
        forms {
          nextToken
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
        comments {
          nextToken
        }
        subComments {
          nextToken
        }
        updatedAt
      }
      commentID
      comment {
        id
        content
        likes {
          nextToken
        }
        active
        targetID
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
        createdAt
        subComments {
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
export const listSubComments = /* GraphQL */ `
  query ListSubComments(
    $filter: ModelSubCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        likes {
          nextToken
        }
        active
        targetID
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
        commentID
        comment {
          id
          content
          active
          targetID
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
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
          text1
          text2
          text3
          text4
          text5
          text6
          text7
          text8
          text9
          text10
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
      forms {
        items {
          id
          formQuestionID
          order
          required
          eventID
          userID
          createdAt
          updatedAt
        }
        nextToken
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
          text1
          text2
          text3
          text4
          text5
          text6
          text7
          text8
          text9
          text10
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
      comments {
        items {
          id
          content
          active
          targetID
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      subComments {
        items {
          id
          content
          active
          targetID
          commentID
          createdAt
          userID
          replyToUserID
          updatedAt
          owner
        }
        nextToken
      }
      updatedAt
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
        forms {
          nextToken
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
        comments {
          nextToken
        }
        subComments {
          nextToken
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const eventSortBySortKey = /* GraphQL */ `
  query EventSortBySortKey(
    $sortKey: SortKey!
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
        forms {
          nextToken
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
        comments {
          nextToken
        }
        subComments {
          nextToken
        }
        updatedAt
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
        forms {
          nextToken
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
        comments {
          nextToken
        }
        subComments {
          nextToken
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
      nextToken
    }
  }
`;
export const eventCommentSortByEventID = /* GraphQL */ `
  query EventCommentSortByEventID(
    $eventID: ID!
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
      nextToken
    }
  }
`;
export const getEventSubComment = /* GraphQL */ `
  query GetEventSubComment($id: ID!) {
    getEventSubComment(id: $id) {
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
      nextToken
    }
  }
`;
export const eventSubCommentSortByEventCommentID = /* GraphQL */ `
  query EventSubCommentSortByEventCommentID(
    $eventCommentID: ID!
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
          text1
          text2
          text3
          text4
          text5
          text6
          text7
          text8
          text9
          text10
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
      text1
      text2
      text3
      text4
      text5
      text6
      text7
      text8
      text9
      text10
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
        forms {
          nextToken
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
        comments {
          nextToken
        }
        subComments {
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
        text1
        text2
        text3
        text4
        text5
        text6
        text7
        text8
        text9
        text10
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
      nextToken
    }
  }
`;
export const eventParticipantSortByEventID = /* GraphQL */ `
  query EventParticipantSortByEventID(
    $eventID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventParticipantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventParticipantSortByEventID(
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
        text1
        text2
        text3
        text4
        text5
        text6
        text7
        text8
        text9
        text10
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
      nextToken
    }
  }
`;
export const getUwcssaMember = /* GraphQL */ `
  query GetUwcssaMember($id: ID!) {
    getUwcssaMember(id: $id) {
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
export const listUwcssaMembers = /* GraphQL */ `
  query ListUwcssaMembers(
    $filter: ModelUwcssaMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUwcssaMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const uwcssaMemberSortByDepartmentID = /* GraphQL */ `
  query UwcssaMemberSortByDepartmentID(
    $departmentID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUwcssaMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    uwcssaMemberSortByDepartmentID(
      departmentID: $departmentID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          updatedAt
        }
        updatedAt
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
      imgURLs
      benefits
      schedule
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
        imgURLs
        benefits
        schedule
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
      nextToken
    }
  }
`;
export const uwcssaJobSortByDepartmentID = /* GraphQL */ `
  query UwcssaJobSortByDepartmentID(
    $departmentID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUwcssaJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    uwcssaJobSortByDepartmentID(
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
        imgURLs
        benefits
        schedule
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
      uwcssaJob {
        id
        introduction
        title
        requirements
        bonus
        imgURLs
        benefits
        schedule
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
        uwcssaJob {
          id
          introduction
          title
          requirements
          bonus
          imgURLs
          benefits
          schedule
          active
          createdAt
          departmentID
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
      nextToken
    }
  }
`;
export const uwcssaJobResumeSortByUwcssaJobID = /* GraphQL */ `
  query UwcssaJobResumeSortByUwcssaJobID(
    $uwcssaJobID: ID!
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
        uwcssaJob {
          id
          introduction
          title
          requirements
          bonus
          imgURLs
          benefits
          schedule
          active
          createdAt
          departmentID
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
      nextToken
    }
  }
`;
export const getForumTopic = /* GraphQL */ `
  query GetForumTopic($id: ID!) {
    getForumTopic(id: $id) {
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
      nextToken
    }
  }
`;
export const forumPostSortBySortKey = /* GraphQL */ `
  query ForumPostSortBySortKey(
    $sortKey: SortKey!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelForumPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    forumPostSortBySortKey(
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
      nextToken
    }
  }
`;
export const forumPostSortByForumSubTopicID = /* GraphQL */ `
  query ForumPostSortByForumSubTopicID(
    $forumSubTopicID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelForumPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    forumPostSortByForumSubTopicID(
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
      nextToken
    }
  }
`;
export const forumPostSortByForumPostLastReplyAt = /* GraphQL */ `
  query ForumPostSortByForumPostLastReplyAt(
    $forumSubTopicID: ID!
    $lastReplyAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelForumPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    forumPostSortByForumPostLastReplyAt(
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
      nextToken
    }
  }
`;
export const getForumPostComment = /* GraphQL */ `
  query GetForumPostComment($id: ID!) {
    getForumPostComment(id: $id) {
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
      nextToken
    }
  }
`;
export const forumPostCommentSortByForumPostID = /* GraphQL */ `
  query ForumPostCommentSortByForumPostID(
    $forumPostID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelForumPostCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    forumPostCommentSortByForumPostID(
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
      nextToken
    }
  }
`;
export const getForumPostSubComment = /* GraphQL */ `
  query GetForumPostSubComment($id: ID!) {
    getForumPostSubComment(id: $id) {
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
      nextToken
    }
  }
`;
export const forumPostSubCommentSortByForumPostCommentID = /* GraphQL */ `
  query ForumPostSubCommentSortByForumPostCommentID(
    $forumPostCommentID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelForumPostSubCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    forumPostSubCommentSortByForumPostCommentID(
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
      user {
        id
        username
        email
        owner
        firstName
        lastName
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
        user {
          id
          username
          email
          owner
          firstName
          lastName
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
      nextToken
    }
  }
`;
export const getMarketItem = /* GraphQL */ `
  query GetMarketItem($id: ID!) {
    getMarketItem(id: $id) {
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
          text1
          text2
          text3
          text4
          text5
          text6
          text7
          text8
          text9
          text10
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
      nextToken
    }
  }
`;
export const marketItemSortByMarketItemCategory = /* GraphQL */ `
  query MarketItemSortByMarketItemCategory(
    $marketItemCategory: MarketItemCategory!
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
      nextToken
    }
  }
`;
export const marketVehicleSortByVehicleType = /* GraphQL */ `
  query MarketVehicleSortByVehicleType(
    $vehicleType: VehicleType!
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
      nextToken
    }
  }
`;
export const marketRentalSortByMarketRentalSaleRent = /* GraphQL */ `
  query MarketRentalSortByMarketRentalSaleRent(
    $marketRentalSaleRent: MarketRentalSaleRent!
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
      nextToken
    }
  }
`;
export const marketItemSortBySortKey = /* GraphQL */ `
  query MarketItemSortBySortKey(
    $sortKey: SortKey!
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
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
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
        text1
        text2
        text3
        text4
        text5
        text6
        text7
        text8
        text9
        text10
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
        forms {
          nextToken
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
        comments {
          nextToken
        }
        subComments {
          nextToken
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
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          text1
          text2
          text3
          text4
          text5
          text6
          text7
          text8
          text9
          text10
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
          updatedAt
        }
        createdAt
        updatedAt
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
      comment {
        id
        content
        likes {
          nextToken
        }
        active
        targetID
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
        createdAt
        subComments {
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
      subComment {
        id
        content
        likes {
          nextToken
        }
        active
        targetID
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
        commentID
        comment {
          id
          content
          active
          targetID
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
        updatedAt
        owner
      }
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
        comments {
          nextToken
        }
        subComments {
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
        forms {
          nextToken
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
        comments {
          nextToken
        }
        subComments {
          nextToken
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
      userID
      user {
        id
        username
        email
        owner
        firstName
        lastName
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
        comment {
          id
          content
          active
          targetID
          createdAt
          userID
          updatedAt
          owner
        }
        subComment {
          id
          content
          active
          targetID
          commentID
          createdAt
          userID
          replyToUserID
          updatedAt
          owner
        }
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
        userID
        user {
          id
          username
          email
          owner
          firstName
          lastName
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
      nextToken
    }
  }
`;
export const getWebFeedBack = /* GraphQL */ `
  query GetWebFeedBack($id: ID!) {
    getWebFeedBack(id: $id) {
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
export const listWebFeedBacks = /* GraphQL */ `
  query ListWebFeedBacks(
    $filter: ModelWebFeedBackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWebFeedBacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getKanban = /* GraphQL */ `
  query GetKanban($id: ID!) {
    getKanban(id: $id) {
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
export const listKanbans = /* GraphQL */ `
  query ListKanbans(
    $filter: ModelKanbanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKanbans(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          updatedAt
        }
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
        userID
        user {
          id
          username
          email
          owner
          firstName
          lastName
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
      nextToken
    }
  }
`;
export const kanbanSortBySortKey = /* GraphQL */ `
  query KanbanSortBySortKey(
    $sortKey: SortKey!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelKanbanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    kanbanSortBySortKey(
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
          updatedAt
        }
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
        userID
        user {
          id
          username
          email
          owner
          firstName
          lastName
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
      nextToken
    }
  }
`;
export const getForm = /* GraphQL */ `
  query GetForm($id: ID!) {
    getForm(id: $id) {
      id
      formQuestionID
      formQuestion {
        id
        name
        description
        formType
        helperText
        imgURLs
        pattern
        minLength
        maxLength
        placeholder
        label
        choices {
          formQuestionChoice
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
      order
      required
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
        forms {
          nextToken
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
        comments {
          nextToken
        }
        subComments {
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
export const listForms = /* GraphQL */ `
  query ListForms(
    $filter: ModelFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        formQuestionID
        formQuestion {
          id
          name
          description
          formType
          helperText
          imgURLs
          pattern
          minLength
          maxLength
          placeholder
          label
          userID
          createdAt
          updatedAt
        }
        order
        required
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFormQuestion = /* GraphQL */ `
  query GetFormQuestion($id: ID!) {
    getFormQuestion(id: $id) {
      id
      name
      description
      formType
      helperText
      imgURLs
      pattern
      minLength
      maxLength
      placeholder
      label
      choices {
        formQuestionChoice
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
export const listFormQuestions = /* GraphQL */ `
  query ListFormQuestions(
    $filter: ModelFormQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFormQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        formType
        helperText
        imgURLs
        pattern
        minLength
        maxLength
        placeholder
        label
        choices {
          formQuestionChoice
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
      nextToken
    }
  }
`;
