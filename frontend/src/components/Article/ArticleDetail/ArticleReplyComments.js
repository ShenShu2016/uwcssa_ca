import {
  Box,
  Button,
  CardActions,
  CardHeader,
  CircularProgress,
  Collapse,
  Grid,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CustomAvatar from "../../CustomMUI/CustomAvatar";
import { green } from "@mui/material/colors";
import { postSubComment } from "../../../redux/slice/subCommentSlice";

export default function ArticleReplyComments({
  isReplyOpen,
  item,
  idx,
  handleSubCommentReply,
}) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { isAuthenticated, user, userProfile } = useSelector(
    (state) => state.userAuth
  );
  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      comment: "",
    },
  });

  // const onChange = (e) => {
  //   e.preventDefault();
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  // const { comment } = formData;

  const onSubmit = async (e) => {
    const createArticleSubCommentInput = {
      content: getValues("comment"),
      active: true,
      articleCommentID: item.id,
      userID: user.username,
    };
    if (!loading) {
      setLoading(true); //开始转圈
      const response = await dispatch(
        postSubComment({ createArticleSubCommentInput, idx })
      );
      if (response.meta.requestStatus === "fulfilled") {
        setLoading(false);
        handleSubCommentReply();
        reset();
      } else {
        setLoading(false);
      }
    }
  };

  return (
    <Collapse in={isReplyOpen}>
      <Grid
        container
        spacing={0}
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid item xs={"auto"}>
          <CardHeader
            sx={{ px: 0 }}
            avatar={<CustomAvatar user={userProfile} link={isAuthenticated} />}
          />
        </Grid>
        <Grid item xs>
          <Box sx={{ my: 1 }}>
            <Controller
              name="comment"
              control={control}
              rules={{
                required: true,
                minLength: 1,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="发表公开评论..."
                  variant="standard"
                  fullWidth
                  multiline
                  disabled={loading || !isAuthenticated}
                  onChange={onChange}
                  value={value}
                  error={!!errors.comment}
                  helperText={errors.comment ? "不能为空" : null}
                />
              )}
            />
          </Box>
          <CardActions sx={{ p: 0, justifyContent: "flex-end" }}>
            <Button
              color="primary"
              size="large"
              variant="text"
              disabled={loading || !isAuthenticated}
              onClick={handleSubCommentReply}
            >
              取消
            </Button>
            <Button
              color="primary"
              size="small"
              variant="contained"
              type="submit"
              disabled={loading || !isAuthenticated}
            >
              评论
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: green[500],
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-0.75rem",
                    marginLeft: "-0.75rem",
                  }}
                />
              )}
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Collapse>
  );
}
