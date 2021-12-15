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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
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
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
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
        address {
          googleMapPlace
          apartmentNumbers
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        address {
          googleMapPlace
          apartmentNumbers
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        imgURLs
        benefits
        schedule
        like
        unlike
        active
        createdAt
        departmentID
        uwcssaJobResumes {
          nextToken
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        imgURLs
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
        owner
        likes {
          nextToken
        }
      }
      marketItems {
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
        address {
          googleMapPlace
          apartmentNumbers
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        imgURLs
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
      }
      userMutationLog {
        id
        eventName
        typename
        eventSourceARN
        record
        createdAt
        sortKey
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
      }
      updatedAt
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
      forumPosts {
        items {
          id
          title
          content
          imgURLs
          tags
          sortKey
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
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
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
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
        address {
          googleMapPlace
          apartmentNumbers
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        address {
          googleMapPlace
          apartmentNumbers
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        imgURLs
        benefits
        schedule
        like
        unlike
        active
        createdAt
        departmentID
        uwcssaJobResumes {
          nextToken
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        imgURLs
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
        owner
        likes {
          nextToken
        }
      }
      marketItems {
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
        address {
          googleMapPlace
          apartmentNumbers
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        imgURLs
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
      }
      userMutationLog {
        id
        eventName
        typename
        eventSourceARN
        record
        createdAt
        sortKey
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
      }
      updatedAt
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
      forumPosts {
        items {
          id
          title
          content
          imgURLs
          tags
          sortKey
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
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
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
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
        address {
          googleMapPlace
          apartmentNumbers
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        address {
          googleMapPlace
          apartmentNumbers
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        imgURLs
        benefits
        schedule
        like
        unlike
        active
        createdAt
        departmentID
        uwcssaJobResumes {
          nextToken
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        imgURLs
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
        owner
        likes {
          nextToken
        }
      }
      marketItems {
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
        address {
          googleMapPlace
          apartmentNumbers
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        imgURLs
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
      }
      userMutationLog {
        id
        eventName
        typename
        eventSourceARN
        record
        createdAt
        sortKey
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
      }
      updatedAt
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
      forumPosts {
        items {
          id
          title
          content
          imgURLs
          tags
          sortKey
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
export const createTopic = /* GraphQL */ `
  mutation CreateTopic(
    $input: CreateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    createTopic(input: $input, condition: $condition) {
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
export const createArticleComment = /* GraphQL */ `
  mutation CreateArticleComment(
    $input: CreateArticleCommentInput!
    $condition: ModelArticleCommentConditionInput
  ) {
    createArticleComment(input: $input, condition: $condition) {
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
export const updateArticleComment = /* GraphQL */ `
  mutation UpdateArticleComment(
    $input: UpdateArticleCommentInput!
    $condition: ModelArticleCommentConditionInput
  ) {
    updateArticleComment(input: $input, condition: $condition) {
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
export const deleteArticleComment = /* GraphQL */ `
  mutation DeleteArticleComment(
    $input: DeleteArticleCommentInput!
    $condition: ModelArticleCommentConditionInput
  ) {
    deleteArticleComment(input: $input, condition: $condition) {
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
export const createArticleSubComment = /* GraphQL */ `
  mutation CreateArticleSubComment(
    $input: CreateArticleSubCommentInput!
    $condition: ModelArticleSubCommentConditionInput
  ) {
    createArticleSubComment(input: $input, condition: $condition) {
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
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
export const updateArticleSubComment = /* GraphQL */ `
  mutation UpdateArticleSubComment(
    $input: UpdateArticleSubCommentInput!
    $condition: ModelArticleSubCommentConditionInput
  ) {
    updateArticleSubComment(input: $input, condition: $condition) {
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
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
export const deleteArticleSubComment = /* GraphQL */ `
  mutation DeleteArticleSubComment(
    $input: DeleteArticleSubCommentInput!
    $condition: ModelArticleSubCommentConditionInput
  ) {
    deleteArticleSubComment(input: $input, condition: $condition) {
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
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
      address {
        googleMapPlace
        apartmentNumbers
      }
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
      address {
        googleMapPlace
        apartmentNumbers
      }
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
      address {
        googleMapPlace
        apartmentNumbers
      }
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
export const createEventComment = /* GraphQL */ `
  mutation CreateEventComment(
    $input: CreateEventCommentInput!
    $condition: ModelEventCommentConditionInput
  ) {
    createEventComment(input: $input, condition: $condition) {
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        address {
          googleMapPlace
          apartmentNumbers
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
export const updateEventComment = /* GraphQL */ `
  mutation UpdateEventComment(
    $input: UpdateEventCommentInput!
    $condition: ModelEventCommentConditionInput
  ) {
    updateEventComment(input: $input, condition: $condition) {
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        address {
          googleMapPlace
          apartmentNumbers
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
export const deleteEventComment = /* GraphQL */ `
  mutation DeleteEventComment(
    $input: DeleteEventCommentInput!
    $condition: ModelEventCommentConditionInput
  ) {
    deleteEventComment(input: $input, condition: $condition) {
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        address {
          googleMapPlace
          apartmentNumbers
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
export const createEventSubComment = /* GraphQL */ `
  mutation CreateEventSubComment(
    $input: CreateEventSubCommentInput!
    $condition: ModelEventSubCommentConditionInput
  ) {
    createEventSubComment(input: $input, condition: $condition) {
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
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
export const updateEventSubComment = /* GraphQL */ `
  mutation UpdateEventSubComment(
    $input: UpdateEventSubCommentInput!
    $condition: ModelEventSubCommentConditionInput
  ) {
    updateEventSubComment(input: $input, condition: $condition) {
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
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
export const deleteEventSubComment = /* GraphQL */ `
  mutation DeleteEventSubComment(
    $input: DeleteEventSubCommentInput!
    $condition: ModelEventSubCommentConditionInput
  ) {
    deleteEventSubComment(input: $input, condition: $condition) {
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
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
export const createEventParticipant = /* GraphQL */ `
  mutation CreateEventParticipant(
    $input: CreateEventParticipantInput!
    $condition: ModelEventParticipantConditionInput
  ) {
    createEventParticipant(input: $input, condition: $condition) {
      id
      name
      email
      address {
        googleMapPlace
        apartmentNumbers
      }
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        address {
          googleMapPlace
          apartmentNumbers
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
export const updateEventParticipant = /* GraphQL */ `
  mutation UpdateEventParticipant(
    $input: UpdateEventParticipantInput!
    $condition: ModelEventParticipantConditionInput
  ) {
    updateEventParticipant(input: $input, condition: $condition) {
      id
      name
      email
      address {
        googleMapPlace
        apartmentNumbers
      }
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        address {
          googleMapPlace
          apartmentNumbers
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
export const deleteEventParticipant = /* GraphQL */ `
  mutation DeleteEventParticipant(
    $input: DeleteEventParticipantInput!
    $condition: ModelEventParticipantConditionInput
  ) {
    deleteEventParticipant(input: $input, condition: $condition) {
      id
      name
      email
      address {
        googleMapPlace
        apartmentNumbers
      }
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        address {
          googleMapPlace
          apartmentNumbers
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
        uwcssaJobs {
          nextToken
        }
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
      bonus
      imgURLs
      benefits
      schedule
      like
      unlike
      active
      createdAt
      departmentID
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
        uwcssaJobs {
          nextToken
        }
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
      bonus
      imgURLs
      benefits
      schedule
      like
      unlike
      active
      createdAt
      departmentID
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
        uwcssaJobs {
          nextToken
        }
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        imgURLs
        benefits
        schedule
        like
        unlike
        active
        createdAt
        departmentID
        uwcssaJobResumes {
          nextToken
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        imgURLs
        benefits
        schedule
        like
        unlike
        active
        createdAt
        departmentID
        uwcssaJobResumes {
          nextToken
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        imgURLs
        benefits
        schedule
        like
        unlike
        active
        createdAt
        departmentID
        uwcssaJobResumes {
          nextToken
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
export const updateForumTopic = /* GraphQL */ `
  mutation UpdateForumTopic(
    $input: UpdateForumTopicInput!
    $condition: ModelForumTopicConditionInput
  ) {
    updateForumTopic(input: $input, condition: $condition) {
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
export const deleteForumTopic = /* GraphQL */ `
  mutation DeleteForumTopic(
    $input: DeleteForumTopicInput!
    $condition: ModelForumTopicConditionInput
  ) {
    deleteForumTopic(input: $input, condition: $condition) {
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          imgURLs
          tags
          sortKey
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          imgURLs
          tags
          sortKey
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          imgURLs
          tags
          sortKey
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
      title
      content
      imgURLs
      tags
      sortKey
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
      essential
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
      sortKey
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
      essential
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
      sortKey
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
      essential
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
export const createForumPostComment = /* GraphQL */ `
  mutation CreateForumPostComment(
    $input: CreateForumPostCommentInput!
    $condition: ModelForumPostCommentConditionInput
  ) {
    createForumPostComment(input: $input, condition: $condition) {
      id
      content
      imgURLs
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        imgURLs
        tags
        sortKey
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        essential
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
export const updateForumPostComment = /* GraphQL */ `
  mutation UpdateForumPostComment(
    $input: UpdateForumPostCommentInput!
    $condition: ModelForumPostCommentConditionInput
  ) {
    updateForumPostComment(input: $input, condition: $condition) {
      id
      content
      imgURLs
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        imgURLs
        tags
        sortKey
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        essential
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
export const deleteForumPostComment = /* GraphQL */ `
  mutation DeleteForumPostComment(
    $input: DeleteForumPostCommentInput!
    $condition: ModelForumPostCommentConditionInput
  ) {
    deleteForumPostComment(input: $input, condition: $condition) {
      id
      content
      imgURLs
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        imgURLs
        tags
        sortKey
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        essential
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
export const createForumPostSubComment = /* GraphQL */ `
  mutation CreateForumPostSubComment(
    $input: CreateForumPostSubCommentInput!
    $condition: ModelForumPostSubCommentConditionInput
  ) {
    createForumPostSubComment(input: $input, condition: $condition) {
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        imgURLs
        tags
        sortKey
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        essential
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
        imgURLs
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
export const updateForumPostSubComment = /* GraphQL */ `
  mutation UpdateForumPostSubComment(
    $input: UpdateForumPostSubCommentInput!
    $condition: ModelForumPostSubCommentConditionInput
  ) {
    updateForumPostSubComment(input: $input, condition: $condition) {
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        imgURLs
        tags
        sortKey
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        essential
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
        imgURLs
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
export const deleteForumPostSubComment = /* GraphQL */ `
  mutation DeleteForumPostSubComment(
    $input: DeleteForumPostSubCommentInput!
    $condition: ModelForumPostSubCommentConditionInput
  ) {
    deleteForumPostSubComment(input: $input, condition: $condition) {
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        imgURLs
        tags
        sortKey
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        essential
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
        imgURLs
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
      address {
        googleMapPlace
        apartmentNumbers
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
      address {
        googleMapPlace
        apartmentNumbers
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
      address {
        googleMapPlace
        apartmentNumbers
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
export const createFoundingMember = /* GraphQL */ `
  mutation CreateFoundingMember(
    $input: CreateFoundingMemberInput!
    $condition: ModelFoundingMemberConditionInput
  ) {
    createFoundingMember(input: $input, condition: $condition) {
      id
      active
      title
      brief
      moreBrief
      mainPart
      imgURLs
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
export const updateFoundingMember = /* GraphQL */ `
  mutation UpdateFoundingMember(
    $input: UpdateFoundingMemberInput!
    $condition: ModelFoundingMemberConditionInput
  ) {
    updateFoundingMember(input: $input, condition: $condition) {
      id
      active
      title
      brief
      moreBrief
      mainPart
      imgURLs
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
export const deleteFoundingMember = /* GraphQL */ `
  mutation DeleteFoundingMember(
    $input: DeleteFoundingMemberInput!
    $condition: ModelFoundingMemberConditionInput
  ) {
    deleteFoundingMember(input: $input, condition: $condition) {
      id
      active
      title
      brief
      moreBrief
      mainPart
      imgURLs
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        address {
          googleMapPlace
          apartmentNumbers
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        imgURLs
        tags
        sortKey
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        essential
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
        imgURLs
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
        owner
        likes {
          nextToken
        }
      }
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        address {
          googleMapPlace
          apartmentNumbers
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        imgURLs
        tags
        sortKey
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        essential
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
        imgURLs
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
        owner
        likes {
          nextToken
        }
      }
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        address {
          googleMapPlace
          apartmentNumbers
        }
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        imgURLs
        tags
        sortKey
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
        essential
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
        imgURLs
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
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
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
        forumPost {
          id
          title
          content
          imgURLs
          tags
          sortKey
          active
          createdAt
          lastReplyAt
          forumSubTopicID
          userID
          updatedAt
          owner
          essential
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
        owner
        likes {
          nextToken
        }
      }
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
        avatarImgURL
        backGroundImgURL
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
          imgURLs
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
          imgURLs
          userID
          createdAt
          updatedAt
        }
        userMutationLog {
          id
          eventName
          typename
          eventSourceARN
          record
          createdAt
          sortKey
          userID
          updatedAt
        }
        updatedAt
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
