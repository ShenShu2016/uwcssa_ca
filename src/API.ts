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
  email?: string | null,
  fullName?: string | null,
  contactEmail?: string | null,
  title?: string | null,
  about?: string | null,
  avatarURL?: string | null,
  website?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner: string,
};

export type ModelUserProfileConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
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
  email?: string | null,
  fullName?: string | null,
  contactEmail?: string | null,
  title?: string | null,
  about?: string | null,
  avatarURL?: string | null,
  website?: string | null,
  createdAt: string,
  updatedAt: string,
  owner: string,
};

export type UpdateUserProfileInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  fullName?: string | null,
  contactEmail?: string | null,
  title?: string | null,
  about?: string | null,
  avatarURL?: string | null,
  website?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type CreateUserImageInput = {
  id?: string | null,
  objectURL: string,
  key: string,
  name: string,
  size: number,
  type: string,
  lastModified?: string | null,
  lastModifiedDate?: string | null,
  compressedWidth?: number | null,
  objectCompressedURL?: string | null,
  thumbnailWidth?: number | null,
  objectThumbnailURL?: string | null,
  targetTable: string,
  active: ActiveType,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner: string,
};

export enum ActiveType {
  T = "T",
  F = "F",
}


export type ModelUserImageConditionInput = {
  objectURL?: ModelStringInput | null,
  key?: ModelStringInput | null,
  name?: ModelStringInput | null,
  size?: ModelIntInput | null,
  type?: ModelStringInput | null,
  lastModified?: ModelStringInput | null,
  lastModifiedDate?: ModelStringInput | null,
  compressedWidth?: ModelIntInput | null,
  objectCompressedURL?: ModelStringInput | null,
  thumbnailWidth?: ModelIntInput | null,
  objectThumbnailURL?: ModelStringInput | null,
  targetTable?: ModelStringInput | null,
  active?: ModelActiveTypeInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelUserImageConditionInput | null > | null,
  or?: Array< ModelUserImageConditionInput | null > | null,
  not?: ModelUserImageConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelActiveTypeInput = {
  eq?: ActiveType | null,
  ne?: ActiveType | null,
};

export type UserImage = {
  __typename: "UserImage",
  id: string,
  objectURL: string,
  key: string,
  name: string,
  size: number,
  type: string,
  lastModified?: string | null,
  lastModifiedDate?: string | null,
  compressedWidth?: number | null,
  objectCompressedURL?: string | null,
  thumbnailWidth?: number | null,
  objectThumbnailURL?: string | null,
  targetTable: string,
  active: ActiveType,
  createdAt: string,
  updatedAt: string,
  owner: string,
};

export type UpdateUserImageInput = {
  id: string,
  objectURL?: string | null,
  key?: string | null,
  name?: string | null,
  size?: number | null,
  type?: string | null,
  lastModified?: string | null,
  lastModifiedDate?: string | null,
  compressedWidth?: number | null,
  objectCompressedURL?: string | null,
  thumbnailWidth?: number | null,
  objectThumbnailURL?: string | null,
  targetTable?: string | null,
  active?: ActiveType | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type DeleteUserImageInput = {
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
  likes?: ModelLikeConnection | null,
  count?: Count | null,
  active: ActiveType,
  createdAt: string,
  updatedAt: string,
  owner: string,
  user: UserProfile,
  articleCountId?: string | null,
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
  articleCommentsId?: string | null,
  article?: Article | null,
  count?: Count | null,
  likes?: ModelLikeConnection | null,
  createdAt: string,
  updatedAt: string,
  owner: string,
  user: UserProfile,
  commentCountId?: string | null,
};

export type Count = {
  __typename: "Count",
  id: string,
  count: number,
  article?: Article | null,
  comment?: Comment | null,
  createdAt: string,
  updatedAt: string,
  owner: string,
  countArticleId?: string | null,
  countCommentId?: string | null,
};

export type ModelLikeConnection = {
  __typename: "ModelLikeConnection",
  items:  Array<Like | null >,
  nextToken?: string | null,
};

export type Like = {
  __typename: "Like",
  id: string,
  article?: Article | null,
  comment?: Comment | null,
  createdAt: string,
  updatedAt: string,
  owner: string,
  articleLikesId?: string | null,
  commentLikesId?: string | null,
};

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
  articleCountId?: string | null,
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
  articleCountId?: ModelIDInput | null,
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
  articleCountId?: string | null,
};

export type DeleteArticleInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content: string,
  isDeleted: boolean,
  articleCommentsId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner: string,
  commentCountId?: string | null,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  isDeleted?: ModelBooleanInput | null,
  articleCommentsId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  commentCountId?: ModelIDInput | null,
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
  articleCommentsId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
  commentCountId?: string | null,
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

export type CreateCountInput = {
  id?: string | null,
  count: number,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner: string,
  countArticleId?: string | null,
  countCommentId?: string | null,
};

export type ModelCountConditionInput = {
  count?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelCountConditionInput | null > | null,
  or?: Array< ModelCountConditionInput | null > | null,
  not?: ModelCountConditionInput | null,
  countArticleId?: ModelIDInput | null,
  countCommentId?: ModelIDInput | null,
};

export type UpdateCountInput = {
  id: string,
  count?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
  countArticleId?: string | null,
  countCommentId?: string | null,
};

export type DeleteCountInput = {
  id: string,
};

export type CreateLikeInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner: string,
  articleLikesId?: string | null,
  commentLikesId?: string | null,
};

