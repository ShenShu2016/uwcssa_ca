import React, { useEffect } from "react";
// import {
//   removeSelectedArticle,
//   selectedArticle,
//   selectedArticleComments,
// } from "../../redux/actions/articleActions";
import {
  removeSelectedArticle,
  selectedArticle,
  selectedArticleComments,
} from "../../redux/reducers/articleSlice";
import { useDispatch, useSelector } from "react-redux";

import ArticleComments from "../../components/Article/ArticleComments";
import ArticleCommentsPost from "../../components/Article/ArticleDetail/ArticleCommentsPost";
import ArticleSideBar from "../../components/Article/ArticleSideBar";
import { Box } from "@mui/system";
import Main from "../../components/Article/ArticleDetail/Main";
import { Typography } from "@mui/material";
// import { loadMoreArticleComments } from "../redux/actions/articleActions";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import { useTitle } from "../../Hooks/useTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    paddingBlock: "3rem",
    maxWidth: "1536px",
    paddingInline: "3rem",
    [theme.breakpoints.down("sm")]: {
      paddingInline: "0.5rem",
    },
  },
  title: {
    textAlign: "center",
    color: "#0D1F48",
    paddingBottom: "3rem",
  },
  main: {
    display: "flex",
    [theme.breakpoints.down("lg")]: {
      display: "block",
    },
  },
  body: {
    maxWidth: "1100px",
    [theme.breakpoints.down("lg")]: {
      maxWidth: "100%",
    },
  },
}));
export default function ArticleDetail() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { articleID } = useParams();

  useEffect(() => {
    if (articleID && articleID !== "") {
      dispatch(selectedArticle({ articleID }));
      dispatch(selectedArticleComments({ articleID }));
    }
    return () => dispatch(removeSelectedArticle());
  }, [articleID, dispatch]);

  const { article, comments } = useSelector((state) => state.article.selected);
  useTitle(article.title);
  // useEffect(() => {
  //   window.onscroll = async (e) => {
  //     const scrollY = window.scrollY; //当前上方高度
  //     const scrollTop = e.target.scrollingElement.clientHeight; //窗口高度
  //     const scrollHeight = e.target.scrollingElement.scrollHeight; //总高度
  //     // console.log(canFetch, scrollHeight - scrollY - scrollTop);
  //     // console.log("nextToken", nextToken);
  //     if (scrollY + scrollTop >= scrollHeight - 1000 && nextToken) {
  //       // 这个问题需要解决，为啥前面加起来有小数点。并且如果我在前面一点就想load的话这个东西会重复读
  //       if (canFetch) {
  //         setCanFetch(false);
  //         setCanFetch(false); //！ 问题，为什么一次 就不行，两次就可以了
  //         // console.log("canFetch，it should be false", canFetch);
  //         const response = await dispatch(
  //           loadMoreArticleComments(articleID, nextToken)
  //         );
  //         // console.log("loadMoreArticleComments response", response);
  //         setCanFetch(response);
  //         // console.log(
  //         //   "loadMoreArticleComments finished,it should be true",
  //         //   canFetch
  //         // );
  //       }
  //     }
  //   };
  // }, [nextToken, articleID, dispatch, canFetch]);

  return (
    <div className={classes.root}>
      <Typography
        variant="h4"
        className={classes.title}
        sx={{ fontWeight: 700 }}
      >
        {article.title}
      </Typography>
      <Box className={classes.main}>
        <Box className={classes.body}>
          <Main article={article} />
          <ArticleCommentsPost article={article} />
          <ArticleComments comments={comments} />
        </Box>
        <Box>
          <ArticleSideBar />
        </Box>
      </Box>
    </div>
  );
}
