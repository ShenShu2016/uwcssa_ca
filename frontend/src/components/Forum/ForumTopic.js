import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ForumAdSide from "./ForumAdSide";
import ForumTopicMain from "./ForumTopicMain";
import OpenIconSpeedDial from "./OpenIconSpeedDial";
import {
  selectedForumTopic,
  removeSelectedForumTopic,
} from "../../redux/actions/forumAction";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    display: "flex",
    flexDirection: "row",
  },
}));

function ForumTopic() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { forumTopicID } = useParams();
  const forumTopic = useSelector((state) => state.forumTopic);
  useEffect(() => {
    if (forumTopicID && forumTopicID !== "") {
      dispatch(selectedForumTopic(forumTopicID));
    }
    return () => dispatch(removeSelectedForumTopic());
  }, [forumTopicID, dispatch]);
//   console.log(forumTopic);
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
      {Object.keys(forumTopic.forumTopic).length === 0 ?(
            ""
        ) : (
        <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
          <ForumTopicMain forumTopic={forumTopic.forumTopic} />
        </Grid>
        )}
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

export default ForumTopic;