export type ModelLikeConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelLikeConditionInput | null > | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  not?: ModelLikeConditionInput | null,
  articleLikesId?: ModelIDInput | null,
  commentLikesId?: ModelIDInput | null,
};

export type UpdateLikeInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
  articleLikesId?: string | null,
  commentLikesId?: string | null,
};

export type DeleteLikeInput = {
  id: string,
};

export type CreateResearchDevelopmentTeamInput = {
  id?: string | null,
  name?: string | null,
  title?: string | null,
  subTitle?: string | null,
  content?: string | null,
  imgURL?: string | null,
  email?: string | null,
  linkedIn?: string | null,
  github?: string | null,
  website?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner: string,
};

export type ModelResearchDevelopmentTeamConditionInput = {
  name?: ModelStringInput | null,
  title?: ModelStringInput | null,
  subTitle?: ModelStringInput | null,
  content?: ModelStringInput | null,
  imgURL?: ModelStringInput | null,
  email?: ModelStringInput | null,
  linkedIn?: ModelStringInput | null,
  github?: ModelStringInput | null,
  website?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelResearchDevelopmentTeamConditionInput | null > | null,
  or?: Array< ModelResearchDevelopmentTeamConditionInput | null > | null,
  not?: ModelResearchDevelopmentTeamConditionInput | null,
};

export type ResearchDevelopmentTeam = {
  __typename: "ResearchDevelopmentTeam",
  id: string,
  name?: string | null,
  title?: string | null,
  subTitle?: string | null,
  content?: string | null,
  imgURL?: string | null,
  email?: string | null,
  linkedIn?: string | null,
  github?: string | null,
  website?: string | null,
  createdAt: string,
  updatedAt: string,
  owner: string,
  user?: UserProfile | null,
};

