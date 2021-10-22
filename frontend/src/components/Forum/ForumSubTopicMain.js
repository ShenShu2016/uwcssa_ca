import {
  Box,
  Avatar,
  Button,
  Paper,
  Grid,
  CardActions,
  CardActionArea,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { AmplifyS3Image } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    display: "flex",
    flexDirection: "row",
    //   justifyContent: "center",
  },
  forumSubTopic: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
export default function ForumSubTopicMain({ forumSubTopic }) {
  const classes = useStyles();
  // console.log(forumSubTopic);
  const { name, forumTopic, forumPosts } = forumSubTopic;
  const forumPostsData = forumPosts.items;
  const sortForumPostsData = forumPostsData.sort((a, b) => (a.createdAt > b.createdAt) ? 1:-1 ).reverse();

  // const sortForumPostsData = ;
  // console.log(sortForumPostsData);
  
  const renderList = sortForumPostsData.map((forumPost) => {
    const {
      id,
      title,
      content,
      imagePath,
      like,
      unlike,
      createdAt,
      // updateAt,
      owner,
    } = forumPost;
    return (
      <Paper className={classes.paper} key={id} elevation={5}>
        <CardHeader
          sx={{ p: 1 }}
          avatar={
            <Avatar
              aria-label="recipe"
              className={classes.avatar}
              component={Link}
              to={`/account/profile/${owner}`}
            ></Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={owner}
          subheader={`发布日期： ${createdAt.slice(0, 10)} ${createdAt.slice(
            11,
            19
          )}`}
        />
        <div>
          <Grid container columns={12} spacing={1}>
            <Grid item xs={7}>
              <CardContent sx={{ p: 1 }}>
                <Typography
                  variant="subtitle2"
                  style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ maxHeight: "300px" }}
                  style={{
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    overflow: "hidden",
                  }}
                >
                  {content}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={5}>
              <div className={classes.s3image}>
                <CardActionArea>
                  <AmplifyS3Image path={imagePath} />
                  {/* <img src={handleImage(imagePath)} alt="" /> */}
                </CardActionArea>
              </div>
            </Grid>
          </Grid>
          <CardActions>
            <Button size="small" color="primary" startIcon={<ThumbUpIcon />}>
              {like.length}
            </Button>
            <Button size="small" color="primary" startIcon={<ThumbDownIcon />}>
              {unlike.length}
            </Button>
            <Button
              size="small"
              color="primary"
              component={Link}
              to={`/forumPost/${id}`}
            >
              查看更多
            </Button>
          </CardActions>
          <Grid item xs={12}></Grid>
        </div>
      </Paper>
    );
  });
  return (
    <div className={classes.root}>
      <Box sx={{ padding: "2rem", maxwidth: "100%" }}>
        <Box
          sx={{ fontWeight: 400, marginTop: "0.8rem", marginBottom: "1rem" }}
        >
          <Typography variant="h5">
            UWCSSA/论坛/{forumTopic.name}/{name}
          </Typography>
          {/* <Typography variant="h3">{name}</Typography> */}
        </Box>
        {renderList}
      </Box>
    </div>
  );
}
