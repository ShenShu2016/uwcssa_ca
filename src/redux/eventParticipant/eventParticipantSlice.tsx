/*
 * @Author: Shen Shu
 * @Date: 2022-05-29 22:41:37
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-26 14:24:18
 * @FilePath: /uwcssa_ca/src/redux/eventParticipant/eventParticipantSlice.tsx
 * @Description:
 * import eventParticipantReducer from './eventParticipant/eventParticipantSlice';
 * eventParticipant: eventParticipantReducer,
 */

import {
  CreateEventParticipantInput,
  EventParticipantStatus,
  UpdateEventParticipantInput,
} from "API";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {
  createEventParticipant,
  deleteEventParticipant,
  updateEventParticipant,
} from "graphql/mutations";
import { getEventParticipant } from "graphql/queries";

import API from "@aws-amplify/api";
import { FormItem } from "redux/form/formSlice";
import { RootState } from "redux/store";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { listEventParticipants } from "./custom_q_m_s";

export type EventParticipant = {
  id: string;
  content1?: string | null;
  formItem1?: FormItem | null;
  content2?: string | null;
  formItem2?: FormItem | null;
  content3?: string | null;
  formItem3?: FormItem | null;
  content4?: string | null;
  formItem4?: FormItem | null;
  content5?: string | null;
  formItem5?: FormItem | null;
  content6?: string | null;
  formItem6?: FormItem | null;
  content7?: string | null;
  formItem7?: FormItem | null;
  content8?: string | null;
  formItem8?: FormItem | null;
  content9?: string | null;
  formItem9?: FormItem | null;
  content10?: string | null;
  formItem10?: FormItem | null;
  content11?: string | null;
  formItem11?: FormItem | null;
  content12?: string | null;
  formItem12?: FormItem | null;
  content13?: string | null;
  formItem13?: FormItem | null;
  content14?: string | null;
  formItem14?: FormItem | null;
  content15?: string | null;
  formItem15?: FormItem | null;
  content16?: string | null;
  formItem16?: FormItem | null;
  content17?: string | null;
  formItem17?: FormItem | null;
  content18?: string | null;
  formItem18?: FormItem | null;
  content19?: string | null;
  formItem19?: FormItem | null;
  eventParticipantStatus: EventParticipantStatus;
  createdAt: string;
  updatedAt: string;
  owner: string;
  user?: any | null;
  eventEventParticipantsId?: string | null;
  eventParticipantFormItem1Id?: string | null;
  eventParticipantFormItem2Id?: string | null;
  eventParticipantFormItem3Id?: string | null;
  eventParticipantFormItem4Id?: string | null;
  eventParticipantFormItem5Id?: string | null;
  eventParticipantFormItem6Id?: string | null;
  eventParticipantFormItem7Id?: string | null;
  eventParticipantFormItem8Id?: string | null;
  eventParticipantFormItem9Id?: string | null;
  eventParticipantFormItem10Id?: string | null;
  eventParticipantFormItem11Id?: string | null;
  eventParticipantFormItem12Id?: string | null;
  eventParticipantFormItem13Id?: string | null;
  eventParticipantFormItem14Id?: string | null;
  eventParticipantFormItem15Id?: string | null;
  eventParticipantFormItem16Id?: string | null;
  eventParticipantFormItem17Id?: string | null;
  eventParticipantFormItem18Id?: string | null;
  eventParticipantFormItem19Id?: string | null;
};

