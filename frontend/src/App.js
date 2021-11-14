import { Provider, useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { fetchUserProfile, loadUser } from "./redux/reducers/authSlice";

import Amplify from "aws-amplify";
import Article from "./containers/article/Article";
import ArticlesPreview from "./containers/staff/Article/ArticlesPreview";
import { Box } from "@mui/system";
import Career from "./containers/Career";
import ContactUs from "./containers/ContactUs";
import CustomAlert from "./components/CustomMUI/CustomAlert";
import Dashboard from "./containers/account/Dashboard";
import EmailConfirm from "./containers/authentication/EmailConfirm";
import Event from "./containers/Event";
import EventDetail from "./components/Event/EventDetail";
import Success from "./components/Event/Success";
// import EventGrid from "./components/Event/EventDataGrid";
import EventTable from "./components/Event/EventTable";
import EventSignUp from "./components/Event/SignUpEvent";
import Footer from "./containers/Footer";
import ForgotPassword from "./containers/authentication/ForgotPassword";
import Forum from "./containers/forum/Forum";
import FoundingTeam from "./containers/FoundingTeam";
import GoogleMapsPlace from "./components/Test/GoogleMapsPlace";
import Group from "./components/Event/group";
import Header from "./containers/Header";
import Home from "./containers/Home";
import Individual from "./components/Event/individual";
import Market from "./containers/market/Market";
import MyAccount from "./containers/account/MyAccount";
import PostArticle from "./containers/staff/Article/PostArticle";
import PostDepartment from "./containers/staff/UwcssaJob/PostDepartment";
import PostEvent from "./components/Event/PostEvent";
import PostUwcssaJob from "./containers/staff/UwcssaJob/PostUwcssaJob";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./containers/account/Profile";
import ResetPassword from "./containers/authentication/ResetPassword";
import ScrollToTop from "./Hooks/ScrollToTop";
import SignIn from "./containers/authentication/SignIn";
import SignUp from "./containers/authentication/SignUp";
import Staff from "./containers/staff/Staff";
import UserFeedBack from "./containers/UserFeedBack";
import UwcssaJobsPreview from "./containers/staff/UwcssaJob/UwcssaJobsPreview";
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
                path="/account/dashboard"
                exact
                component={Dashboard}
              />
              <Route
                path="/account/profile/:username"
                exact
                component={Profile}
              />
              <PrivateRoute
                cognitoGroup={cognitoGroup}
                allowRoles="anyone"
                path="/account/myAccount"
                exact
                component={MyAccount}
              />
              <PrivateRoute
                cognitoGroup={cognitoGroup}
                allowRoles="staff"
                path="/staff"
                exact
                component={Staff}
              />
              <PrivateRoute
                cognitoGroup={cognitoGroup}
                allowRoles="staff"
                path="/staff/article"
                exact
                component={ArticlesPreview}
              />
              <PrivateRoute
                cognitoGroup={cognitoGroup}
                allowRoles="staff"
                path="/staff/uwcssaJob"
                exact
                component={UwcssaJobsPreview}
              />
              <PrivateRoute
                cognitoGroup={cognitoGroup}
                allowRoles="staff"
                path="/staff/article/postArticle"
                exact
                component={PostArticle}
              />
              <PrivateRoute
                cognitoGroup={cognitoGroup}
                allowRoles="staff"
                path="/staff/uwcssaJob/postUwcssaJob"
                exact
                component={PostUwcssaJob}
              />
              <PrivateRoute
                cognitoGroup={cognitoGroup}
                allowRoles="staff"
                path="/staff/uwcssaJob/postDepartment"
                exact
                component={PostDepartment}
              />
              <PrivateRoute
                cognitoGroup={cognitoGroup}
                allowRoles="staff"
                path="/staff/event/postEvent"
                exact
                component={PostEvent}
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
              <Route path="/event" exact component={Event} />
              <Route
                path="/event/:eventID/eventSignUp"
                exact
                component={EventSignUp}
              />
              <Route
                path="/event/:eventID/eventSignUp/individual"
                exact
                component={Individual}
              />
              <Route
                path="/event/:eventID/eventSignUp/group"
                exact
                component={Group}
              />{" "}
              <Route
                path="/event/:eventID/eventSignUp/success"
                exact
                component={Success}
              />
              {/* <Route path="/eventDataGrid" exact component={EventGrid} /> */}
              <Route path="/eventTable" exact component={EventTable} />
              <Route path="/event/:eventID" exact component={EventDetail} />
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
