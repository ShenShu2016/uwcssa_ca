/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  email: string,
  userName: string,
  name: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner: string,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  email: string,
  userName: string,
  name: string,
  createdAt: string,
  updatedAt: string,
  owner: string,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  userName?: string | null,
  name?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateUserProfileInput = {
  id?: string | null,
  name: string,
  firstName?: string | null,
  contactEmail?: string | null,
  title?: string | null,
  about?: string | null,
  avatarURL?: string | null,
  website?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner: string,
};

export type ModelUserProfileConditionInput = {
  name?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  contactEmail?: ModelStringInput | null,
  title?: ModelStringInput | null,
  about?: ModelStringInput | null,
  avatarURL?: ModelStringInput | null,
  website?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelUserProfileConditionInput | null > | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  not?: ModelUserProfileConditionInput | null,
};

export type UserProfile = {
  __typename: "UserProfile",
  id: string,
  name: string,
  firstName?: string | null,
  contactEmail?: string | null,
  title?: string | null,
  about?: string | null,
  avatarURL?: string | null,
  website?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  owner: string,
};

export type UpdateUserProfileInput = {
  id: string,
  name?: string | null,
  firstName?: string | null,
  contactEmail?: string | null,
  title?: string | null,
  about?: string | null,
  avatarURL?: string | null,
  website?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type CreateTagInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner: string,
};

export type ModelTagConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
};

export type Tag = {
  __typename: "Tag",
  id: string,
  articles?: ModelArticleTagsConnection | null,
  createdAt: string,
  updatedAt: string,
  owner: string,
};

export type ModelArticleTagsConnection = {
  __typename: "ModelArticleTagsConnection",
  items:  Array<ArticleTags | null >,
  nextToken?: string | null,
};

export type ArticleTags = {
  __typename: "ArticleTags",
  id: string,
  tagID: string,
  articleID: string,
  tag: Tag,
  article: Article,
  createdAt: string,
  updatedAt: string,
};

export type Article = {
  __typename: "Article",
  id: string,
  title: string,
  content: string,
  coverPageImgURL?: string | null,
  coverPageDescription?: string | null,
  tags?: ModelArticleTagsConnection | null,
  comments?: ModelCommentConnection | null,
  active: ActiveType,
  createdAt: string,
  updatedAt: string,
  owner: string,
  user: UserProfile,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  content: string,
  isDeleted: boolean,
  articleCommentId?: string | null,
  article?: Article | null,
  createdAt: string,
  updatedAt: string,
  owner: string,
  user: UserProfile,
  articleCommentsId?: string | null,
};

export enum ActiveType {
  T = "T",
  F = "F",
}


export type UpdateTagInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type DeleteTagInput = {
  id: string,
};

export type CreateArticleInput = {
  id?: string | null,
  title: string,
  content: string,
  coverPageImgURL?: string | null,
  coverPageDescription?: string | null,
  active: ActiveType,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner: string,
};

export type ModelArticleConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  coverPageImgURL?: ModelStringInput | null,
  coverPageDescription?: ModelStringInput | null,
  active?: ModelActiveTypeInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelArticleConditionInput | null > | null,
  or?: Array< ModelArticleConditionInput | null > | null,
  not?: ModelArticleConditionInput | null,
};

export type ModelActiveTypeInput = {
  eq?: ActiveType | null,
  ne?: ActiveType | null,
};

