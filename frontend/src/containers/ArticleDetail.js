import React, { useEffect } from "react";
import {
  removeSelectedArticle,
  selectedArticle,
} from "../redux/actions/articleActions";
import { useDispatch, useSelector } from "react-redux";

import ArticleComments from "../components/Article/ArticleComments";
import ArticleCommentsPost from "../components/Article/ArticleDetail/ArticleCommentsPost";
import Main from "../components/Article/ArticleDetail/Main";
import { loadMoreArticleComments } from "../redux/actions/articleActions";
import { makeStyles } from "@mui/styles";
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
  const article = useSelector((state) => state.article);
  const nextToken = article.commentsNextToken;

  useEffect(() => {
    if (articleId && articleId !== "") {
      dispatch(selectedArticle(articleId));
    }
    return () => dispatch(removeSelectedArticle());
  }, [articleId, dispatch]);

  useEffect(() => {
    window.onscroll = (e) => {
      const scrollY = window.scrollY; //当前上方高度
      const scrollTop = e.target.scrollingElement.clientHeight; //窗口高度
      const scrollHeight = e.target.scrollingElement.scrollHeight; //总高度
      // console.log(scrollY, scrollTop, scrollHeight);
      // console.log("nextToken", nextToken);
      if (scrollY + scrollTop === scrollHeight) {
        if (nextToken) {
          console.log("到底了");
          dispatch(loadMoreArticleComments(articleId, nextToken));
        }
      }
    };
  }, [nextToken, articleId, dispatch]);
  // console.log("state.article", article);

  return (
    <div className={classes.root}>
      <Main article={article} />
      <ArticleCommentsPost article={article} />
      <ArticleComments article={article} />
    </div>
  );
}
