import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import {
  removeSelectedArticle,
  selectedArticle,
} from "../redux/actions/articleActions";

import ArticleComments from "../components/Article/ArticleComments";
import ArticleCommentsPost from "../components/Article/ArticleDetail/ArticleCommentsPost";
import Main from "../components/Article/ArticleDetail/Main";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  bread: {
    marginTop: "4rem",
    marginLeft: "1rem",
  },
  root: {
    maxWidth: "960px",
    margin: "auto",
    paddingBlock: "3rem",
    paddingInline: "1rem",
  },
});

const ArticleDetail = ({ selectedArticle, removeSelectedArticle }) => {
  const classes = useStyles();
  const { articleId } = useParams();

  useEffect(() => {
    if (articleId && articleId !== "") {
      selectedArticle(articleId);
    }
    return () => removeSelectedArticle();
  }, [articleId]); // eslint-disable-line react-hooks/exhaustive-deps

  const article = useSelector((state) => state.article);

  return (
    <div className={classes.root}>
      {/* <Breadcrumbs aria-label="breadcrumb" className={classes.bread}>
        <Link color="inherit" href="/">
          首页
        </Link>
        <Link color="inherit" href="/article">
          新闻
        </Link>
        <Typography color="textPrimary">文章: {articleId}</Typography>
      </Breadcrumbs> */}
      <Main article={article} />
      <ArticleComments article={article} />
      <ArticleCommentsPost article={article} />
    </div>
  );
};
export default connect(null, { selectedArticle, removeSelectedArticle })(
  ArticleDetail
);
