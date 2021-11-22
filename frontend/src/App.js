import { Provider, useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { fetchUserProfile, loadUser } from "./redux/reducers/authSlice";

import Account from "./containers/account/Account";
import Amplify from "aws-amplify";
import Article from "./containers/article/Article";
import AuthRouter from "./containers/authentication/AuthRouter";
import { Box } from "@mui/system";
import Career from "./containers/Career";
import ContactUs from "./containers/ContactUs";
import CustomAlert from "./components/CustomMUI/CustomAlert";
import EventRouter from "./containers/Event/EventRouter";
import ForumRouter from "./containers/forum/ForumRouter";
import FoundingTeam from "./containers/FoundingTeam";
import GoogleMapsPlace from "./components/Test/GoogleMapsPlace";
import Header from "./containers/Header";
import Home from "./containers/Home";
import Market from "./containers/market/Market";
import NoPermission from "./containers/NoPermission";
import PrivateRoute from "./components/PrivateRoute";
import ScrollToTop from "./Hooks/ScrollToTop";
import StaffRouter from "./containers/staff/StaffRouter";
import UserFeedBack from "./containers/UserFeedBack";
import awsconfig from "./aws-exports";
import { makeStyles } from "@mui/styles";
import store from "./redux/store";

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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop />
          {/* <div className={classes.headerBody}> */}
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
            <Route path="/article" component={Article} />
            <Route path="/market" component={Market} /> 
            <Route path="/forum" component={ForumRouter} />
            <Route path="/foundingTeam" exact component={FoundingTeam} />
            <Route path="/contactUs" exact component={ContactUs} />
            <Route path="/career" component={Career} />
            <Route path="/event" component={EventRouter} />
            <Route path="/rating" exact component={UserFeedBack} />
            <Route
              path="/test/googleMapsPlace"
              exact
              component={GoogleMapsPlace}
            />
            <Route exact path="/NoPermission" component={NoPermission} />
            <Route>404 Not Found!</Route>
          </Switch>
          <CustomAlert
            isAlertOpen={isAlertOpen}
            handleAlertClose={handleAlertClose}
            message={"登錄成功"}
          />
          {/* </div> */}
        </Router>
      </ThemeProvider>
    </Provider>
  );
}