export type UpdateResearchDevelopmentTeamInput = {
  id: string,
  name?: string | null,
  title?: string | null,
  subTitle?: string | null,
  content?: string | null,
  imgURL?: string | null,
  email?: string | null,
  linkedIn?: string | null,
  github?: string | null,
  website?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type DeleteResearchDevelopmentTeamInput = {
  id: string,
};

export type CreateUwcssaDepartmentInput = {
  id?: string | null,
  introduction?: string | null,
  email?: string | null,
  leader?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner: string,
};

export type ModelUwcssaDepartmentConditionInput = {
  introduction?: ModelStringInput | null,
  email?: ModelStringInput | null,
  leader?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelUwcssaDepartmentConditionInput | null > | null,
  or?: Array< ModelUwcssaDepartmentConditionInput | null > | null,
  not?: ModelUwcssaDepartmentConditionInput | null,
};

export type UwcssaDepartment = {
  __typename: "UwcssaDepartment",
  id: string,
  introduction?: string | null,
  email?: string | null,
  leader?: string | null,
  currentLeader?: UserProfile | null,
  uwcssaMembers?: ModelUwcssaMemberConnection | null,
  createdAt: string,
  updatedAt: string,
  owner: string,
};

export type ModelUwcssaMemberConnection = {
  __typename: "ModelUwcssaMemberConnection",
  items:  Array<UwcssaMember | null >,
  nextToken?: string | null,
};

export type UwcssaMember = {
  __typename: "UwcssaMember",
  id: string,
  name?: string | null,
  title?: string | null,
  subTitle?: string | null,
  content?: string | null,
  imgURL?: string | null,
  email?: string | null,
  department?: UwcssaDepartment | null,
  linkedIn?: string | null,
  website?: string | null,
  github?: string | null,
  createdAt: string,
  updatedAt: string,
  owner: string,
  user?: UserProfile | null,
  uwcssaDepartmentUwcssaMembersId?: string | null,
};

export type UpdateUwcssaDepartmentInput = {
  id: string,
  introduction?: string | null,
  email?: string | null,
  leader?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type DeleteUwcssaDepartmentInput = {
  id: string,
};

export type CreateUwcssaMemberInput = {
  id?: string | null,
  name?: string | null,
  title?: string | null,
  subTitle?: string | null,
  content?: string | null,
  imgURL?: string | null,
  email?: string | null,
  linkedIn?: string | null,
  website?: string | null,
  github?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner: string,
  uwcssaDepartmentUwcssaMembersId?: string | null,
};

export type ModelUwcssaMemberConditionInput = {
  name?: ModelStringInput | null,
  title?: ModelStringInput | null,
  subTitle?: ModelStringInput | null,
  content?: ModelStringInput | null,
  imgURL?: ModelStringInput | null,
  email?: ModelStringInput | null,
  linkedIn?: ModelStringInput | null,
  website?: ModelStringInput | null,
  github?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelUwcssaMemberConditionInput | null > | null,
  or?: Array< ModelUwcssaMemberConditionInput | null > | null,
  not?: ModelUwcssaMemberConditionInput | null,
  uwcssaDepartmentUwcssaMembersId?: ModelIDInput | null,
};

export type UpdateUwcssaMemberInput = {
  id: string,
  name?: string | null,
  title?: string | null,
  subTitle?: string | null,
  content?: string | null,
  imgURL?: string | null,
  email?: string | null,
  linkedIn?: string | null,
  website?: string | null,
  github?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
  uwcssaDepartmentUwcssaMembersId?: string | null,
};

export type DeleteUwcssaMemberInput = {
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
  email?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
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

export type ModelUserImageFilterInput = {
  id?: ModelIDInput | null,
  objectURL?: ModelStringInput | null,
  key?: ModelStringInput | null,
  name?: ModelStringInput | null,
  size?: ModelIntInput | null,
  type?: ModelStringInput | null,
  lastModified?: ModelStringInput | null,
  lastModifiedDate?: ModelStringInput | null,
  compressedWidth?: ModelIntInput | null,
  objectCompressedURL?: ModelStringInput | null,
  thumbnailWidth?: ModelIntInput | null,
  objectThumbnailURL?: ModelStringInput | null,
  targetTable?: ModelStringInput | null,
  active?: ModelActiveTypeInput | null,
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
  articleCountId?: ModelIDInput | null,
};

export type ModelArticleConnection = {
  __typename: "ModelArticleConnection",
  items:  Array<Article | null >,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  isDeleted?: ModelBooleanInput | null,
  articleCommentsId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  commentCountId?: ModelIDInput | null,
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

export type ModelCountFilterInput = {
  id?: ModelIDInput | null,
  count?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelCountFilterInput | null > | null,
  or?: Array< ModelCountFilterInput | null > | null,
  not?: ModelCountFilterInput | null,
  countArticleId?: ModelIDInput | null,
  countCommentId?: ModelIDInput | null,
};

export type ModelCountConnection = {
  __typename: "ModelCountConnection",
  items:  Array<Count | null >,
  nextToken?: string | null,
};

export type ModelLikeFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelLikeFilterInput | null > | null,
  or?: Array< ModelLikeFilterInput | null > | null,
  not?: ModelLikeFilterInput | null,
  articleLikesId?: ModelIDInput | null,
  commentLikesId?: ModelIDInput | null,
};

export type ModelResearchDevelopmentTeamFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  title?: ModelStringInput | null,
  subTitle?: ModelStringInput | null,
  content?: ModelStringInput | null,
  imgURL?: ModelStringInput | null,
  email?: ModelStringInput | null,
  linkedIn?: ModelStringInput | null,
  github?: ModelStringInput | null,
  website?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelResearchDevelopmentTeamFilterInput | null > | null,
  or?: Array< ModelResearchDevelopmentTeamFilterInput | null > | null,
  not?: ModelResearchDevelopmentTeamFilterInput | null,
};

export type ModelResearchDevelopmentTeamConnection = {
  __typename: "ModelResearchDevelopmentTeamConnection",
  items:  Array<ResearchDevelopmentTeam | null >,
  nextToken?: string | null,
};

export type ModelUwcssaDepartmentFilterInput = {
  id?: ModelIDInput | null,
  introduction?: ModelStringInput | null,
  email?: ModelStringInput | null,
  leader?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelUwcssaDepartmentFilterInput | null > | null,
  or?: Array< ModelUwcssaDepartmentFilterInput | null > | null,
  not?: ModelUwcssaDepartmentFilterInput | null,
};

export type ModelUwcssaDepartmentConnection = {
  __typename: "ModelUwcssaDepartmentConnection",
  items:  Array<UwcssaDepartment | null >,
  nextToken?: string | null,
};

export type ModelUwcssaMemberFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  title?: ModelStringInput | null,
  subTitle?: ModelStringInput | null,
  content?: ModelStringInput | null,
  imgURL?: ModelStringInput | null,
  email?: ModelStringInput | null,
  linkedIn?: ModelStringInput | null,
  website?: ModelStringInput | null,
  github?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelUwcssaMemberFilterInput | null > | null,
  or?: Array< ModelUwcssaMemberFilterInput | null > | null,
  not?: ModelUwcssaMemberFilterInput | null,
  uwcssaDepartmentUwcssaMembersId?: ModelIDInput | null,
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
    email?: string | null,
    fullName?: string | null,
    contactEmail?: string | null,
    title?: string | null,
    about?: string | null,
    avatarURL?: string | null,
    website?: string | null,
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
    email?: string | null,
    fullName?: string | null,
    contactEmail?: string | null,
    title?: string | null,
    about?: string | null,
    avatarURL?: string | null,
    website?: string | null,
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
    email?: string | null,
    fullName?: string | null,
    contactEmail?: string | null,
    title?: string | null,
    about?: string | null,
    avatarURL?: string | null,
    website?: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
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
    name: string,
    size: number,
    type: string,
    lastModified?: string | null,
    lastModifiedDate?: string | null,
    compressedWidth?: number | null,
    objectCompressedURL?: string | null,
    thumbnailWidth?: number | null,
    objectThumbnailURL?: string | null,
    targetTable: string,
    active: ActiveType,
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
    name: string,
    size: number,
    type: string,
    lastModified?: string | null,
    lastModifiedDate?: string | null,
    compressedWidth?: number | null,
    objectCompressedURL?: string | null,
    thumbnailWidth?: number | null,
    objectThumbnailURL?: string | null,
    targetTable: string,
    active: ActiveType,
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
    name: string,
    size: number,
    type: string,
    lastModified?: string | null,
    lastModifiedDate?: string | null,
    compressedWidth?: number | null,
    objectCompressedURL?: string | null,
    thumbnailWidth?: number | null,
    objectThumbnailURL?: string | null,
    targetTable: string,
    active: ActiveType,
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
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    count?:  {
      __typename: "Count",
      id: string,
      count: number,
      createdAt: string,
      updatedAt: string,
      owner: string,
      countArticleId?: string | null,
      countCommentId?: string | null,
    } | null,
    active: ActiveType,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    articleCountId?: string | null,
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
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    count?:  {
      __typename: "Count",
      id: string,
      count: number,
      createdAt: string,
      updatedAt: string,
      owner: string,
      countArticleId?: string | null,
      countCommentId?: string | null,
    } | null,
    active: ActiveType,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    articleCountId?: string | null,
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
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    count?:  {
      __typename: "Count",
      id: string,
      count: number,
      createdAt: string,
      updatedAt: string,
      owner: string,
      countArticleId?: string | null,
      countCommentId?: string | null,
    } | null,
    active: ActiveType,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    articleCountId?: string | null,
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
    articleCommentsId?: string | null,
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
      articleCountId?: string | null,
    } | null,
    count?:  {
      __typename: "Count",
      id: string,
      count: number,
      createdAt: string,
      updatedAt: string,
      owner: string,
      countArticleId?: string | null,
      countCommentId?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    commentCountId?: string | null,
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
    articleCommentsId?: string | null,
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
      articleCountId?: string | null,
    } | null,
    count?:  {
      __typename: "Count",
      id: string,
      count: number,
      createdAt: string,
      updatedAt: string,
      owner: string,
      countArticleId?: string | null,
      countCommentId?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    commentCountId?: string | null,
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
    articleCommentsId?: string | null,
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
      articleCountId?: string | null,
    } | null,
    count?:  {
      __typename: "Count",
      id: string,
      count: number,
      createdAt: string,
      updatedAt: string,
      owner: string,
      countArticleId?: string | null,
      countCommentId?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    commentCountId?: string | null,
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
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
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
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
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
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
  } | null,
};

