/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      userName
      name
      createdAt
      updatedAt
      owner
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
      email
      userName
      name
      createdAt
      updatedAt
      owner
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
      email
      userName
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
      id
      name
      email
      fullName
      contactEmail
      title
      about
      avatarURL {
        id
        objectURL
        key
        name
        size
        type
        lastModified
        lastModifiedDate
        compressedWidth
        objectCompressedURL
        thumbnailWidth
        objectThumbnailURL
        targetTable
        active
        createdAt
        updatedAt
        owner
      }
      website
      emailSubscription
      active
      createdAt
      updatedAt
      owner
      userProfileAvatarURLId
    }
  }
`;
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
      id
      name
      email
      fullName
      contactEmail
      title
      about
      avatarURL {
        id
        objectURL
        key
        name
        size
        type
        lastModified
        lastModifiedDate
        compressedWidth
        objectCompressedURL
        thumbnailWidth
        objectThumbnailURL
        targetTable
        active
        createdAt
        updatedAt
        owner
      }
      website
      emailSubscription
      active
      createdAt
      updatedAt
      owner
      userProfileAvatarURLId
    }
  }
`;
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
      id
      name
      email
      fullName
      contactEmail
      title
      about
      avatarURL {
        id
        objectURL
        key
        name
        size
        type
        lastModified
        lastModifiedDate
        compressedWidth
        objectCompressedURL
        thumbnailWidth
        objectThumbnailURL
        targetTable
        active
        createdAt
        updatedAt
        owner
      }
      website
      emailSubscription
      active
      createdAt
      updatedAt
      owner
      userProfileAvatarURLId
    }
  }
