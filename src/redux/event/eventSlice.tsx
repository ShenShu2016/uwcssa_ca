/*
 * @Author: Shen Shu
 * @Date: 2022-05-20 21:02:00
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-20 01:32:37
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
import { eventSortByCreatedAt, getEvent } from './custom_q_m_s';

import API from '@aws-amplify/api';
import { RootState } from 'redux/store';
import { graphqlOperation } from '@aws-amplify/api-graphql';

//import { commentAdapter } from 'redux/comment/commentSlice';

export type Event = {
  id: string;
  title: string;
  tags?: { items: Array<{ tagID: string }> } | null;
  content: string;
  comments?: {
    items: Array<{
      id: string;
      content: string;
      createdAt: string;
      user: { avatarURL: string; id: string; name: string; createdAt: string };
    }>;
  } | null;
  eventFormId?: string;
  count?: any;
  likes?: any;
  active: 'T' | 'F';
  coverPageImgURL?: string | null;
  coverPageDescription?: string | null;
  eventParticipants?: {
    items: Array<{ id: string; owner: string; createdAt: string }>;
  } | null;
  form?: Form | null;
  startDate?: string | null;
  endDate?: string | null;
  createdAt?: string;
  updatedAt?: string;
  owner: string;
  user?: any;
  online?: boolean;
};

// export interface Event {
//   id: string;
//   title: string;
//   coverPageImgURL: string;
//   coverPageDescription: null;
//   content: string;
//   imgURLs: null;
//   sponsor: null;
//   online: boolean;
//   group: boolean;
//   startDate: string;
//   endDate: string;
//   eventStatus: string;
//   isPublish: null;
//   tags: Tags;
//   eventLocation: null;
//   form: Form;
//   active: string;
//   createdAt: string;
//   updatedAt: string;
//   owner: string;
//   user: User;
//   eventEventLocationId: string;
//   eventFormId: string;
//   eventCountId: null;
// }

export interface Form {
  createdAt: string;
  formEventId: null;
  id: string;
  owner: string;
  updatedAt: string;
  formItems: FormItems;
}

export interface FormItems {
  nextToken: null;
  items: Item[];
}

export interface Item {
  createdAt: string;
  description: string;
  formFormItemsId: string;
  formSelectChoices: string[];
  formType: string;
  helperText: string;
  id: string;
  isBoolean: boolean;
  isDate: boolean;
  isEmail: boolean;
  isExample: boolean;
  isNumber: boolean;
  isRequired: boolean;
  isString: boolean;
  isTrim: boolean;
  label: string;
  maxLength: number;
  minLength: number;
  order: number;
  owner: string;
  placeholder: string;
  question: string;
  updatedAt: string;
}

// export interface Tags {
//   items: any[];
// }

// export interface User {
//   id: string;
//   name: string;
//   avatarURL: null;
// }

const eventAdapter = createEntityAdapter<Event>({
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
  async (
    {
      isAuth,
      ownerUsername = null,
    }: { isAuth: boolean; ownerUsername: string },
    { rejectWithValue },
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: eventSortByCreatedAt,
        variables: {
          active: 'T',
          sortDirection: 'DESC',
          limit: 10,
          eq: ownerUsername || null,
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
    {
      eventId,
      isAuth,
      ownerUsername = null,
    }: { eventId: string; isAuth: boolean; ownerUsername: string },
    { rejectWithValue },
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: getEvent,
        variables: { id: eventId, eq: ownerUsername || null },
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
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const [createEventResponse, createCountResponse]: [any, any] =
        await Promise.all([
          API.graphql(
            graphqlOperation(createEvent, {
              input: createEventInput,
            }),
          ),
          API.graphql(
            graphqlOperation(createCount, {
              input: {
                id: createEventInput.eventCountId,
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
      console.log(createEventResponse, createCountResponse);
      return createEventResponse.data.createEvent;
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
