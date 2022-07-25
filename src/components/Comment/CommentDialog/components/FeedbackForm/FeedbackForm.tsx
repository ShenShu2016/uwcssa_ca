/*
 * @Author: Shen Shu
 * @Date: 2022-05-26 16:50:46
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-18 22:52:32
 * @FilePath: /uwcssa_ca/src/components/Comment/CommentDialog/components/FeedbackForm/FeedbackForm.tsx
 * @Description:
 *
 */

import * as yup from "yup";

import {
  Box,
  Button,
  Dialog,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import React from "react";
import { getOwnerUserName } from "redux/auth/authSlice";
import { postComment } from "redux/comment/commentSlice";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const validationSchema = yup.object({
  content: yup.string().trim().required("content is required."),
});
interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClose: () => void;
  open: boolean;
  commentCount?: number;
  setCommentCount?: any;
}

function FeedbackForm({
  onClose,
  open,
  commentCount,
  setCommentCount,
}: Props): JSX.Element {
  const { articleId, eventId } = useParams();
  const dispatch = useAppDispatch();
  const ownerUsername = useAppSelector(getOwnerUserName);
  const { enqueueSnackbar } = useSnackbar();

  const initialValues = {
    content: "",
  };

  const onSubmit = async (values) => {
    console.log(JSON.stringify(values));
    const { content } = values;
    const createCommentInput = {
      content,
      isDeleted: false,
      articleCommentsId: articleId,
      eventCommentsId: eventId,
      owner: ownerUsername,
    };
    console.log(createCommentInput);
    const response = await dispatch(postComment({ createCommentInput }));
    if (response.meta.requestStatus === "fulfilled") {
      onClose();
      formik.resetForm();
      setCommentCount(commentCount + 1);
      enqueueSnackbar("评论成功", { variant: "success" });
      return true;
    }
    enqueueSnackbar("评论失败", { variant: "error" });
    return false;
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth="sm"
      sx={{
        "& .MuiPaper-root": {
          borderRadius: 2,
        },
      }}
    >
      <Box paddingY={2} paddingX={4}>
        <Box paddingY={2} display="flex" justifyContent="space-between">
          <Typography variant="h5" fontWeight={700}>
            Write a comment
          </Typography>
          <Box
            component="svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={24}
            height={24}
            onClick={onClose}
            sx={{ cursor: "pointer" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </Box>
        </Box>
        <Box paddingY={2}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
                  Write your comment
                </Typography>
                <TextField
                  label="Comment *"
                  variant="outlined"
                  name="content"
                  fullWidth
                  multiline
                  rows={5}
                  value={formik.values.content}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.content && Boolean(formik.errors.content)
                  }
                  helperText={formik.touched.content && formik.errors.content}
                />
              </Grid>
              <Grid item container xs={12}>
                <Button size="large" variant="contained" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Dialog>
  );
}

export default FeedbackForm;