`;
export const createUserImage = /* GraphQL */ `
  mutation CreateUserImage(
    $input: CreateUserImageInput!
    $condition: ModelUserImageConditionInput
  ) {
    createUserImage(input: $input, condition: $condition) {
      id
      objectURL
      key
      name
      size
      type
      lastModified
      lastModifiedDate
      compressedWidth
      objectCompressedURL
      thumbnailWidth
      objectThumbnailURL
      targetTable
      active
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUserImage = /* GraphQL */ `
  mutation UpdateUserImage(
    $input: UpdateUserImageInput!
    $condition: ModelUserImageConditionInput
  ) {
    updateUserImage(input: $input, condition: $condition) {
      id
      objectURL
      key
      name
      size
      type
      lastModified
      lastModifiedDate
      compressedWidth
      objectCompressedURL
      thumbnailWidth
      objectThumbnailURL
      targetTable
      active
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUserImage = /* GraphQL */ `
  mutation DeleteUserImage(
    $input: DeleteUserImageInput!
    $condition: ModelUserImageConditionInput
  ) {
    deleteUserImage(input: $input, condition: $condition) {
      id
      objectURL
      key
      name
      size
      type
      lastModified
      lastModifiedDate
      compressedWidth
      objectCompressedURL
      thumbnailWidth
      objectThumbnailURL
      targetTable
      active
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      articles {
        nextToken
      }
      events {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      articles {
        nextToken
      }
      events {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      articles {
        nextToken
      }
      events {
        nextToken
      }
      createdAt
      updatedAt
      owner
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
      coverPageImgURL
      coverPageDescription
      tags {
        nextToken
      }
      comments {
        nextToken
      }
      likes {
        nextToken
      }
      count {
        id
        count
        createdAt
        updatedAt
        owner
        countArticleId
        countCommentId
      }
      active
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
      articleCountId
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
      coverPageImgURL
      coverPageDescription
      tags {
        nextToken
      }
      comments {
        nextToken
      }
      likes {
        nextToken
      }
      count {
        id
        count
        createdAt
        updatedAt
        owner
        countArticleId
        countCommentId
      }
      active
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
      articleCountId
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
      coverPageImgURL
      coverPageDescription
      tags {
        nextToken
      }
      comments {
        nextToken
      }
      likes {
        nextToken
      }
      count {
        id
        count
        createdAt
        updatedAt
        owner
        countArticleId
        countCommentId
      }
      active
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
      articleCountId
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      content
      isDeleted
      articleCommentsId
      article {
        id
        title
        content
        coverPageImgURL
        coverPageDescription
        active
        createdAt
        updatedAt
        owner
        articleCountId
      }
      eventCommentsId
      event {
        id
        title
        coverPageImgURL
        coverPageDescription
        content
        imgURLs
        sponsor
        online
        group
        startDate
        endDate
        eventStatus
        active
        createdAt
        updatedAt
        owner
        eventEventLocationId
        eventFormId
      }
      count {
        id
        count
        createdAt
        updatedAt
        owner
        countArticleId
        countCommentId
      }
      likes {
        nextToken
      }
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
      commentCountId
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      content
      isDeleted
      articleCommentsId
      article {
        id
        title
        content
        coverPageImgURL
        coverPageDescription
        active
        createdAt
        updatedAt
        owner
        articleCountId
      }
      eventCommentsId
      event {
        id
        title
        coverPageImgURL
        coverPageDescription
        content
        imgURLs
        sponsor
        online
        group
        startDate
        endDate
        eventStatus
        active
        createdAt
        updatedAt
        owner
        eventEventLocationId
        eventFormId
      }
      count {
        id
        count
        createdAt
        updatedAt
        owner
        countArticleId
        countCommentId
      }
      likes {
        nextToken
      }
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
      commentCountId
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      content
      isDeleted
      articleCommentsId
      article {
        id
        title
        content
        coverPageImgURL
        coverPageDescription
        active
        createdAt
        updatedAt
        owner
        articleCountId
      }
      eventCommentsId
      event {
        id
        title
        coverPageImgURL
        coverPageDescription
        content
        imgURLs
        sponsor
        online
        group
        startDate
        endDate
        eventStatus
        active
        createdAt
        updatedAt
        owner
        eventEventLocationId
        eventFormId
      }
      count {
        id
        count
        createdAt
        updatedAt
        owner
        countArticleId
        countCommentId
      }
      likes {
        nextToken
      }
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
      commentCountId
    }
  }
`;
export const createContactUs = /* GraphQL */ `
  mutation CreateContactUs(
    $input: CreateContactUsInput!
    $condition: ModelContactUsConditionInput
  ) {
    createContactUs(input: $input, condition: $condition) {
      id
      fullName
      email
      message
      phone
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
    }
  }
`;
export const updateContactUs = /* GraphQL */ `
  mutation UpdateContactUs(
    $input: UpdateContactUsInput!
    $condition: ModelContactUsConditionInput
  ) {
    updateContactUs(input: $input, condition: $condition) {
      id
      fullName
      email
      message
      phone
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
    }
  }
`;
export const deleteContactUs = /* GraphQL */ `
  mutation DeleteContactUs(
    $input: DeleteContactUsInput!
    $condition: ModelContactUsConditionInput
  ) {
    deleteContactUs(input: $input, condition: $condition) {
      id
      fullName
      email
      message
      phone
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
    }
  }
`;
export const createCount = /* GraphQL */ `
  mutation CreateCount(
    $input: CreateCountInput!
    $condition: ModelCountConditionInput
  ) {
    createCount(input: $input, condition: $condition) {
      id
      count
      article {
        id
        title
        content
        coverPageImgURL
        coverPageDescription
        active
        createdAt
        updatedAt
        owner
        articleCountId
      }
      comment {
        id
        content
        isDeleted
        articleCommentsId
        eventCommentsId
        createdAt
        updatedAt
        owner
        commentCountId
      }
      createdAt
      updatedAt
      owner
      countArticleId
      countCommentId
    }
  }
`;
export const updateCount = /* GraphQL */ `
  mutation UpdateCount(
    $input: UpdateCountInput!
    $condition: ModelCountConditionInput
  ) {
    updateCount(input: $input, condition: $condition) {
      id
      count
      article {
        id
        title
        content
        coverPageImgURL
        coverPageDescription
        active
        createdAt
        updatedAt
        owner
        articleCountId
      }
      comment {
        id
        content
        isDeleted
        articleCommentsId
        eventCommentsId
        createdAt
        updatedAt
        owner
        commentCountId
      }
      createdAt
      updatedAt
      owner
      countArticleId
      countCommentId
    }
  }
`;
export const deleteCount = /* GraphQL */ `
  mutation DeleteCount(
    $input: DeleteCountInput!
    $condition: ModelCountConditionInput
  ) {
    deleteCount(input: $input, condition: $condition) {
      id
      count
      article {
        id
        title
        content
        coverPageImgURL
        coverPageDescription
        active
        createdAt
        updatedAt
        owner
        articleCountId
      }
      comment {
        id
        content
        isDeleted
        articleCommentsId
        eventCommentsId
        createdAt
        updatedAt
        owner
        commentCountId
      }
      createdAt
      updatedAt
      owner
      countArticleId
      countCommentId
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
      article {
        id
        title
        content
        coverPageImgURL
        coverPageDescription
        active
        createdAt
        updatedAt
        owner
        articleCountId
      }
      comment {
        id
        content
        isDeleted
        articleCommentsId
        eventCommentsId
        createdAt
        updatedAt
        owner
        commentCountId
      }
      createdAt
      updatedAt
      owner
      articleLikesId
      commentLikesId
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
      article {
        id
        title
        content
        coverPageImgURL
        coverPageDescription
        active
        createdAt
        updatedAt
        owner
        articleCountId
      }
      comment {
        id
        content
        isDeleted
        articleCommentsId
        eventCommentsId
        createdAt
        updatedAt
        owner
        commentCountId
      }
      createdAt
      updatedAt
      owner
      articleLikesId
      commentLikesId
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
      article {
        id
        title
        content
        coverPageImgURL
        coverPageDescription
        active
        createdAt
        updatedAt
        owner
        articleCountId
      }
      comment {
        id
        content
        isDeleted
        articleCommentsId
        eventCommentsId
        createdAt
        updatedAt
        owner
        commentCountId
      }
      createdAt
      updatedAt
      owner
      articleLikesId
      commentLikesId
    }
  }
`;
export const createResearchDevelopmentTeam = /* GraphQL */ `
  mutation CreateResearchDevelopmentTeam(
    $input: CreateResearchDevelopmentTeamInput!
    $condition: ModelResearchDevelopmentTeamConditionInput
  ) {
    createResearchDevelopmentTeam(input: $input, condition: $condition) {
      id
      name
      title
      subTitle
      content
      imgURL
      email
      linkedIn
      github
      website
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
    }
  }
`;
export const updateResearchDevelopmentTeam = /* GraphQL */ `
  mutation UpdateResearchDevelopmentTeam(
    $input: UpdateResearchDevelopmentTeamInput!
    $condition: ModelResearchDevelopmentTeamConditionInput
  ) {
    updateResearchDevelopmentTeam(input: $input, condition: $condition) {
      id
      name
      title
      subTitle
      content
      imgURL
      email
      linkedIn
      github
      website
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
    }
  }
`;
export const deleteResearchDevelopmentTeam = /* GraphQL */ `
  mutation DeleteResearchDevelopmentTeam(
    $input: DeleteResearchDevelopmentTeamInput!
    $condition: ModelResearchDevelopmentTeamConditionInput
  ) {
    deleteResearchDevelopmentTeam(input: $input, condition: $condition) {
      id
      name
      title
      subTitle
      content
      imgURL
      email
      linkedIn
      github
      website
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
    }
  }
`;
export const createUwcssaDepartment = /* GraphQL */ `
  mutation CreateUwcssaDepartment(
    $input: CreateUwcssaDepartmentInput!
    $condition: ModelUwcssaDepartmentConditionInput
  ) {
    createUwcssaDepartment(input: $input, condition: $condition) {
      id
      introduction
      email
      leader
      currentLeader {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
      uwcssaMembers {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUwcssaDepartment = /* GraphQL */ `
  mutation UpdateUwcssaDepartment(
    $input: UpdateUwcssaDepartmentInput!
    $condition: ModelUwcssaDepartmentConditionInput
  ) {
    updateUwcssaDepartment(input: $input, condition: $condition) {
      id
      introduction
      email
      leader
      currentLeader {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
      uwcssaMembers {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUwcssaDepartment = /* GraphQL */ `
  mutation DeleteUwcssaDepartment(
    $input: DeleteUwcssaDepartmentInput!
    $condition: ModelUwcssaDepartmentConditionInput
  ) {
    deleteUwcssaDepartment(input: $input, condition: $condition) {
      id
      introduction
      email
      leader
      currentLeader {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
      uwcssaMembers {
        nextToken
      }
      createdAt
      updatedAt
      owner
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
      name
      title
      subTitle
      content
      imgURL {
        id
        objectURL
        key
        name
        size
        type
        lastModified
        lastModifiedDate
        compressedWidth
        objectCompressedURL
        thumbnailWidth
        objectThumbnailURL
        targetTable
        active
        createdAt
        updatedAt
        owner
      }
      email
      department {
        id
        introduction
        email
        leader
        createdAt
        updatedAt
        owner
      }
      linkedIn
      website
      github
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
      uwcssaDepartmentUwcssaMembersId
      uwcssaMemberImgURLId
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
      name
      title
      subTitle
      content
      imgURL {
        id
        objectURL
        key
        name
        size
        type
        lastModified
        lastModifiedDate
        compressedWidth
        objectCompressedURL
        thumbnailWidth
        objectThumbnailURL
        targetTable
        active
        createdAt
        updatedAt
        owner
      }
      email
      department {
        id
        introduction
        email
        leader
        createdAt
        updatedAt
        owner
      }
      linkedIn
      website
      github
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
      uwcssaDepartmentUwcssaMembersId
      uwcssaMemberImgURLId
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
      name
      title
      subTitle
      content
      imgURL {
        id
        objectURL
        key
        name
        size
        type
        lastModified
        lastModifiedDate
        compressedWidth
        objectCompressedURL
        thumbnailWidth
        objectThumbnailURL
        targetTable
        active
        createdAt
        updatedAt
        owner
      }
      email
      department {
        id
        introduction
        email
        leader
        createdAt
        updatedAt
        owner
      }
      linkedIn
      website
      github
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
      uwcssaDepartmentUwcssaMembersId
      uwcssaMemberImgURLId
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
      title
      coverPageImgURL
      coverPageDescription
      content
      imgURLs
      sponsor
      online
      group
      tags {
        nextToken
      }
      startDate
      endDate
      eventStatus
      eventLocation {
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
        createdAt
        updatedAt
        owner
      }
      form {
        id
        createdAt
        updatedAt
        owner
        formEventId
      }
      comments {
        nextToken
      }
      eventParticipants {
        nextToken
      }
      active
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
      eventEventLocationId
      eventFormId
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
      title
      coverPageImgURL
      coverPageDescription
      content
      imgURLs
      sponsor
      online
      group
      tags {
        nextToken
      }
      startDate
      endDate
      eventStatus
      eventLocation {
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
        createdAt
        updatedAt
        owner
      }
      form {
        id
        createdAt
        updatedAt
        owner
        formEventId
      }
      comments {
        nextToken
      }
      eventParticipants {
        nextToken
      }
      active
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
      eventEventLocationId
      eventFormId
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
      title
      coverPageImgURL
      coverPageDescription
      content
      imgURLs
      sponsor
      online
      group
      tags {
        nextToken
      }
      startDate
      endDate
      eventStatus
      eventLocation {
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
        createdAt
        updatedAt
        owner
      }
      form {
        id
        createdAt
        updatedAt
        owner
        formEventId
      }
      comments {
        nextToken
      }
      eventParticipants {
        nextToken
      }
      active
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
      eventEventLocationId
      eventFormId
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
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
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
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
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
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
    }
  }
`;
export const createForm = /* GraphQL */ `
  mutation CreateForm(
    $input: CreateFormInput!
    $condition: ModelFormConditionInput
  ) {
    createForm(input: $input, condition: $condition) {
      id
      formItems {
        nextToken
      }
      event {
        id
        title
        coverPageImgURL
        coverPageDescription
        content
        imgURLs
        sponsor
        online
        group
        startDate
        endDate
        eventStatus
        active
        createdAt
        updatedAt
        owner
        eventEventLocationId
        eventFormId
      }
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
      formEventId
    }
  }
`;
export const updateForm = /* GraphQL */ `
  mutation UpdateForm(
    $input: UpdateFormInput!
    $condition: ModelFormConditionInput
  ) {
    updateForm(input: $input, condition: $condition) {
      id
      formItems {
        nextToken
      }
      event {
        id
        title
        coverPageImgURL
        coverPageDescription
        content
        imgURLs
        sponsor
        online
        group
        startDate
        endDate
        eventStatus
        active
        createdAt
        updatedAt
        owner
        eventEventLocationId
        eventFormId
      }
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
      formEventId
    }
  }
`;
export const deleteForm = /* GraphQL */ `
  mutation DeleteForm(
    $input: DeleteFormInput!
    $condition: ModelFormConditionInput
  ) {
    deleteForm(input: $input, condition: $condition) {
      id
      formItems {
        nextToken
      }
      event {
        id
        title
        coverPageImgURL
        coverPageDescription
        content
        imgURLs
        sponsor
        online
        group
        startDate
        endDate
        eventStatus
        active
        createdAt
        updatedAt
        owner
        eventEventLocationId
        eventFormId
      }
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
      formEventId
    }
  }
`;
export const createFormItem = /* GraphQL */ `
  mutation CreateFormItem(
    $input: CreateFormItemInput!
    $condition: ModelFormItemConditionInput
  ) {
    createFormItem(input: $input, condition: $condition) {
      id
      name
      order
      isRequired
      isString
      isEmail
      isNumber
      isDate
      isBoolean
      isTrim
      description
      formType
      helperText
      minLength
      maxLength
      placeholder
      label
      formSelectChoices
      createdAt
      updatedAt
      form {
        id
        createdAt
        updatedAt
        owner
        formEventId
      }
      owner
      formFormItemsId
    }
  }
`;
export const updateFormItem = /* GraphQL */ `
  mutation UpdateFormItem(
    $input: UpdateFormItemInput!
    $condition: ModelFormItemConditionInput
  ) {
    updateFormItem(input: $input, condition: $condition) {
      id
      name
      order
      isRequired
      isString
      isEmail
      isNumber
      isDate
      isBoolean
      isTrim
      description
      formType
      helperText
      minLength
      maxLength
      placeholder
      label
      formSelectChoices
      createdAt
      updatedAt
      form {
        id
        createdAt
        updatedAt
        owner
        formEventId
      }
      owner
      formFormItemsId
    }
  }
`;
export const deleteFormItem = /* GraphQL */ `
  mutation DeleteFormItem(
    $input: DeleteFormItemInput!
    $condition: ModelFormItemConditionInput
  ) {
    deleteFormItem(input: $input, condition: $condition) {
      id
      name
      order
      isRequired
      isString
      isEmail
      isNumber
      isDate
      isBoolean
      isTrim
      description
      formType
      helperText
      minLength
      maxLength
      placeholder
      label
      formSelectChoices
      createdAt
      updatedAt
      form {
        id
        createdAt
        updatedAt
        owner
        formEventId
      }
      owner
      formFormItemsId
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
      content1
      formItem1 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content2
      formItem2 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content3
      formItem3 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content4
      formItem4 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content5
      formItem5 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content6
      formItem6 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content7
      formItem7 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content8
      formItem8 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content9
      formItem9 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content10
      formItem10 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content11
      formItem11 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content12
      formItem12 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content13
      formItem13 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content14
      formItem14 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content15
      formItem15 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content16
      formItem16 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content17
      formItem17 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content18
      formItem18 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content19
      formItem19 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      eventParticipantStatus
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
      eventEventParticipantsId
      eventParticipantFormItem1Id
      eventParticipantFormItem2Id
      eventParticipantFormItem3Id
      eventParticipantFormItem4Id
      eventParticipantFormItem5Id
      eventParticipantFormItem6Id
      eventParticipantFormItem7Id
      eventParticipantFormItem8Id
      eventParticipantFormItem9Id
      eventParticipantFormItem10Id
      eventParticipantFormItem11Id
      eventParticipantFormItem12Id
      eventParticipantFormItem13Id
      eventParticipantFormItem14Id
      eventParticipantFormItem15Id
      eventParticipantFormItem16Id
      eventParticipantFormItem17Id
      eventParticipantFormItem18Id
      eventParticipantFormItem19Id
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
      content1
      formItem1 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content2
      formItem2 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content3
      formItem3 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content4
      formItem4 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content5
      formItem5 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content6
      formItem6 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content7
      formItem7 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content8
      formItem8 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content9
      formItem9 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content10
      formItem10 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content11
      formItem11 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content12
      formItem12 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content13
      formItem13 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content14
      formItem14 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content15
      formItem15 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content16
      formItem16 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content17
      formItem17 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content18
      formItem18 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content19
      formItem19 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      eventParticipantStatus
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
      eventEventParticipantsId
      eventParticipantFormItem1Id
      eventParticipantFormItem2Id
      eventParticipantFormItem3Id
      eventParticipantFormItem4Id
      eventParticipantFormItem5Id
      eventParticipantFormItem6Id
      eventParticipantFormItem7Id
      eventParticipantFormItem8Id
      eventParticipantFormItem9Id
      eventParticipantFormItem10Id
      eventParticipantFormItem11Id
      eventParticipantFormItem12Id
      eventParticipantFormItem13Id
      eventParticipantFormItem14Id
      eventParticipantFormItem15Id
      eventParticipantFormItem16Id
      eventParticipantFormItem17Id
      eventParticipantFormItem18Id
      eventParticipantFormItem19Id
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
      content1
      formItem1 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content2
      formItem2 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content3
      formItem3 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content4
      formItem4 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content5
      formItem5 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content6
      formItem6 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content7
      formItem7 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content8
      formItem8 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content9
      formItem9 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content10
      formItem10 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content11
      formItem11 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content12
      formItem12 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content13
      formItem13 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content14
      formItem14 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content15
      formItem15 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content16
      formItem16 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content17
      formItem17 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content18
      formItem18 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      content19
      formItem19 {
        id
        name
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      eventParticipantStatus
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
      eventEventParticipantsId
      eventParticipantFormItem1Id
      eventParticipantFormItem2Id
      eventParticipantFormItem3Id
      eventParticipantFormItem4Id
      eventParticipantFormItem5Id
      eventParticipantFormItem6Id
      eventParticipantFormItem7Id
      eventParticipantFormItem8Id
      eventParticipantFormItem9Id
      eventParticipantFormItem10Id
      eventParticipantFormItem11Id
      eventParticipantFormItem12Id
      eventParticipantFormItem13Id
      eventParticipantFormItem14Id
      eventParticipantFormItem15Id
      eventParticipantFormItem16Id
      eventParticipantFormItem17Id
      eventParticipantFormItem18Id
      eventParticipantFormItem19Id
    }
  }
`;
export const createArticleTags = /* GraphQL */ `
  mutation CreateArticleTags(
    $input: CreateArticleTagsInput!
    $condition: ModelArticleTagsConditionInput
  ) {
    createArticleTags(input: $input, condition: $condition) {
      id
      tagID
      articleID
      tag {
        id
        createdAt
        updatedAt
        owner
      }
      article {
        id
        title
        content
        coverPageImgURL
        coverPageDescription
        active
        createdAt
        updatedAt
        owner
        articleCountId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateArticleTags = /* GraphQL */ `
  mutation UpdateArticleTags(
    $input: UpdateArticleTagsInput!
    $condition: ModelArticleTagsConditionInput
  ) {
    updateArticleTags(input: $input, condition: $condition) {
      id
      tagID
      articleID
      tag {
        id
        createdAt
        updatedAt
        owner
      }
      article {
        id
        title
        content
        coverPageImgURL
        coverPageDescription
        active
        createdAt
        updatedAt
        owner
        articleCountId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteArticleTags = /* GraphQL */ `
  mutation DeleteArticleTags(
    $input: DeleteArticleTagsInput!
    $condition: ModelArticleTagsConditionInput
  ) {
    deleteArticleTags(input: $input, condition: $condition) {
      id
      tagID
      articleID
      tag {
        id
        createdAt
        updatedAt
        owner
      }
      article {
        id
        title
        content
        coverPageImgURL
        coverPageDescription
        active
        createdAt
        updatedAt
        owner
        articleCountId
      }
      createdAt
      updatedAt
    }
  }
`;
export const createEventTags = /* GraphQL */ `
  mutation CreateEventTags(
    $input: CreateEventTagsInput!
    $condition: ModelEventTagsConditionInput
  ) {
    createEventTags(input: $input, condition: $condition) {
      id
      tagID
      eventID
      tag {
        id
        createdAt
        updatedAt
        owner
      }
      event {
        id
        title
        coverPageImgURL
        coverPageDescription
        content
        imgURLs
        sponsor
        online
        group
        startDate
        endDate
        eventStatus
        active
        createdAt
        updatedAt
        owner
        eventEventLocationId
        eventFormId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateEventTags = /* GraphQL */ `
  mutation UpdateEventTags(
    $input: UpdateEventTagsInput!
    $condition: ModelEventTagsConditionInput
  ) {
    updateEventTags(input: $input, condition: $condition) {
      id
      tagID
      eventID
      tag {
        id
        createdAt
        updatedAt
        owner
      }
      event {
        id
        title
        coverPageImgURL
        coverPageDescription
        content
        imgURLs
        sponsor
        online
        group
        startDate
        endDate
        eventStatus
        active
        createdAt
        updatedAt
        owner
        eventEventLocationId
        eventFormId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteEventTags = /* GraphQL */ `
  mutation DeleteEventTags(
    $input: DeleteEventTagsInput!
    $condition: ModelEventTagsConditionInput
  ) {
    deleteEventTags(input: $input, condition: $condition) {
      id
      tagID
      eventID
      tag {
        id
        createdAt
        updatedAt
        owner
      }
      event {
        id
        title
        coverPageImgURL
        coverPageDescription
        content
        imgURLs
        sponsor
        online
        group
        startDate
        endDate
        eventStatus
        active
        createdAt
        updatedAt
        owner
        eventEventLocationId
        eventFormId
      }
      createdAt
      updatedAt
    }
  }
`;
