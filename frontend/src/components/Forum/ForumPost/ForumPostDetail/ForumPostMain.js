import {
  Box,
  Button,
  CardActionArea,
  CardHeader,
  Chip,
  Divider,
  Typography,
  // Skeleton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { Link } from "react-router-dom";
import CustomAvatar from "../../../CustomMUI/CustomAvatar";
import S3Image from "../../../S3/S3Image";
import React, { useState } from "react";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ForumPostCommentsPost from "./ForumPostCommentsPost";
const useStyles = makeStyles({
  title: {
    marginBlock: "2rem",
  },
  content: {
    marginBlock: "2rem",
  },
});

function ForumPostMain({ forumPost}) {
  const classes = useStyles();
  const [isReplying, setIsReplying] = useState(false);
  const replySwitch = () => setIsReplying((isReplying) => !isReplying);
  const {
    // id,
    content,
    imgS3Keys,
    createdAt,
    userID,
    tags,
    user,
  } = forumPost;
  return (
    <div>
        <Box className={classes.main}>
        <CardHeader
            sx={{ px: 0, my: 2 }}
            avatar={<CustomAvatar user={user} link={true} />}
            title={userID}
            subheader={`发布日期： ${createdAt.slice(0, 10)} ${createdAt.slice(
              11,
              19
            )}`}
          />
          {tags.map((data) => {
            return <Chip key={data} label={data} />;
          })}
          <CardActionArea>
          <S3Image S3Key={imgS3Keys[0]} style={{ width: "100%" }} />
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
              {/* {like.length} */}
            </Button>
            <Button size="small" color="primary" startIcon={<ThumbDownIcon />}>
              {/* {unlike.length} */}
            </Button>
            <Button size="small" color="primary" onClick={replySwitch}>
              评论
            </Button>
            
          </Box>
          <Divider />
          <Box>
          {isReplying && <ForumPostCommentsPost forumPost={forumPost} />}
          </Box>
        </Box>
    </div>
  );
}

export default ForumPostMain;
