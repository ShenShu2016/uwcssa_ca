import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { createComment, updateComment } from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { getComment } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";

// import { commentSortBySortKey } from "../../graphql/queries";

const commentAdapter = createEntityAdapter({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = commentAdapter.getInitialState({
  //   fetchCommentsStatus: "idle",
  //   fetchCommentsError: null,
  selectedCommentStatus: "idle",
  selectedCommentError: null,
  postCommentStatus: "idle",
  postCommentError: null,
  postCommentImgStatus: "idle",
  postCommentImgError: null,
  updateCommentDetailStatus: "idle",
  updateCommentDetailError: null,
});

// export const fetchComments = createAsyncThunk(
//   "comment/fetchComments",
//   async () => {
//     try {
//       const CommentsData = await API.graphql({
//         query: commentSortBySortKey,
//         variables: {
//           sortKey: "SortKey",
//           sortDirection: "DESC",
//         },
//         authMode: "AWS_IAM",
//       });
//       return CommentsData.data.commentSortBySortKey.items;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

export const selectedComment = createAsyncThunk(
  "comment/selectedComment",
  async (id) => {
    const response = await API.graphql({
      query: getComment,
      variables: { id: id },
      authMode: "AWS_IAM",
    });
    // console.log("what?", response);
    if (response.data.getComment === null) {
      return { id: id, description: "not-found" };
    }
    return response.data.getComment;
  }
);

export const postComment = createAsyncThunk(
  "comment/postComment",
  async ({ createCommentInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createComment, { input: createCommentInput })
      );
      return response.data.createComment;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateCommentDetail = createAsyncThunk(
  "comment/updateCommentDetail",
  async (updateCommentDetail) => {
    const response = await API.graphql(
      graphqlOperation(updateComment, { input: updateCommentDetail })
    );
    return response.data.updateComment;
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchComments (pending, fulfilled, and rejected)
      //   .addCase(fetchComments.pending, (state, action) => {
      //     state.fetchCommentsStatus = "loading";
      //   })
      //   .addCase(fetchComments.fulfilled, (state, action) => {
      //     state.fetchCommentsStatus = "succeeded";
      //     commentAdapter.removeAll(state);
      //     commentAdapter.upsertMany(state, action.payload);
      //   })
      //   .addCase(fetchComments.rejected, (state, action) => {
      //     state.fetchCommentsStatus = "failed";
      //     state.fetchCommentsError = action.error.message;
      //   })
      // Cases for status of selectedComment (pending, fulfilled, and rejected)
      .addCase(selectedComment.pending, (state, action) => {
        state.selectedCommentStatus = "loading";
      })
      .addCase(selectedComment.fulfilled, (state, action) => {
        state.selectedCommentStatus = "succeeded";
        commentAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedComment.rejected, (state, action) => {
        state.selectedCommentStatus = "failed";
        state.selectedCommentError = action.error.message;
      })
      // Cases for status of postComment (pending, fulfilled, and rejected)
      .addCase(postComment.pending, (state, action) => {
        state.postCommentStatus = "loading";
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.postCommentStatus = "succeeded";
        // state.comments.unshift(action.payload.data.createComment);
        commentAdapter.addOne(state, action.payload);
        // state.postCommentStatus = "idle";
      })
      .addCase(postComment.rejected, (state, action) => {
        state.postCommentStatus = "failed";
        state.postCommentError = action.error.message;
      })
      // Cases for status of updateComment (pending, fulfilled, and rejected)
      .addCase(updateCommentDetail.pending, (state, action) => {
        state.updateCommentDetailStatus = "loading";
      })
      .addCase(updateCommentDetail.fulfilled, (state, action) => {
        state.updateCommentDetailStatus = "succeeded";
        // state.comments.unshift(action.payload.data.createComment);
        commentAdapter.upsertOne(state, action.payload);
        // state.updateCommentStatus = "idle";
      })
      .addCase(updateCommentDetail.rejected, (state, action) => {
        state.updateCommentDetailStatus = "failed";
        state.updateCommentDetailError = action.error.message;
      });
  },
});

export const { removeSelectedComment } = commentSlice.actions;

export const {
  selectAll: selectAllComments,
  selectById: selectCommentById,
  selectIds: selectCommentIds,
} = commentAdapter.getSelectors((state) => state.comment);

export default commentSlice.reducer;
