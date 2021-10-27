import { createEvent, createEventParticipant } from "../../graphql/mutations";
import {
  eventParticipantSortByEventID,
  eventSortBySortKey,
  getEvent,
  listTopics,
} from "../../graphql/queries";

import API from "@aws-amplify/api";
import { ActionTypes } from "../constants/event-action-types";
import Storage from "@aws-amplify/storage";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { v4 as uuid } from "uuid";

export const setEvents = () => async (dispatch) => {
  try {
    const eventData = await API.graphql({
      query: eventSortBySortKey,
      variables: { ByCreatedAt: "Event", sortDirection: "DESC" },
      authMode: "AWS_IAM",
    });
    dispatch({
      type: ActionTypes.SET_EVENTS,
      payload: eventData.data.eventSortBySortKey.items,
    });
  } catch (error) {
    console.log("error on fetching Event setEvents", error);
  }
};

export const selectedEvent = (eventID) => async (dispatch) => {
  try {
    const response = await API.graphql({
      query: getEvent,
      variables: { id: eventID },
      authMode: "AWS_IAM",
    });
    dispatch({
      type: ActionTypes.SELECTED_EVENT,
      payload: response.data.getEvent,
    });
  } catch (error) {
    console.log("error on selecting Event", error);
  }
};

export const selectedEventParticipants = (eventID) => async (dispatch) => {
  console.log("selectedEventParticipants,eventID", eventID);
  try {
    const eventParticipantData = await API.graphql({
      query: eventParticipantSortByEventID,
      variables: {
        EventID: eventID,
        sortDirection: "DESC",
        filter: { active: { eq: 1 } },
        limit: 10,
      },
      authMode: "AWS_IAM",
    });
    console.log("eventParticipantData", eventParticipantData);
    dispatch({
      type: ActionTypes.SELECTED_EVENT_PARTICIPANTS,
      payload: eventParticipantData.data.eventParticipantSortByEventID,
    });
  } catch (error) {
    console.log("error on selectedEventParticipants", error);
  }
};

export const removeSelectedEvent = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.REMOVE_SELECTED_EVENT,
  });
};

export const postEventParticipant =
  (createEventParticipantInput) => async (dispatch) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createEventParticipant, {
          input: createEventParticipantInput,
        })
      );

      dispatch({
        type: ActionTypes.EVENT_PARTICIPANT_ADD_SUCCESS,
        payload: response,
      });
      console.log();
      dispatch(selectedEventParticipants(createEventParticipantInput.eventID));
    } catch (error) {
      console.log("error on adding EventParticipant", error);
      dispatch({
        type: ActionTypes.EVENT_PARTICIPANT_ADD_FAIL,
      });
    }
  };

export const setTopics = () => async (dispatch) => {
  try {
    const topicData = await API.graphql({
      query: listTopics,
      authMode: "AWS_IAM",
    });
    dispatch({
      type: ActionTypes.SET_TOPICS,
      payload: topicData.data.listTopics.items,
    });
  } catch (error) {
    console.log("error on fetching Topics", error);
  }
};

export const postEvent = (createEventInput) => async (dispatch) => {
  console.log("createEventInput", createEventInput);
  try {
    const response = await API.graphql(
      graphqlOperation(createEvent, { input: createEventInput })
    );
    dispatch({
      type: ActionTypes.POST_EVENT_SUCCESS,
      payload: response,
    });
    return {
      result: true,
      response: response,
    };
  } catch (error) {
    dispatch({
      type: ActionTypes.POST_EVENT_FAIL,
      payload: error,
    });
    return {
      result: false,
      response: error,
    };
  }
};
export const postEventPoster = (posterData) => async (dispatch) => {
  try {
    const response = await Storage.put(
      `event/${uuid()}.${posterData.name.split(".").pop()}`,
      posterData,
      { contentType: "poster/*" }
    );
    dispatch({
      type: ActionTypes.POST_EVENT_POSTER_SUCCESS,
      payload: response,
    });
    return response;
  } catch (error) {
    console.log(error);
    dispatch({
      type: ActionTypes.POST_EVENT_POSTER_FAIL,
      payload: error,
    });
  }
};

export const postEventImg = (imagData) => async (dispatch) => {
  try {
    const response = await Storage.put(
      `event/${uuid()}.${imagData.name.split(".").pop()}`,
      imagData,
      { contentType: "imag/*" }
    );
    dispatch({
      type: ActionTypes.POST_EVENT_IMG_SUCCESS,
      payload: response,
    });
    return response;
  } catch (error) {
    console.log(error);
    dispatch({
      type: ActionTypes.POST_EVENT_IMG_FAIL,
      payload: error,
    });
  }
};
