import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { createTopic, updateTopic } from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { getTopic } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { listTopics } from "../CustomQuery/TopicQueries";

const topicAdapter = createEntityAdapter({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = topicAdapter.getInitialState({
  fetchTopicsStatus: "idle",
  fetchTopicsError: null,
  selectedTopicStatus: "idle",
  selectedTopicError: null,
  postTopicStatus: "idle",
  postTopicError: null,
  postTopicImgStatus: "idle",
  postTopicImgError: null,
  updateTopicDetailStatus: "idle",
  updateTopicDetailError: null,
});

export const fetchTopics = createAsyncThunk("topic/fetchTopics", async () => {
  try {
    const TopicsData = await API.graphql({
      query: listTopics,
      authMode: "AWS_IAM",
    });
    return TopicsData.data.listTopics.items;
  } catch (error) {
    console.log(error);
  }
});

export const selectedTopic = createAsyncThunk(
  "topic/selectedTopic",
  async (id) => {
    const response = await API.graphql({
      query: getTopic,
      variables: { id: id },
      authMode: "AWS_IAM",
    });
    // console.log("what?", response);
    if (response.data.getTopic === null) {
      return { id: id, description: "not-found" };
    }
    return response.data.getTopic;
  }
);

export const postTopic = createAsyncThunk(
  "topic/postTopic",
  async ({ createTopicInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createTopic, { input: createTopicInput })
      );
      return response.data.createTopic;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateTopicDetail = createAsyncThunk(
  "topic/updateTopicDetail",
  async (updateTopicDetail) => {
    const response = await API.graphql(
      graphqlOperation(updateTopic, { input: updateTopicDetail })
    );
    return response.data.updateTopic;
  }
);

const topicSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchTopics (pending, fulfilled, and rejected)
      .addCase(fetchTopics.pending, (state, action) => {
        state.fetchTopicsStatus = "loading";
      })
      .addCase(fetchTopics.fulfilled, (state, action) => {
        state.fetchTopicsStatus = "succeeded";
        topicAdapter.removeAll(state);
        topicAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchTopics.rejected, (state, action) => {
        state.fetchTopicsStatus = "failed";
        state.fetchTopicsError = action.error.message;
      })
      // Cases for status of selectedTopic (pending, fulfilled, and rejected)
      .addCase(selectedTopic.pending, (state, action) => {
        state.selectedTopicStatus = "loading";
      })
      .addCase(selectedTopic.fulfilled, (state, action) => {
        state.selectedTopicStatus = "succeeded";
        topicAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedTopic.rejected, (state, action) => {
        state.selectedTopicStatus = "failed";
        state.selectedTopicError = action.error.message;
      })
      // Cases for status of postTopic (pending, fulfilled, and rejected)
      .addCase(postTopic.pending, (state, action) => {
        state.postTopicStatus = "loading";
      })
      .addCase(postTopic.fulfilled, (state, action) => {
        state.postTopicStatus = "succeeded";
        // state.topics.unshift(action.payload.data.createTopic);
        topicAdapter.addOne(state, action.payload);
        // state.postTopicStatus = "idle";
      })
      .addCase(postTopic.rejected, (state, action) => {
        state.postTopicStatus = "failed";
        state.postTopicError = action.error.message;
      })
      // Cases for status of updateTopic (pending, fulfilled, and rejected)
      .addCase(updateTopicDetail.pending, (state, action) => {
        state.updateTopicDetailStatus = "loading";
      })
      .addCase(updateTopicDetail.fulfilled, (state, action) => {
        state.updateTopicDetailStatus = "succeeded";
        // state.topics.unshift(action.payload.data.createTopic);
        topicAdapter.upsertOne(state, action.payload);
        // state.updateTopicStatus = "idle";
      })
      .addCase(updateTopicDetail.rejected, (state, action) => {
        state.updateTopicDetailStatus = "failed";
        state.updateTopicDetailError = action.error.message;
      });
  },
});

export const { removeSelectedTopic } = topicSlice.actions;

export const {
  selectAll: selectAllTopics,
  selectById: selectTopicById,
  selectIds: selectTopicIds,
} = topicAdapter.getSelectors((state) => state.topic);

export default topicSlice.reducer;
