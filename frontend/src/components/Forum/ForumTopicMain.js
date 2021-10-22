import { Button, Grid, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    display: "flex",
    flexDirection: "row",
    //   justifyContent: "center",
  },
  forumSubTopic: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
const ForumTopicMain = ({ forumTopic }) => {
  const classes = useStyles();
  // console.log(forumTopic);
  const { name, forumSubTopics } = forumTopic;
  //   const { forumSubTopicData } = forumSubTopics;
  //   console.log(forumSubTopics.items);
  return (
    <div className={classes.root}>
      <Box sx={{ padding: "2rem", maxwidth: "100%" }}>
        <Box
          sx={{ fontWeight: 400, marginTop: "0.8rem", marginBottom: "1rem" }}
        >
          <Typography variant="h3">{name}</Typography>
        </Box>
        {/* forum type link */}
        <Box sx={{ marginTop: "4rem" }}>
          <Grid container spacing={0} className={classes.forumSubTopic}>
            {forumSubTopics.items.map((forumSubTopic) => {
              const { id, name } = forumSubTopic;
              return (
                <div key={id}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">
                      <Button
                        variant="text"
                        // target="_top"
                        component={Link}
                        color="primary"
                        to={`/forumSubTopic/${id}`}
                      >
                        {name}
                        <ArrowForwardIcon />
                      </Button>
                    </Typography>
                  </Grid>
                </div>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default ForumTopicMain;
