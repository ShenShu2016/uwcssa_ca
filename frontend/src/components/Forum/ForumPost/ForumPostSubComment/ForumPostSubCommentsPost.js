import {
  Box,
  Button,
  CardActions,
  CardHeader,
  Grid,
  // CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
// import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import CustomAvatar from "../../../CustomMUI/CustomAvatar";
import SignInRequest from "../SignInRequest";
import { postForumPostSubComment } from "../../../../redux/actions/forumAction";

const useStyles = makeStyles({
  root: {},
  subTitle: {
    paddingBlock: "3rem 1rem",
  },
  card: {},
});
export default function ForumPostSubCommentsPost({ forumPostComment }) {
  console.log(forumPostComment);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { userAuth } = useSelector((state) => state);
  const [formData, setFormData] = useState({
    comment: "",
  });
  const replyOwner = "@" + forumPostComment.owner;

  const { comment } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const createForumPostSubCommentInput = {
    content: comment,
    active: true,
    userID: userAuth.user.username,
    forumPostCommentID: forumPostComment.id,
  };
  const postComment = async (e) => {
    if (!loading) {
      setLoading(true);
      const response = await dispatch(
        postForumPostSubComment(createForumPostSubCommentInput)
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
      {userAuth.isAuthenticated ? "" : <SignInRequest />}
      <div>
        <Typography className={classes.subTitle}>
          回复
          <Button
            variant="text"
            // target="_top"
            component={Link}
            color="secondary"
            // to={`/forumSubTopic/${id}`}
          >
            @{forumPostComment.owner}
          </Button>
          评论：
        </Typography>
        <Box className={classes.main}>
          <Grid container spacing={0}>
            <Grid item xs={"auto"}>
              <CardHeader
                sx={{ px: 0 }}
                avatar={
                  <CustomAvatar
                    user={userAuth.userProfile}
                    link={userAuth.isAuthenticated}
                  />
                }
              />
            </Grid>
            <Grid item xs>
              <Box sx={{ my: 1 }}>
                <TextField
                  label={replyOwner}
                  variant="standard"
                  fullWidth
                  multiline
                  disabled={loading || !userAuth.isAuthenticated}
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
                  disabled={loading || !userAuth.isAuthenticated}
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
                  disabled={loading || !userAuth.isAuthenticated}
                >
                  评论
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
