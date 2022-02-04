import { Divider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  fetchFormQuestions,
  selectAllFormQuestions,
} from "../../redux/slice/formQuestionSlice";
import { useDispatch, useSelector } from "react-redux";

import CreateFormQuestion from "../../containers/test/CreateFormQuestion";

export default function FormQuestion() {
  const dispatch = useDispatch();
  const formQuestions = useSelector(selectAllFormQuestions);
  const { fetchFormQuestionsStatus } = useSelector(
    (state) => state.formQuestion
  );

  useEffect(() => {
    if (fetchFormQuestionsStatus === "idle" || undefined) {
      dispatch(fetchFormQuestions());
    }
  }, [dispatch, fetchFormQuestionsStatus]);

  return (
    <div>
      <Typography variant="h5">FormQuestion</Typography>
      <Divider variant="fullWidth" sx={{ my: 2 }} />
      <CreateFormQuestion />
      <Divider variant="fullWidth" sx={{ my: 2 }} />

      {formQuestions.map((formQuestion) => {
        return (
          <div key={formQuestion.name}>
            <Divider variant="fullWidth" sx={{ my: 2 }} />
            <Typography variant="h6">name: {formQuestion.name}</Typography>
            <Typography variant="h6">
              description: {formQuestion.description}
            </Typography>
            <Typography variant="h6">
              formType: {formQuestion.formType}
            </Typography>
            <Typography variant="h6">
              helperText: {formQuestion.helperText}
            </Typography>
            <Typography variant="h6">
              pattern: {formQuestion.pattern}
            </Typography>
            <Typography variant="h6">
              minLength: {formQuestion.minLength}
            </Typography>
            <Typography variant="h6">
              maxLength: {formQuestion.maxLength}
            </Typography>
            <Typography variant="h6">
              placeholder: {formQuestion.placeholder}
            </Typography>
            <Typography variant="h6">label: {formQuestion.label}</Typography>
            <Typography variant="h6">userID: {formQuestion.userID}</Typography>
            <Divider variant="fullWidth" sx={{ my: 2 }} />
          </div>
        );
      })}
    </div>
  );
}