export type CreateCountMutationVariables = {
  input: CreateCountInput,
  condition?: ModelCountConditionInput | null,
};

export type CreateCountMutation = {
  createCount?:  {
    __typename: "Count",
    id: string,
    count: number,
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
      articleCountId?: string | null,
    } | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      content: string,
      isDeleted: boolean,
      articleCommentsId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
      commentCountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    countArticleId?: string | null,
    countCommentId?: string | null,
  } | null,
};

export type UpdateCountMutationVariables = {
  input: UpdateCountInput,
  condition?: ModelCountConditionInput | null,
};

export type UpdateCountMutation = {
  updateCount?:  {
    __typename: "Count",
    id: string,
    count: number,
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
      articleCountId?: string | null,
    } | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      content: string,
      isDeleted: boolean,
      articleCommentsId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
      commentCountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    countArticleId?: string | null,
    countCommentId?: string | null,
  } | null,
};

export type DeleteCountMutationVariables = {
  input: DeleteCountInput,
  condition?: ModelCountConditionInput | null,
};

export type DeleteCountMutation = {
  deleteCount?:  {
    __typename: "Count",
    id: string,
    count: number,
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
      articleCountId?: string | null,
    } | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      content: string,
      isDeleted: boolean,
      articleCommentsId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
      commentCountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    countArticleId?: string | null,
    countCommentId?: string | null,
  } | null,
};

