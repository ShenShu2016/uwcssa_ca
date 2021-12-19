import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {
  createFoundingMember,
  updateFoundingMember,
} from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { listFoundingMembers } from "../../graphql/queries";

const fundingMemberAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.createdAt.localeCompare(b.createdAt),
});
const initialState = fundingMemberAdapter.getInitialState({
  fetchFoundingMembersStatus: "idle",
  fetchFoundingMembersError: null,
  postFoundingMemberStatus: "idle",
  postFoundingMemberError: null,
  updateFoundingMemberDetailStatus: "idle",
  updateFoundingMemberDetailError: null,
});

export const fetchFoundingMembers = createAsyncThunk(
  "fundingMember/fetchFoundingMembers",
  async () => {
    const response = await API.graphql({
      query: listFoundingMembers,
      variables: {
        filter: { active: { eq: true } },
      },
      authMode: "AWS_IAM",
    });
    return response.data.listFoundingMembers.items;
  }
);

export const postFoundingMember = createAsyncThunk(
  "fundingMember/postFoundingMember",
  async ({ createFoundingMemberInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createFoundingMember, {
          input: createFoundingMemberInput,
        })
      );
      return response.data.createFoundingMember;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateFoundingMemberDetail = createAsyncThunk(
  "fundingMember/updateFoundingMemberDetail",
  async ({ updateFoundingMemberInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(updateFoundingMember, {
          input: updateFoundingMemberInput,
        })
      );
      return response.data.updateFoundingMember;
    } catch (error) {
      console.log(error);
    }
  }
);
const foundingMemberSlice = createSlice({
  name: "foundingMember",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchFoundingMembers (pending, fulfilled, and rejected)
      .addCase(fetchFoundingMembers.pending, (state, action) => {
        state.fetchFoundingMembersStatus = "loading";
      })
      .addCase(fetchFoundingMembers.fulfilled, (state, action) => {
        state.fetchFoundingMembersStatus = "succeeded";
        fundingMemberAdapter.removeAll(state);
        fundingMemberAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchFoundingMembers.rejected, (state, action) => {
        state.fetchFoundingMembersStatus = "failed";
        state.fetchFoundingMembersError = action.error.message;
      })
      // Cases for status of updateMarketItem (pending, fulfilled, and rejected)
      .addCase(updateFoundingMemberDetail.pending, (state, action) => {
        state.updateFoundingMemberDetailStatus = "loading";
      })
      .addCase(updateFoundingMemberDetail.fulfilled, (state, action) => {
        state.updateFoundingMemberDetailStatus = "succeeded";
        fundingMemberAdapter.upsertOne(state, action.payload);
      })
      .addCase(updateFoundingMemberDetail.rejected, (state, action) => {
        state.updateFoundingMemberDetailStatus = "failed";
        state.updateFoundingMemberDetailError = action.error.message;
      });
  },
});

export const {
  selectAll: selectAllFoundingMembers,
  selectById: selectFoundingMemberById,
  selectIds: selectFoundingMemberIds,
} = fundingMemberAdapter.getSelectors((state) => state.foundingMember);

export default foundingMemberSlice.reducer;
