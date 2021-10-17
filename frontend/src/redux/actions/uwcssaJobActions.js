import API from "@aws-amplify/api";
import { ActionTypes } from "../constants/uwcssaJob-action-types";

const departments = `query ListDepartments {
  listDepartments {
    items {
      createdAt
      email
      introduction
      leader
      like
      name
      owner
      unlike
      updatedAt
      uwcssaJobs {
        items {
          benefits
          bonus
          schedule
          createdAt
          id
          active
          imagePath
          introduction
          like
          owner
          requirements
          title
          unlike
          updatedAt
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
        imagePath
        benefits
        schedule
        like
        unlike
        active
        createdAt
        updatedAt
        department {
          name
          introduction
          email
          leader
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        owner
        uwcssaJobResumes {
          items {
            id
            name
            email
            resumeFilePath
            phone
            message
            createdAt
            updatedAt
          }
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
