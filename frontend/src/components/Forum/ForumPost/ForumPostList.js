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
import { makeStyles } from "@mui/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
// import { API } from "aws-amplify";
import { AmplifyS3Image } from "@aws-amplify/ui-react";
// import { graphqlOperation } from "@aws-amplify/api-graphql";
import { Link } from "react-router-dom";
// import { deleteForumPost } from "../../../graphql/mutations";
import { setForumPosts } from "../../../redux/actions/forumAction";

const useStyles = makeStyles({
  root: {
    margin: "auto",
    marginTop: "4rem",
    maxWidth: "960px",
    paddingInline: "0.5rem",
  },
  title: {
    textAlign: "center",
    color: "#0D1F48",
    paddingBottom: "3rem",
  },
  paper: {
    maxWidth: "100%",
    margin: "1rem auto",
    paddingInline: "3px",
  },
  s3image: {
    width: "100%",
    // paddingInline: "1rem",
  },
});

const ForumPostList = ({ setForumPosts }) => {
  const classes = useStyles();
  useEffect(() => {
    setForumPosts();
    console.log("using effect"); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const forumPosts = useSelector((state) => state.forum.forumPosts);
  console.log(forumPosts);
  const renderList = forumPosts.map((forumPost) => {
    const {
      id,
      title,
      content,
      imagePath,
      createdAt,
      forumSubTopic,
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
              {/* {like.length} */}
            </Button>
            <Button size="small" color="primary" startIcon={<ThumbDownIcon />}>
              {/* {unlike.length} */}
            </Button>
            <Button
              size="small"
              color="primary"
              component={Link}
              to={`forumPost/${id}`}
            >
              查看更多
            </Button>
            <Button
              size="small"
              color="primary"
              component={Link}
              to={`forumPost/${id}`}
            >
              SubTopic:{forumSubTopic.name}
            </Button>
          </CardActions>
          <Grid item xs={12}>
        </Grid>
        </div>
      </Paper>
    );
  });
  return (
    <Box className={classes.root}>
      <Box>
        <Typography variant="h1" className={classes.title}>
          Forum Post
        </Typography>
        {renderList}
      </Box>
    </Box>
  );
};
export default connect(null, { setForumPosts })(ForumPostList);
