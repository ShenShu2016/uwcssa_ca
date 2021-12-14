import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import API from "@aws-amplify/api";
import { createFoundingMember } from "../../graphql/mutations";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { listFoundingMembers } from "../../graphql/queries";

const fundingMemberAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});
const initialState = fundingMemberAdapter.getInitialState({
  fetchFoundingMembersStatus: "idle",
  fetchFoundingMembersError: null,
  postFoundingMemberStatus: "idle",
  postFoundingMemberError: null,
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
  async (createFoundingMemberInput) => {
    const response = await API.graphql(
      graphqlOperation(createFoundingMember, {
        input: createFoundingMemberInput,
      })
    );
    return response.data.createFoundingMember;
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
      });
  },
});

export const {
  selectAll: selectAllFoundingMembers,
  selectById: selectFoundingMemberById,
  selectIds: selectFoundingMemberIds,
} = fundingMemberAdapter.getSelectors((state) => state.foundingMember);

export default foundingMemberSlice.reducer;
