import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { createUser, updateUser } from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { getUser } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { userSortBySortKey } from "../CustomQuery/UserQueries";

const userAdapter = createEntityAdapter({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = userAdapter.getInitialState({
  fetchUsersStatus: "idle",
  fetchUsersError: null,
  selectedUserStatus: "idle",
  selectedUserError: null,
  postUserStatus: "idle",
  postUserError: null,
  postUserImgStatus: "idle",
  postUserImgError: null,
  updateUserDetailStatus: "idle",
  updateUserDetailError: null,
});

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  try {
    const usersData = await API.graphql({
      query: userSortBySortKey,
      variables: {
        sortKey: "SortKey",
        sortDirection: "DESC",
      },
      authMode: "AWS_IAM",
    });

    return usersData.data.userSortBySortKey.items;
  } catch (error) {
    console.log(error);
  }
});

export const selectedUser = createAsyncThunk(
  "user/selectedUser",
  async (id) => {
    const response = await API.graphql({
      query: getUser,
      variables: { id: id },
      authMode: "AWS_IAM",
    });
    if (response.data.getUser === null) {
      return { id: id, description: "not-found" };
    }
    return response.data.getUser;
  }
);

export const postUser = createAsyncThunk(
  "user/postUser",
  async ({ createUserInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createUser, { input: createUserInput })
      );
      return response.data.createUser;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateUserDetail = createAsyncThunk(
  "user/updateUserDetail",
  async (updateUserDetail) => {
    const response = await API.graphql(
      graphqlOperation(updateUser, { input: updateUserDetail })
    );
    return response.data.updateUser;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchUsers (pending, fulfilled, and rejected)
      .addCase(fetchUsers.pending, (state, action) => {
        state.fetchUsersStatus = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.fetchUsersStatus = "succeeded";
        userAdapter.removeAll(state);
        userAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.fetchUsersStatus = "failed";
        state.fetchUsersError = action.error.message;
      })
      // Cases for status of selectedUser (pending, fulfilled, and rejected)
      .addCase(selectedUser.pending, (state, action) => {
        state.selectedUserStatus = "loading";
      })
      .addCase(selectedUser.fulfilled, (state, action) => {
        state.selectedUserStatus = "succeeded";
        userAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedUser.rejected, (state, action) => {
        state.selectedUserStatus = "failed";
        state.selectedUserError = action.error.message;
      })
      // Cases for status of postUser (pending, fulfilled, and rejected)
      .addCase(postUser.pending, (state, action) => {
        state.postUserStatus = "loading";
      })
      .addCase(postUser.fulfilled, (state, action) => {
        state.postUserStatus = "succeeded";
        // state.users.unshift(action.payload.data.createUser);
        userAdapter.addOne(state, action.payload);
        // state.postUserStatus = "idle";
      })
      .addCase(postUser.rejected, (state, action) => {
        state.postUserStatus = "failed";
        state.postUserError = action.error.message;
      })
      // Cases for status of updateUser (pending, fulfilled, and rejected)
      .addCase(updateUserDetail.pending, (state, action) => {
        state.updateUserDetailStatus = "loading";
      })
      .addCase(updateUserDetail.fulfilled, (state, action) => {
        state.updateUserDetailStatus = "succeeded";
        // state.users.unshift(action.payload.data.createUser);
        userAdapter.upsertOne(state, action.payload);
        // state.updateUserStatus = "idle";
      })
      .addCase(updateUserDetail.rejected, (state, action) => {
        state.updateUserDetailStatus = "failed";
        state.updateUserDetailError = action.error.message;
      });
  },
});

export const { removeSelectedUser } = userSlice.actions;

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = userAdapter.getSelectors((state) => state.user);

export default userSlice.reducer;
