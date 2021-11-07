import { ActionTypes } from "../constants/event-action-types";

const initialState = {
  events: [],
  topics: [],
  selected: {
    event: {},
    comments: [],
    commentsNextToken: "",
    participants: [],
    participantsNextToken: "",
  },
  mutation: {
    postEvent: {},
    updateEvent: [],
    deleteEvent: [],
  },
};

export const eventReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_EVENTS:
      return { ...state, events: payload };
    case ActionTypes.SET_TOPICS:
      return { ...state, topics: payload };

    case ActionTypes.SELECTED_EVENT:
      return { ...state, selected: { ...state.selected, event: payload } };
    case ActionTypes.SELECTED_EVENT_PARTICIPANTS:
      return {
        ...state,
        selected: {
          ...state.selected,
          participants: payload.items,
          participantsNextToken: payload.nextToken,
        },
      };
    case ActionTypes.SELECTED_EVENT_COMMENTS:
      return {
        ...state,
        selected: {
          ...state.selected,
          comments: payload.items,
          commentsNextToken: payload.nextToken,
        },
      };
    case ActionTypes.EVENT_COMMENT_POST_SUCCESS:
      return {
        ...state,
        selected: {
          ...state.selected,
          comments: [...payload, ...state.selected.comments],
        },
      };
    case ActionTypes.LOAD_MORE_EVENT_COMMENTS:
      return {
        ...state,
        selected: {
          ...state.selected,
          comments: [...state.selected.comments, ...payload.items],
          commentsNextToken: payload.nextToken,
        },
      };
    case ActionTypes.EVENT_PARTICIPANT_POST_SUCCESS:
      return {
        ...state,
        selected: {
          ...state.selected,
          participants: [...payload, ...state.selected.participants],
        },
      };
    case ActionTypes.REMOVE_SELECTED_EVENT:
      return {
        ...state,
        selected: {
          event: {},
          participants: [],
          participantsNextToken: "",
        },
      };
    case ActionTypes.POST_EVENT_SUCCESS:
      return {
        ...state,
        mutation: { ...state.mutation, postEvent: payload },
      };
    case ActionTypes.POST_EVENT_FAIL:
      return {
        ...state,
        mutation: { ...state.mutation, postEvent: payload },
      };
    default:
      return state;
  }
};
