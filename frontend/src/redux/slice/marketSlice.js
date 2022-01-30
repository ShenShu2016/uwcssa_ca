import {
  createAddress,
  createMarketItem,
  updateAddress,
  updateMarketItem,
} from "../../graphql/mutations";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {
  listAddresses,
  searchMarketItems,
} from "../../components/Market/marketQueries";

import API from "@aws-amplify/api";
import { getMarketItem } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";

const marketAdapter = createEntityAdapter({
  selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = marketAdapter.getInitialState({
  filter: {},
  tagsOccurrence: [],
  clickedTags: [],
  fetchStatus: true,
  nextToken: null,
  currentFetchType: null,
  currentFilterType: null,
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
  addressFilteredMarketItemStatus: "idle",
  addressFilteredMarketItemError: null,
  getAllTagsTermsStatus: "idle",
  getAllTagsTermsError: null,
});

export const fetchMarketItems = createAsyncThunk(
  "market/fetchMarketItems",
  async ({
    query,
    marketType = "all",
    nextToken = null,
    filter = { active: { eq: true } },
  }) => {
    try {
      const filterList = { ...filter };
      const variables = {
        limit: 50,
        sortKey: "SortKey",
        sortDirection: "DESC",
        filter: filterList,
      };
      nextToken !== null && Object.assign(variables, { nextToken: nextToken });
      marketType !== "all" &&
        Object.assign(variables["filter"], { marketType: { eq: marketType } });
      console.log(variables);
      const MarketItemsData = await API.graphql({
        query: query,
        variables: variables,
        authMode: "AWS_IAM",
      });
      return [
        MarketItemsData.data.marketItemSortBySortKey,
        marketType,
        nextToken === null,
      ];
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
    console.log("what?", response);
    if (response.data.getMarketItem === null) {
      return { id: id, description: "not-found" };
    }
    return response.data.getMarketItem;
  }
);

export const addressFilteredMarketItem = createAsyncThunk(
  "market/addressFilteredMarketItem",
  async ({ filter, marketType = "all", nextToken = null }) => {
    try {
      const variables = { filter: filter, limit: 50 };
      nextToken !== null && Object.assign(variables, { nextToken: nextToken });
      console.log(variables);
      const response = await API.graphql({
        query: listAddresses,
        variables: variables,
        authMode: "AWS_IAM",
      });
      console.log("res:", response);
      return [
        response.data.listAddresses.items,
        marketType,
        response.data.listAddresses.nextToken,
      ];
    } catch (error) {
      console.log(error);
    }
  }
);

export const postMarketItem = createAsyncThunk(
  "market/postMarketItem",
  async (createMarketItemInput) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createMarketItem, { input: createMarketItemInput })
      );
      console.log("res:", response);
      return response.data.createMarketItem;
    } catch (error) {
      console.log("error:", error);
    }
  }
);

export const postAddress = createAsyncThunk(
  "market/postAddress",
  async (createAddressInput) => {
    const response = await API.graphql(
      graphqlOperation(createAddress, { input: createAddressInput })
    );
    return response.data.createAddress;
  }
);

