import { ActionTypes } from "../constants/uwcssaJob-action-types";

const initialState = {
  uwcssaJobs: [],
  departments: [],
};

export const uwcssaJobReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_UWCSSAJOBS:
      return { ...state, uwcssaJobs: payload };
    case ActionTypes.SET_DEPARTMENTS:
      return { ...state, departments: payload };
    default:
      return state;
  }
};
