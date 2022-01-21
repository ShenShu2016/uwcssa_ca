import React, { useEffect } from "react";
import { Skeleton, Typography } from "@mui/material";
import {
  insertComments,
  removeAllComments,
} from "../../redux/slice/commentSlice";
import {
  selectArticleById,
  selectedArticle,
} from "../../redux/slice/articleSlice";
import { useDispatch, useSelector } from "react-redux";

import ArticleSideBar from "../../components/Article/ArticleSideBar";
import BackdropLoading from "../../components/BackdropLoading";
import { Box } from "@mui/system";
import CommentYT from "../../components/Comment/CommentYT";
import Main from "../../components/Article/ArticleDetail/Main";
import { makeStyles } from "@mui/styles";
import { removeAllSubComments } from "../../redux/slice/subCommentSlice";
import { useParams } from "react-router-dom";
import { useTitle } from "../../Hooks/useTitle";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    paddingBottom: "3rem",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "1rem",
    },
  },
  main: {
    width: "100%",
    display: "flex",
    [theme.breakpoints.down("lg")]: {
      display: "block",
    },
  },
  body: {
    maxWidth: "1100px",
    width: "100%",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
  },
}));
export default function ArticleDetail() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  useTitle(`近期新闻-${id}`);
  const { fetchArticlesStatus } = useSelector((state) => state.article);
  useEffect(() => {
    if (fetchArticlesStatus === "succeeded") {
      dispatch(selectedArticle(id));
    }
    return () => {
      dispatch(removeAllComments());
      dispatch(removeAllSubComments());
    };
  }, [id, dispatch, fetchArticlesStatus]);

  const article = useSelector((state) => selectArticleById(state, id));
  const { insertCommentsStatus } = useSelector((state) => state.comment);

  useEffect(() => {
    if (article && article.comments && insertCommentsStatus === "idle") {
      dispatch(insertComments(article.comments.items));
    }
  }, [article, dispatch, insertCommentsStatus]);

  return (
    <Box>
      {article ? (
        <div>
          <Typography
            variant="h4"
            component="h1"
            className={classes.title}
            sx={{ fontWeight: 700, color: "info.light" }}
          >
            {article.active === true ? (
              article.title
            ) : (
              <Skeleton sx={{ maxWidth: "250px", margin: "auto" }} />
            )}
          </Typography>
          <Box className={classes.main}>
            <Box className={classes.body}>
              {article.content ? (
                <Main article={article} />
              ) : (
                <Box sx={{ my: 3 }}>
                  <Skeleton variant="text" />
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton variant="rectangular" height={300} />
                </Box>
              )}
              {/* <ArticleCommentsPost id={id} />
              <ArticleComments article={article} /> */}
              <CommentYT id={id} />
            </Box>
            <Box>
              <ArticleSideBar />
            </Box>
          </Box>
        </div>
      ) : (
        <BackdropLoading />
      )}
    </Box>
  );
}
