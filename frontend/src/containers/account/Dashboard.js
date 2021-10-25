import React, { useEffect } from "react";
import {
  removeSelectedUser,
  selectedUser,
} from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

import DashboardBasicInfo from "../../components/Account/Dashboard/DashboardBasicInfo";
import FavoriteTopic from "../../components/Account/Dashboard/FavoriteTopic";
import MyEssencePosts from "../../components/Account/Dashboard/MyEssencePosts";
import MyForumPosts from "../../components/Account/Dashboard/MyForumPosts";
import MyMarketPosts from "../../components/Account/Dashboard/MyMarketPosts";
import { makeStyles } from "@mui/styles";

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
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.userAuth);
  useEffect(() => {
    if (userAuth.user.username && userAuth.user.username !== "") {
      dispatch(selectedUser(userAuth.user.username));
    }
    return () => dispatch(removeSelectedUser());
  }, [userAuth, dispatch]);

  const user = useSelector((state) => state.user);

  return (
    <div>
      <DashboardBasicInfo userAuth={userAuth} user={user} />
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
