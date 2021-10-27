import {
  Avatar,
  Box,
  Button,
  CardActionArea,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
  Skeleton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ForumPostCommentsPost from "./ForumPostCommentsPost";
import Storage from "@aws-amplify/storage";
const useStyles = makeStyles({
  title: {
    marginBlock: "2rem",
  },
  content: {
    marginBlock: "2rem",
  },
});

function ForumPostMain({ forumPost, isLoading }) {
  const classes = useStyles();
  const [isReplying, setIsReplying] = useState(false);
  const replySwitch = () => setIsReplying((isReplying) => !isReplying);
  const [imageURL, setImageURL] = useState(null);
  const {
    content,
    // title,
    imagePath,
    like,
    unlike,
    createdAt,
    // updateAt,
    owner,
  } = forumPost;
  useEffect(() => {
    const getImage = async () => {
      try {
        const imageAccessURL = await Storage.get(imagePath, {
          level: "public",
          expires: 120,
          download: false,
        });
        // console.log("imageAccessURL", imageAccessURL);
        setImageURL(imageAccessURL);
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setImageURL(null);
      }
    };
    if (imagePath) {
      getImage();
    }
  }, [imagePath]);
  return (
    <div>
      {Object.keys(forumPost).length===0 ? (
        <Skeleton variant="rectangular" width={210} height={118} />
      ) : (
        <Box className={classes.main}>
          <CardHeader
            sx={{ px: 0, my: 2 }}
            avatar={
              <Avatar
                aria-label="recipe"
                className={classes.avatar}
                component={Link}
                to={`/account/profile/${owner}`}
              >
                {owner.toUpperCase().slice(0, 1)}
              </Avatar>
            }
            title={owner}
            subheader={`发布日期： ${createdAt.slice(0, 10)} ${createdAt.slice(
              11,
              19
            )}`}
          />
          <CardActionArea
            onClick={() => {
              window.open(imageURL);
            }}
          >
            <CardMedia component="img" image={imageURL} />
          </CardActionArea>
          <Divider />
          <Box sx={{ my: 2 }}>
            <Typography
              variant="body1"
              className={classes.content}
              component="span"
              style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
            >
              {content}
            </Typography>
          </Box>
          <Divider />
          <Box className={classes.buttonGroup}>
            <Button size="small" color="primary" startIcon={<ThumbUpIcon />}>
              {like.length}
            </Button>
            <Button size="small" color="primary" startIcon={<ThumbDownIcon />}>
              {unlike.length}
            </Button>
            <Button size="small" color="primary" onClick={replySwitch}>
              回复
            </Button>
            
          </Box>
          <Divider />
          <Box>
          {isReplying && <ForumPostCommentsPost forumPost={forumPost} />}
          </Box>
        </Box>
      )}
    </div>
  );
}

export default ForumPostMain;
