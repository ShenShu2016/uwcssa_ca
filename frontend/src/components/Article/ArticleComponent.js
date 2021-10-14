import "./ArticleComponent.css";

import {
  Avatar,
  Box,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";

import { AmplifyS3Image } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import Storage from "@aws-amplify/storage";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: "4rem",
    maxWidth: "960px",
    paddingInline: "1rem",
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
}));

export default function ArticleComponent() {
  const articles = useSelector((state) => state.allArticles.articles);
  const classes = useStyles();

  // const handleImage = async (imagePath) => {
  //   try {
  //     const imageAccessURL = await Storage.get(imagePath, {
  //       level: "public",
  //       expires: 120,
  //       download: false,
  //     });
  //     console.log("imageAccessURL", imageAccessURL);
  //     return imageAccessURL;
  //   } catch (error) {
  //     console.error("error accessing the Image from s3", error);
  //   }
  // };

  const renderList = articles.map((article) => {
    const {
      id,
      content,
      title,
      imagePath,
      like,
      unlike,
      createdAt,
      // updateAt,
      owner,
    } = article;

    return (
      <Paper className={classes.paper} key={id} elevation={5}>
        <CardHeader
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
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {content.slice(0, 50)}
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
              to={`article/${id}`}
            >
              查看更多
            </Button>
          </CardActions>
        </div>
      </Paper>
    );
  });

  return (
    <Box className={classes.root}>
      <Box>
        <Typography variant="h3" className={classes.title}>
          近期新闻
        </Typography>
        {renderList}
      </Box>
    </Box>
  );
}
