import {
  createArticleComment,
  createDepartment,
} from "../../graphql/mutations";
import { listDepartments, listUwcssaJobs } from "../../graphql/queries";

import API from "@aws-amplify/api";
import { ActionTypes } from "../constants/uwcssaJob-action-types";
import Storage from "@aws-amplify/storage";
import { getArticle } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { v4 as uuid } from "uuid";

export const setUwcssaJobs = () => async (dispatch) => {
  try {
    const uwcssaJobData = await API.graphql({
      query: listUwcssaJobs,
      authMode: "AWS_IAM",
    });
    console.log("uwcssaJobData", uwcssaJobData);
    dispatch({
      type: ActionTypes.SET_UWCSSAJOBS,
      payload: uwcssaJobData.data.listUwcssaJobs.items,
    });
  } catch (error) {
    console.log("error on fetching UwcssaJobs", error);
  }
};

export const setDepartments = () => async (dispatch) => {
  try {
    const departmentData = await API.graphql({
      query: listDepartments,
      authMode: "AWS_IAM",
    });
    dispatch({
      type: ActionTypes.SET_DEPARTMENTS,
      payload: departmentData.data.listDepartments.items,
    });
    console.log("departmentData", departmentData);
  } catch (error) {
    console.log("error on fetching Departments", error);
  }
};
