/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        userName
        name
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
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
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const userProfileSortByCreatedAt = /* GraphQL */ `
  query UserProfileSortByCreatedAt(
    $active: ActiveType!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userProfileSortByCreatedAt(
      active: $active
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
      nextToken
    }
  }
`;
export const getUserImage = /* GraphQL */ `
  query GetUserImage($id: ID!) {
    getUserImage(id: $id) {
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
export const listUserImages = /* GraphQL */ `
  query ListUserImages(
    $filter: ModelUserImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const userImageSortByCreatedAt = /* GraphQL */ `
  query UserImageSortByCreatedAt(
    $active: ActiveType!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userImageSortByCreatedAt(
      active: $active
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        owner
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
        like
        disLike
        targetTable
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
        coverPageImgURL
        coverPageDescription
        active
        createdAt
        updatedAt
        owner
        articleCountId
      }
      nextToken
    }
  }
`;
export const articleSortByCreatedAt = /* GraphQL */ `
  query ArticleSortByCreatedAt(
    $active: ActiveType!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    articleSortByCreatedAt(
      active: $active
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
        coverPageImgURL
        coverPageDescription
        active
        createdAt
        updatedAt
        owner
        articleCountId
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
        like
        disLike
        targetTable
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
        isDeleted
        articleCommentsId
        eventCommentsId
        createdAt
        updatedAt
        owner
        commentCountId
      }
      nextToken
    }
  }
`;
export const commentSortByArticleCommentsIdCreatedAt = /* GraphQL */ `
  query CommentSortByArticleCommentsIdCreatedAt(
    $articleCommentsId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentSortByArticleCommentsIdCreatedAt(
      articleCommentsId: $articleCommentsId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const commentSortByEventCommentsIdCreatedAt = /* GraphQL */ `
  query CommentSortByEventCommentsIdCreatedAt(
    $eventCommentsId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentSortByEventCommentsIdCreatedAt(
      eventCommentsId: $eventCommentsId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getContactUs = /* GraphQL */ `
  query GetContactUs($id: ID!) {
    getContactUs(id: $id) {
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
export const listContactuses = /* GraphQL */ `
  query ListContactuses(
    $filter: ModelContactUsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fullName
        email
        message
        phone
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCount = /* GraphQL */ `
  query GetCount($id: ID!) {
    getCount(id: $id) {
      id
      count
      like
      disLike
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
      targetTable
      createdAt
      updatedAt
      owner
      countArticleId
      countCommentId
    }
  }
`;
export const listCounts = /* GraphQL */ `
  query ListCounts(
    $filter: ModelCountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        count
        like
        disLike
        targetTable
        createdAt
        updatedAt
        owner
        countArticleId
        countCommentId
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
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
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        owner
        articleLikesId
        commentLikesId
      }
      nextToken
    }
  }
`;
export const getResearchDevelopmentTeam = /* GraphQL */ `
  query GetResearchDevelopmentTeam($id: ID!) {
    getResearchDevelopmentTeam(id: $id) {
      id
      name
      title
      subTitle
      content
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
export const listResearchDevelopmentTeams = /* GraphQL */ `
  query ListResearchDevelopmentTeams(
    $filter: ModelResearchDevelopmentTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResearchDevelopmentTeams(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        title
        subTitle
        content
        email
        linkedIn
        github
        website
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUwcssaDepartment = /* GraphQL */ `
  query GetUwcssaDepartment($id: ID!) {
    getUwcssaDepartment(id: $id) {
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
export const listUwcssaDepartments = /* GraphQL */ `
  query ListUwcssaDepartments(
    $filter: ModelUwcssaDepartmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUwcssaDepartments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        introduction
        email
        leader
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUwcssaMember = /* GraphQL */ `
  query GetUwcssaMember($id: ID!) {
    getUwcssaMember(id: $id) {
      id
      name
      title
      subTitle
      content
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
        name
        title
        subTitle
        content
        email
        linkedIn
        website
        github
        createdAt
        updatedAt
        owner
        uwcssaDepartmentUwcssaMembersId
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
      nextToken
    }
  }
`;
export const eventSortByCreatedAt = /* GraphQL */ `
  query EventSortByCreatedAt(
    $active: ActiveType!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventSortByCreatedAt(
      active: $active
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getForm = /* GraphQL */ `
  query GetForm($id: ID!) {
    getForm(id: $id) {
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
export const listForms = /* GraphQL */ `
  query ListForms(
    $filter: ModelFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        owner
        formEventId
      }
      nextToken
    }
  }
`;
export const getFormItem = /* GraphQL */ `
  query GetFormItem($id: ID!) {
    getFormItem(id: $id) {
      id
      question
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
export const listFormItems = /* GraphQL */ `
  query ListFormItems(
    $filter: ModelFormItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFormItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        question
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
      nextToken
    }
  }
`;
export const getEventParticipant = /* GraphQL */ `
  query GetEventParticipant($id: ID!) {
    getEventParticipant(id: $id) {
      id
      content1
      formItem1 {
        id
        question
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
        question
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
        question
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
        question
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
        question
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
        question
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
        question
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
        question
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
        question
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
        question
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
        question
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
        question
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
        question
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
        question
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
        question
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
        question
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
        question
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
        question
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
        question
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
        content1
        content2
        content3
        content4
        content5
        content6
        content7
        content8
        content9
        content10
        content11
        content12
        content13
        content14
        content15
        content16
        content17
        content18
        content19
        eventParticipantStatus
        createdAt
        updatedAt
        owner
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
      nextToken
    }
  }
`;
export const getArticleTags = /* GraphQL */ `
  query GetArticleTags($id: ID!) {
    getArticleTags(id: $id) {
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
export const listArticleTags = /* GraphQL */ `
  query ListArticleTags(
    $filter: ModelArticleTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticleTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tagID
        articleID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEventTags = /* GraphQL */ `
  query GetEventTags($id: ID!) {
    getEventTags(id: $id) {
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
export const listEventTags = /* GraphQL */ `
  query ListEventTags(
    $filter: ModelEventTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tagID
        eventID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
