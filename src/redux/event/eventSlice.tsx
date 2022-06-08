/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: Shen Shu
 * @Date: 2022-05-20 21:02:00
 * @LastEditors: 李佳修
 * @LastEditTime: 2022-06-08 13:29:03
 * @FilePath: /uwcssa_ca/src/redux/event/eventSlice.tsx
 * @Description:
 *
 */

import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { createEvent, updateEvent } from 'graphql/mutations';
import { eventSortByCreatedAt, getEvent } from 'graphql/queries';

import API from '@aws-amplify/api';
import { RootState } from 'redux/store';
import { graphqlOperation } from '@aws-amplify/api-graphql';

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
  // selectId: (item) => item.id,
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
});

export const fetchEventList = createAsyncThunk(
  'event/fetchEventList',
  async ({ isAuth }: { isAuth: boolean }) => {
    try {
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
    }
  },
);

export const fetchEvent = createAsyncThunk(
  'event/fetchEvent',
  async ({ eventId, isAuth }: { eventId: string; isAuth: boolean }) => {
    try {
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
    }
  },
);

export const postEvent = createAsyncThunk(
  'event/postEvent',
  async ({ createEventInput }: { createEventInput: Event }) => {
    try {
      const result: any = await API.graphql(
        graphqlOperation(createEvent, { input: createEventInput }),
      );
      return result.data.createEvent;
    } catch (error) {
      console.log(error);
    }
  },
);

export const updateEventDetail = createAsyncThunk(
  'event/updateEventDetail',
  async ({ updateEventInput }: { updateEventInput: Event }) => {
    try {
      const result: any = await API.graphql(
        graphqlOperation(updateEvent, { input: updateEventInput }),
      );
      return result.data.updateEvent;
    } catch (error) {
      console.log(error);
    }
  },
);

const eventSlice = createSlice({
  name: 'event',
  initialState,
  // initialState: eventAdapter.getInitialState({
  //   ...initialState,
  //   comments: commentAdapter.getInitialState(),
  // }),

  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchEventList (pending, fulfilled, and rejected)
      .addCase(fetchEventList.pending, (state) => {
        state.fetchEventListStatus = 'loading';
      })
      .addCase(fetchEventList.fulfilled, (state, action) => {
        state.fetchEventListStatus = 'succeed';
        //eventAdapter.removeAll(state);
        eventAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchEventList.rejected, (state, action) => {
        state.fetchEventListStatus = 'failed';
        state.fetchEventError = action.error.message;
      })
      // Cases for status of selectedEvent (pending, fulfilled, and rejected)
      .addCase(fetchEvent.pending, (state) => {
        state.fetchEventStatus = 'loading';
      })
      .addCase(fetchEvent.fulfilled, (state, action) => {
        state.fetchEventStatus = 'succeed';
        eventAdapter.upsertOne(state, action.payload);
        // commentAdapter.upsertMany(
        //   state.comments,
        //   action.payload.comments.items,
        // );
        //console.log(action.payload.comments.items);
        // store.dispatch(insertAllComments(action.payload.comments.items));
      })
      .addCase(fetchEvent.rejected, (state, action) => {
        state.fetchEventStatus = 'failed';
        state.fetchEventError = action.error.message;
      })
      // Cases for status of postEvent (pending, fulfilled, and rejected)
      .addCase(postEvent.pending, (state) => {
        state.postEventStatus = 'loading';
      })
      .addCase(postEvent.fulfilled, (state, action) => {
        state.postEventStatus = 'succeed';
        // state.events.unshift(action.payload.data.createEvent);
        eventAdapter.addOne(state, action.payload);
        // state.postEventStatus = "idle";
      })
      .addCase(postEvent.rejected, (state, action) => {
        state.postEventStatus = 'failed';
        state.postEventError = action.error.message;
      })
      // Cases for status of updateEvent (pending, fulfilled, and rejected)
      .addCase(updateEventDetail.pending, (state) => {
        state.updateEventDetailStatus = 'loading';
      })
      .addCase(updateEventDetail.fulfilled, (state) => {
        state.updateEventDetailStatus = 'succeed';
        //state.events.unshift(action.payload.data.createEvent);
        //eventAdapter.upsertOne(state, action.payload);
        // state.updateEventStatus = "idle";
      })
      .addCase(updateEventDetail.rejected, (state, action) => {
        state.updateEventDetailStatus = 'failed';
        state.updateEventDetailError = action.error.message;
      });
  },
});

export const {
  selectAll: selectAllEvents,
  selectById: selectEventById,
  selectIds: selectEventIds,
} = eventAdapter.getSelectors((state: RootState) => state.event);

export default eventSlice.reducer;
