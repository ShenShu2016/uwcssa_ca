import React, { useEffect } from "react";
import {
  removeSelectedArticle,
  selectedArticle,
} from "../redux/actions/articleActions";
import { useDispatch, useSelector } from "react-redux";

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
export default function ArticleDetail() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { articleId } = useParams();

  useEffect(() => {
    if (articleId && articleId !== "") {
      dispatch(selectedArticle(articleId));
    }
    return () => dispatch(removeSelectedArticle());
  }, [articleId]); // eslint-disable-line react-hooks/exhaustive-deps

  const article = useSelector((state) => state.article);

  return (
    <div className={classes.root}>
      <Main article={article} />
      <ArticleComments article={article} />
      <ArticleCommentsPost article={article} />
    </div>
  );
}
