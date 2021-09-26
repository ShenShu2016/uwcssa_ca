import React, { useEffect } from "react";
import {
  removeSelectedArticle,
  selectedArticle,
} from "../redux/actions/articleActions";

import { AmplifyS3Image } from "@aws-amplify/ui-react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Container } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import LoginRequest from "../components/Article/LoginRequest";
// import NewsComments from "../components/Article/NewsComments";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

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

const ArticleDetail = ({ selectedArticle, removeSelectedArticle }) => {
  const classes = useStyles();
  const { articleId } = useParams();

  useEffect(() => {
    if (articleId && articleId !== "") selectedArticle(articleId);
    return () => removeSelectedArticle();
  }, [articleId]); // eslint-disable-line react-hooks/exhaustive-deps

  const article = useSelector((state) => state.article);
  const isAuthenticated = useSelector(
    (state) => state.userAuth.isAuthenticated
  );
  const { title, content, imagePath, owner, updatedAt } = article;

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" className={classes.bread}>
        <Link color="inherit" href="/">
          首页
        </Link>
        <Link color="inherit" href="/article">
          新闻
        </Link>
        <Typography color="textPrimary">文章: {articleId}</Typography>
      </Breadcrumbs>
      {Object.keys(article).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Container className={classes.main}>
          <Typography variant="h4" align="center">
            {title}
          </Typography>
          <Typography variant="subtitle1" className={classes.createBy}>
            by {owner}
          </Typography>
          <Typography variant="subtitle1" className={classes.creatBy}>
            {Object.values({ updatedAt }).toString().split("T")[0]}
          </Typography>
          {/* <CardMedia className={classes.media} image={image} /> */}
          <AmplifyS3Image path={imagePath} className={classes.s3image} />
          <Typography variant="subtitle1" className={classes.contentCss}>
            {content}
          </Typography>

          <div>{isAuthenticated ? "<NewsComments /> " : <LoginRequest />}</div>
        </Container>
      )}
    </div>
  );
};
export default connect(null, { selectedArticle, removeSelectedArticle })(
  ArticleDetail
);
