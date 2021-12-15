import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { createMarketItem, updateMarketItem } from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { getMarketItem } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";

const marketAdapter = createEntityAdapter({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = marketAdapter.getInitialState({
  fetchMarketItemsStatus: "idle",
  fetchMarketItemsError: null,
  selectedMarketItemStatus: "idle",
  selectedMarketItemError: null,
  postMarketItemStatus: "idle",
  postMarketItemError: null,
  postMarketItemImgStatus: "idle",
  postMarketItemImgError: null,
  updateMarketItemDetailStatus: "idle",
  updateMarketItemDetailError: null,
});

export const fetchMarketItems = createAsyncThunk(
  "market/fetchMarketItems",
  async (query) => {
    try {
      const MarketItemsData = await API.graphql({
        query: query,
        variables: {
          sortKey: "SortKey",
          sortDirection: "DESC",
          filter: { active: { eq: true } },
        },
        authMode: "AWS_IAM",
      });

      return MarketItemsData.data.marketItemSortBySortKey.items;
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectedMarketItem = createAsyncThunk(
  "market/selectedMarketItem",
  async (id) => {
    const response = await API.graphql({
      query: getMarketItem,
      variables: { id: id },
      authMode: "AWS_IAM",
    });
    // console.log("what?", response);
    if (response.data.getMarketItem === null) {
      return { id: id, description: "not-found" };
    }
    return response.data.getMarketItem;
  }
);

export const postMarketItem = createAsyncThunk(
  "market/postMarketItem",
  async (createMarketItemInput) => {
    const response = await API.graphql(
      graphqlOperation(createMarketItem, { input: createMarketItemInput })
    );
    return response.data.createMarketItem;
  }
);

export const updateMarketItemDetail = createAsyncThunk(
  "market/updateMarketItemDetail",
  async (updateMarketItemDetail) => {
    const response = await API.graphql(
      graphqlOperation(updateMarketItem, { input: updateMarketItemDetail })
    );
    return response.data.updateMarketItem;
  }
);

const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    removeSelectedMarketItem(state, action) {
      state.selected.marketItem = {};
      console.log("remove selected market item successfully!");
    },
  },
  extraReducers(builder) {
    builder
      // Cases for status of fetchMarketItems (pending, fulfilled, and rejected)
      .addCase(fetchMarketItems.pending, (state, action) => {
        state.fetchMarketItemsStatus = "loading";
      })
      .addCase(fetchMarketItems.fulfilled, (state, action) => {
        state.fetchMarketItemsStatus = "succeeded";
        marketAdapter.removeAll(state);
        marketAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchMarketItems.rejected, (state, action) => {
        state.fetchMarketItemsStatus = "failed";
        state.fetchMarketItemsError = action.error.message;
      })
      // Cases for status of selectedMarketItem (pending, fulfilled, and rejected)
      .addCase(selectedMarketItem.pending, (state, action) => {
        state.selectedMarketItemStatus = "loading";
      })
      .addCase(selectedMarketItem.fulfilled, (state, action) => {
        state.selectedMarketItemStatus = "succeeded";
        marketAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedMarketItem.rejected, (state, action) => {
        state.selectedMarketItemStatus = "failed";
        state.selectedMarketItemError = action.error.message;
      })
      // Cases for status of postMarketItem (pending, fulfilled, and rejected)
      .addCase(postMarketItem.pending, (state, action) => {
        state.postMarketItemStatus = "loading";
      })
      .addCase(postMarketItem.fulfilled, (state, action) => {
        state.postMarketItemStatus = "succeeded";
        // state.marketItems.unshift(action.payload.data.createMarketItem);
        marketAdapter.addOne(state, action.payload);
        // state.postMarketItemStatus = "idle";
      })
      .addCase(postMarketItem.rejected, (state, action) => {
        state.postMarketItemStatus = "failed";
        state.postMarketItemError = action.error.message;
      })
      // Cases for status of updateMarketItem (pending, fulfilled, and rejected)
      .addCase(updateMarketItemDetail.pending, (state, action) => {
        state.updateMarketItemDetailStatus = "loading";
      })
      .addCase(updateMarketItemDetail.fulfilled, (state, action) => {
        state.updateMarketItemDetailStatus = "succeeded";
        // state.marketItems.unshift(action.payload.data.createMarketItem);
        marketAdapter.updateOne(state, action.payload);
        // state.updateMarketItemStatus = "idle";
      })
      .addCase(updateMarketItemDetail.rejected, (state, action) => {
        state.updateMarketItemDetailStatus = "failed";
        state.updateMarketItemDetailError = action.error.message;
      });
  },
});

export const { removeSelectedMarketItem } = marketSlice.actions;

export const {
  selectAll: selectAllMarketItems,
  selectById: selectMarketItemById,
  selectIds: selectMarketItemIds,
} = marketAdapter.getSelectors((state) => state.market);

export default marketSlice.reducer;
