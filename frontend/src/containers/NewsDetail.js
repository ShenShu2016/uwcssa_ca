import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedSingleNews,
  removeSelectedSingleNews,
} from "../redux/actions/newsActions";
import { makeStyles } from "@material-ui/core/styles";

import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import LoginRequest from "../components/News/LoginRequest";
import NewsComments from "../components/News/NewsComments";
const useStyles = makeStyles({
  root: {
    maxWidth: "34.5rem",
  },
  media: {
    width: "100%",
    minHeight: "32rem",
    left: "39.5rem",
    top: "44rem",
    marginTop: "3.5rem",
  },
  createBy: {
    marginTop: "3rem",
  },

  contentCss: {
    marginTop: "4.5rem",
  },

  main: {
    marginTop: "15.5rem",
    marginBottom: "141.5rem",
  },
  bread: {
    marginTop: "4rem",
    marginLeft: "1rem",
  },
});

const NewsDetail = () => {
  const { newsId } = useParams();
  const classes = useStyles();
  const singleNews = useSelector((state) => state.singleNews);

  const { subject, content, image, created_by, updated_at } = singleNews;

  //Time formatting
  const timeString = Object.values({ updated_at });
  const timeString1 = timeString.toString();
  const finalTimeArt = timeString1.split(".")[0];
  const isAuthenticated = useSelector(
    (state) => state.userAuth.isAuthenticated
  );
  const dispatch = useDispatch();

  const fetchNewsDetail = async () => {
    const response = await axios
      .get(`${process.env.REACT_APP_API_URL}/news/article/${newsId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedSingleNews(response.data));
  };

  useEffect(() => {
    if (newsId && newsId !== "") fetchNewsDetail();
    return () => dispatch(removeSelectedSingleNews());
  }, [newsId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" className={classes.bread}>
        <Link color="inherit" href="/">
          首页
        </Link>
        <Link color="inherit" href="/news">
          新闻
        </Link>
        <Typography color="textPrimary">文章: {newsId}</Typography>
      </Breadcrumbs>
      {Object.keys(singleNews).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Container className={classes.main}>
          <Typography variant="h4" align="center">
            {subject}
          </Typography>
          <Typography variant="subtitle1" className={classes.createBy}>
            by {created_by}
          </Typography>
          <Typography variant="subtitle1" className={classes.creatBy}>
            {finalTimeArt}
          </Typography>
          <CardMedia className={classes.media} image={image} />
          <Typography variant="subtitle1" className={classes.contentCss}>
            {content}
          </Typography>

          <div>{isAuthenticated ? <NewsComments /> : <LoginRequest />}</div>
        </Container>
      )}
    </div>
  );
};
export default NewsDetail;