export type CreateLikeMutationVariables = {
  input: CreateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type CreateLikeMutation = {
  createLike?:  {
    __typename: "Like",
    id: string,
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
      articleCountId?: string | null,
    } | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      content: string,
      isDeleted: boolean,
      articleCommentsId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
      commentCountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    articleLikesId?: string | null,
    commentLikesId?: string | null,
  } | null,
};

export type UpdateLikeMutationVariables = {
  input: UpdateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type UpdateLikeMutation = {
  updateLike?:  {
    __typename: "Like",
    id: string,
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
      articleCountId?: string | null,
    } | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      content: string,
      isDeleted: boolean,
      articleCommentsId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
      commentCountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    articleLikesId?: string | null,
    commentLikesId?: string | null,
  } | null,
};

export type DeleteLikeMutationVariables = {
  input: DeleteLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type DeleteLikeMutation = {
  deleteLike?:  {
    __typename: "Like",
    id: string,
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
      articleCountId?: string | null,
    } | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      content: string,
      isDeleted: boolean,
      articleCommentsId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
      commentCountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    articleLikesId?: string | null,
    commentLikesId?: string | null,
  } | null,
};

export type CreateResearchDevelopmentTeamMutationVariables = {
  input: CreateResearchDevelopmentTeamInput,
  condition?: ModelResearchDevelopmentTeamConditionInput | null,
};

export type CreateResearchDevelopmentTeamMutation = {
  createResearchDevelopmentTeam?:  {
    __typename: "ResearchDevelopmentTeam",
    id: string,
    name?: string | null,
    title?: string | null,
    subTitle?: string | null,
    content?: string | null,
    imgURL?: string | null,
    email?: string | null,
    linkedIn?: string | null,
    github?: string | null,
    website?: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user?:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
  } | null,
};

