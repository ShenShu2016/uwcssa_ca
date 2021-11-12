// import { ActionTypes } from "../constants/marketItem-action-types";

// const initialState = {
//   marketItems: [],
//   marketVehicles: [],
//   marketRentals: [],
//   selected: {
//     marketItem: {},
//     marketVehicle: {},
//     marketRental: {},
//   },
//   mutation: {
//     marketItem: { postItem: {}, updateItem: {}, deleteItem: {} },
//     marketVehicle: { postVehicle: {}, updateVehicle: {}, deleteVehicle: {} },
//     marketRental: { postRental: {}, updateRental: {}, deleteRental: {} },
//   },
// };

// export const marketReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.SET_MARKET_ITEMS:
//       return { ...state, marketItems: payload };
//     case ActionTypes.SET_MARKET_VEHICLE:
//       return { ...state, marketVehicles: payload };
//     case ActionTypes.SET_MARKET_Rental:
//       return { ...state, marketRentals: payload };
//     case ActionTypes.SELECTED_MARKET_ITEM:
//       return {
//         ...state,
//         selected: {
//           ...state.selected,
//           marketItem: payload,
//         },
//       };
//     case ActionTypes.REMOVE_SELECTED_MARKETITEM:
//       return {
//         ...state,
//         selected: {
//           ...state.selected,
//           marketItem: {},
//         },
//       };
//     case ActionTypes.POST_MARKETITEMS_SUCCESS:
//     case ActionTypes.POST_MARKETITEMS_FAIL:
//       return {
//         ...state,
//         mutation: {
//           ...state.mutation,
//           marketItem: { ...state.mutation.marketItem, postItem: payload },
//         },
//       };
//     default:
//       return state;
//   }
// };
