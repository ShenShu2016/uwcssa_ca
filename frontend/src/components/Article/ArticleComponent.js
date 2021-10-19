import "./ArticleComponent.css";

import {
  Avatar,
  Box,
  CardActionArea,
  CardHeader,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";

// import Storage from "@aws-amplify/storage";

const useStyles = makeStyles((theme) => ({
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
  paper: {},
  content: {
    maxHeight: "200px",
  },
  s3image: {
    width: "162px",
    height: "162px",
    borderRadius: "8px",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "112px",
      height: "112px",
      marginTop: "2.5rem",
    },
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
      <Paper
        key={id}
        elevation={0}
        variant="outlined"
        sx={{
          maxWidth: "100%",
          margin: "1rem auto",
          padding: "1rem",
          maxHeight: "255px",
          borderRadius: "8px",
          border: "1px solid #dfe1e5",
        }}
      >
        <Grid container spacing={1} sx={{ height: "100%" }}>
          <Grid item xs sx={{ p: 0 }}>
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              alignItems="flex-start"
              sx={{ height: "100%" }}
            >
              <Grid item xs={"auto"} sx={{ paddingBottom: "0.5rem" }}>
                <CardHeader
                  sx={{ p: 0 }}
                  avatar={
                    <Avatar
                      aria-label="recipe"
                      className={classes.avatar}
                      component={Link}
                      to={`/account/profile/${owner}`}
                      sx={{ width: 16, height: 16 }}
                      variant="square"
                    >
                      {owner.toUpperCase().slice(0, 1)}
                    </Avatar>
                  }
                  title={owner}
                />
              </Grid>
              <Grid item xs={"auto"} sx={{ marginBottom: "0.5rem" }}>
                <div style={{ maxHeight: "48px", overflow: "hidden" }}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      fontSize: "18px",
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                      lineHeight: "1.3em",
                      color: "#202124",
                    }}
                  >
                    {title}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs>
                <div style={{ maxHeight: "80px", overflow: "hidden" }}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{
                      wordBreak: "break-word",
                      overflow: "hidden",
                    }}
                  >
                    {content}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={"auto"} sx={{ marginTop: "0.5rem" }}>
                <Typography variant="overline" color="textSecondary">
                  {createdAt.slice(0, 10)} {createdAt.slice(11, 19)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={"auto"}>
            <div>
              <CardActionArea>
                {/* <AmplifyS3Image path={imagePath} /> */}
                <img
                  src="https://img.yxwoo.com:4433/uploads/images/20200709/20200709172333_87131.png"
                  alt=""
                  className={classes.s3image}
                />
              </CardActionArea>
            </div>
          </Grid>
        </Grid>
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
