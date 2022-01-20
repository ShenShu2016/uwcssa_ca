import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { createSubComment, updateSubComment } from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { getSubComment } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";

// import { subCommentSortBySortKey } from "../../graphql/queries";

const subCommentAdapter = createEntityAdapter({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = subCommentAdapter.getInitialState({
  //   fetchSubCommentsStatus: "idle",
  //   fetchSubCommentsError: null,
  selectedSubCommentStatus: "idle",
  selectedSubCommentError: null,
  postSubCommentStatus: "idle",
  postSubCommentError: null,
  postSubCommentImgStatus: "idle",
  postSubCommentImgError: null,
  updateSubCommentDetailStatus: "idle",
  updateSubCommentDetailError: null,
});

// export const fetchSubComments = createAsyncThunk(
//   "subComment/fetchSubComments",
//   async () => {
//     try {
//       const SubCommentsData = await API.graphql({
//         query: subCommentSortBySortKey,
//         variables: {
//           sortKey: "SortKey",
//           sortDirection: "DESC",
//         },
//         authMode: "AWS_IAM",
//       });
//       return SubCommentsData.data.subCommentSortBySortKey.items;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

export const selectedSubComment = createAsyncThunk(
  "subComment/selectedSubComment",
  async (id) => {
    const response = await API.graphql({
      query: getSubComment,
      variables: { id: id },
      authMode: "AWS_IAM",
    });
    // console.log("what?", response);
    if (response.data.getSubComment === null) {
      return { id: id, description: "not-found" };
    }
    return response.data.getSubComment;
  }
);

export const postSubComment = createAsyncThunk(
  "subComment/postSubComment",
  async ({ createSubCommentInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createSubComment, { input: createSubCommentInput })
      );
      return response.data.createSubComment;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateSubCommentDetail = createAsyncThunk(
  "subComment/updateSubCommentDetail",
  async (updateSubCommentDetail) => {
    const response = await API.graphql(
      graphqlOperation(updateSubComment, { input: updateSubCommentDetail })
    );
    return response.data.updateSubComment;
  }
);

const subCommentSlice = createSlice({
  name: "subComment",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchSubComments (pending, fulfilled, and rejected)
      //   .addCase(fetchSubComments.pending, (state, action) => {
      //     state.fetchSubCommentsStatus = "loading";
      //   })
      //   .addCase(fetchSubComments.fulfilled, (state, action) => {
      //     state.fetchSubCommentsStatus = "succeeded";
      //     subCommentAdapter.removeAll(state);
      //     subCommentAdapter.upsertMany(state, action.payload);
      //   })
      //   .addCase(fetchSubComments.rejected, (state, action) => {
      //     state.fetchSubCommentsStatus = "failed";
      //     state.fetchSubCommentsError = action.error.message;
      //   })
      // Cases for status of selectedSubComment (pending, fulfilled, and rejected)
      .addCase(selectedSubComment.pending, (state, action) => {
        state.selectedSubCommentStatus = "loading";
      })
      .addCase(selectedSubComment.fulfilled, (state, action) => {
        state.selectedSubCommentStatus = "succeeded";
        subCommentAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedSubComment.rejected, (state, action) => {
        state.selectedSubCommentStatus = "failed";
        state.selectedSubCommentError = action.error.message;
      })
      // Cases for status of postSubComment (pending, fulfilled, and rejected)
      .addCase(postSubComment.pending, (state, action) => {
        state.postSubCommentStatus = "loading";
      })
      .addCase(postSubComment.fulfilled, (state, action) => {
        state.postSubCommentStatus = "succeeded";
        // state.subComments.unshift(action.payload.data.createSubComment);
        subCommentAdapter.addOne(state, action.payload);
        // state.postSubCommentStatus = "idle";
      })
      .addCase(postSubComment.rejected, (state, action) => {
        state.postSubCommentStatus = "failed";
        state.postSubCommentError = action.error.message;
      })
      // Cases for status of updateSubComment (pending, fulfilled, and rejected)
      .addCase(updateSubCommentDetail.pending, (state, action) => {
        state.updateSubCommentDetailStatus = "loading";
      })
      .addCase(updateSubCommentDetail.fulfilled, (state, action) => {
        state.updateSubCommentDetailStatus = "succeeded";
        // state.subComments.unshift(action.payload.data.createSubComment);
        subCommentAdapter.upsertOne(state, action.payload);
        // state.updateSubCommentStatus = "idle";
      })
      .addCase(updateSubCommentDetail.rejected, (state, action) => {
        state.updateSubCommentDetailStatus = "failed";
        state.updateSubCommentDetailError = action.error.message;
      });
  },
});

export const { removeSelectedSubComment } = subCommentSlice.actions;

export const {
  selectAll: selectAllSubComments,
  selectById: selectSubCommentById,
  selectIds: selectSubCommentIds,
} = subCommentAdapter.getSelectors((state) => state.subComment);

export default subCommentSlice.reducer;
