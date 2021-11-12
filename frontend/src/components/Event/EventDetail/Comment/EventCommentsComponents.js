import {
  Box,
  Button,
  CardActions,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

// import ArticleReplyComments from "./ArticleReplyComments";
// import ArticleSubComments from "./ArticleSubComments";
import CustomAvatar from "../../../CustomMUI/CustomAvatar";
import EventReplyComments from "./EventReplyComments";
import EventSubComments from "./EventSubComments";
import LikeButtonGroup from "../../../LikeButtonGroup";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import moment from "moment";

const useStyles = makeStyles({
  main: {},
});

export default function EventCommentsComponents({ comment, idx }) {
  const classes = useStyles();
  const [isReplyOpen, setIsReplyOpen] = useState(false);

  const handleSubCommentReply = () => {
    setIsReplyOpen(!isReplyOpen);
  };
  const handleClickAway = () => {
    setIsReplyOpen(false);
  };
  const { id, content, createdAt, userID, user } = comment;
  console.log("comment", comment);
  return (
    <div>
      {comment ? (
        <Box key={id} mb={2} className={classes.main}>
          <Grid container spacing={0} justifyContent="space-between">
            <Grid item xs={"auto"}>
              <CardHeader
                component={Link}
                to={`/account/profile/${userID}`}
                sx={{ p: 0, textDecoration: "none" }}
                avatar={<CustomAvatar link={false} user={user} />}
              />
            </Grid>
            <Grid item xs>
              <Box sx={{ display: "flex", mb: 1 }}>
                <Typography
                  mr={1}
                  variant="subtitle2"
                  sx={{ fontSize: "13px", color: "#030303" }}
                >
                  {userID}
                </Typography>
                <Typography variant="caption" sx={{ color: "#606060" }}>
                  {moment(createdAt).fromNow()}
                </Typography>
              </Box>
              <Box sx={{ my: 1 }}>
                <Typography
                  variant="body2"
                  component="span"
                  style={{
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    color: "#030303",
                  }}
                >
                  {content}
                </Typography>
              </Box>
              <CardActions sx={{ p: 0 }}>
                <LikeButtonGroup item={comment} />
                <Button
                  size="small"
                  color="primary"
                  onClick={(e) => handleSubCommentReply()}
                >
                  回复
                </Button>
              </CardActions>
              <Box>
                <EventReplyComments
                  item={comment}
                  isReplyOpen={isReplyOpen}
                  idx={idx}
                  handleSubCommentReply={handleSubCommentReply}
                  handleClickAway={handleClickAway}
                />
              </Box>
              <Box>
                <EventSubComments comment={comment} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        ""
      )}
    </div>
  );
}
