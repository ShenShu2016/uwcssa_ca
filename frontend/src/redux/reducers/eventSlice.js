import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createEvent,
  createEventComment,
  createEventParticipant,
} from "../../graphql/mutations";
import {
  eventCommentSortByEventID,
  eventParticipantSortByEventID,
  eventSortBySortKey,
  listTopics,
} from "../../graphql/queries";

import API from "@aws-amplify/api";
import { getEvent } from "../CustomQuery/EventQueries";
import { graphqlOperation } from "@aws-amplify/api-graphql";

const initialState = {
  events: [],
  topics: [],
  types: [],
  selected: {
    event: {
      eventComments: { nextToken: null, items: [] },
      eventParticipants: { nextToken: null, items: [] },
    },
  },
  mutation: {
    postEvent: {},
    updateEvent: [],
    deleteEvent: [],
  },
  //  Status: "idle",
  //  Error: null,
  fetchEventsStatus: "idle",
  fetchEventsError: null,
  selectedEventStatus: "idle",
  selectedEventsError: null,
  // selectedEventCommentsStatus: "idle",
  // selectedEventCommentsError: null,
  // selectedEventParticipantsStatus: "idle",
  // selectedEventParticipantsError: null,
  loadMoreEventCommentsStatus: "idle",
  loadMoreEventCommentsError: null,
  loadMoreEventParticipantsStatus: "idle",
  loadMoreEventParticipantsError: null,
  removeSelectedEventStatus: "idle",
  removeSelectedEventError: null,
  postEventCommentStatus: "idle",
  postEventCommentError: null,
  postEventParticipantStatus: "idle",
  postEventParticipantError: null,
  fetchTopicsStatus: "idle",
  fetchTopicsError: null,
  postEventStatus: "idle",
  postEventError: null,
};

export const fetchEvents = createAsyncThunk("event/fetchEvents", async () => {
  const eventData = await API.graphql({
    query: eventSortBySortKey,
    variables: {
      sortKey: "SortKey",
      sortDirection: "DESC",
      filter: { active: { eq: true } },
    },
    authMode: "AWS_IAM",
  });

  return eventData.data.eventSortBySortKey.items;
});

export const selectedEvent = createAsyncThunk(
  "event/selected/event",
  async ({ eventID }) => {
    const response = await API.graphql({
      query: getEvent,
      variables: { id: eventID, filter: { active: { eq: true } } },
      authMode: "AWS_IAM",
    });

    return response.data.getEvent;
  }
);

// export const selectedEventComments = createAsyncThunk(
//   "event/selected/eventComments",
//   async ({ eventID }) => {
//     const eventCommentData = await API.graphql({
//       query: eventCommentSortByEventID,
//       variables: {
//         eventID: eventID,
//         sortDirection: "DESC",
//         filter: { active: { eq: true } },
//         // limit: 10,
//       },
//       authMode: "AWS_IAM",
//     });

//     return eventCommentData.data.eventCommentSortByEventID.items;
//   }
// );

// export const selectedEventParticipants = createAsyncThunk(
//   "event/selected/eventParticipants",
//   async ({ eventID }) => {
//     const eventParticipantData = await API.graphql({
//       query: eventParticipantSortByEventID,
//       variables: {
//         eventID: eventID,
//         sortDirection: "DESC",
//         filter: { active: { eq: true } },
//         // limit: 10,
//       },
//       authMode: "AWS_IAM",
//     });

//     return eventParticipantData.data.eventParticipantSortByEventID.items;
//   }
// );

export const loadMoreEventComments = createAsyncThunk(
  "event/selected/loadMoreEventComments",
  async ({ eventID, nextToken }) => {
    const eventCommentData = await API.graphql({
      query: eventCommentSortByEventID,
      variables: {
        eventID: eventID,
        sortDirection: "DESC",
        filter: { active: { eq: true } },
        limit: 10,
        nextToken: nextToken,
      },
      authMode: "AWS_IAM",
    });
    return eventCommentData.data.eventCommentSortByEventID;
  }
);

export const loadMoreEventParticipants = createAsyncThunk(
  "event/selected/loadMoreEventParticipants",
  async ({ eventID, nextToken }) => {
    const eventParticipantData = await API.graphql({
      query: eventParticipantSortByEventID,
      variables: {
        eventID: eventID,
        sortDirection: "DESC",
        filter: { active: { eq: true } },
        limit: 10,
        nextToken: nextToken,
      },
      authMode: "AWS_IAM",
    });
    return eventParticipantData.data.eventParticipantSortByEventID;
  }
);
// export const removeSelectedEvent = createAsyncThunk(
//   "event/selected/removeSelectedEvent",
//   async () => {
//     return;
//   }
// );

export const postEventComment = createAsyncThunk(
  "event/postEventComment",
  async ({ createEventCommentInput }) => {
    const response = await API.graphql(
      graphqlOperation(createEventComment, {
        input: createEventCommentInput,
      })
    );
    return response.data.createEventComment;
  }
);

