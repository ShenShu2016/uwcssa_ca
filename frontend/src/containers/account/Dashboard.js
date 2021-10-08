import BasicInfo from "../../components/Account/BasicInfo";
import { Box } from "@mui/system";
import FavoriteTopic from "../../components/Account/Dashboard/FavoriteTopic";
import LinearProgress from "@mui/material/LinearProgress";
import MyEssencePosts from "../../components/Account/Dashboard/MyEssencePosts";
import MyForumPosts from "../../components/Account/Dashboard/MyForumPosts";
import MyMarketPosts from "../../components/Account/Dashboard/MyMarketPosts";
import React from "react";
import { Redirect } from "react-router";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    marginTop: "1rem",
    maxWidth: "960px",
    margin: "auto",
    paddingInline: "1rem",
  },
  infoCards: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    margin: "auto",
    justifyContent: "space-between",
  },
});

function Dashboard() {
  const classes = useStyles();
  const userAuth = useSelector((state) => state.userAuth);

  if (userAuth.isAuthenticated === false) {
    return <Redirect to="/signIn" />;
  }

  return (
    <div>
      {userAuth.user === null ? (
        <LinearProgress />
      ) : (
        <div className={classes.root}>
          <BasicInfo userAuth={userAuth} user={userAuth.user} />
          <Box className={classes.infoCards}>
            <FavoriteTopic />
            <MyEssencePosts />
          </Box>
          <Box className={classes.myForumPosts}>
            <MyForumPosts />
            <MyMarketPosts />
          </Box>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
