import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import API from "@aws-amplify/api";
import { createMarketItem } from "../../graphql/mutations";
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
});

export const fetchMarketItems = createAsyncThunk(
  "market/fetchMarketItems",
  async (query) => {
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
    return response.data.getMarketItem;
  }
);

export const postMarketItem = createAsyncThunk(
  "market/postMarketItem",
  async (createMarketItemInput) => {
    const response = await API.graphql(
      graphqlOperation(createMarketItem, { input: createMarketItemInput })
    );
    return response;
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
