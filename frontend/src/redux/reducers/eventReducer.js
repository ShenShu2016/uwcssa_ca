import { ActionTypes } from "../constants/event-action-types";

const initialStateEvent = {
  events: [],
  topics: [],
};

const initialStateSelectedEvent = {
  event: {},
  participants: [],
  participantsNextToken: "",
};

const initialStatePUDEvent = {
  postEvent: {},
  postPoster: {},
  postImage: {},
  updateEvent: [],
  deleteEvent: [],
};

export const eventReducer = (state = initialStateEvent, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_EVENTS:
      return { ...state, events: payload };
    case ActionTypes.SET_TOPICS:
      return { ...state, topics: payload };
    default:
      return state;
  }
};

export const selectedEventReducer = (
  state = initialStateSelectedEvent,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_EVENT:
      return { ...state, event: payload };
    case ActionTypes.SELECTED_EVENT_PARTICIPANTS:
      return {
        ...state,
        comments: payload.items,
        commentsNextToken: payload.nextToken,
      };

    case ActionTypes.REMOVE_SELECTED_EVENT:
      return initialStateSelectedEvent;
    default:
      return state;
  }
};

export const pudEventReducer = (
  state = initialStatePUDEvent,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.POST_EVENT_SUCCESS:
      return { ...state, postEvent: payload };
    case ActionTypes.POST_EVENT_FAIL:
      return { ...state, postEvent: payload };
    case ActionTypes.POST_EVENT_POSTER_SUCCESS:
      return { ...state, postPoster: payload };
    case ActionTypes.POST_EVENT_POSTER_FAIL:
      return { ...state, postPoster: payload };
    case ActionTypes.POST_EVENT_IMG_SUCCESS:
      return { ...state, postImage: payload };
    case ActionTypes.POST_EVENT_IMG_FAIL:
      return { ...state, postImage: payload };
    default:
      return state;
  }
};
