import { AmplifyS3Image } from "@aws-amplify/ui-react";
import { Avatar } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  title: {
    marginBlock: "2rem",
  },
  content: {
    marginBlock: "2rem",
  },
});

function ForumPostMain({ forumPost }) {
  const classes = useStyles();
  const {
    id,
    content,
    imagePath,
    like,
    unlike,
    createdAt,
    // updateAt,
    owner,
  } = forumPost;
  return (
    <div>
      {Object.keys(forumPost).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Box className={classes.main}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}></Avatar>
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
          <CardActions>
            <Button size="small" color="primary">
              SubTopic: {forumPost.forumSubTopic.name}
            </Button>
            <Button size="small" color="primary">
              Topic: {forumPost.forumSubTopic.forumTopic.name}
            </Button>
          </CardActions>
          <Typography variant="h3" align="center" className={classes.title}>
            Title
          </Typography>

          {/* <CardMedia className={classes.media} image={image} /> */}
          <AmplifyS3Image path={imagePath} />
          <Typography
            variant="body1"
            className={classes.content}
            component="pre"
          >
            {content}
          </Typography>
          <Button size="small" color="primary" startIcon={<ThumbUpIcon />}>
            {like.length}
          </Button>
          <Button size="small" color="primary" startIcon={<ThumbDownIcon />}>
            {unlike.length}
          </Button>
          <Button size="small" color="primary">
            回复
          </Button>
        </Box>
      )}
    </div>
  );
}

export default ForumPostMain;
