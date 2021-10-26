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
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CustomAvatar from "../../CustomMUI/CustomAvatar";
import SignInRequest from "../SignInRequest";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { postArticleComment } from "../../../redux/actions/articleActions";

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
  const [loading, setLoading] = useState(false);
  const userInfo = useSelector((state) => state.userAuth);

  const [formData, setFormData] = useState({
    comment: "",
  });

  const { comment } = formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const createArticleCommentInput = {
    content: comment,
    like: [],
    unlike: [],
    active: 1,
    articleID: article.id,
  };

  const postComment = async (e) => {
    if (!loading) {
      setLoading(true); //开始转圈
      const response = await dispatch(
        postArticleComment(createArticleCommentInput)
      );
      if (response.result) {
        setLoading(false);
        setFormData({
          comment: "",
        });
      } else {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      {userInfo.isAuthenticated ? "" : <SignInRequest />}

      <div>
        <Typography className={classes.subTitle}>发布新评论：</Typography>
        <Box className={classes.main}>
          <Grid container spacing={0}>
            <Grid item xs={"auto"}>
              <CardHeader
                sx={{ px: 0 }}
                avatar={
                  <CustomAvatar
                    username={userInfo.user.username}
                    link={userInfo.isAuthenticated}
                  />
                }
              />
            </Grid>
            <Grid item xs>
              <Box sx={{ my: 1 }}>
                <TextField
                  label="发表公开评论..."
                  variant="standard"
                  fullWidth
                  multiline
                  disabled={loading || !userInfo.isAuthenticated}
                  id="comment"
                  name="comment"
                  value={comment}
                  onChange={(e) => onChange(e)}
                />
              </Box>
              <CardActions sx={{ p: 0, justifyContent: "flex-end" }}>
                <Button
                  color="primary"
                  size="large"
                  variant="text"
                  disabled={loading || !userInfo.isAuthenticated}
                  onClick={() => {
                    setFormData({
                      comment: "",
                    });
                  }}
                >
                  取消
                </Button>
                <Button
                  color="primary"
                  size="large"
                  variant="contained"
                  onClick={postComment}
                  disabled={loading || !userInfo.isAuthenticated}
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
