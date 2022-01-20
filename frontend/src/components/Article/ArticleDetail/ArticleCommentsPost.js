import {
  Box,
  Button,
  CardActions,
  CardHeader,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CustomAvatar from "../../CustomMUI/CustomAvatar";
import SignInRequest from "../SignInRequest";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { postComment } from "../../../redux/slice/commentSlice";

// import { postArticleComment } from "../../../redux/actions/articleActions";
// import { postArticleComment } from "../../../redux/slice/articleSlice";

const useStyles = makeStyles({
  root: {},
  subTitle: {
    paddingBlock: "3rem 1rem",
  },
  card: {},
});

export default function ArticleCommentsPost({ article }) {
  const classes = useStyles();
  const dispatch = useDispatch();
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

  const [loading, setLoading] = useState(false);
  const { isAuthenticated, user, userProfile } = useSelector(
    (state) => state.userAuth
  );
  const onSubmit = async (e) => {
    const createArticleCommentInput = {
      content: getValues("comment"),
      active: true,
      articleID: article.id,
      userID: user.username,
    };
    if (!loading) {
      setLoading(true); //开始转圈
      const response = await dispatch(
        postComment({ createArticleCommentInput })
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

      <div>
        <Typography className={classes.subTitle}>发布新评论：</Typography>
        <Box
          className={classes.main}
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
        >
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
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
