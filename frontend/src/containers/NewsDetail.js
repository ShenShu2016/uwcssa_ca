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
    maxWidth: 345,
  },
  media: {
    width: "100%",
    minHeight: 320,
    left: 395,
    top: 442,
    marginTop: 36,
  },
  createby: {
    marginTop: 28,
  },
  createat: {
    marginTop: 29,
  },
  contentcss: {
    marginTop: 44,
  },
  buttoncss: {
    marginTop: 64,
  },
  main: {
    marginTop: 157,
    marginBottom: 1413,
  },
  breadcss: {
    marginTop: 42,
    marginLeft: "1rem",
  },
});

const NewsDetail = () => {
  const { newsId } = useParams();
  const classes = useStyles();
  const singleNews = useSelector((state) => state.singleNews);

  console.log("aaa", singleNews);
  const { subject, content, image, created_by, updated_at } = singleNews;
  const isAuthenticated = useSelector(
    (state) => state.userAuth.isAuthenticated
  );
  const dispatch = useDispatch();

  const fetchNewsDetail = async () => {
    const response = await axios
      .get(`https://api.uwcssa.ca/news/article/${newsId}`)
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
      <Breadcrumbs aria-label="breadcrumb" className={classes.breadcss}>
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
          <Typography variant="subtitle1" className={classes.createby}>
            by {created_by}
          </Typography>
          <Typography variant="subtitle1" className={classes.createat}>
            {updated_at}
          </Typography>
          <CardMedia className={classes.media} image={image} />
          <Typography variant="subtitle1" className={classes.contentcss}>
            {content}
          </Typography>
          <div>{isAuthenticated ? null : <LoginRequest />}</div>
          <div>
            <NewsComments />
          </div>
        </Container>
      )}
    </div>
  );
};
export default NewsDetail;
