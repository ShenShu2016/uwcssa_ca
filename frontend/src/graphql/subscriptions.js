/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
      }
      owner
    }
  }
`;
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
      avatarImgS3Key
      backGroundImgS3Key
      linkedIn
      github
      sortKey
      createdAt
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
      topics {
        items {
          id
          name
          userID
          createdAt
          updatedAt
        }
        nextToken
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
      departments {
        items {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        nextToken
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
      forumTopics {
        items {
          id
          name
          userID
          createdAt
          updatedAt
        }
        nextToken
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
      forumPosts {
        items {
          id
          title
          content
          imgS3Keys
          tags
          active
          createdAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        nextToken
      }
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
          forumPostCommentID
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
      marketItems {
        items {
          id
          name
          imgS3Keys
          title
          price
          description
          location
          marketItemCondition
          marketItemCategory
          tags
          sortKey
          active
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      marketVehicles {
        items {
          id
          vehicleType
          imgS3Keys
          location
          year
          make
          model
          exteriorColor
          interiorColor
          fuelType
          price
          description
          active
          createdAt
          sortKey
          tags
          userID
          updatedAt
          owner
        }
        nextToken
      }
      marketRentals {
        items {
          id
          imgS3Keys
          marketRentalSaleRent
          propertyType
          bedroomCounts
          bathroomsCounts
          price
          address
          description
          propertySize
          dateAvailable
          laundryType
          airConditionType
          heatingType
          catFriendly
          dogFriendly
          tags
          active
          sortKey
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
      avatarImgS3Key
      backGroundImgS3Key
      linkedIn
      github
      sortKey
      createdAt
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
      topics {
        items {
          id
          name
          userID
          createdAt
          updatedAt
        }
        nextToken
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
      departments {
        items {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        nextToken
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
      forumTopics {
        items {
          id
          name
          userID
          createdAt
          updatedAt
        }
        nextToken
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
      forumPosts {
        items {
          id
          title
          content
          imgS3Keys
          tags
          active
          createdAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        nextToken
      }
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
          forumPostCommentID
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
      marketItems {
        items {
          id
          name
          imgS3Keys
          title
          price
          description
          location
          marketItemCondition
          marketItemCategory
          tags
          sortKey
          active
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      marketVehicles {
        items {
          id
          vehicleType
          imgS3Keys
          location
          year
          make
          model
          exteriorColor
          interiorColor
          fuelType
          price
          description
          active
          createdAt
          sortKey
          tags
          userID
          updatedAt
          owner
        }
        nextToken
      }
      marketRentals {
        items {
          id
          imgS3Keys
          marketRentalSaleRent
          propertyType
          bedroomCounts
          bathroomsCounts
          price
          address
          description
          propertySize
          dateAvailable
          laundryType
          airConditionType
          heatingType
          catFriendly
          dogFriendly
          tags
          active
          sortKey
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
      avatarImgS3Key
      backGroundImgS3Key
      linkedIn
      github
      sortKey
      createdAt
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
      topics {
        items {
          id
          name
          userID
          createdAt
          updatedAt
        }
        nextToken
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
      departments {
        items {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        nextToken
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
      forumTopics {
        items {
          id
          name
          userID
          createdAt
          updatedAt
        }
        nextToken
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
      forumPosts {
        items {
          id
          title
          content
          imgS3Keys
          tags
          active
          createdAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        nextToken
      }
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
          forumPostCommentID
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
      marketItems {
        items {
          id
          name
          imgS3Keys
          title
          price
          description
          location
          marketItemCondition
          marketItemCategory
          tags
          sortKey
          active
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      marketVehicles {
        items {
          id
          vehicleType
          imgS3Keys
          location
          year
          make
          model
          exteriorColor
          interiorColor
          fuelType
          price
          description
          active
          createdAt
          sortKey
          tags
          userID
          updatedAt
          owner
        }
        nextToken
      }
      marketRentals {
        items {
          id
          imgS3Keys
          marketRentalSaleRent
          propertyType
          bedroomCounts
          bathroomsCounts
          price
          address
          description
          propertySize
          dateAvailable
          laundryType
          airConditionType
          heatingType
          catFriendly
          dogFriendly
          tags
          active
          sortKey
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic {
    onUpdateTopic {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic {
    onDeleteTopic {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle {
    onCreateArticle {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle {
    onUpdateArticle {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle {
    onDeleteArticle {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onCreateArticleComment = /* GraphQL */ `
  subscription OnCreateArticleComment {
    onCreateArticleComment {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onUpdateArticleComment = /* GraphQL */ `
  subscription OnUpdateArticleComment {
    onUpdateArticleComment {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onDeleteArticleComment = /* GraphQL */ `
  subscription OnDeleteArticleComment {
    onDeleteArticleComment {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onCreateArticleSubComment = /* GraphQL */ `
  subscription OnCreateArticleSubComment {
    onCreateArticleSubComment {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onUpdateArticleSubComment = /* GraphQL */ `
  subscription OnUpdateArticleSubComment {
    onUpdateArticleSubComment {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onDeleteArticleSubComment = /* GraphQL */ `
  subscription OnDeleteArticleSubComment {
    onDeleteArticleSubComment {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onCreateEventParticipant = /* GraphQL */ `
  subscription OnCreateEventParticipant {
    onCreateEventParticipant {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onUpdateEventParticipant = /* GraphQL */ `
  subscription OnUpdateEventParticipant {
    onUpdateEventParticipant {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onDeleteEventParticipant = /* GraphQL */ `
  subscription OnDeleteEventParticipant {
    onDeleteEventParticipant {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onCreateDepartment = /* GraphQL */ `
  subscription OnCreateDepartment {
    onCreateDepartment {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onUpdateDepartment = /* GraphQL */ `
  subscription OnUpdateDepartment {
    onUpdateDepartment {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onDeleteDepartment = /* GraphQL */ `
  subscription OnDeleteDepartment {
    onDeleteDepartment {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onCreateUwcssaJob = /* GraphQL */ `
  subscription OnCreateUwcssaJob {
    onCreateUwcssaJob {
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
      imgS3Key
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
      imgS3Key
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
    }
  }
`;
export const onCreateForumTopic = /* GraphQL */ `
  subscription OnCreateForumTopic {
    onCreateForumTopic {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onUpdateForumTopic = /* GraphQL */ `
  subscription OnUpdateForumTopic {
    onUpdateForumTopic {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onDeleteForumTopic = /* GraphQL */ `
  subscription OnDeleteForumTopic {
    onDeleteForumTopic {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onCreateForumSubTopic = /* GraphQL */ `
  subscription OnCreateForumSubTopic {
    onCreateForumSubTopic {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onUpdateForumSubTopic = /* GraphQL */ `
  subscription OnUpdateForumSubTopic {
    onUpdateForumSubTopic {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onDeleteForumSubTopic = /* GraphQL */ `
  subscription OnDeleteForumSubTopic {
    onDeleteForumSubTopic {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onCreateForumPost = /* GraphQL */ `
  subscription OnCreateForumPost {
    onCreateForumPost {
      id
      title
      content
      imgS3Keys
      tags
      active
      createdAt
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onUpdateForumPost = /* GraphQL */ `
  subscription OnUpdateForumPost {
    onUpdateForumPost {
      id
      title
      content
      imgS3Keys
      tags
      active
      createdAt
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onDeleteForumPost = /* GraphQL */ `
  subscription OnDeleteForumPost {
    onDeleteForumPost {
      id
      title
      content
      imgS3Keys
      tags
      active
      createdAt
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onCreateForumPostComment = /* GraphQL */ `
  subscription OnCreateForumPostComment {
    onCreateForumPostComment {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onUpdateForumPostComment = /* GraphQL */ `
  subscription OnUpdateForumPostComment {
    onUpdateForumPostComment {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onDeleteForumPostComment = /* GraphQL */ `
  subscription OnDeleteForumPostComment {
    onDeleteForumPostComment {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onCreateForumPostSubComment = /* GraphQL */ `
  subscription OnCreateForumPostSubComment {
    onCreateForumPostSubComment {
      id
      content
      active
      createdAt
      forumPostCommentID
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onUpdateForumPostSubComment = /* GraphQL */ `
  subscription OnUpdateForumPostSubComment {
    onUpdateForumPostSubComment {
      id
      content
      active
      createdAt
      forumPostCommentID
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onDeleteForumPostSubComment = /* GraphQL */ `
  subscription OnDeleteForumPostSubComment {
    onDeleteForumPostSubComment {
      id
      content
      active
      createdAt
      forumPostCommentID
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
export const onCreateMarketUserInfo = /* GraphQL */ `
  subscription OnCreateMarketUserInfo {
    onCreateMarketUserInfo {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateMarketUserInfo = /* GraphQL */ `
  subscription OnUpdateMarketUserInfo {
    onUpdateMarketUserInfo {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteMarketUserInfo = /* GraphQL */ `
  subscription OnDeleteMarketUserInfo {
    onDeleteMarketUserInfo {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onCreateMarketItem = /* GraphQL */ `
  subscription OnCreateMarketItem {
    onCreateMarketItem {
      id
      name
      imgS3Keys
      title
      price
      description
      location
      marketItemCondition
      marketItemCategory
      tags
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateMarketItem = /* GraphQL */ `
  subscription OnUpdateMarketItem {
    onUpdateMarketItem {
      id
      name
      imgS3Keys
      title
      price
      description
      location
      marketItemCondition
      marketItemCategory
      tags
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteMarketItem = /* GraphQL */ `
  subscription OnDeleteMarketItem {
    onDeleteMarketItem {
      id
      name
      imgS3Keys
      title
      price
      description
      location
      marketItemCondition
      marketItemCategory
      tags
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onCreateMarketVehicle = /* GraphQL */ `
  subscription OnCreateMarketVehicle {
    onCreateMarketVehicle {
      id
      vehicleType
      imgS3Keys
      location
      year
      make
      model
      exteriorColor
      interiorColor
      fuelType
      price
      description
      active
      createdAt
      sortKey
      tags
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateMarketVehicle = /* GraphQL */ `
  subscription OnUpdateMarketVehicle {
    onUpdateMarketVehicle {
      id
      vehicleType
      imgS3Keys
      location
      year
      make
      model
      exteriorColor
      interiorColor
      fuelType
      price
      description
      active
      createdAt
      sortKey
      tags
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteMarketVehicle = /* GraphQL */ `
  subscription OnDeleteMarketVehicle {
    onDeleteMarketVehicle {
      id
      vehicleType
      imgS3Keys
      location
      year
      make
      model
      exteriorColor
      interiorColor
      fuelType
      price
      description
      active
      createdAt
      sortKey
      tags
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onCreateMarketRental = /* GraphQL */ `
  subscription OnCreateMarketRental {
    onCreateMarketRental {
      id
      imgS3Keys
      marketRentalSaleRent
      propertyType
      bedroomCounts
      bathroomsCounts
      price
      address
      description
      propertySize
      dateAvailable
      laundryType
      airConditionType
      heatingType
      catFriendly
      dogFriendly
      tags
      active
      sortKey
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateMarketRental = /* GraphQL */ `
  subscription OnUpdateMarketRental {
    onUpdateMarketRental {
      id
      imgS3Keys
      marketRentalSaleRent
      propertyType
      bedroomCounts
      bathroomsCounts
      price
      address
      description
      propertySize
      dateAvailable
      laundryType
      airConditionType
      heatingType
      catFriendly
      dogFriendly
      tags
      active
      sortKey
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteMarketRental = /* GraphQL */ `
  subscription OnDeleteMarketRental {
    onDeleteMarketRental {
      id
      imgS3Keys
      marketRentalSaleRent
      propertyType
      bedroomCounts
      bathroomsCounts
      price
      address
      description
      propertySize
      dateAvailable
      laundryType
      airConditionType
      heatingType
      catFriendly
      dogFriendly
      tags
      active
      sortKey
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
        eventParticipants {
          nextToken
        }
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
        forumPostCommentID
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
        eventParticipants {
          nextToken
        }
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
        forumPostCommentID
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
        eventParticipants {
          nextToken
        }
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
        forumPostCommentID
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
export const onCreateWebFeedBack = /* GraphQL */ `
  subscription OnCreateWebFeedBack {
    onCreateWebFeedBack {
      id
      like
      itemID
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
        eventParticipants {
          nextToken
        }
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
        forumPostCommentID
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
export const onUpdateWebFeedBack = /* GraphQL */ `
  subscription OnUpdateWebFeedBack {
    onUpdateWebFeedBack {
      id
      like
      itemID
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
        eventParticipants {
          nextToken
        }
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
        forumPostCommentID
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
export const onDeleteWebFeedBack = /* GraphQL */ `
  subscription OnDeleteWebFeedBack {
    onDeleteWebFeedBack {
      id
      like
      itemID
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
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
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
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        uwcssaJobResumes {
          nextToken
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
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
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
        eventParticipants {
          nextToken
        }
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
        forumPostCommentID
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
