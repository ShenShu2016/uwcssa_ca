/*
 * @Author: 李佳修
 * @Date: 2022-05-21 14:23:37
 * @LastEditTime: 2022-06-26 19:42:43
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/redux/tag/tagSlice.tsx
 */

import {
  CreateArticleTagsInput,
  CreateEventTagsInput,
  CreateTagInput,
  UpdateTagInput,
} from 'API';
import {
  createArticleTags,
  createEventTags,
  createTag,
  deleteArticleTags,
  deleteEventTags,
  deleteTag,
  updateTag,
} from 'graphql/mutations';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import {
  getTag,
  listArticleTags,
  listEventTags,
  listTags,
} from 'graphql/queries';

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
  postUpdateArticleTagsStatus: 'idle',
  postUpdateArticleTagsError: null,
  postUpdateEventTagsStatus: 'idle',
  postUpdateEventTagsError: null,
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
export const postUpdateArticleTags = createAsyncThunk(
  'tag/postArticleTag',
  async (
    { articleID, tagIDs }: { articleID: string; tagIDs: Array<string> },
    { rejectWithValue },
  ) => {
    // 不相信redux 直接从数据库里面拉出来再删
    let needToCreateTags;
    let needToDeleteTags;
    try {
      const currentArticleTags: any = await API.graphql(
        graphqlOperation(listArticleTags, {
          filter: {
            articleID: {
              eq: articleID,
            },
          },
        }),
      );
      console.log('我是刚刚新鲜抓取回来的', currentArticleTags);
      // keep tagID from currentArticleTags
      needToDeleteTags = currentArticleTags.data.listArticleTags.items.filter(
        (item) => !tagIDs.includes(item.tagID),
      );
      console.log('要删掉的tags', needToDeleteTags);
      needToCreateTags = tagIDs.filter(
        (item) =>
          currentArticleTags.data.listArticleTags.items
            .map((item) => item.tagID)
            .indexOf(item) === -1,
      );
      console.log('要新建的tags', needToCreateTags);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
    // 删除原来的标签
    if (needToDeleteTags.length > 0) {
      try {
        const deleteResults = await Promise.all(
          needToDeleteTags.map((item) => {
            return API.graphql(
              graphqlOperation(deleteArticleTags, {
                input: {
                  id: item.id,
                },
              }),
            );
          }),
        );
        console.log(deleteResults);
      } catch (error) {
        console.log(error);
        return rejectWithValue(error.errors);
      }
    }
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const results = await Promise.all(
        needToCreateTags.map((tagID) => {
          return API.graphql(
            graphqlOperation(createArticleTags, {
              input: {
                id: `${articleID}-${tagID}`,
                articleID,
                tagID,
              } as CreateArticleTagsInput,
            }),
          );
        }),
      );
      console.log(results);
      const returnResult = results.map((result: any) => {
        return result.data.createArticleTags;
      });
      return returnResult;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const postUpdateEventTags = createAsyncThunk(
  'tag/postUpdateEventTags',
  async (
    { eventID, tagIDs }: { eventID: string; tagIDs: Array<string> },
    { rejectWithValue },
  ) => {
    // 不相信redux 直接从数据库里面拉出来再删
    let needToCreateTags;
    let needToDeleteTags;
    try {
      const currentEventTags: any = await API.graphql(
        graphqlOperation(listEventTags, {
          filter: {
            eventID: {
              eq: eventID,
            },
          },
        }),
      );
      console.log('我是刚刚新鲜抓取回来的', currentEventTags);
      // keep tagID from currentEventTags
      needToDeleteTags = currentEventTags.data.listEventTags.items.filter(
        (item) => !tagIDs.includes(item.tagID),
      );
      console.log('要删掉的tags', needToDeleteTags);
      needToCreateTags = tagIDs.filter(
        (item) =>
          currentEventTags.data.listEventTags.items
            .map((item) => item.tagID)
            .indexOf(item) === -1,
      );
      console.log('要新建的tags', needToCreateTags);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
    // 删除原来的标签
    if (needToDeleteTags.length > 0) {
      try {
        const deleteResults = await Promise.all(
          needToDeleteTags.map((item) => {
            return API.graphql(
              graphqlOperation(deleteEventTags, {
                input: {
                  id: item.id,
                },
              }),
            );
          }),
        );
        console.log(deleteResults);
      } catch (error) {
        console.log(error);
        return rejectWithValue(error.errors);
      }
    }
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const results = await Promise.all(
        needToCreateTags.map((tagID) => {
          return API.graphql(
            graphqlOperation(createEventTags, {
              input: {
                id: `${eventID}-${tagID}`,
                eventID,
                tagID,
              } as CreateEventTagsInput,
            }),
          );
        }),
      );
      console.log(results);
      const returnResult = results.map((result: any) => {
        return result.data.createEventTags;
      });
      return returnResult;
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
      })
      // Post Article Tags
      .addCase(postUpdateArticleTags.pending, (state) => {
        state.postUpdateArticleTagsStatus = 'loading';
      })
      .addCase(postUpdateArticleTags.fulfilled, (state, action) => {
        state.postUpdateArticleTagsStatus = 'succeed';
        tagAdapter.addMany(state, action.payload);
      })
      .addCase(postUpdateArticleTags.rejected, (state, action) => {
        state.postUpdateArticleTagsStatus = 'failed';
        state.postUpdateArticleTagsError = action.payload;
      })
      // Post Event Tags
      .addCase(postUpdateEventTags.pending, (state) => {
        state.postUpdateEventTagsStatus = 'loading';
      })
      .addCase(postUpdateEventTags.fulfilled, (state, action) => {
        state.postUpdateEventTagsStatus = 'succeed';
        tagAdapter.addMany(state, action.payload);
      })
      .addCase(postUpdateEventTags.rejected, (state, action) => {
        state.postUpdateEventTagsStatus = 'failed';
        state.postUpdateEventTagsError = action.payload;
      });
  },
});

export const {
  selectAll: selectAllTags,
  selectById: selectTagById,
  selectIds: selectTagIds,
} = tagAdapter.getSelectors((state: RootState) => state.tag);

export default tagSlice.reducer;
