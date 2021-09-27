import React, { useState } from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SignInRequest from "../SignInRequest";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { postArticleComment } from "../../../redux/actions/articleActions";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {},
  subTitle: {
    paddingBlock: "3rem 1rem",
  },
  card: {},
});
function ArticleCommentsPost({ article, postArticleComment }) {
  const classes = useStyles();
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
    articleCommentArticleId: article.id,
  };

  const postComment = (e) => {
    postArticleComment(createArticleInput);
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
                <Avatar aria-label="recipe" className={classes.avatar}></Avatar>
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

export default connect(null, { postArticleComment })(ArticleCommentsPost);
