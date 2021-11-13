import { Provider, useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { fetchUserProfile, loadUser } from "./redux/reducers/authSlice";

import Account from "./containers/account/Account";
import Amplify from "aws-amplify";
import Article from "./containers/article/Article";
import { Box } from "@mui/system";
import Career from "./containers/Career";
import ContactUs from "./containers/ContactUs";
import CustomAlert from "./components/CustomMUI/CustomAlert";
import EmailConfirm from "./containers/authentication/EmailConfirm";
import EventRouter from "./containers/Event/EventRouter";
// import EventGrid from "./components/Event/EventDataGrid";
import EventTable from "./components/Event/EventTable";
import Footer from "./containers/Footer";
import ForgotPassword from "./containers/authentication/ForgotPassword";
import Forum from "./containers/forum/Forum";
import FoundingTeam from "./containers/FoundingTeam";
import GoogleMapsPlace from "./components/Test/GoogleMapsPlace";
import Header from "./containers/Header";
import Home from "./containers/Home";
import Market from "./containers/market/Market";
import PrivateRoute from "./components/PrivateRoute";
import ResetPassword from "./containers/authentication/ResetPassword";
import ScrollToTop from "./Hooks/ScrollToTop";
import SignIn from "./containers/authentication/SignIn";
import SignUp from "./containers/authentication/SignUp";
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
  headerBody: {
    minHeight: `calc(100vh - 220px)`,
    [theme.breakpoints.down("sm")]: {
      minHeight: `calc(100vh - 350px)`,
    },
  },
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
  const { isAuthenticated, cognitoGroup } = useSelector(
    (state) => state.userAuth
  );
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
          <div className={classes.headerBody}>
            <Header />
            <Box className={classes.headerBox} />
            <Switch>
              <Route path="/" exact component={Home} />
              <PrivateRoute
                cognitoGroup={cognitoGroup}
                allowRoles="anyone"
                path="/account"
                component={Account}
              />
              <PrivateRoute
                cognitoGroup={cognitoGroup}
                allowRoles="staff"
                path="/staff"
                component={StaffRouter}
              />
              <Route path="/signIn" exact component={SignIn} />
              <Route path="/signUp" exact component={SignUp} />
              <Route path="/forgotPassword" exact component={ForgotPassword} />
              <Route
                path="/resetPassword/:username"
                exact
                component={ResetPassword}
              />
              <Route
                path="/emailConfirm/:username"
                exact
                component={EmailConfirm}
              />
              <Route path="/market" component={Market} /> 
              <Route path="/article" component={Article} />
              <Route path="/forum" component={Forum} />
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
              <Route>404 Not Found!</Route>
            </Switch>
            <CustomAlert
              isAlertOpen={isAlertOpen}
              handleAlertClose={handleAlertClose}
              message={"登錄成功"}
            />
          </div>
          <Footer />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}
