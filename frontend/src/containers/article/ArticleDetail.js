import React, { useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import { Skeleton, Typography } from "@mui/material";
import {
  removeSelectedArticle,
  selectedArticle,
} from "../../redux/reducers/articleSlice";
import { useDispatch, useSelector } from "react-redux";

import ArticleComments from "../../components/Article/ArticleDetail/ArticleComments";
import ArticleCommentsPost from "../../components/Article/ArticleDetail/ArticleCommentsPost";
import ArticleSideBar from "../../components/Article/ArticleSideBar";
import { Box } from "@mui/system";
import Main from "../../components/Article/ArticleDetail/Main";
import { makeStyles } from "@mui/styles";
import { useTitle } from "../../Hooks/useTitle";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    color: "#0D1F48",
    paddingBottom: "3rem",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "1rem",
    },
  },
  main: {
    display: "flex",
    [theme.breakpoints.down("lg")]: {
      display: "block",
    },
  },
  body: {
    maxWidth: "1100px",
    width: "100%",
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
    }
    return () => dispatch(removeSelectedArticle());
  }, [articleID, dispatch]);

  const { article } = useSelector((state) => state.article.selected);
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
    <Box>
      {article.active === false ? (
        <Redirect to="/" />
      ) : (
        <div>
          <Typography
            variant="h4"
            component="h1"
            className={classes.title}
            sx={{ fontWeight: 700 }}
          >
            {article.active === true ? (
              article.title
            ) : (
              <Skeleton sx={{ maxWidth: "250px", margin: "auto" }} />
            )}
          </Typography>
          <Box className={classes.main}>
            <Box className={classes.body}>
              {article.active === true ? (
                <Main article={article} />
              ) : (
                <Box sx={{ my: 3 }}>
                  <Skeleton variant="text" />
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton variant="rectangular" height={300} />
                </Box>
              )}
              <ArticleCommentsPost article={article} />
              <ArticleComments article={article} />
            </Box>
            <Box>
              <ArticleSideBar />
            </Box>
          </Box>
        </div>
      )}
    </Box>
  );
}
