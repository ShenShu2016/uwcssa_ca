import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // Grid,
  // Skeleton,
  // Breadcrumbs,
  Box,
  Button,
  Typography,
  LinearProgress,
} from "@mui/material";
// import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import {
  loadMoreForumPostCommentSubComments,
  removeSelectedForumPostComment,
  selectedForumPostComment,
  selectedForumPostCommentSubComments,
} from "../../../../redux/actions/forumAction";
import ForumPostCommentSubComments from "./ForumPostCommentSubComments";
import ForumPostSubCommentsPost from "./ForumPostSubCommentsPost";

const useStyles = makeStyles({
  title: {
    marginBlock: "2rem",
  },
  content: {
    marginBlock: "2rem",
  },
});

export default function ForumPostComment({ comment }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [canFetch, setCanFetch] = useState(true);
  const [isReplying, setIsReplying] = useState(true);
  setIsReplying(true);
  const [isLoading, setIsLoading] = useState(true);
  const loadMoreComments = () => setCanFetch(true);
  console.log(comment.id);
  // const [forumPostCommentID, setForumPostCommentID] = useState();
  // setForumPostCommentID(id);
  const forumPostComment = useSelector((state) => state.forumPostComment);
  console.log(forumPostComment.subComments);
  const nextToken = forumPostComment.subCommentsNextToken;
  console.log(nextToken);
  useEffect(() => {
    async function fetchData() {
      console.log(comment.id);
      if (comment.id && comment.id !== "") {
        const response = await dispatch(selectedForumPostComment(comment.id));
        await dispatch(selectedForumPostCommentSubComments(comment.id));
        setIsLoading(!response);
      }
      console.log(isLoading);
    }
    fetchData();
    return () => dispatch(removeSelectedForumPostComment);
  }, [comment.id, dispatch, isLoading]);

  useEffect(() => {
    // console.log("start load data")
    async function loadMoreData(nextToken) {
      // window.onscroll = async (e) => {
      //   const scrollY = window.scrollY; //当前上方高度
      //   const scrollTop = e.target.scrollingElement.clientHeight; //窗口高度
      //   const scrollHeight = e.target.scrollingElement.scrollHeight; //总高度
      // console.log(canFetch, scrollHeight - scrollY - scrollTop);
      // console.log("nextToken", nextToken);
      if (canFetch && nextToken) {
        // 这个问题需要解决，为啥前面加起来有小数点。并且如果我在前面一点就想load的话这个东西会重复读
        setCanFetch(false);
        // setCanFetch(false); //！ 问题，为什么一次 就不行，两次就可以了
        console.log("canFetch，it should be false", canFetch);
        const response = await dispatch(
          loadMoreForumPostCommentSubComments(comment.id, nextToken)
        );
        setCanFetch(response);
        setIsLoading(!response);
        // console.log(response);
        // console.log(canFetch);
      }
    }
    loadMoreData();
  }, [nextToken, comment.id, dispatch, canFetch]);
  return (
    <div>
      <div>
        {Object.keys(forumPostComment).length === 0 ? (
          "...loading"
        ) : (
          <Box>
            <ForumPostCommentSubComments
              subComments={forumPostComment.subComments}
              subCommentsNextToken={forumPostComment.subCommentsNextToken}
            />
            <Box className="moreCommentsStatus">
              {nextToken ? (
                <Box classes={classes.content}>
                  <Typography
                    variant="h5"
                    color="primary"
                    align="center"
                    sx={{ my: 3 }}
                  >
                    <Button
                      size="small"
                      color="primary"
                      onClick={loadMoreComments}
                    >
                      加载评论
                    </Button>
                  </Typography>
                  <LinearProgress />
                </Box>
              ) : (
                <Typography variant="h5" align="center" sx={{ my: 3 }}>
                  已经到达底部
                </Typography>
              )}
            </Box>
          </Box>
        )}

        <Box>
          {isReplying && (
            <ForumPostSubCommentsPost forumPostComment={comment} />
          )}
        </Box>
      </div>
    </div>
  );
}
