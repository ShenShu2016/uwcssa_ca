import {
  Grid,
  Skeleton,
  Breadcrumbs,
  Box,
  Button,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  loadMoreForumSubTopicPosts,
  removeSelectedForumSubTopic,
  selectedForumSubTopic,
  selectedForumSubTopicPosts,
} from "../../../redux/actions/forumAction";
import { useDispatch, useSelector } from "react-redux";
import ForumAdSide from "../ForumAdSide";
import ForumSubTopicMain from "./ForumSubTopicMain";
import OpenIconSpeedDial from "../OpenIconSpeedDial";
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
export default function ForumSubTopic() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { forumSubTopicID } = useParams();
  const [canFetch, setCanFetch] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const forumSubTopic = useSelector((state) => state.forumSubTopic);
  const nextToken = forumSubTopic.postsNextToken;

  useEffect(() => {
    if (forumSubTopicID && forumSubTopicID !== "") {
      const response = dispatch(selectedForumSubTopic(forumSubTopicID));
      dispatch(selectedForumSubTopicPosts(forumSubTopicID));
      setIsLoading(!response);
    }
    return () => dispatch(removeSelectedForumSubTopic());
  }, [forumSubTopicID, dispatch]);

  useEffect(() => {
    // console.log("start load data")
    window.onscroll = async (e) => {
      const scrollY = window.scrollY; //当前上方高度
      const scrollTop = e.target.scrollingElement.clientHeight; //窗口高度
      const scrollHeight = e.target.scrollingElement.scrollHeight; //总高度
      // console.log(canFetch, scrollHeight - scrollY - scrollTop);
      // console.log("nextToken", nextToken);
      if (scrollY + scrollTop >= scrollHeight - 100 && nextToken) {
        // 这个问题需要解决，为啥前面加起来有小数点。并且如果我在前面一点就想load的话这个东西会重复读
        if (canFetch) {
          setCanFetch(false);
          // setCanFetch(false); //！ 问题，为什么一次 就不行，两次就可以了
          console.log("canFetch，it should be false", canFetch);
          const response = await dispatch(
            loadMoreForumSubTopicPosts(forumSubTopicID, nextToken)
          );
          setCanFetch(response);
          setIsLoading(!response);
          // console.log(response);
          // console.log(canFetch);
        }
      }
    };
  }, [nextToken, forumSubTopicID, dispatch, canFetch]);

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
          {Object.keys(forumSubTopic.forumSubTopic).length === 0 ? (
            <Skeleton variant="rectangular" width={210} height={118} />
          ) : (
            <Box sx={{ padding: "2rem", maxwidth: "100%" }}>
              <Typography variant="h5">
                {forumSubTopic.forumSubTopic.name}
              </Typography>
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
                    to={`/forumTopic/${forumSubTopic.forumSubTopic.forumTopic.id}`}
                  >
                    {forumSubTopic.forumSubTopic.forumTopic.name}
                  </Button>
                </span>
                <span style={{ cursor: "not-allowed" }}>
                  <Button
                    color="inherit"
                    component={Link}
                    disabled
                    to={`/forumSubTopic/${forumSubTopic.forumSubTopic.id}`}
                  >
                    {forumSubTopic.forumSubTopic.name}
                  </Button>
                </span>
              </Breadcrumbs>
            </Box>
          )}
          {isLoading ? (
            <Skeleton variant="rectangular" width={210} height={118} />
          ) : (
            <ForumSubTopicMain
              isLoading={isLoading}
              forumPost={forumSubTopic.posts}
              postsNextToken={forumSubTopic.postsNextToken}
            />
          )}
        </Grid>
        <Grid item sm={1} md={2}>
          <ForumAdSide />
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <OpenIconSpeedDial />
        </Grid>
      </Grid>
    </div>
  );
}
