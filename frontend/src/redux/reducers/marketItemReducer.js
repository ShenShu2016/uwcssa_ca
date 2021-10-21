import { ActionTypes } from "../constants/marketItem-action-types";

const initialState = {
  marketItems: [],
  marketVehicles: [],
};

export const marketItemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MARKET_ITEMS:
      return { ...state, marketItems: payload };
    case ActionTypes.SET_MARKET_VEHICLE:
      return { ...state, marketVehicles: payload };
    default:
      return state;
  }
};

export const selectedMarketItemReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_MARKET_ITEM:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_MARKETITEM:
      return {};
    default:
      return state;
  }
};

export const postMarketItemReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.POST_MARKETITEMS_SUCCESS:
      return { ...state, ...payload };
    case ActionTypes.POST_MARKETITEMS_FAIL:
      return { ...state, ...payload };
    case ActionTypes.POST_MARKETITEMS_IMG_SUCCESS:
      return { ...state, ...payload };
    case ActionTypes.POST_MARKETITEMS_IMG_FAIL:
      return { ...state, ...payload };
    default:
      return state;
  }
};
