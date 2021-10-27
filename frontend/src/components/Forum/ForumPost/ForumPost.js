import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Skeleton,
  Breadcrumbs,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  loadMoreForumPostComments,
  removeSelectedForumPost,
  selectedForumPost,
  selectedForumPostComments,
} from "../../../redux/actions/forumAction";
import ForumPostComments from "./ForumPostDetail/ForumPostComments";
// import ForumPostCommentsPost from "../ForumPostDetail/ForumPostCommentsPost";
import ForumAdSide from "../ForumAdSide";
import ForumPostMain from "./ForumPostDetail/ForumPostMain";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: "960px",
    margin: "auto",
    paddingBlock: "3rem",
    paddingInline: "1rem",
  },
});

export default function ForumPost() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { forumPostID } = useParams();
  const [canFetch, setCanFetch] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const forumPost = useSelector((state) => state.forumPost);
  const nextToken = forumPost.commentsNextToken;

  useEffect(() => {
    async function fetchData() {
      console.log(forumPostID);
      if (forumPostID && forumPostID !== "") {
        const response = await dispatch(selectedForumPost(forumPostID));
        await dispatch(selectedForumPostComments(forumPostID));
        setIsLoading(!response);
      }
      console.log(isLoading);
    }
    fetchData();
    return () => dispatch(removeSelectedForumPost());
  }, [forumPostID, dispatch, isLoading]);

  useEffect(() => {
    // console.log("start load data")
    window.onscroll = async (e) => {
      const scrollY = window.scrollY; //当前上方高度
      const scrollTop = e.target.scrollingElement.clientHeight; //窗口高度
      const scrollHeight = e.target.scrollingElement.scrollHeight; //总高度
      // console.log(canFetch, scrollHeight - scrollY - scrollTop);
      // console.log("nextToken", nextToken);
      if (scrollY + scrollTop >= scrollHeight - 500 && nextToken) {
        // 这个问题需要解决，为啥前面加起来有小数点。并且如果我在前面一点就想load的话这个东西会重复读
        if (canFetch) {
          setCanFetch(false);
          // setCanFetch(false); //！ 问题，为什么一次 就不行，两次就可以了
          console.log("canFetch，it should be false", canFetch);
          const response = await dispatch(
            loadMoreForumPostComments(forumPostID, nextToken)
          );
          setCanFetch(response);
          setIsLoading(!response);
          // console.log(response);
          // console.log(canFetch);
        }
      }
    };
  }, [nextToken, forumPostID, dispatch, canFetch]);

  console.log(forumPost);

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={11} sm={10} md={9}>
          {isLoading ? (
            <Skeleton variant="rectangular" width={210} height={118} />
          ) : (
            <Box sx={{ padding: "2rem", maxwidth: "100%" }}>
              <Typography variant="h5">{forumPost.forumPost.title}</Typography>
              <Breadcrumbs aria-label="breadcrumb">
                <span style={{}}>
                  <Button color="inherit" component={Link} to={`/`}>
                    UWCSSA
                  </Button>
                </span>
                <span style={{}}>
                  <Button color="inherit" component={Link} to={`/forum`}>
                    论坛
                  </Button>
                </span>
                <span style={{ cursor: "not-allowed" }}>
                  <Button
                    color="inherit"
                    component={Link}
                    to={`/forumTopic/${forumPost.forumPost.forumSubTopic.forumTopic.id}`}
                  >
                    {forumPost.forumPost.forumSubTopic.forumTopic.name}
                  </Button>
                </span>
                <span style={{ cursor: "not-allowed" }}>
                  <Button
                    color="inherit"
                    component={Link}
                    to={`/forumSubTopic/${forumPost.forumPost.forumSubTopic.id}`}
                  >
                    {forumPost.forumPost.forumSubTopic.name}
                  </Button>
                </span>
              </Breadcrumbs>
            </Box>
          )}

          <ForumPostMain
            forumPost={forumPost.forumPost}
            isLoading={isLoading}
          />
          {
            // Object.keys(forumPost).length===0
            isLoading ? (
              <Skeleton variant="rectangular" width={210} height={118} />
            ) : (
              <ForumPostComments
                comments={forumPost.comments}
                commentsNextToken={forumPost.commentsNextToken}
              />
            )
          }

        </Grid>

        <Grid item sm={2} md={3}>
          <ForumAdSide />
        </Grid>
        {/* <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <OpenIconSpeedDial />
        </Grid> */}
      </Grid>
    </div>
  );
}
