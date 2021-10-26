import { ActionTypes } from "../constants/user-action-types";

const initialStateUser = {
  username: "",
  email: "",
  owner: "",
  uWindsorEmail: "",
  firstName: "",
  lastName: "",
  intro: "",
  major: "",
  avatarImgPath: "",
  backGroundImgPath: "",
  linkedin: "",
  github: "",
  tags: [],
  userEducations: { items: [] },
  userExperiences: { items: [] },
};

export const selectedUserReducer = (
  state = initialStateUser,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_USER:
      return { ...state, ...payload };
    case ActionTypes.UPDATE_USER_INFO_SUCCESS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_USER:
      return { ...initialStateUser, ...payload };
    default:
      return state;
  }
};

export const postUserEducationReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.POST_USER_EDUCATION_SUCCESS:
      return { ...state, ...payload };
    case ActionTypes.POST_USER_EDUCATION_FAIL:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const putUserEducationReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.UPDATE_USER_EDUCATION_SUCCESS:
      return { ...state, ...payload };
    case ActionTypes.UPDATE_USER_EDUCATION__FAIL:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const postUserExperienceReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.POST_USER_EXPERIENCE_SUCCESS:
      return { ...state, ...payload };
    case ActionTypes.POST_USER_EXPERIENCE_FAIL:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const putUserExperienceReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.UPDATE_USER_EXPERIENCE_SUCCESS:
      return { ...state, ...payload };
    case ActionTypes.UPDATE_USER_EXPERIENCE__FAIL:
      return { ...state, ...payload };
    default:
      return state;
  }
};
