import { ActionTypes } from "../constants/general-action-types";

const initialState = {
  userCounts: "",
  urlFrom: null,
  imageKeys: [],
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
      return { ...state, imageKeys: [...state.imageKeys, payload] };
    case ActionTypes.POST_IMAGE_FAIL:
      return { ...state, imageKeys: [...state.imageKeys, payload] };
    default:
      return state;
  }
};