const eventParticipantAdapter = createEntityAdapter<EventParticipant>({
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = eventParticipantAdapter.getInitialState({
  fetchEventParticipantListStatus: "idle",
  fetchEventParticipantListError: null,
  fetchEventParticipantStatus: "idle",
  fetchEventParticipantError: null,
  postEventParticipantStatus: "idle",
  postEventParticipantError: null,
  postEventParticipantImgStatus: "idle",
  postEventParticipantImgError: null,
  updateEventParticipantDetailStatus: "idle",
  updateEventParticipantDetailError: null,
  removeEventParticipantStatus: "idle",
  removeEventParticipantError: null,
});

export const fetchEventParticipantList = createAsyncThunk(
  "eventParticipant/fetchEventParticipantList",
  async ({ eventId }: { eventId: string }, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: listEventParticipants,
        variables: {
          filter: { eventEventParticipantsId: { eq: eventId } },
        },
      });

      return result.data.listEventParticipants.items;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const fetchEventParticipant = createAsyncThunk(
  "eventParticipant/fetchEventParticipant",
  async (
    {
      eventParticipantId,
      isAuth,
    }: {
      eventParticipantId: string;
      isAuth: boolean;
    },
    { rejectWithValue },
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: getEventParticipant,
        variables: { id: eventParticipantId },
        authMode: isAuth ? undefined : "AWS_IAM",
      });
      if (result.data.getEventParticipant === null) {
        return { id: eventParticipantId, description: "not-found" };
      }
      return result.data.getEventParticipant;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const postEventParticipant = createAsyncThunk(
  "eventParticipant/postEventParticipant",
  async (
    {
      createEventParticipantInput,
    }: {
      createEventParticipantInput: CreateEventParticipantInput;
    },
    { rejectWithValue },
  ) => {
    Object.keys(createEventParticipantInput).forEach((key) =>
      createEventParticipantInput[key] === null ||
      createEventParticipantInput[key] === ""
        ? delete createEventParticipantInput[key]
        : {},
    );
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(createEventParticipant, {
          input: createEventParticipantInput,
        }),
      );
      return result.data.createEventParticipant;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const updateEventParticipantDetail = createAsyncThunk(
  "eventParticipant/updateEventParticipantDetail",
  async (
    {
      updateEventParticipantInput,
    }: {
      updateEventParticipantInput: UpdateEventParticipantInput;
    },
    { rejectWithValue },
  ) => {
    Object.keys(updateEventParticipantInput).forEach((key) =>
      updateEventParticipantInput[key] === null ||
      updateEventParticipantInput[key] === ""
        ? delete updateEventParticipantInput[key]
        : {},
    );
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(updateEventParticipant, {
          input: updateEventParticipantInput,
        }),
      );
      return result.data.updateEventParticipant;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const removeEventParticipant = createAsyncThunk(
  "eventParticipant/removeEventParticipant",
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(deleteEventParticipant, {
          input: { id },
        }),
      );
      console.log(result);
      return result.data.deleteEventParticipant.id;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

const eventParticipantSlice = createSlice({
  name: "eventParticipant",
  initialState,
  reducers: {
    removeAllEventParticipants(state) {
      eventParticipantAdapter.removeAll(state);
    },
  },
  extraReducers(builder) {
    builder
      // Fetch EventParticipantList
      .addCase(fetchEventParticipantList.pending, (state) => {
        state.fetchEventParticipantListStatus = "loading";
      })
      .addCase(fetchEventParticipantList.fulfilled, (state, action) => {
        state.fetchEventParticipantListStatus = "succeed";
        eventParticipantAdapter.upsertMany(state, action.payload);
      })

      .addCase(fetchEventParticipantList.rejected, (state, action) => {
        state.fetchEventParticipantListStatus = "failed";
        state.fetchEventParticipantListError = action.payload;
      })
      // Fetch EventParticipant
      .addCase(fetchEventParticipant.pending, (state) => {
        state.fetchEventParticipantStatus = "loading";
      })
      .addCase(fetchEventParticipant.fulfilled, (state, action) => {
        state.fetchEventParticipantStatus = "succeed";
        eventParticipantAdapter.upsertOne(state, action.payload);
      })
      .addCase(fetchEventParticipant.rejected, (state, action) => {
        state.fetchEventParticipantStatus = "failed";
        state.fetchEventParticipantError = action.payload;
      })
      // Post EventParticipant
      .addCase(postEventParticipant.pending, (state) => {
        state.postEventParticipantStatus = "loading";
      })
      .addCase(postEventParticipant.fulfilled, (state, action) => {
        state.postEventParticipantStatus = "succeed";

        eventParticipantAdapter.addOne(state, action.payload);
      })
      .addCase(postEventParticipant.rejected, (state, action) => {
        state.postEventParticipantStatus = "failed";
        state.postEventParticipantError = action.payload;
      })
      // Update EventParticipantDetail
      .addCase(updateEventParticipantDetail.pending, (state) => {
        state.updateEventParticipantDetailStatus = "loading";
      })
      .addCase(updateEventParticipantDetail.fulfilled, (state, action) => {
        state.updateEventParticipantDetailStatus = "succeed";
        eventParticipantAdapter.upsertOne(state, action.payload);
      })
      .addCase(updateEventParticipantDetail.rejected, (state, action) => {
        state.updateEventParticipantDetailStatus = "failed";
        state.updateEventParticipantDetailError = action.payload;
      })
      // Remove EventParticipant
      .addCase(removeEventParticipant.pending, (state) => {
        state.removeEventParticipantStatus = "loading";
      })
      .addCase(removeEventParticipant.fulfilled, (state, action) => {
        state.removeEventParticipantStatus = "succeed";
        eventParticipantAdapter.removeOne(state, action.payload);
      })
      .addCase(removeEventParticipant.rejected, (state, action) => {
        state.removeEventParticipantStatus = "failed";
        state.removeEventParticipantError = action.payload;
      });
  },
});

export const {
  selectAll: selectAllEventParticipants,
  selectById: selectEventParticipantById,
  selectIds: selectEventParticipantIds,
} = eventParticipantAdapter.getSelectors(
  (state: RootState) => state.eventParticipant,
);
export const { removeAllEventParticipants } = eventParticipantSlice.actions;
export default eventParticipantSlice.reducer;
