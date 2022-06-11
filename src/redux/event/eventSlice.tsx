/*
 * @Author: Shen Shu
 * @Date: 2022-05-20 21:02:00
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-10 20:54:19
 * @FilePath: /uwcssa_ca/src/redux/event/eventSlice.tsx
 * @Description:
 *
 */

import { CreateEventInput, UpdateEventInput } from 'API';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import {
  createCount,
  createEvent,
  deleteEvent,
  updateEvent,
} from 'graphql/mutations';
import { eventSortByCreatedAt, getEvent } from 'graphql/queries';

import API from '@aws-amplify/api';
import { RootState } from 'redux/store';
import { graphqlOperation } from '@aws-amplify/api-graphql';
import { v4 as uuid } from 'uuid';

//import { commentAdapter } from 'redux/comment/commentSlice';

// export type Event = {
//   id: string;
//   title: string;
//   tags?: { items: Array<{ tagID: string }> } | null;
//   content: string;
//   comments?: {
//     items: Array<{
//       id: string;
//       content: string;
//       createdAt: string;
//       user: { avatarURL: string; id: string; name: string; createdAt: string };
//     }>;
//   } | null;
//   active: 'T' | 'F';
//   coverPageImgURL?: string | null;
//   coverPageDescription?: string | null;
//   createdAt?: string;
//   updatedAt?: string;
//   owner: string;
//   user?: { avatarURL: string; id: string; name: string };
// };

const eventAdapter = createEntityAdapter<any>({
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = eventAdapter.getInitialState({
  fetchEventListStatus: 'idle',
  fetchEventListError: null,
  fetchEventStatus: 'idle',
  fetchEventError: null,
  postEventStatus: 'idle',
  postEventError: null,
  postEventImgStatus: 'idle',
  postEventImgError: null,
  updateEventDetailStatus: 'idle',
  updateEventDetailError: null,
  removeEventStatus: 'idle',
  removeEventError: null,
});

export const fetchEventList = createAsyncThunk(
  'event/fetchEventList',
  async ({ isAuth }: { isAuth: boolean }, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: eventSortByCreatedAt,
        variables: {
          active: 'T',
          sortDirection: 'DESC',
          limit: 10,
        },
        authMode: isAuth ? undefined : 'AWS_IAM',
      });
      return result.data.eventSortByCreatedAt.items;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const fetchEvent = createAsyncThunk(
  'event/fetchEvent',
  async (
    { eventId, isAuth }: { eventId: string; isAuth: boolean },
    { rejectWithValue },
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: getEvent,
        variables: { id: eventId },
        authMode: isAuth ? undefined : 'AWS_IAM',
      });
      if (result.data.getEvent === null) {
        return { id: eventId, description: 'not-found' };
      }
      return result.data.getEvent;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const postEvent = createAsyncThunk(
  'event/postEvent',
  async (
    { createEventInput }: { createEventInput: CreateEventInput },
    { rejectWithValue },
  ) => {
    const countId = uuid();
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const [eventResponse, countResponse]: [any, any] = await Promise.all([
        API.graphql(
          graphqlOperation(createEvent, {
            input: { eventCountId: countId, ...createEventInput },
          }),
        ),
        API.graphql(
          graphqlOperation(createCount, {
            input: {
              id: countId,
              count: undefined,
              commentCount: 0,
              like: 0,
              targetTable: 'Event',
              countEventId: createEventInput.id,
              owner: createEventInput.owner,
            },
          }),
        ),
      ]);
      return eventResponse.data.createEvent;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const updateEventDetail = createAsyncThunk(
  'event/updateEventDetail',
  async (
    { updateEventInput }: { updateEventInput: UpdateEventInput },
    { rejectWithValue },
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(updateEvent, { input: updateEventInput }),
      );
      return result.data.updateEvent;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const removeEvent = createAsyncThunk(
  'event/removeEvent',
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(deleteEvent, {
          input: { id },
        }),
      );
      console.log(result);
      return result.data.deleteEvent.id;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchEventList.pending, (state) => {
        state.fetchEventListStatus = 'loading';
      })
      .addCase(fetchEventList.fulfilled, (state, action) => {
        state.fetchEventListStatus = 'succeed';
        eventAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchEventList.rejected, (state, action) => {
        state.fetchEventListStatus = 'failed';
        state.fetchEventListError = action.payload;
      })
      .addCase(fetchEvent.pending, (state) => {
        state.fetchEventStatus = 'loading';
      })
      .addCase(fetchEvent.fulfilled, (state, action) => {
        state.fetchEventStatus = 'succeed';
        eventAdapter.upsertOne(state, action.payload);
      })
      .addCase(fetchEvent.rejected, (state, action) => {
        state.fetchEventStatus = 'failed';
        state.fetchEventError = action.payload;
      })
      .addCase(postEvent.pending, (state) => {
        state.postEventStatus = 'loading';
      })
      .addCase(postEvent.fulfilled, (state, action) => {
        state.postEventStatus = 'succeed';
        eventAdapter.addOne(state, action.payload);
      })
      .addCase(postEvent.rejected, (state, action) => {
        state.postEventStatus = 'failed';
        state.postEventError = action.payload;
      })

      .addCase(updateEventDetail.pending, (state) => {
        state.updateEventDetailStatus = 'loading';
      })
      .addCase(updateEventDetail.fulfilled, (state) => {
        state.updateEventDetailStatus = 'succeed';
      })
      .addCase(updateEventDetail.rejected, (state, action) => {
        state.updateEventDetailStatus = 'failed';
        state.updateEventDetailError = action.payload;
      })
      .addCase(removeEvent.pending, (state) => {
        state.removeEventStatus = 'loading';
      })
      .addCase(removeEvent.fulfilled, (state) => {
        state.removeEventStatus = 'succeed';
      })
      .addCase(removeEvent.rejected, (state, action) => {
        state.removeEventStatus = 'failed';
        state.removeEventError = action.payload;
      });
  },
});

export const {
  selectAll: selectAllEvents,
  selectById: selectEventById,
  selectIds: selectEventIds,
} = eventAdapter.getSelectors((state: RootState) => state.event);

export default eventSlice.reducer;
