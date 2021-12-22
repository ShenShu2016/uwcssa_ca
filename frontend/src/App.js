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
import AdminRouter from "./containers/admin/AdminRouter";
import Amplify from "aws-amplify";
import ArticleRouter from "./containers/article/ArticleRouter";
import AuthRouter from "./containers/authentication/AuthenticationRouter";
import { Box } from "@mui/system";
import Career from "./containers/CareerRouter";
import ContactUs from "./containers/ContactUs";
import CustomAlert from "./components/CustomMUI/CustomAlert";
import EventRouter from "./containers/event/EventRouter";
import ForumRouter from "./containers/forum/ForumRouter";
import FoundingMember from "./containers/FoundingMember";
import Header from "./containers/Header";
import Home from "./containers/Home";
import Kanban from "./containers/Kanban";
import MarketRouter from "./containers/market/MarketRouter";
import NoPermission from "./containers/NoPermission";
import PrivateRoute from "./components/PrivateRoute";
import ScrollToTop from "./Hooks/ScrollToTop";
import StaffRouter from "./containers/staff/StaffRouter";
import TestRouter from "./containers/test/TestRouter";
import UserFeedBack from "./containers/UserFeedBack";
import UwcssaMember from "./containers/UwcssaMember";
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
          <PrivateRoute
            allowRoles="admin"
            path="/admin"
            component={AdminRouter}
          />
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
          <Route path="/kanban" component={Kanban} />
          <Route path="/article" component={ArticleRouter} />
          <Route path="/market" component={MarketRouter} /> 
          <Route path="/forum" component={ForumRouter} />
          <Route path="/foundingMember" exact component={FoundingMember} />
          <Route path="/uwcssaMember" exact component={UwcssaMember} />
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