export const postEventParticipant = createAsyncThunk(
  "event/postEventParticipant",
  async ({ createEventParticipantInput }) => {
    console.log("createEventParticipantInput", createEventParticipantInput);
    try {
      const response = await API.graphql(
        graphqlOperation(createEventParticipant, {
          input: createEventParticipantInput,
        })
      );
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const fetchTopics = createAsyncThunk("event/fetchTopics", async () => {
  const topicData = await API.graphql({
    query: listTopics,
    authMode: "AWS_IAM",
  });
  return topicData.data.listTopics.items;
});

export const postEvent = createAsyncThunk(
  "event/postEvent",
  async ({ createEventInput }) => {
    const response = await API.graphql(
      graphqlOperation(createEvent, { input: createEventInput })
    );
    return response;
  }
);

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    //有API call 的不能放这里
    removeSelectedEvent(state, action) {
      state.selected = {
        event: {
          eventComments: { nextToken: null, items: [] },
          eventParticipants: { nextToken: null, items: [] },
        },
      };
      console.log("remove selected removeSelectedEvent successfully!");
    },
  },
  extraReducers(builder) {
    builder
      // Cases for status of fetchEvents (pending, fulfilled, and rejected)
      .addCase(fetchEvents.pending, (state, action) => {
        state.fetchEventsStatus = "loading";
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.fetchEventsStatus = "succeeded";
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.fetchEventsStatus = "failed";
        state.fetchEventsError = action.error.message;
      })
      // Cases for status of selectedEvents (pending, fulfilled, and rejected)
      .addCase(selectedEvent.pending, (state, action) => {
        state.selectedEventStatus = "loading";
      })
      .addCase(selectedEvent.fulfilled, (state, action) => {
        state.selectedEventStatus = "succeeded";
        state.selected.event = action.payload;
      })
      .addCase(selectedEvent.rejected, (state, action) => {
        state.selectedEventStatus = "failed";
        state.selectedEventsError = action.error.message;
      })
      // // Cases for status of selectedEventComments (pending, fulfilled, and rejected)
      // .addCase(selectedEventComments.pending, (state, action) => {
      //   state.selectedEventCommentsStatus = "loading";
      // })
      // .addCase(selectedEventComments.fulfilled, (state, action) => {
      //   state.selectedEventCommentsStatus = "succeeded";
      //   state.selected.comments = action.payload;
      // })
      // .addCase(selectedEventComments.rejected, (state, action) => {
      //   state.selectedEventCommentsStatus = "failed";
      //   state.selectedEventCommentsError = action.error.message;
      // })
      // // Cases for status of selectedEventParticipants (pending, fulfilled, and rejected)
      // .addCase(selectedEventParticipants.pending, (state, action) => {
      //   state.selectedEventParticipantsStatus = "loading";
      // })
      // .addCase(selectedEventParticipants.fulfilled, (state, action) => {
      //   state.selectedEventParticipantsStatus = "succeeded";
      //   state.selected.participants = action.payload;
      // })
      // .addCase(selectedEventParticipants.rejected, (state, action) => {
      //   state.selectedEventParticipantsStatus = "failed";
      //   state.selectedEventParticipantsError = action.error.message;
      // })
      // Cases for status of postLike (pending, fulfilled, and rejected)
      .addCase(loadMoreEventComments.pending, (state, action) => {
        state.loadMoreEventCommentsStatus = "loading";
      })
      .addCase(loadMoreEventComments.fulfilled, (state, action) => {
        state.loadMoreEventCommentsStatus = "succeeded";
        //! need to do later
      })
      .addCase(loadMoreEventComments.rejected, (state, action) => {
        state.loadMoreEventCommentsStatus = "failed";
        state.loadMoreEventCommentsError = action.error.message;
      })
      // Cases for status of postLike (pending, fulfilled, and rejected)
      .addCase(loadMoreEventParticipants.pending, (state, action) => {
        state.loadMoreEventParticipantsStatus = "loading";
      })
      .addCase(loadMoreEventParticipants.fulfilled, (state, action) => {
        state.loadMoreEventParticipantsStatus = "succeeded";
        //! need to do later
      })
      .addCase(loadMoreEventParticipants.rejected, (state, action) => {
        state.loadMoreEventParticipantsStatus = "failed";
        state.loadMoreEventParticipantsError = action.error.message;
      })
      // Cases for status of postEventComment (pending, fulfilled, and rejected)
      .addCase(postEventComment.pending, (state, action) => {
        state.postEventCommentStatus = "loading";
      })
      .addCase(postEventComment.fulfilled, (state, action) => {
        state.postEventCommentStatus = "succeeded";
        state.selected.comments.unshift(action.payload);
      })
      .addCase(postEventComment.rejected, (state, action) => {
        state.postEventCommentStatus = "failed";
        state.postEventCommentError = action.error.message;
      })
      // Cases for status of postEventParticipant (pending, fulfilled, and rejected)
      .addCase(postEventParticipant.pending, (state, action) => {
        state.postEventParticipantStatus = "loading";
      })
      .addCase(postEventParticipant.fulfilled, (state, action) => {
        state.postEventParticipantStatus = "succeeded";
        state.selected.event.eventParticipants.items.unshift(action.payload);
      })
      .addCase(postEventParticipant.rejected, (state, action) => {
        state.postEventParticipantStatus = "failed";
        state.postEventParticipantError = action.error.message;
      })
      // Cases for status of removeLike (pending, fulfilled, and rejected)
      .addCase(fetchTopics.pending, (state, action) => {
        state.fetchEventsStatus = "loading";
      })
      .addCase(fetchTopics.fulfilled, (state, action) => {
        state.fetchEventsStatus = "succeeded";
        state.topics = action.payload;
      })
      .addCase(fetchTopics.rejected, (state, action) => {
        state.fetchEventsStatus = "failed";
        state.fetchTopicsError = action.error.message;
      })
      // Cases for status of postEvent (pending, fulfilled, and rejected)
      .addCase(postEvent.pending, (state, action) => {
        state.postEventStatus = "loading";
      })
      .addCase(postEvent.fulfilled, (state, action) => {
        state.postEventStatus = "succeeded";
        state.mutation.postEvent = action.payload;
      })
      .addCase(postEvent.rejected, (state, action) => {
        state.postEventStatus = "failed";
        state.postEventCommentError = action.error.message;
        state.postEventParticipantError = action.error.message;
      });
  },
});
export const { removeSelectedEvent } = eventSlice.actions;

export default eventSlice.reducer;
