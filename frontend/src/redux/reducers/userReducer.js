import { ActionTypes } from "../constants/user-action-types";

const initialState = {
  userCounts: [],
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER_COUNTS:
      return { ...state, userCounts: payload };
    default:
      return state;
  }
};

export const selectedUserReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_USER:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_USER:
      return {};
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
