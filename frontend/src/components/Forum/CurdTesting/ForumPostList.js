import { AmplifyS3Image } from "@aws-amplify/ui-react";
import { Avatar } from "@material-ui/core";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React, { useEffect } from "react";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, connect } from "react-redux";
import { setForumPosts } from "../../../redux/actions/forumAction";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { API } from "aws-amplify";
import {
  deleteForumPost,
} from "../../../graphql/mutations";

const useStyles = makeStyles({
  root: {
    justifyContent: "center",
    margin: "auto",
    maxWidth: "960px",
    paddingInline: "1rem",
  },
  title: {
    textAlign: "center",
  },
  paper: {
    maxWidth: "100%",
    margin: "2rem auto",
  },
  s3image: {},
});


const ForumPostList = ({ setForumPosts }) => {
  const classes = useStyles();
  useEffect(() => {
    setForumPosts();
    console.log("using effect"); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const forumPosts = useSelector((state) => state.forum.forumPosts);
  console.log(forumPosts);
  //Delete the forum topic
  const delForumPost = async (forumPostId) => {
    const {id} = {id:forumPostId};
    console.log("DelForumTopicId", id);
    const delForumPostInput = {
      id,
    };
    await API.graphql(
      graphqlOperation(deleteForumPost, { input: delForumPostInput })
    );
  };
  const renderList = forumPosts.map((forumPost) => {
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
      <Card className={classes.paper} key={id} elevation={5}>
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
            Forum SubTopic: {forumPost.forumSubTopic.name}
          </Button>
        </CardActions>
        <CardActionArea>
          <CardContent>
            <AmplifyS3Image path={imagePath} className={classes.s3image} />
          </CardContent>
        </CardActionArea>
        <CardContent>
          <Typography
            variant="body1"
            noWrap
            color="textSecondary"
            component="p"
          >
            {content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" startIcon={<ThumbUpIcon />}>
            {like.length}
          </Button>
          <Button size="small" color="primary" startIcon={<ThumbDownIcon />}>
            {unlike.length}
          </Button>
          <Button size="small" color="primary">
            回复: {}
          </Button>
        </CardActions>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button
            variant="contained"
            component={Link}
            //onClick={delForumPost(id)}
            color="primary"
          >
            删除Forum Post
          </Button>
          <Button
            size="small"
            color="primary"
            component={Link}
            to={`forumPost/${id}`}
          >
            查看更多
          </Button>
        </CardActions>
      </Card>
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