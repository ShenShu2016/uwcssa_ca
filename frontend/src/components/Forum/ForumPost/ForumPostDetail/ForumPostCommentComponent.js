import {
  Box,
  Button,
  Grid,
  CardActions,
  CardHeader,
  IconButton,
  Typography,
  // Skeleton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomAvatar from "../../../CustomMUI/CustomAvatar";
import React, { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ForumPostComment from "../ForumPostSubComment/ForumPostComment";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "auto",
  },
  subTitle: {
    paddingBlock: "3rem 1rem",
  },
  cardContent: {},
  main: {},
});

export default function ForumPostCommentComponent({ comment }) {
  const classes = useStyles();
  const [isReplying, setIsReplying] = useState(false);
  const replySwitch = () => setIsReplying((isReplying) => !isReplying);
  const { id, content, createdAt, userID, user } = comment;

  return (
    <div>
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
                {/* {createdAt.slice(0, 10)} {createdAt.slice(11, 19)} */}
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
              {isReplying && <ForumPostComment comment={comment} />}
            </Box>
            <CardActions sx={{ p: 0 }}>
              <Button
                size="small"
                color="primary"
                startIcon={<ThumbUpAltOutlinedIcon />}
                sx={{ p: 0 }}
                style={{ width: "22px" }}
              >
                {/* {like.length} */}
              </Button>
              <Button
                size="small"
                color="primary"
                startIcon={<ThumbDownAltOutlinedIcon />}
              >
                {/* {unlike.length} */}
              </Button>
              {isReplying ? (
                <Button size="small" color="primary" onClick={replySwitch}>
                  收起评论
                </Button>
              ) : (
                <Button size="small" color="primary" onClick={replySwitch}>
                  评论({comment.forumPostSubComments.length})
                </Button>
              )}
              {/* <Button size="small" color="primary" onClick={replySwitch}>
                回复
              </Button> */}
              {/* {isReplying && <ForumPostComment comment={comment} />} */}
            </CardActions>
          </Grid>
          <Grid item xs={"auto"}>
            <IconButton aria-label="settings" className={classes.moreVertIcon}>
              <MoreVertIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
