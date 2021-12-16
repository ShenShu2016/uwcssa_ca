import React, { useEffect, useState } from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { fetchUserProfile, loadUser } from "./redux/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";

import Account from "./containers/account/AccountRouter";
import Amplify from "aws-amplify";
import ArticleRouter from "./containers/article/ArticleRouter";
import AuthRouter from "./containers/authentication/AuthenticationRouter";
import { Box } from "@mui/system";
import Career from "./containers/CareerRouter";
import ContactUs from "./containers/ContactUs";
import CustomAlert from "./components/CustomMUI/CustomAlert";
import EventRouter from "./containers/event/EventRouter";
import ForumRouter from "./containers/forum/ForumRouter";
import FoundingTeam from "./containers/FoundingTeam";
import Header from "./containers/Header";
import Home from "./containers/Home";
import Market from "./containers/market/MarketRouter";
import NoPermission from "./containers/NoPermission";
import PrivateRoute from "./components/PrivateRoute";
import ScrollToTop from "./Hooks/ScrollToTop";
import StaffRouter from "./containers/staff/StaffRouter";
import TestRouter from "./containers/test/TestRouter";
import UserFeedBack from "./containers/UserFeedBack";
import awsconfig from "./aws-exports";
import { makeStyles } from "@mui/styles";

Amplify.configure(awsconfig);

const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans SC",
  },
});

const useStyles = makeStyles({
  headerBox: {
    paddingBottom: "64px",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "56px",
    },
  },
});

export default function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  // console.log("isAlertOpen", isAlertOpen);

  const { isAuthenticated } = useSelector((state) => state.userAuth);
  const handleAlertClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsAlertOpen(false);
  };
  useEffect(() => {
    async function initialUser() {
      const response = await dispatch(loadUser());
      // console.log("loadUser", response);
      if (response.meta.requestStatus === "fulfilled") {
        const { username } = response.payload;
        await dispatch(fetchUserProfile({ username }));
      }
    }
    initialUser();
  }, [dispatch]);

  useEffect(() => {
    setIsAlertOpen(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Header />
        <Box className={classes.headerBox} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" component={AuthRouter} />
          <PrivateRoute
            allowRoles="anyone"
            path="/account"
            component={Account}
          />
          <PrivateRoute
            allowRoles="staff"
            path="/staff"
            component={StaffRouter}
          />
          <Route path="/article" component={ArticleRouter} />
          <Route path="/market" component={Market} /> 
          <Route path="/forum" component={ForumRouter} />
          <Route path="/foundingTeam" exact component={FoundingTeam} />
          <Route path="/contactUs" exact component={ContactUs} />
          <Route path="/career" component={Career} />
          <Route path="/event" component={EventRouter} />
          <Route path="/rating" exact component={UserFeedBack} />
          <Route path="/test" component={TestRouter} />
          <Route exact path="/NoPermission" component={NoPermission} />
          <Redirect to="/not-found">404 Not Found!</Redirect>
        </Switch>
        <CustomAlert
          isAlertOpen={isAlertOpen}
          handleAlertClose={handleAlertClose}
          message={"登錄成功"}
        />
      </Router>
    </ThemeProvider>
  );
}
