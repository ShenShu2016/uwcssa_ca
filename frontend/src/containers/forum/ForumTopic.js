import { Box, Grid, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  removeSelectedForumTopic,
  selectedForumTopic,
} from "../../redux/reducers/forumSlice";
import { useDispatch, useSelector } from "react-redux";

import CustomBreadcrumbs from "../../components/CustomMUI/CustomBreadcrumbs";
import ForumRightSide from "../../components/Forum/ForumRightSide";
import ForumTopicMain from "../../components/Forum/ForumTopic/ForumTopicMain";
// import OpenIconSpeedDial from "../../components//Forum/OpenIconSpeedDial";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
// import {
//   selectedForumTopic,
//   removeSelectedForumTopic,
// } from "../../redux/actions/forumAction";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    display: "flex",
    flexDirection: "row",
  },
}));

export default function ForumTopic() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { forumTopicID } = useParams();
  const [starter, setStarter] = useState(false);
  //console.log(forumTopicID);
  useEffect(() => {
    if (forumTopicID && forumTopicID !== "") {
      dispatch(selectedForumTopic(forumTopicID));
    }
    return () => dispatch(removeSelectedForumTopic());
  }, [forumTopicID, dispatch]);
  const forumTopic = useSelector((state) => state.forum.selected.forumTopic);
  // console.log(forumTopic);
  useEffect(() => {
    if (
      forumTopic === undefined ||
      forumTopic === null ||
      forumTopic.length === 0
    ) {
      setStarter(false);
    } else {
      if (forumTopic.forumSubTopics === undefined) {
        setStarter(false);
      } else {
        setStarter(true);
      }

      if (forumTopic.description === "not-found") {
        history.push("/not-found");
      }
    }
  }, [forumTopic, history]);
  console.log(starter);
  console.log(forumTopic);
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        {starter === false ? (
          <Skeleton variant="rectangular" width={210} height={118} />
        ) : (
          <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
            <Box sx={{ padding: "2rem", maxWidth: "100%" }}>
              <Typography variant="h5">{forumTopic.name}</Typography>
              <CustomBreadcrumbs />
            </Box>
            <ForumTopicMain forumTopic={forumTopic} />
          </Grid>
        )}
        <Grid item sm={1} md={2}>
          <ForumRightSide />
        </Grid>
      </Grid>
    </div>
  );
}
