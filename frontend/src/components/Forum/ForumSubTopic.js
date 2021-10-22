import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import {
  removeSelectedForumSubTopic,
  selectedForumSubTopic,
} from "../../redux/actions/forumAction";
import { useDispatch, useSelector } from "react-redux";
import ForumAdSide from "./ForumAdSide";
import ForumSubTopicMain from "./ForumSubTopicMain";
import OpenIconSpeedDial from "./OpenIconSpeedDial";
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
  const forumSubTopic = useSelector((state) => state.forumSubTopic);

  useEffect(() => {
    if (forumSubTopicID && forumSubTopicID !== "") {
      dispatch(selectedForumSubTopic(forumSubTopicID));
    }
    return () => dispatch(removeSelectedForumSubTopic());
  }, [forumSubTopicID, dispatch]);

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
      {Object.keys(forumSubTopic.forumSubTopic).length === 0 ?(
            ""
        ) : (
        <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
          <ForumSubTopicMain forumSubTopic={forumSubTopic.forumSubTopic} />
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
