import {
  Box,
  Button,
  CardActions,
  CardHeader,
  Chip,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";

import CustomAvatar from "../../CustomMUI/CustomAvatar";
import LikeButtonGroup from "../../LikeButtonGroup";
import React from "react";
import S3Image from "../../S3/S3Image";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: "1rem",
    width: "100%",
  },
  title: {
    marginBlock: "2rem",
  },
  content: {
    marginBlock: "2rem",
  },
  buttonGroup: {
    marginBlock: "2rem",
  },
}));

export default function Main({ article }) {
  const classes = useStyles();
  // console.log("Main", article);
  const { content, imgS3Keys, tags, topic, createdAt, user, owner } = article;

  return (
    <div className={classes.root}>
      {article.active !== true ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <Box className={classes.main}>
          <S3Image S3Key={imgS3Keys[0]} style={{ width: "100%" }} />

          <CardActions sx={{ px: 0 }}>
            <Button size="small" color="primary">
              Topic: {topic.name}
            </Button>
          </CardActions>
          <CardHeader
            sx={{ px: 0, my: 2 }}
            avatar={<CustomAvatar user={user} link={true} />}
            title={owner}
            subheader={`发布日期： ${createdAt.slice(0, 10)} ${createdAt.slice(
              11,
              19
            )}`}
          />
          {tags.map((data) => {
            return <Chip key={data} label={data} />;
          })}
          <Divider sx={{ my: 2 }} />
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
            <LikeButtonGroup item={article} />
          </Box>
        </Box>
      )}
    </div>
  );
}
