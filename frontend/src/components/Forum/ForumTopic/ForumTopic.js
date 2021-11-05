import {
  Grid,
  Skeleton,
  Breadcrumbs,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ForumAdSide from "../ForumAdSide";
import ForumTopicMain from "./ForumTopicMain";
import OpenIconSpeedDial from "../OpenIconSpeedDial";

import {
  selectedForumTopic,
  removeSelectedForumTopic,
} from "../../../redux/actions/forumAction";
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
  console.log(forumTopicID);
  useEffect(() => {
    console.log("use");
    if (forumTopicID && forumTopicID !== "") {
      dispatch(selectedForumTopic(forumTopicID));
    }
    return () => dispatch(removeSelectedForumTopic());
  }, [forumTopicID, dispatch]);
  const forumTopic = useSelector((state) => state.forum.selectedForumTopic);
  // console.log(forumTopic);
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        {Object.keys(forumTopic).length === 0  ? (
          <Skeleton variant="rectangular" width={210} height={118} />
        ) : (
          <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
            <Box sx={{ padding: "2rem", maxwidth: "100%" }}>
              <Typography variant="h5">{forumTopic.forumTopic.name}</Typography>
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
                    disabled
                    to={`/forumTopic/${forumTopic.forumTopic.id}`}
                  >
                    {forumTopic.forumTopic.name}
                  </Button>
                </span>
              </Breadcrumbs>
            </Box>
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
