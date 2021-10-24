import BasicInfo from "../../components/Account/BasicInfo";
import FavoriteTopic from "../../components/Account/Dashboard/FavoriteTopic";
import MyEssencePosts from "../../components/Account/Dashboard/MyEssencePosts";
import MyForumPosts from "../../components/Account/Dashboard/MyForumPosts";
import MyMarketPosts from "../../components/Account/Dashboard/MyMarketPosts";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    marginTop: "1rem",
    margin: "auto",
    maxWidth: "960px",
    paddingInline: "1rem",
  },
  infoCards: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    marginBlock: "1rem",
    justifyContent: "space-between",
  },
});

export default function Dashboard() {
  const classes = useStyles();
  const userAuth = useSelector((state) => state.userAuth);

  return (
    <div>
      <BasicInfo userAuth={userAuth} user={userAuth.user} />
      <div className={classes.root}>
        <div className={classes.infoCards}>
          <FavoriteTopic />
          <MyEssencePosts />
        </div>
        <MyForumPosts />
        <MyMarketPosts />
      </div>
    </div>
  );
}
