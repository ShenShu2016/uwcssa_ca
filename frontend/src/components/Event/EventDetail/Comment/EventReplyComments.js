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
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CustomAvatar from "../../../CustomMUI/CustomAvatar";
import { green } from "@mui/material/colors";
// import { postArticleSubComment } from "../../../redux/reducers/articleSlice";
import { postEventSubComment } from "../../../../redux/reducers/eventSlice";

export default function EventReplyComments({
  isReplyOpen,
  item,
  idx,
  handleSubCommentReply,
}) {
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
  const createEventSubCommentInput = {
    content: comment,
    active: true,
    eventCommentID: item.id,
    userID: userAuth.user.username,
  };

  const postSubComment = async (e) => {
    if (!loading) {
      setLoading(true); //开始转圈
      const response = await dispatch(
        postEventSubComment({ createEventSubCommentInput, idx })
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
    <Collapse in={isReplyOpen}>
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
                handleSubCommentReply();
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
    </Collapse>
  );
}
