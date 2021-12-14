import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {
  createMarketUserInfo,
  updateMarketUserInfo,
} from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { getMarketUserInfo } from "../../components/Market/marketQueries";
import { graphqlOperation } from "@aws-amplify/api-graphql";

const marketUserAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.userID.localeCompare(b.userID),
});

export const fetchMarketUserInfo = createAsyncThunk(
  "marketUser/fetchMarketUserInfo",
  async (id) => {
    const MarketUserInfoData = await API.graphql({
      query: getMarketUserInfo,
      variables: {
        id: id,
      },
      authMode: "AWS_IAM",
    });
    console.log(MarketUserInfoData);
    if (MarketUserInfoData.data.getMarketUserInfo === null) {
      return { id: null };
    } else {
      return MarketUserInfoData.data.getMarketUserInfo;
    }
  }
);

export const postMarketUserInfo = createAsyncThunk(
  "marketUser/postMarketUserInfo",
  async (marketUserInfoData) => {
    const response = await API.graphql(
      graphqlOperation(createMarketUserInfo, { input: marketUserInfoData })
    );
    return response.data.createMarketUserInfo;
  }
);

export const updateMarketUserInfoDetail = createAsyncThunk(
  "marketUser/updateMarketUserInfoDetail",
  async (updatedMarketUserInfo) => {
    const response = await API.graphql(
      graphqlOperation(updateMarketUserInfo, {
        input: updatedMarketUserInfo,
      })
    );
    console.log("what happened bob?", response);
    return response.data.updateMarketUserInfo;
  }
);

const initialState = marketUserAdapter.getInitialState({
  fetchMarketUserInfoStatus: "idle",
  fetchMarketUserInfoError: null,
  postMarketUserInfoStatus: "idle",
  postMarketUserInfoError: null,
  updateMarketUserInfoDetailStatus: "idle",
  updateMarketUserInfoDetailError: null,
});

const marketUserSlice = createSlice({
  name: "marketUser",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // add case for fetchMarketUserInfo
      .addCase(fetchMarketUserInfo.pending, (state, action) => {
        state.fetchMarketUserInfoStatus = "loading";
      })
      .addCase(fetchMarketUserInfo.fulfilled, (state, action) => {
        state.fetchMarketUserInfoStatus = "succeeded";
        marketUserAdapter.upsertOne(state, action.payload);
      })
      .addCase(fetchMarketUserInfo.rejected, (state, action) => {
        state.fetchMarketUserInfoStatus = "error";
        state.fetchMarketUserInfoError = action.error.message;
      })
      // add case for postMarketUserInfo
      .addCase(postMarketUserInfo.pending, (state, action) => {
        state.postMarketUserInfoStatus = "loading";
      })
      .addCase(postMarketUserInfo.fulfilled, (state, action) => {
        state.postMarketUserInfoStatus = "succeeded";
        marketUserAdapter.addOne(state, action.payload);
      })
      .addCase(postMarketUserInfo.rejected, (state, action) => {
        state.postMarketUserInfoStatus = "error";
        state.postMarketUserInfoError = action.error.message;
      })
      // add case for updateMarketUserInfoDetail
      .addCase(updateMarketUserInfoDetail.pending, (state, action) => {
        state.updateMarketUserInfoDetailStatus = "loading";
      })
      .addCase(updateMarketUserInfoDetail.fulfilled, (state, action) => {
        state.updateMarketUserInfoDetailStatus = "succeeded";
        marketUserAdapter.setOne(state, action.payload);
      })
      .addCase(updateMarketUserInfoDetail.rejected, (state, action) => {
        state.updateMarketUserInfoDetailStatus = "error";
        state.updateMarketUserInfoDetailError = action.error.message;
      });
  },
});
export const {
  selectAll: selectAllMarketUser,
  selectById: selectMarketUserById,
  selectIds: selectMarketUserIds,
} = marketUserAdapter.getSelectors((state) => state.marketUser);

export default marketUserSlice.reducer;