export type UpdateResearchDevelopmentTeamMutationVariables = {
  input: UpdateResearchDevelopmentTeamInput,
  condition?: ModelResearchDevelopmentTeamConditionInput | null,
};

export type UpdateResearchDevelopmentTeamMutation = {
  updateResearchDevelopmentTeam?:  {
    __typename: "ResearchDevelopmentTeam",
    id: string,
    name?: string | null,
    title?: string | null,
    subTitle?: string | null,
    content?: string | null,
    imgURL?: string | null,
    email?: string | null,
    linkedIn?: string | null,
    github?: string | null,
    website?: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user?:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
  } | null,
};

export type DeleteResearchDevelopmentTeamMutationVariables = {
  input: DeleteResearchDevelopmentTeamInput,
  condition?: ModelResearchDevelopmentTeamConditionInput | null,
};

export type DeleteResearchDevelopmentTeamMutation = {
  deleteResearchDevelopmentTeam?:  {
    __typename: "ResearchDevelopmentTeam",
    id: string,
    name?: string | null,
    title?: string | null,
    subTitle?: string | null,
    content?: string | null,
    imgURL?: string | null,
    email?: string | null,
    linkedIn?: string | null,
    github?: string | null,
    website?: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user?:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
  } | null,
};

export type CreateUwcssaDepartmentMutationVariables = {
  input: CreateUwcssaDepartmentInput,
  condition?: ModelUwcssaDepartmentConditionInput | null,
};

