import {
  Avatar,
  Box,
  Button,
  CardActions,
  CardHeader,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import SignInRequest from "../SignInRequest";
import { makeStyles } from "@mui/styles";
import { postArticleComment } from "../../../redux/actions/articleActions";

const useStyles = makeStyles({
  root: {},
  subTitle: {
    paddingBlock: "3rem 1rem",
  },
  card: {},
});

function stringToColor(string) {
  let hash = 0;
  let i;
  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */
  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.slice(0, 1)}`,
  };
}

export default function ArticleCommentsPost({ article }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.userAuth);

  const [formData, setFormData] = useState({
    comment: "",
  });

  const { comment } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const createArticleInput = {
    content: comment,
    like: [],
    unlike: [],
    active: 1,
    articleID: article.article.id,
  };

  const postComment = (e) => {
    dispatch(postArticleComment(createArticleInput));
    setFormData({ comment: "" });
  };
  return (
    <div>
      {userInfo.isAuthenticated ? (
        <div>
          <Typography className={classes.subTitle}>发布新评论：</Typography>
          <Box className={classes.main}>
            <Grid container spacing={0}>
              <Grid item xs={"auto"}>
                <CardHeader
                  sx={{ px: 0, textDecoration: "none" }}
                  component={Link}
                  to={`/account/profile/${userInfo.user.username}`}
                  avatar={
                    <Avatar
                      {...stringAvatar(userInfo.user.username.toUpperCase())}
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
                  >
                    评论
                  </Button>
                </CardActions>
              </Grid>
            </Grid>
          </Box>
        </div>
      ) : (
        <SignInRequest />
      )}
    </div>
  );
}
