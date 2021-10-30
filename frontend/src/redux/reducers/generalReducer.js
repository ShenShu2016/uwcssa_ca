import { ActionTypes } from "../constants/general-action-types";

const initialState = {
  userCounts: "",
  urlFrom: null,
  imageKey: [],
  imageKeys: [],
  likes: [],
};

export const generalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER_COUNTS:
      return { ...state, userCounts: payload };
    case ActionTypes.SET_URL_FROM:
      return { ...state, urlFrom: payload };
    case ActionTypes.REMOVE_URL_FROM:
      return { ...state, urlFrom: null };
    case ActionTypes.POST_IMAGE_SUCCESS:
      return { ...state, imageKey: [payload, ...state.imageKey] };
    case ActionTypes.POST_IMAGE_FAIL:
      return { ...state, imageKey: [payload, ...state.imageKey] };
    case ActionTypes.POST_IMAGES_SUCCESS:
      return { ...state, imageKeys: [payload, ...state.imageKeys] };
    case ActionTypes.POST_IMAGES_FAIL:
      return { ...state, imageKeys: [payload, ...state.imageKeys] };
    case ActionTypes.SET_LIKE:
      return { ...state, likes: [...state.likes, payload] };
    case ActionTypes.SET_DISLIKE:
      return { ...state, likes: [...state.likes, payload] };
    default:
      return state;
  }
};
