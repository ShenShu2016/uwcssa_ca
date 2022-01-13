import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { createKanban, updateKanban } from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { getKanban } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { kanbanSortBySortKey } from "../../graphql/queries";

const kanbanAdapter = createEntityAdapter({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = kanbanAdapter.getInitialState({
  fetchKanbansStatus: "idle",
  fetchKanbansError: null,
  selectedKanbanStatus: "idle",
  selectedKanbanError: null,
  postKanbanStatus: "idle",
  postKanbanError: null,
  postKanbanImgStatus: "idle",
  postKanbanImgError: null,
  updateKanbanDetailStatus: "idle",
  updateKanbanDetailError: null,
});

export const fetchKanbans = createAsyncThunk(
  "kanban/fetchKanbans",
  async () => {
    try {
      const KanbansData = await API.graphql({
        query: kanbanSortBySortKey,
        variables: {
          sortKey: "SortKey",
          sortDirection: "DESC",
          filter: { active: { eq: true } },
        },
        authMode: "AWS_IAM",
      });
      return KanbansData.data.kanbanSortBySortKey.items;
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectedKanban = createAsyncThunk(
  "kanban/selectedKanban",
  async (id) => {
    const response = await API.graphql({
      query: getKanban,
      variables: { id: id },
      authMode: "AWS_IAM",
    });
    // console.log("what?", response);
    if (response.data.getKanban === null) {
      return { id: id, description: "not-found" };
    }
    return response.data.getKanban;
  }
);

export const postKanban = createAsyncThunk(
  "kanban/postKanban",
  async ({ createKanbanInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createKanban, { input: createKanbanInput })
      );
      return response.data.createKanban;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateKanbanDetail = createAsyncThunk(
  "kanban/updateKanbanDetail",
  async ({ updateKanbanInput }) => {
    try {
      console.log("updateKanbanDetail", updateKanbanInput);
      const response = await API.graphql(
        graphqlOperation(updateKanban, { input: updateKanbanInput })
      );
      return response.data.updateKanban;
    } catch (error) {
      console.log(error);
    }
  }
);

const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchKanbans (pending, fulfilled, and rejected)
      .addCase(fetchKanbans.pending, (state, action) => {
        state.fetchKanbansStatus = "loading";
      })
      .addCase(fetchKanbans.fulfilled, (state, action) => {
        state.fetchKanbansStatus = "succeeded";
        kanbanAdapter.removeAll(state);
        kanbanAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchKanbans.rejected, (state, action) => {
        state.fetchKanbansStatus = "failed";
        state.fetchKanbansError = action.error.message;
      })
      // Cases for status of selectedKanban (pending, fulfilled, and rejected)
      .addCase(selectedKanban.pending, (state, action) => {
        state.selectedKanbanStatus = "loading";
      })
      .addCase(selectedKanban.fulfilled, (state, action) => {
        state.selectedKanbanStatus = "succeeded";
        kanbanAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedKanban.rejected, (state, action) => {
        state.selectedKanbanStatus = "failed";
        state.selectedKanbanError = action.error.message;
      })
      // Cases for status of postKanban (pending, fulfilled, and rejected)
      .addCase(postKanban.pending, (state, action) => {
        state.postKanbanStatus = "loading";
      })
      .addCase(postKanban.fulfilled, (state, action) => {
        state.postKanbanStatus = "succeeded";
        kanbanAdapter.addOne(state, action.payload);
      })
      .addCase(postKanban.rejected, (state, action) => {
        state.postKanbanStatus = "failed";
        state.postKanbanError = action.error.message;
      })
      // Cases for status of updateKanban (pending, fulfilled, and rejected)
      .addCase(updateKanbanDetail.pending, (state, action) => {
        state.updateKanbanDetailStatus = "loading";
      })
      .addCase(updateKanbanDetail.fulfilled, (state, action) => {
        state.updateKanbanDetailStatus = "succeeded";
        // state.kanbans.unshift(action.payload.data.createKanban);
        kanbanAdapter.upsertOne(state, action.payload);
        // state.updateKanbanStatus = "idle";
      })
      .addCase(updateKanbanDetail.rejected, (state, action) => {
        state.updateKanbanDetailStatus = "failed";
        state.updateKanbanDetailError = action.error.message;
      });
  },
});

export const { removeSelectedKanban } = kanbanSlice.actions;

export const {
  selectAll: selectAllKanbans,
  selectById: selectKanbanById,
  selectIds: selectKanbanIds,
} = kanbanAdapter.getSelectors((state) => state.kanban);

export const selectKanbansByDepartmentIdStatus = ({
  departmentID,
  kanbanStatus,
}) =>
  createSelector(selectAllKanbans, (kanban) => {
    return kanban.filter(
      (x) =>
        x.departmentID === departmentID &&
        x.kanbanStatus === kanbanStatus &&
        x.active === true //这个之后要改
    );
  });

export const getKanbansByDepartmentLength = (departmentID) =>
  createSelector(selectAllKanbans, (kanban) => {
    return kanban.filter((x) => x.departmentID === departmentID).length;
  });

export default kanbanSlice.reducer;
