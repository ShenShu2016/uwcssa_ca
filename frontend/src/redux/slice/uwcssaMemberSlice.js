import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import {
  createUwcssaMember,
  updateUwcssaMember,
} from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { listUwcssaMembers } from "../../graphql/queries";

const uwcssaMemberAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.departmentID.localeCompare(b.departmentID),
});
const initialState = uwcssaMemberAdapter.getInitialState({
  fetchUwcssaMembersStatus: "idle",
  fetchUwcssaMembersError: null,
  postUwcssaMemberStatus: "idle",
  postUwcssaMemberError: null,
  updateUwcssaMemberDetailStatus: "idle",
  updateUwcssaMemberDetailError: null,
});

export const fetchUwcssaMembers = createAsyncThunk(
  "uwcssaMember/fetchUwcssaMembers",
  async () => {
    const response = await API.graphql({
      query: listUwcssaMembers,
      authMode: "AWS_IAM",
    });
    return response.data.listUwcssaMembers.items;
  }
);

export const postUwcssaMember = createAsyncThunk(
  "uwcssaMember/postUwcssaMember",
  async ({ createUwcssaMemberInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createUwcssaMember, {
          input: createUwcssaMemberInput,
        })
      );
      return response.data.createUwcssaMember;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateUwcssaMemberDetail = createAsyncThunk(
  "uwcssaMember/updateUwcssaMemberDetail",
  async ({ updateUwcssaMemberInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(updateUwcssaMember, {
          input: updateUwcssaMemberInput,
        })
      );
      console.log(response.data.updateUwcssaMember);
      return response.data.updateUwcssaMember;
    } catch (error) {
      console.log(error);
    }
  }
);
const uwcssaMemberSlice = createSlice({
  name: "uwcssaMember",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchUwcssaMembers (pending, fulfilled, and rejected)
      .addCase(fetchUwcssaMembers.pending, (state, action) => {
        state.fetchUwcssaMembersStatus = "loading";
      })
      .addCase(fetchUwcssaMembers.fulfilled, (state, action) => {
        state.fetchUwcssaMembersStatus = "succeeded";
        uwcssaMemberAdapter.removeAll(state);
        uwcssaMemberAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchUwcssaMembers.rejected, (state, action) => {
        state.fetchUwcssaMembersStatus = "failed";
        state.fetchUwcssaMembersError = action.error.message;
      })
      .addCase(postUwcssaMember.pending, (state, action) => {
        state.postKanbanStatus = "loading";
      })
      .addCase(postUwcssaMember.fulfilled, (state, action) => {
        state.postUwcssaMemberStatus = "succeeded";
        uwcssaMemberAdapter.addOne(state, action.payload);
      })
      .addCase(postUwcssaMember.rejected, (state, action) => {
        state.postUwcssaMemberStatus = "failed";
        state.postUwcssaMemberError = action.error.message;
      })
      // Cases for status of updateMarketItem (pending, fulfilled, and rejected)
      .addCase(updateUwcssaMemberDetail.pending, (state, action) => {
        state.updateUwcssaMemberDetailStatus = "loading";
      })
      .addCase(updateUwcssaMemberDetail.fulfilled, (state, action) => {
        state.updateUwcssaMemberDetailStatus = "succeeded";
        uwcssaMemberAdapter.upsertOne(state, action.payload);
      })
      .addCase(updateUwcssaMemberDetail.rejected, (state, action) => {
        state.updateUwcssaMemberDetailStatus = "failed";
        state.updateUwcssaMemberDetailError = action.error.message;
      });
  },
});

export const {
  selectAll: selectAllUwcssaMembers,
  selectById: selectUwcssaMemberById,
  selectIds: selectUwcssaMemberIds,
} = uwcssaMemberAdapter.getSelectors((state) => state.uwcssaMember);

export const selectUwcssaMembersByDepartmentId = (departmentID) =>
  createSelector(selectAllUwcssaMembers, (uwcssaMember) => {
    return uwcssaMember
      .filter((x) => x.departmentID === departmentID)
      .sort((a, b) => b.leader - a.leader);
  });

export const selectUwcssaMembersByActive = createSelector(
  selectAllUwcssaMembers,
  (uwcssaMember) => {
    return uwcssaMember
      .filter((x) => x.active === true)
      .sort((a, b) => b.leader - a.leader);
  }
);
export default uwcssaMemberSlice.reducer;
