import {
  Box,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import { Link, useLocation, useParams } from "react-router-dom";
import React, { Fragment, useEffect } from "react";
import {
  fetchUwcssaJobs,
  selectAllUwcssaJobs,
} from "../../redux/slice/uwcssaJobSlice";
import { useDispatch, useSelector } from "react-redux";

import { fetchArticles } from "../../redux/slice/articleSlice";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem",
    padding: "0.5rem",
    // minHeight: "500px",
    position: "sticky",
    width: "310px",
    top: "8rem",
    // textAlign: "center",

    [theme.breakpoints.down("lg")]: {
      position: "relative",
      top: "0",
      width: "100%",
      margin: "1rem auto",
      padding: "1rem",
      // maxHeight: "255px",
      borderRadius: "8px",
      border: "1px solid #dfe1e5",
    },
  },
}));

export default function ArticleSideBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const { articleID } = useParams();
  const { articles, fetchArticlesStatus } = useSelector(
    (state) => state.article
  );
  const { fetchUwcssaJobsStatus } = useSelector((state) => state.uwcssaJob);
  const uwcssaJobs = useSelector(selectAllUwcssaJobs);
  useEffect(() => {
    if (fetchArticlesStatus === "idle" || undefined) {
      dispatch(fetchArticles());
    }
    if (fetchUwcssaJobsStatus === "idle" || undefined) {
      dispatch(fetchUwcssaJobs());
    }
  }, [dispatch, fetchUwcssaJobsStatus, fetchArticlesStatus]);
  console.log(articleID);
  const filteredArticles = articles
    .filter((x) => x.id !== articleID)
    .slice(0, 10);
  return (
    <Paper
      variant="outlined"
      className={classes.root}
      sx={{ borderRadius: "20px" }}
    >
      {location.pathname !== "/article" && (
        <Box>
          <DialogTitle variant="h5">其他新闻</DialogTitle>
          <Divider />
          {filteredArticles &&
            filteredArticles.map((article, idx) => {
              return (
                <Fragment>
                  <ListItem
                    key={idx}
                    component={Link}
                    to={`/article/${article.id}`}
                  >
                    <ListItemIcon sx={{ fontSize: 20 }}>💥</ListItemIcon>
                    <ListItemText
                      primary={article.title}
                      primaryTypographyProps={{
                        fontSize: 18,
                        fontWeight: "medium",
                        color: "primary",
                      }}
                    />
                  </ListItem>
                  <Divider variant="inset" light />
                </Fragment>
              );
            })}
        </Box>
      )}
      <DialogTitle variant="h5">学生会招新啦</DialogTitle>
      <Divider />
      <List>
        {uwcssaJobs.map((job, idx) => {
          return (
            <Fragment>
              <ListItem
                key={idx}
                component={Link}
                to={`/career/jobDetail/${job.id}`}
              >
                <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
                <ListItemText
                  primary={job.title}
                  primaryTypographyProps={{
                    fontSize: 18,
                    fontWeight: "medium",
                    color: "primary",
                  }}
                />
              </ListItem>
              <Divider variant="inset" light />
            </Fragment>
          );
        })}
      </List>
    </Paper>
  );
}
