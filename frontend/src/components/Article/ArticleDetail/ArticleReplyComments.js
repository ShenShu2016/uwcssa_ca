import {
  Box,
  Button,
  CardActions,
  CardHeader,
  CircularProgress,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CustomAvatar from "../../CustomMUI/CustomAvatar";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { postArticleSubComment } from "../../../redux/reducers/articleSlice";

const useStyles = makeStyles({
  root: {},
  subTitle: {
    paddingBlock: "3rem 1rem",
  },
  card: {},
});

export default function ArticleReplyComments({ isReplyOpen, item, idx }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { userAuth } = useSelector((state) => state);
  const [formData, setFormData] = useState({
    comment: "",
  });

  const onChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const { comment } = formData;
  const createArticleSubCommentInput = {
    content: comment,
    active: true,
    articleCommentID: item.id,
    userID: userAuth.user.username,
  };

  const postSubComment = async (e) => {
    if (!loading) {
      setLoading(true); //开始转圈
      const response = await dispatch(
        postArticleSubComment({ createArticleSubCommentInput, idx })
      );
      if (response.meta.requestStatus === "fulfilled") {
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
      {isReplyOpen ? (
        <Box>
          <div>
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
                      label="发表公开评论..."
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
                      size="small"
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
                      size="small"
                      variant="contained"
                      onClick={postSubComment}
                      disabled={loading || !userAuth.isAuthenticated}
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
        </Box>
      ) : (
        ""
      )}
    </div>
  );
}
