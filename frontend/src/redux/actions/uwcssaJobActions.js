import API from "@aws-amplify/api";
import { ActionTypes } from "../constants/uwcssaJob-action-types";

const departments = `query ListDepartments {
  listDepartments {
    items {
      id
      name
      introduction
      email
      leader
      userID
      uwcssaJobs {
        items {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
          benefits
          schedule
          like
          unlike
          active
          createdAt
          updatedAt
          departmentID
        }
      }
    }
  }
}`;

export const listUwcssaJobs = `query ListUwcssaJobs {
    listUwcssaJobs {
      items {
        id
        introduction
        title
        requirements
        bonus
        imgS3Key
        benefits
        schedule
        like
        unlike
        active
        createdAt
        updatedAt
        departmentID
        userID
        uwcssaJobResumes {
          items {
            id
            name
            email
            resumeFileS3Key
            phone
            message
            createdAt
            updatedAt
            uwcssaJobID
            userID
            uwcssaJobResumeStatus
          }
        }
        department {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
      }
    }
  }
`;

export const setUwcssaJobs = () => async (dispatch) => {
  try {
    const uwcssaJobData = await API.graphql({
      query: listUwcssaJobs,
      authMode: "AWS_IAM",
    });
    dispatch({
      type: ActionTypes.SET_UWCSSA_JOBS,
      payload: uwcssaJobData.data.listUwcssaJobs.items,
    });
  } catch (error) {
    console.log("error on fetching UwcssaJobs", error);
  }
};

export const setDepartments = () => async (dispatch) => {
  try {
    const departmentData = await API.graphql({
      query: departments,
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
