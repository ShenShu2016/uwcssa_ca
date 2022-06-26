/*
 * @Author: 李佳修
 * @Date: 2022-05-21 14:23:37
 * @LastEditTime: 2022-06-26 16:32:35
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/redux/tag/tagSlice.tsx
 */

import { CreateTagInput, UpdateTagInput } from 'API';
import {
  createArticleTags,
  createTag,
  deleteTag,
  updateTag,
} from 'graphql/mutations';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { getTag, listTags } from 'graphql/queries';

import API from '@aws-amplify/api';
import { RootState } from 'redux/store';
import { graphqlOperation } from '@aws-amplify/api-graphql';

type ArticleTag = {
  id?: string | null;
  tagID: string;
  articleID: string;
};

type Tag = {
  id?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  owner: string;
};

const tagAdapter = createEntityAdapter<Tag>({
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = tagAdapter.getInitialState({
  fetchTagListStatus: 'idle',
  fetchTagListError: null,
  fetchTagStatus: 'idle',
  fetchTagError: null,
  postTagStatus: 'idle',
  postTagError: null,
  postTagImgStatus: 'idle',
  postTagImgError: null,
  updateTagDetailStatus: 'idle',
  updateTagDetailError: null,
  removeTagStatus: 'idle',
  removeTagError: null,
});

export const fetchTagList = createAsyncThunk(
  'tag/fetchTagList',
  async ({ isAuth }: { isAuth: boolean }, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: listTags,
        authMode: isAuth ? undefined : 'AWS_IAM',
      });

      return result.data.listTags.items;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);
export const fetchTag = createAsyncThunk(
  'tag/fetchTag',
  async (
    {
      tagId,
      isAuth,
    }: {
      tagId: string;
      isAuth: boolean;
    },
    { rejectWithValue },
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: getTag,
        variables: { id: tagId },
        authMode: isAuth ? undefined : 'AWS_IAM',
      });
      if (result.data.getTag === null) {
        return { id: tagId, description: 'not-found' };
      }
      return result.data.getTag;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const postTag = createAsyncThunk(
  'tag/postTag',
  async (
    {
      createTagInput,
    }: {
      createTagInput: CreateTagInput;
    },
    { rejectWithValue },
  ) => {
    Object.keys(createTagInput).forEach((key) =>
      createTagInput[key] === null || createTagInput[key] === ''
        ? delete createTagInput[key]
        : {},
    );
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(createTag, {
          input: createTagInput,
        }),
      );
      return result.data.createTag;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const updateTagDetail = createAsyncThunk(
  'tag/updateTagDetail',
  async (
    {
      updateTagInput,
    }: {
      updateTagInput: UpdateTagInput;
    },
    { rejectWithValue },
  ) => {
    Object.keys(updateTagInput).forEach((key) =>
      updateTagInput[key] === null || updateTagInput[key] === ''
        ? delete updateTagInput[key]
        : {},
    );
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(updateTag, {
          input: updateTagInput,
        }),
      );
      return result.data.updateTag;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);
export const removeTag = createAsyncThunk(
  'tag/removeTag',
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(deleteTag, {
          input: { id },
        }),
      );
      console.log(result);
      return result.data.deleteTag.id;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const postArticleTag = createAsyncThunk(
  'tag/postArticleTag',
  async (
    { createArticleTagInput }: { createArticleTagInput: ArticleTag },
    { rejectWithValue },
  ) => {
    Object.keys(createArticleTagInput).forEach((key) =>
      createArticleTagInput[key] === null || createArticleTagInput[key] === ''
        ? delete createArticleTagInput[key]
        : {},
    );
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(createArticleTags, { input: createArticleTagInput }),
      );
      return result.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Fetch TagList
      .addCase(fetchTagList.pending, (state) => {
        state.fetchTagListStatus = 'loading';
      })
      .addCase(fetchTagList.fulfilled, (state, action) => {
        state.fetchTagListStatus = 'succeed';
        tagAdapter.upsertMany(state, action.payload);
      })

      .addCase(fetchTagList.rejected, (state, action) => {
        state.fetchTagListStatus = 'failed';
        state.fetchTagListError = action.payload;
      })
      // Fetch Tag
      .addCase(fetchTag.pending, (state) => {
        state.fetchTagStatus = 'loading';
      })
      .addCase(fetchTag.fulfilled, (state, action) => {
        state.fetchTagStatus = 'succeed';
        tagAdapter.upsertOne(state, action.payload);
      })
      .addCase(fetchTag.rejected, (state, action) => {
        state.fetchTagStatus = 'failed';
        state.fetchTagError = action.payload;
      })
      // Post Tag
      .addCase(postTag.pending, (state) => {
        state.postTagStatus = 'loading';
      })
      .addCase(postTag.fulfilled, (state, action) => {
        state.postTagStatus = 'succeed';

        tagAdapter.addOne(state, action.payload);
      })
      .addCase(postTag.rejected, (state, action) => {
        state.postTagStatus = 'failed';
        state.postTagError = action.payload;
      })
      // Update TagDetail
      .addCase(updateTagDetail.pending, (state) => {
        state.updateTagDetailStatus = 'loading';
      })
      .addCase(updateTagDetail.fulfilled, (state, action) => {
        state.updateTagDetailStatus = 'succeed';
        tagAdapter.upsertOne(state, action.payload);
      })
      .addCase(updateTagDetail.rejected, (state, action) => {
        state.updateTagDetailStatus = 'failed';
        state.updateTagDetailError = action.payload;
      })
      // Remove Tag
      .addCase(removeTag.pending, (state) => {
        state.removeTagStatus = 'loading';
      })
      .addCase(removeTag.fulfilled, (state, action) => {
        state.removeTagStatus = 'succeed';
        tagAdapter.removeOne(state, action.payload);
      })
      .addCase(removeTag.rejected, (state, action) => {
        state.removeTagStatus = 'failed';
        state.removeTagError = action.payload;
      });
  },
});

export const {
  selectAll: selectAllTags,
  selectById: selectTagById,
  selectIds: selectTagIds,
} = tagAdapter.getSelectors((state: RootState) => state.tag);

export default tagSlice.reducer;
