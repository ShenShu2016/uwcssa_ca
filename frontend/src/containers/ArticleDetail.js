import React, { useEffect, useState } from "react";
import {
  removeSelectedArticle,
  selectedArticle,
  selectedArticleComments,
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
  const { articleID } = useParams();
  const [canFetch, setCanFetch] = useState(true);
  const article = useSelector((state) => state.article);
  const nextToken = article.commentsNextToken;

  useEffect(() => {
    if (articleID && articleID !== "") {
      dispatch(selectedArticle(articleID));
      dispatch(selectedArticleComments(articleID));
    }
    return () => dispatch(removeSelectedArticle());
  }, [articleID, dispatch]);

  useEffect(() => {
    window.onscroll = async (e) => {
      const scrollY = window.scrollY; //当前上方高度
      const scrollTop = e.target.scrollingElement.clientHeight; //窗口高度
      const scrollHeight = e.target.scrollingElement.scrollHeight; //总高度
      // console.log(canFetch, scrollHeight - scrollY - scrollTop);
      // console.log("nextToken", nextToken);
      if (scrollY + scrollTop >= scrollHeight - 1000 && nextToken) {
        // 这个问题需要解决，为啥前面加起来有小数点。并且如果我在前面一点就想load的话这个东西会重复读
        if (canFetch) {
          setCanFetch(false);
          setCanFetch(false); //！ 问题，为什么一次 就不行，两次就可以了
          console.log("canFetch，it should be false", canFetch);
          const response = await dispatch(
            loadMoreArticleComments(articleID, nextToken)
          );
          console.log("loadMoreArticleComments response", response);
          setCanFetch(response);
          console.log(
            "loadMoreArticleComments finished,it should be true",
            canFetch
          );
        }
      }
    };
  }, [nextToken, articleID, dispatch, canFetch]);

  return (
    <div className={classes.root}>
      <Main article={article} />
      <ArticleCommentsPost article={article} />
      <ArticleComments article={article} />
    </div>
  );
}
