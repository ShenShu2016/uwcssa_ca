import { createMarketItem } from "../../graphql/mutations";
import {
  listMarketItems,
  listMarketTypes,
  listMarketItemCategories,
} from "../../graphql/queries";

import API from "@aws-amplify/api";
import { ActionTypes } from "../constants/marketItem-action-types";
import Storage from "@aws-amplify/storage";
import { getMarketItem } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { v4 as uuid } from "uuid";

export const setMarketItems = () => async (dispatch) => {
  try {
    console.log("我tm开始了");
    const MarketItemsData = await API.graphql({
      query: listMarketItems,
      authMode: "AWS_IAM",
    });
    dispatch({
      type: ActionTypes.SET_MARKETITEMS,
      payload: MarketItemsData.data.listMarketItems.items,
    });
    console.log(
      "MarketItemsData.data.listMarketItems.items",
      MarketItemsData.data.listMarketItems.items
    );
  } catch (error) {
    console.log("error on fetching MarketItem", error);
  }
};

export const selectedMarketItem = (marketItemId) => async (dispatch) => {
  try {
    const response = await API.graphql({
      query: getMarketItem,
      variables: { id: marketItemId },
      authMode: "AWS_IAM",
    });
    dispatch({
      type: ActionTypes.SELECTED_MARKETITEM,
      payload: response.data.getMarketItem,
    });
  } catch (error) {
    console.log("error on selecting MarketItem", error);
  }
};

export const removeSelectedMarketItem = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.REMOVE_SELECTED_MARKETITEM,
  });
};

// export const postMarketItemComment = (createMarketItemInput) => async (dispatch) => {
//   try {
//     const response = await API.graphql(
//       graphqlOperation(createMarketItemComment, { input: createMarketItemInput })
//     );

//     dispatch({
//       type: ActionTypes.ARTICLECOMMPOST_SUCCESS,
//       payload: response,
//     });
//     dispatch(selectedMarketItem(createMarketItemInput.articleCommentMarketItemId));
//   } catch (error) {
//     console.log("error on posting MarketItemComment", error);
//     dispatch({
//       type: ActionTypes.ARTICLECOMMPOST_FAIL,
//     });
//   }
// };

export const setMarketCategories = () => async (dispatch) => {
  try {
    const marketCategoryData = await API.graphql({
      query: listMarketItemCategories,
      authMode: "AWS_IAM",
    });
    console.log("marketCategoryData", marketCategoryData);
    dispatch({
      type: ActionTypes.SET_MARKETCATEGORIES,
      payload: marketCategoryData.data.listMarketItemCategories.items,
    });
  } catch (error) {
    console.log("error on fetching Topics", error);
  }
};

export const setMarketTypes = () => async (dispatch) => {
  try {
    const MarketTypesData = await API.graphql({
      query: listMarketTypes,
      authMode: "AWS_IAM",
    });
    console.log("MarketTypesData", MarketTypesData);
    dispatch({
      type: ActionTypes.SET_MARKETTYPES,
      payload: MarketTypesData.data.listMarketTypes.items,
    });
  } catch (error) {
    console.log("error on fetching listMarketType", error);
  }
};

export const postMarketItem = (createMarketItemInput) => async (dispatch) => {
  try {
    const response = await API.graphql(
      graphqlOperation(createMarketItem, { input: createMarketItemInput })
    );
    dispatch({
      type: ActionTypes.POST_MARKETITEMS_SUCCESS,
      payload: response,
    });
    return {
      result: true,
      response: response,
    };
  } catch (error) {
    dispatch({
      type: ActionTypes.POST_MARKETITEMS_FAIL,
      payload: error,
    });
    return {
      result: false,
      response: error,
    };
  }
};
export const postMarketItemImg = (imgData) => async (dispatch) => {
  try {
    const response = await Storage.put(
      `marketItem/${uuid()}${imgData.name}`,
      imgData,
      {
        contentType: "image/*",
      }
    );
    dispatch({
      type: ActionTypes.POST_MARKETITEMS_IMG_SUCCESS,
      payload: response,
    });
    return response;
  } catch (error) {
    dispatch({
      type: ActionTypes.POST_MARKETITEMS_IMG_FAIL,
      payload: error,
    });
    console.log(error);
  }
};