export type UpdateArticleInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  coverPageImgURL?: string | null,
  coverPageDescription?: string | null,
  active?: ActiveType | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type DeleteArticleInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content: string,
  isDeleted: boolean,
  articleCommentId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner: string,
  articleCommentsId?: string | null,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  isDeleted?: ModelBooleanInput | null,
  articleCommentId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  articleCommentsId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  isDeleted?: boolean | null,
  articleCommentId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
  articleCommentsId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateContactUsInput = {
  id?: string | null,
  fullName?: string | null,
  email?: string | null,
  message?: string | null,
  phone?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type ModelContactUsConditionInput = {
  fullName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  message?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelContactUsConditionInput | null > | null,
  or?: Array< ModelContactUsConditionInput | null > | null,
  not?: ModelContactUsConditionInput | null,
};

export type ContactUs = {
  __typename: "ContactUs",
  id: string,
  fullName?: string | null,
  email?: string | null,
  message?: string | null,
  phone?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
  user?: UserProfile | null,
};

export type UpdateContactUsInput = {
  id: string,
  fullName?: string | null,
  email?: string | null,
  message?: string | null,
  phone?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type DeleteContactUsInput = {
  id: string,
};

export type CreateUserImageInput = {
  id?: string | null,
  objectURL: string,
  key: string,
  targetTable?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner: string,
};

export type ModelUserImageConditionInput = {
  objectURL?: ModelStringInput | null,
  key?: ModelStringInput | null,
  targetTable?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelUserImageConditionInput | null > | null,
  or?: Array< ModelUserImageConditionInput | null > | null,
  not?: ModelUserImageConditionInput | null,
};

export type UserImage = {
  __typename: "UserImage",
  id: string,
  objectURL: string,
  key: string,
  targetTable?: string | null,
  createdAt: string,
  updatedAt: string,
  owner: string,
};

export type UpdateUserImageInput = {
  id: string,
  objectURL?: string | null,
  key?: string | null,
  targetTable?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type DeleteUserImageInput = {
  id: string,
};

export type CreateArticleTagsInput = {
  id?: string | null,
  tagID: string,
  articleID: string,
};

export type ModelArticleTagsConditionInput = {
  tagID?: ModelIDInput | null,
  articleID?: ModelIDInput | null,
  and?: Array< ModelArticleTagsConditionInput | null > | null,
  or?: Array< ModelArticleTagsConditionInput | null > | null,
  not?: ModelArticleTagsConditionInput | null,
};

export type UpdateArticleTagsInput = {
  id: string,
  tagID?: string | null,
  articleID?: string | null,
};

export type DeleteArticleTagsInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelUserProfileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  contactEmail?: ModelStringInput | null,
  title?: ModelStringInput | null,
  about?: ModelStringInput | null,
  avatarURL?: ModelStringInput | null,
  website?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelUserProfileFilterInput | null > | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  not?: ModelUserProfileFilterInput | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
};

export type ModelArticleFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  coverPageImgURL?: ModelStringInput | null,
  coverPageDescription?: ModelStringInput | null,
  active?: ModelActiveTypeInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelArticleFilterInput | null > | null,
  or?: Array< ModelArticleFilterInput | null > | null,
  not?: ModelArticleFilterInput | null,
};

export type ModelArticleConnection = {
  __typename: "ModelArticleConnection",
  items:  Array<Article | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  isDeleted?: ModelBooleanInput | null,
  articleCommentId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  articleCommentsId?: ModelIDInput | null,
};

export type ModelContactUsFilterInput = {
  id?: ModelIDInput | null,
  fullName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  message?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelContactUsFilterInput | null > | null,
  or?: Array< ModelContactUsFilterInput | null > | null,
  not?: ModelContactUsFilterInput | null,
};

export type ModelContactUsConnection = {
  __typename: "ModelContactUsConnection",
  items:  Array<ContactUs | null >,
  nextToken?: string | null,
};

export type ModelUserImageFilterInput = {
  id?: ModelIDInput | null,
  objectURL?: ModelStringInput | null,
  key?: ModelStringInput | null,
  targetTable?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelUserImageFilterInput | null > | null,
  or?: Array< ModelUserImageFilterInput | null > | null,
  not?: ModelUserImageFilterInput | null,
};

export type ModelUserImageConnection = {
  __typename: "ModelUserImageConnection",
  items:  Array<UserImage | null >,
  nextToken?: string | null,
};

export type ModelArticleTagsFilterInput = {
  id?: ModelIDInput | null,
  tagID?: ModelIDInput | null,
  articleID?: ModelIDInput | null,
  and?: Array< ModelArticleTagsFilterInput | null > | null,
  or?: Array< ModelArticleTagsFilterInput | null > | null,
  not?: ModelArticleTagsFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    email: string,
    userName: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    userName: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    userName: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner: string,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  input: CreateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    firstName?: string | null,
    contactEmail?: string | null,
    title?: string | null,
    about?: string | null,
    avatarURL?: string | null,
    website?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  input: UpdateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    firstName?: string | null,
    contactEmail?: string | null,
    title?: string | null,
    about?: string | null,
    avatarURL?: string | null,
    website?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  input: DeleteUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    firstName?: string | null,
    contactEmail?: string | null,
    title?: string | null,
    about?: string | null,
    avatarURL?: string | null,
    website?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    id: string,
    articles?:  {
      __typename: "ModelArticleTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "Tag",
    id: string,
    articles?:  {
      __typename: "ModelArticleTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "Tag",
    id: string,
    articles?:  {
      __typename: "ModelArticleTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
  } | null,
};

export type CreateArticleMutationVariables = {
  input: CreateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type CreateArticleMutation = {
  createArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    content: string,
    coverPageImgURL?: string | null,
    coverPageDescription?: string | null,
    tags?:  {
      __typename: "ModelArticleTagsConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    active: ActiveType,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      firstName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
  } | null,
};

export type UpdateArticleMutationVariables = {
  input: UpdateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type UpdateArticleMutation = {
  updateArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    content: string,
    coverPageImgURL?: string | null,
    coverPageDescription?: string | null,
    tags?:  {
      __typename: "ModelArticleTagsConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    active: ActiveType,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      firstName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
  } | null,
};

export type DeleteArticleMutationVariables = {
  input: DeleteArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type DeleteArticleMutation = {
  deleteArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    content: string,
    coverPageImgURL?: string | null,
    coverPageDescription?: string | null,
    tags?:  {
      __typename: "ModelArticleTagsConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    active: ActiveType,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      firstName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    isDeleted: boolean,
    articleCommentId?: string | null,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      content: string,
      coverPageImgURL?: string | null,
      coverPageDescription?: string | null,
      active: ActiveType,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      firstName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    articleCommentsId?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    isDeleted: boolean,
    articleCommentId?: string | null,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      content: string,
      coverPageImgURL?: string | null,
      coverPageDescription?: string | null,
      active: ActiveType,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      firstName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    articleCommentsId?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    isDeleted: boolean,
    articleCommentId?: string | null,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      content: string,
      coverPageImgURL?: string | null,
      coverPageDescription?: string | null,
      active: ActiveType,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      firstName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    articleCommentsId?: string | null,
  } | null,
};

export type CreateContactUsMutationVariables = {
  input: CreateContactUsInput,
  condition?: ModelContactUsConditionInput | null,
};

export type CreateContactUsMutation = {
  createContactUs?:  {
    __typename: "ContactUs",
    id: string,
    fullName?: string | null,
    email?: string | null,
    message?: string | null,
    phone?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    user?:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      firstName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
  } | null,
};

export type UpdateContactUsMutationVariables = {
  input: UpdateContactUsInput,
  condition?: ModelContactUsConditionInput | null,
};

export type UpdateContactUsMutation = {
  updateContactUs?:  {
    __typename: "ContactUs",
    id: string,
    fullName?: string | null,
    email?: string | null,
    message?: string | null,
    phone?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    user?:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      firstName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
  } | null,
};

export type DeleteContactUsMutationVariables = {
  input: DeleteContactUsInput,
  condition?: ModelContactUsConditionInput | null,
};

export type DeleteContactUsMutation = {
  deleteContactUs?:  {
    __typename: "ContactUs",
    id: string,
    fullName?: string | null,
    email?: string | null,
    message?: string | null,
    phone?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    user?:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      firstName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
  } | null,
};

export type CreateUserImageMutationVariables = {
  input: CreateUserImageInput,
  condition?: ModelUserImageConditionInput | null,
};

export type CreateUserImageMutation = {
  createUserImage?:  {
    __typename: "UserImage",
    id: string,
    objectURL: string,
    key: string,
    targetTable?: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
  } | null,
};

export type UpdateUserImageMutationVariables = {
  input: UpdateUserImageInput,
  condition?: ModelUserImageConditionInput | null,
};

export type UpdateUserImageMutation = {
  updateUserImage?:  {
    __typename: "UserImage",
    id: string,
    objectURL: string,
    key: string,
    targetTable?: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
  } | null,
};

export type DeleteUserImageMutationVariables = {
  input: DeleteUserImageInput,
  condition?: ModelUserImageConditionInput | null,
};

export type DeleteUserImageMutation = {
  deleteUserImage?:  {
    __typename: "UserImage",
    id: string,
    objectURL: string,
    key: string,
    targetTable?: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
  } | null,
};

export type CreateArticleTagsMutationVariables = {
  input: CreateArticleTagsInput,
  condition?: ModelArticleTagsConditionInput | null,
};

export type CreateArticleTagsMutation = {
  createArticleTags?:  {
    __typename: "ArticleTags",
    id: string,
    tagID: string,
    articleID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    article:  {
      __typename: "Article",
      id: string,
      title: string,
      content: string,
      coverPageImgURL?: string | null,
      coverPageDescription?: string | null,
      active: ActiveType,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateArticleTagsMutationVariables = {
  input: UpdateArticleTagsInput,
  condition?: ModelArticleTagsConditionInput | null,
};

export type UpdateArticleTagsMutation = {
  updateArticleTags?:  {
    __typename: "ArticleTags",
    id: string,
    tagID: string,
    articleID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    article:  {
      __typename: "Article",
      id: string,
      title: string,
      content: string,
      coverPageImgURL?: string | null,
      coverPageDescription?: string | null,
      active: ActiveType,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteArticleTagsMutationVariables = {
  input: DeleteArticleTagsInput,
  condition?: ModelArticleTagsConditionInput | null,
};

export type DeleteArticleTagsMutation = {
  deleteArticleTags?:  {
    __typename: "ArticleTags",
    id: string,
    tagID: string,
    articleID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    article:  {
      __typename: "Article",
      id: string,
      title: string,
      content: string,
      coverPageImgURL?: string | null,
      coverPageDescription?: string | null,
      active: ActiveType,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email: string,
    userName: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      userName: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    firstName?: string | null,
    contactEmail?: string | null,
    title?: string | null,
    about?: string | null,
    avatarURL?: string | null,
    website?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      id: string,
      name: string,
      firstName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "Tag",
    id: string,
    articles?:  {
      __typename: "ModelArticleTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetArticleQueryVariables = {
  id: string,
};

export type GetArticleQuery = {
  getArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    content: string,
    coverPageImgURL?: string | null,
    coverPageDescription?: string | null,
    tags?:  {
      __typename: "ModelArticleTagsConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    active: ActiveType,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      firstName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
  } | null,
};

export type ListArticlesQueryVariables = {
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArticlesQuery = {
  listArticles?:  {
    __typename: "ModelArticleConnection",
    items:  Array< {
      __typename: "Article",
      id: string,
      title: string,
      content: string,
      coverPageImgURL?: string | null,
      coverPageDescription?: string | null,
      active: ActiveType,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ArticleSortByCreatedAtQueryVariables = {
  active: ActiveType,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ArticleSortByCreatedAtQuery = {
  articleSortByCreatedAt?:  {
    __typename: "ModelArticleConnection",
    items:  Array< {
      __typename: "Article",
      id: string,
      title: string,
      content: string,
      coverPageImgURL?: string | null,
      coverPageDescription?: string | null,
      active: ActiveType,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    isDeleted: boolean,
    articleCommentId?: string | null,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      content: string,
      coverPageImgURL?: string | null,
      coverPageDescription?: string | null,
      active: ActiveType,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      firstName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    articleCommentsId?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      isDeleted: boolean,
      articleCommentId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
      articleCommentsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContactUsQueryVariables = {
  id: string,
};

export type GetContactUsQuery = {
  getContactUs?:  {
    __typename: "ContactUs",
    id: string,
    fullName?: string | null,
    email?: string | null,
    message?: string | null,
    phone?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    user?:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      firstName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
  } | null,
};

export type ListContactusesQueryVariables = {
  filter?: ModelContactUsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContactusesQuery = {
  listContactuses?:  {
    __typename: "ModelContactUsConnection",
    items:  Array< {
      __typename: "ContactUs",
      id: string,
      fullName?: string | null,
      email?: string | null,
      message?: string | null,
      phone?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserImageQueryVariables = {
  id: string,
};

export type GetUserImageQuery = {
  getUserImage?:  {
    __typename: "UserImage",
    id: string,
    objectURL: string,
    key: string,
    targetTable?: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
  } | null,
};

export type ListUserImagesQueryVariables = {
  filter?: ModelUserImageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserImagesQuery = {
  listUserImages?:  {
    __typename: "ModelUserImageConnection",
    items:  Array< {
      __typename: "UserImage",
      id: string,
      objectURL: string,
      key: string,
      targetTable?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetArticleTagsQueryVariables = {
  id: string,
};

export type GetArticleTagsQuery = {
  getArticleTags?:  {
    __typename: "ArticleTags",
    id: string,
    tagID: string,
    articleID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    article:  {
      __typename: "Article",
      id: string,
      title: string,
      content: string,
      coverPageImgURL?: string | null,
      coverPageDescription?: string | null,
      active: ActiveType,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListArticleTagsQueryVariables = {
  filter?: ModelArticleTagsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArticleTagsQuery = {
  listArticleTags?:  {
    __typename: "ModelArticleTagsConnection",
    items:  Array< {
      __typename: "ArticleTags",
      id: string,
      tagID: string,
      articleID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateArticleTagsSubscription = {
  onCreateArticleTags?:  {
    __typename: "ArticleTags",
    id: string,
    tagID: string,
    articleID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    article:  {
      __typename: "Article",
      id: string,
      title: string,
      content: string,
      coverPageImgURL?: string | null,
      coverPageDescription?: string | null,
      active: ActiveType,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateArticleTagsSubscription = {
  onUpdateArticleTags?:  {
    __typename: "ArticleTags",
    id: string,
    tagID: string,
    articleID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    article:  {
      __typename: "Article",
      id: string,
      title: string,
      content: string,
      coverPageImgURL?: string | null,
      coverPageDescription?: string | null,
      active: ActiveType,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteArticleTagsSubscription = {
  onDeleteArticleTags?:  {
    __typename: "ArticleTags",
    id: string,
    tagID: string,
    articleID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    article:  {
      __typename: "Article",
      id: string,
      title: string,
      content: string,
      coverPageImgURL?: string | null,
      coverPageDescription?: string | null,
      active: ActiveType,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
