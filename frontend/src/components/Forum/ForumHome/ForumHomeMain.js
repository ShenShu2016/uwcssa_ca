import { Box, Button, Grid, Paper, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  fetchForumPosts,
  fetchForumTopics,
} from "../../../redux/slice/forumSlice";
import { useDispatch, useSelector } from "react-redux";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ForumHomeDialog from "./ForumHomeDialog";
import ForumHomePostsLastReply from "./ForumHomePostsLastReply";
// import ForumIndexSportLight from "./ForumIndexSportLight";
import ForumHomeTopic from "./ForumHomeTopic";
import { Link } from "react-router-dom";

export default function ForumHomeMain() {
  const { userAuth } = useSelector((state) => state);
  const [starter, setStarter] = useState(false);
  const dispatch = useDispatch();
  const {
    forumTopics,
    fetchForumTopicsStatus,
    forumPosts,
    fetchForumPostsStatus,
  } = useSelector((state) => state.forum);

  useEffect(() => {
    if (fetchForumTopicsStatus === "idle" || undefined) {
      dispatch(fetchForumTopics());
    }
    if (fetchForumPostsStatus === "idle" || undefined) {
      dispatch(fetchForumPosts());
    }
  }, [dispatch, fetchForumTopicsStatus, fetchForumPostsStatus]);
  // console.log("forumPosts", forumPosts);
  // console.log("forumTopics", forumTopics);
  useEffect(() => {
    if (
      forumTopics === undefined ||
      forumTopics === null ||
      forumTopics.length === 0 ||
      forumPosts === undefined ||
      forumPosts === null ||
      forumPosts.length === 0
    ) {
      setStarter(false);
    } else {
      setStarter(true);
    }
  }, [forumTopics, forumPosts]);
  return (
    <div>
      <Box sx={{ p: 1, width: "100%", backgroundColor: "grey" }}>
        <Box
          sx={{
            textAlign: "center",
            fontWeight: 400,
            mt: 2,
            mb: 1,
          }}
        >
          <Typography
            variant="h5"
            color="text.primary"
            component={Link}
            to={`/`}
            sx={{
              textDecorationLine: "none",
              "&: hover": { color: "primary.main" },
            }}
          >
            UWCSSA
          </Typography>
          <Typography
            variant="h5"
            color="text.primary"
            component={Link}
            to={`/forum`}
            sx={{
              textDecorationLine: "none",
              "&: hover": { color: "primary.main" },
            }}
          >
            论坛
          </Typography>
        </Box>
        {/* <Divider /> */}
        {/* forum type link */}
        {!starter ? (
          <Skeleton
            sx={{ mt: 2 }}
            variant="text"
            animation="wave"
            width={1080}
            height={28}
          />
        ) : (
          <Paper elevation={0} sx={{ mt: 2 }}>
            <Grid
              container
              spacing={0}
              sx={{ justifyContent: "space-between" }}
            >
              {forumTopics.map((forumTopic) => {
                return (
                  <div key={forumTopic.id}>
                    <Grid item xs={12}>
                      <Typography variant="subtitle2">
                        <Button
                          variant="text"
                          color="primary"
                          component={Link}
                          to={`/forum/${forumTopic.id}`}
                        >
                          {forumTopic.name}
                          <ArrowForwardIcon />
                        </Button>
                      </Typography>
                    </Grid>
                  </div>
                );
              })}
            </Grid>
          </Paper>
        )}
        {/* <ForumIndexSportLight /> */}
        {!starter ? (
          <Skeleton
            sx={{ mt: 2 }}
            variant="text"
            animation="wave"
            width={1080}
            height={28}
          />
        ) : (
          <Box>
            {userAuth.isAuthenticated && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  pr: 2,
                  mt: 3,
                }}
              >
                <ForumHomeDialog forumTopics={forumTopics} />
              </Box>
            )}
          </Box>
        )}
        <ForumHomePostsLastReply forumPosts={forumPosts} />
        <ForumHomeTopic forumTopics={forumTopics} />
      </Box>
    </div>
  );
}