export const updateAddressDetail = createAsyncThunk(
  "market/updateAddressDetail",
  async (updateAddressDetail) => {
    const response = await API.graphql(
      graphqlOperation(updateAddress, { input: updateAddressDetail })
    );
    return response.data.updateAddress;
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

export const getAllTagsTerms = createAsyncThunk(
  "market/getAllTagsTerms",
  async ({ filter = { active: { eq: true } } }) => {
    try {
      const response = await API.graphql({
        query: searchMarketItems,

        variables: {
          aggregates: { field: "tags", name: "tagsTerms", type: "terms" },
          filter: filter,
        },
        authMode: "AWS_IAM",
      });
      return response.data.searchMarketItems.aggregateItems[0];
    } catch (error) {
      console.log(error);
    }
  }
);

const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    filterUpdated(state, action) {
      // action.payload:　e.g. filter : {lat: -56, lng: 25, price: [0,200]}
      const { marketType, filter } = action.payload;
      const currentType = state.currentFilterType;
      const currentFilter = state.filter;
      state.filter =
        currentType === marketType || currentType === null
          ? Object.assign(currentFilter, filter)
          : filter;
      state.currentFilterType = marketType;
      state.fetchStatus = true;
    },
    filterClear(state, action) {
      state.filter = {};
      state.fetchStatus = true;
    },
    updateClickedTags(state, action) {
      const tag = action.payload;
      const currentTags = state.clickedTags;
      state.clickedTags = currentTags.includes(tag)
        ? currentTags.filter((t) => t !== tag)
        : currentTags.concat([tag]);
    },
  },
  extraReducers(builder) {
    builder
      // Cases for status of fetchMarketItems (pending, fulfilled, and rejected)
      .addCase(fetchMarketItems.pending, (state, action) => {
        state.fetchMarketItemsStatus = "loading";
        state.fetchStatus = false;
      })
      .addCase(fetchMarketItems.fulfilled, (state, action) => {
        state.fetchMarketItemsStatus = "succeeded";
        let tags = [];
        action.payload[0].items.map((item) =>
          item.tags.map((tag) => tags.push(tag))
        );
        const occurrences = tags.reduce(function (obj, item) {
          obj[item] = (obj[item] || 0) + 1;
          return obj;
        }, {});
        action.payload[2] && marketAdapter.removeAll(state);
        marketAdapter.upsertMany(state, action.payload[0].items);
        state.currentFetchType = action.payload[1];
        state.nextToken = action.payload[0].nextToken;
        state.tagsOccurrence = Object.fromEntries(
          Object.entries(occurrences).sort((a, b) => b[1] - a[1])
        );
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
        marketAdapter.upsertOne(state, action.payload);
        // state.updateMarketItemStatus = "idle";
      })
      .addCase(updateMarketItemDetail.rejected, (state, action) => {
        state.updateMarketItemDetailStatus = "failed";
        state.updateMarketItemDetailError = action.error.message;
      })
      // Cases for status of addressFilteredMarketItem (pending, fulfilled, and rejected)
      .addCase(addressFilteredMarketItem.pending, (state, action) => {
        state.addressFilteredMarketItemStatus = "loading";
        state.fetchStatus = false;
      })
      .addCase(addressFilteredMarketItem.fulfilled, (state, action) => {
        state.addressFilteredMarketItemStatus = "succeeded";
        marketAdapter.removeAll(state);
        state.currentFetchType = "address";
        let marketItems = action.payload[0];
        let marketType = action.payload[1];
        let marketItem = marketItems.map((item) => item.marketItem);
        marketItem =
          marketType !== "all"
            ? marketItem.filter((item) => item.marketType === marketType)
            : marketItem;
        console.log(action.payload[0]);
        state.nextToken = action.payload[2];
        marketAdapter.upsertMany(state, marketItem);
      })
      .addCase(addressFilteredMarketItem.rejected, (state, action) => {
        state.addressFilteredMarketItemStatus = "failed";
      })
      // Cases for status of getAllTagTerms (pending, fulfilled, and rejected)
      .addCase(getAllTagsTerms.pending, (state, action) => {
        state.getAllTagsTermsStatus = "loading";
      })
      .addCase(getAllTagsTerms.fulfilled, (state, action) => {
        state.getAllTagsTermsStatus = "succeeded";
        const originalOccurrence = action.payload.result.buckets;
        let result = {};
        originalOccurrence.map((item) => {
          let temp = {};
          temp[item["key"]] = item["doc_count"];
          return Object.assign(result, temp);
        });
        state.tagsOccurrence = result;
      })
      .addCase(getAllTagsTerms.rejected, (state, action) => {
        state.getAllTagsTermsStatus = "failed";
        state.getAllTagsTermsError = action.error.message;
      });
  },
});

export const { filterUpdated, filterClear, updateClickedTags } =
  marketSlice.actions;

export const {
  selectAll: selectAllMarketItems,
  selectById: selectMarketItemById,
  selectIds: selectMarketItemIds,
} = marketAdapter.getSelectors((state) => state.market);

export default marketSlice.reducer;