export type CreateUwcssaDepartmentMutation = {
  createUwcssaDepartment?:  {
    __typename: "UwcssaDepartment",
    id: string,
    introduction?: string | null,
    email?: string | null,
    leader?: string | null,
    currentLeader?:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
    uwcssaMembers?:  {
      __typename: "ModelUwcssaMemberConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
  } | null,
};

export type UpdateUwcssaDepartmentMutationVariables = {
  input: UpdateUwcssaDepartmentInput,
  condition?: ModelUwcssaDepartmentConditionInput | null,
};

export type UpdateUwcssaDepartmentMutation = {
  updateUwcssaDepartment?:  {
    __typename: "UwcssaDepartment",
    id: string,
    introduction?: string | null,
    email?: string | null,
    leader?: string | null,
    currentLeader?:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
    uwcssaMembers?:  {
      __typename: "ModelUwcssaMemberConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
  } | null,
};

export type DeleteUwcssaDepartmentMutationVariables = {
  input: DeleteUwcssaDepartmentInput,
  condition?: ModelUwcssaDepartmentConditionInput | null,
};

export type DeleteUwcssaDepartmentMutation = {
  deleteUwcssaDepartment?:  {
    __typename: "UwcssaDepartment",
    id: string,
    introduction?: string | null,
    email?: string | null,
    leader?: string | null,
    currentLeader?:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
    uwcssaMembers?:  {
      __typename: "ModelUwcssaMemberConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
  } | null,
};

export type CreateUwcssaMemberMutationVariables = {
  input: CreateUwcssaMemberInput,
  condition?: ModelUwcssaMemberConditionInput | null,
};

export type CreateUwcssaMemberMutation = {
  createUwcssaMember?:  {
    __typename: "UwcssaMember",
    id: string,
    name?: string | null,
    title?: string | null,
    subTitle?: string | null,
    content?: string | null,
    imgURL?: string | null,
    email?: string | null,
    department?:  {
      __typename: "UwcssaDepartment",
      id: string,
      introduction?: string | null,
      email?: string | null,
      leader?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
    linkedIn?: string | null,
    website?: string | null,
    github?: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user?:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
    uwcssaDepartmentUwcssaMembersId?: string | null,
  } | null,
};

export type UpdateUwcssaMemberMutationVariables = {
  input: UpdateUwcssaMemberInput,
  condition?: ModelUwcssaMemberConditionInput | null,
};

export type UpdateUwcssaMemberMutation = {
  updateUwcssaMember?:  {
    __typename: "UwcssaMember",
    id: string,
    name?: string | null,
    title?: string | null,
    subTitle?: string | null,
    content?: string | null,
    imgURL?: string | null,
    email?: string | null,
    department?:  {
      __typename: "UwcssaDepartment",
      id: string,
      introduction?: string | null,
      email?: string | null,
      leader?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
    linkedIn?: string | null,
    website?: string | null,
    github?: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user?:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
    uwcssaDepartmentUwcssaMembersId?: string | null,
  } | null,
};

export type DeleteUwcssaMemberMutationVariables = {
  input: DeleteUwcssaMemberInput,
  condition?: ModelUwcssaMemberConditionInput | null,
};

export type DeleteUwcssaMemberMutation = {
  deleteUwcssaMember?:  {
    __typename: "UwcssaMember",
    id: string,
    name?: string | null,
    title?: string | null,
    subTitle?: string | null,
    content?: string | null,
    imgURL?: string | null,
    email?: string | null,
    department?:  {
      __typename: "UwcssaDepartment",
      id: string,
      introduction?: string | null,
      email?: string | null,
      leader?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
    linkedIn?: string | null,
    website?: string | null,
    github?: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user?:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
    uwcssaDepartmentUwcssaMembersId?: string | null,
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
      articleCountId?: string | null,
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
      articleCountId?: string | null,
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
      articleCountId?: string | null,
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
    email?: string | null,
    fullName?: string | null,
    contactEmail?: string | null,
    title?: string | null,
    about?: string | null,
    avatarURL?: string | null,
    website?: string | null,
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
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
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
    name: string,
    size: number,
    type: string,
    lastModified?: string | null,
    lastModifiedDate?: string | null,
    compressedWidth?: number | null,
    objectCompressedURL?: string | null,
    thumbnailWidth?: number | null,
    objectThumbnailURL?: string | null,
    targetTable: string,
    active: ActiveType,
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
      name: string,
      size: number,
      type: string,
      lastModified?: string | null,
      lastModifiedDate?: string | null,
      compressedWidth?: number | null,
      objectCompressedURL?: string | null,
      thumbnailWidth?: number | null,
      objectThumbnailURL?: string | null,
      targetTable: string,
      active: ActiveType,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserImageSortByCreatedAtQueryVariables = {
  active: ActiveType,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserImageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserImageSortByCreatedAtQuery = {
  userImageSortByCreatedAt?:  {
    __typename: "ModelUserImageConnection",
    items:  Array< {
      __typename: "UserImage",
      id: string,
      objectURL: string,
      key: string,
      name: string,
      size: number,
      type: string,
      lastModified?: string | null,
      lastModifiedDate?: string | null,
      compressedWidth?: number | null,
      objectCompressedURL?: string | null,
      thumbnailWidth?: number | null,
      objectThumbnailURL?: string | null,
      targetTable: string,
      active: ActiveType,
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
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    count?:  {
      __typename: "Count",
      id: string,
      count: number,
      createdAt: string,
      updatedAt: string,
      owner: string,
      countArticleId?: string | null,
      countCommentId?: string | null,
    } | null,
    active: ActiveType,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    articleCountId?: string | null,
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
      articleCountId?: string | null,
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
      articleCountId?: string | null,
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
    articleCommentsId?: string | null,
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
      articleCountId?: string | null,
    } | null,
    count?:  {
      __typename: "Count",
      id: string,
      count: number,
      createdAt: string,
      updatedAt: string,
      owner: string,
      countArticleId?: string | null,
      countCommentId?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    },
    commentCountId?: string | null,
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
      articleCommentsId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
      commentCountId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentSortByArticleCommentsIdCreatedAtQueryVariables = {
  articleCommentsId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentSortByArticleCommentsIdCreatedAtQuery = {
  commentSortByArticleCommentsIdCreatedAt?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      isDeleted: boolean,
      articleCommentsId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
      commentCountId?: string | null,
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
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
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

export type GetCountQueryVariables = {
  id: string,
};

export type GetCountQuery = {
  getCount?:  {
    __typename: "Count",
    id: string,
    count: number,
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
      articleCountId?: string | null,
    } | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      content: string,
      isDeleted: boolean,
      articleCommentsId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
      commentCountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    countArticleId?: string | null,
    countCommentId?: string | null,
  } | null,
};

export type ListCountsQueryVariables = {
  filter?: ModelCountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCountsQuery = {
  listCounts?:  {
    __typename: "ModelCountConnection",
    items:  Array< {
      __typename: "Count",
      id: string,
      count: number,
      createdAt: string,
      updatedAt: string,
      owner: string,
      countArticleId?: string | null,
      countCommentId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLikeQueryVariables = {
  id: string,
};

export type GetLikeQuery = {
  getLike?:  {
    __typename: "Like",
    id: string,
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
      articleCountId?: string | null,
    } | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      content: string,
      isDeleted: boolean,
      articleCommentsId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
      commentCountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    articleLikesId?: string | null,
    commentLikesId?: string | null,
  } | null,
};

export type ListLikesQueryVariables = {
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikesQuery = {
  listLikes?:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner: string,
      articleLikesId?: string | null,
      commentLikesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetResearchDevelopmentTeamQueryVariables = {
  id: string,
};

export type GetResearchDevelopmentTeamQuery = {
  getResearchDevelopmentTeam?:  {
    __typename: "ResearchDevelopmentTeam",
    id: string,
    name?: string | null,
    title?: string | null,
    subTitle?: string | null,
    content?: string | null,
    imgURL?: string | null,
    email?: string | null,
    linkedIn?: string | null,
    github?: string | null,
    website?: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user?:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
  } | null,
};

export type ListResearchDevelopmentTeamsQueryVariables = {
  filter?: ModelResearchDevelopmentTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResearchDevelopmentTeamsQuery = {
  listResearchDevelopmentTeams?:  {
    __typename: "ModelResearchDevelopmentTeamConnection",
    items:  Array< {
      __typename: "ResearchDevelopmentTeam",
      id: string,
      name?: string | null,
      title?: string | null,
      subTitle?: string | null,
      content?: string | null,
      imgURL?: string | null,
      email?: string | null,
      linkedIn?: string | null,
      github?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUwcssaDepartmentQueryVariables = {
  id: string,
};

export type GetUwcssaDepartmentQuery = {
  getUwcssaDepartment?:  {
    __typename: "UwcssaDepartment",
    id: string,
    introduction?: string | null,
    email?: string | null,
    leader?: string | null,
    currentLeader?:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
    uwcssaMembers?:  {
      __typename: "ModelUwcssaMemberConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
  } | null,
};

export type ListUwcssaDepartmentsQueryVariables = {
  filter?: ModelUwcssaDepartmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUwcssaDepartmentsQuery = {
  listUwcssaDepartments?:  {
    __typename: "ModelUwcssaDepartmentConnection",
    items:  Array< {
      __typename: "UwcssaDepartment",
      id: string,
      introduction?: string | null,
      email?: string | null,
      leader?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUwcssaMemberQueryVariables = {
  id: string,
};

export type GetUwcssaMemberQuery = {
  getUwcssaMember?:  {
    __typename: "UwcssaMember",
    id: string,
    name?: string | null,
    title?: string | null,
    subTitle?: string | null,
    content?: string | null,
    imgURL?: string | null,
    email?: string | null,
    department?:  {
      __typename: "UwcssaDepartment",
      id: string,
      introduction?: string | null,
      email?: string | null,
      leader?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
    linkedIn?: string | null,
    website?: string | null,
    github?: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string,
    user?:  {
      __typename: "UserProfile",
      id: string,
      name: string,
      email?: string | null,
      fullName?: string | null,
      contactEmail?: string | null,
      title?: string | null,
      about?: string | null,
      avatarURL?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
    } | null,
    uwcssaDepartmentUwcssaMembersId?: string | null,
  } | null,
};

export type ListUwcssaMembersQueryVariables = {
  filter?: ModelUwcssaMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUwcssaMembersQuery = {
  listUwcssaMembers?:  {
    __typename: "ModelUwcssaMemberConnection",
    items:  Array< {
      __typename: "UwcssaMember",
      id: string,
      name?: string | null,
      title?: string | null,
      subTitle?: string | null,
      content?: string | null,
      imgURL?: string | null,
      email?: string | null,
      linkedIn?: string | null,
      website?: string | null,
      github?: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string,
      uwcssaDepartmentUwcssaMembersId?: string | null,
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
      articleCountId?: string | null,
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
      articleCountId?: string | null,
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
      articleCountId?: string | null,
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
      articleCountId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
