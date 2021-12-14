import {
  Box,
  Button,
  CardActions,
  CardHeader,
  CircularProgress,
  Collapse,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CustomAvatar from "../../../CustomMUI/CustomAvatar";
import SignInRequest from "../SignInRequest";
import { green } from "@mui/material/colors";
import { postForumPostSubComment } from "../../../../redux/slice/forumSlice";

export default function ForumPostSubComment({
  comment,
  idx,
  isReplying,
  replyToUserID,
}) {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      subComment: "",
    },
  });
  console.log(replyToUserID);
  const [loading, setLoading] = useState(false);
  const { isAuthenticated, user, userProfile } = useSelector(
    (state) => state.userAuth
  );
  const onSubmit = async (e) => {
    const createForumPostSubCommentInput = {
      content: getValues("subComment"),
      active: true,
      forumPostID: comment.forumPostID,
      forumPostCommentID: comment.id,
      replyToUserID: replyToUserID,
      userID: user.username,
    };
    if (!loading) {
      setLoading(true); //开始转圈
      const response = await dispatch(
        postForumPostSubComment({ createForumPostSubCommentInput, idx })
      );
      if (response.meta.requestStatus === "fulfilled") {
        setLoading(false);
        reset();
      } else {
        setLoading(false);
      }
    }
  };
  return (
    <div>
      {isAuthenticated ? "" : <SignInRequest />}
      <Collapse in={isReplying}>
        <Grid container spacing={0}>
          <Grid item xs={"auto"}>
            <CardHeader
              sx={{ px: 0 }}
              avatar={
                <CustomAvatar user={userProfile} link={isAuthenticated} />
              }
            />
          </Grid>

          <Grid item xs>
            <Box
              component={"form"}
              onSubmit={handleSubmit(onSubmit)}
              sx={{ width: "100%" }}
            >
              <Box sx={{ my: 1 }}>
                <Controller
                  name="subComment"
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
                      error={!!errors.subComment}
                      helperText={errors.subComment ? "不能为空" : null}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            回复{replyToUserID}：
                          </InputAdornment>
                        ),
                      }}
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
                  onClick={reset}
                >
                  取消
                </Button>
                <Button
                  color="primary"
                  size="large"
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
            </Box>
          </Grid>
        </Grid>
      </Collapse>
    </div>
  );
}
