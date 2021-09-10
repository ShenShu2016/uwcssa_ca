import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedSingleNews,
  removeSelectedSingleNews,
} from "../redux/actions/newsActions";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
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
  const { subject, content, image, created_by, updated_at } = singleNews;
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
        <Box>
          <Container className={classes.main}>
            <Typography variant="h4" align="center">
              {subject}
            </Typography>

            <Box>
              <Typography variant="subtitle1" className={classes.createby}>
                by {created_by}
              </Typography>
              <Typography variant="subtitle1" className={classes.createat}>
                {updated_at}
              </Typography>
              <CardMedia className={classes.media} image={image} />
              <CardContent>
                <Typography variant="subtitle1" className={classes.contentcss}>
                  {content}
                </Typography>
              </CardContent>

              <Typography
                variant="subtitle1"
                align="center"
                className={classes.buttoncss}
              >
                *任何人都可以阅读
                评论区内容，但如果要添加或者回复评论，你必须是uwcssa的注册用户。如果你还没有账户，你可以现在就创建一个（免费）。
              </Typography>
            </Box>
          </Container>
        </Box>
      )}
    </div>
  );
};
export default NewsDetail;
