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
      fullName
      contactEmail
      title
      about
      avatarURL
      website
      createdAt
      updatedAt
      owner
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
      fullName
      contactEmail
      title
      about
      avatarURL
      website
      createdAt
      updatedAt
      owner
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
      fullName
      contactEmail
      title
      about
      avatarURL
      website
      createdAt
      updatedAt
      owner
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
        fullName
        contactEmail
        title
        about
        avatarURL
        website
        createdAt
        updatedAt
        owner
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
        fullName
        contactEmail
        title
        about
        avatarURL
        website
        createdAt
        updatedAt
        owner
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
        fullName
        contactEmail
        title
        about
        avatarURL
        website
        createdAt
        updatedAt
        owner
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
        fullName
        contactEmail
        title
        about
        avatarURL
        website
        createdAt
        updatedAt
        owner
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
        fullName
        contactEmail
        title
        about
        avatarURL
        website
        createdAt
        updatedAt
        owner
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
        fullName
        contactEmail
        title
        about
        avatarURL
        website
        createdAt
        updatedAt
        owner
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
        fullName
        contactEmail
        title
        about
        avatarURL
        website
        createdAt
        updatedAt
        owner
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
        fullName
        contactEmail
        title
        about
        avatarURL
        website
        createdAt
        updatedAt
        owner
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
        fullName
        contactEmail
        title
        about
        avatarURL
        website
        createdAt
        updatedAt
        owner
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
