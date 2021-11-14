import { Button, Grid, Box, Typography, Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ForumIndexSportLight from "./ForumIndexSportLight";
import { fetchForumTopics } from "../../../redux/reducers/forumSlice";
import ForumIndexTopic from "./ForumIndexTopic";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  forumTopic: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
export default function ForumIndexMain() {
  const dispatch = useDispatch();
  const { forumTopics } = useSelector((state) => state.forum);
  useEffect(() => {
    dispatch(fetchForumTopics());
  }, [dispatch]);
  // console.log("forumTopics", forumTopics);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box sx={{ padding: "2rem", maxwidth: "100%" }}>
        <Box
          sx={{ fontWeight: 400, marginTop: "0.8rem", marginBottom: "1rem" }}
        >
          <Typography variant="h5">UWCSSA 论坛</Typography>
          <Typography id="back-to-top-anchor" />
        </Box>
        {/* forum type link */}
        {Object.keys(forumTopics).length === 0 ? (
          <Skeleton
            sx={{ mt: "4rem" }}
            variant="text"
            animation="wave"
            width={1080}
            height={28}
          />
        ) : (
          <Box sx={{ mt: "4rem" }}>
            {/* 后期动态改变 type: FourmTopic */}
            <Grid container spacing={0} className={classes.forumTopic}>
              {forumTopics.map((forumTopic) => {
                return (
                  <div key={forumTopic.id}>
                    <Grid item xs={12}>
                      <Typography variant="subtitle2">
                        <Button
                          variant="text"
                          color="primary"
                          component={Link}
                          to={`/forum/forumTopic/${forumTopic.id}`}
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
          </Box>
        )}
        <ForumIndexSportLight />
        <ForumIndexTopic forumTopics={forumTopics}/>
      </Box>
    </div>
  );
}
