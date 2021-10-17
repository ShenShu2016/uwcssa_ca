import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
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
          <Card elevation={3} className={classes.card}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  className={classes.avatar}
                  component={Link}
                  to={`/account/profile/${userInfo.user.username}`}
                ></Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={userInfo.user.username}
            />
            <CardContent>
              <TextField
                //id="outlined-multiline-static"
                multiline
                fullWidth
                id="comment"
                name="comment"
                minRows={4}
                variant="outlined"
                value={comment}
                onChange={(e) => onChange(e)}
              />
            </CardContent>
            <CardActions>
              <Button color="primary" onClick={postComment}>
                提交
              </Button>
            </CardActions>
          </Card>
        </div>
      ) : (
        <SignInRequest />
      )}
    </div>
  );
}
