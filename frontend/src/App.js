import { Provider, useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Amplify from "aws-amplify";
import ArticleDetail from "./containers/ArticleDetail";
import ArticleListing from "./containers/ArticleListing";
import ArticlesPreview from "./containers/staff/Article/ArticlesPreview";
import Career from "./containers/Career";
import ContactUs from "./containers/ContactUs";
import Dashboard from "./containers/account/Dashboard";
import EmailConfirm from "./containers/authentication/EmailConfirm";
import Event from "./containers/EventListing";
import Footer from "./containers/Footer";
import ForgotPassword from "./containers/authentication/ForgotPassword";
import Forum from "./containers/Forum";
import ForumPost from "./components/Forum/CurdTesting/ForumPost";
import ForumPostCommentDetail from "./components/Forum/CurdTesting/ForumPostCommentDetail";
import ForumPostDetail from "./components/Forum/CurdTesting/ForumPostDetail";
import ForumPostList from "./components/Forum/CurdTesting/ForumPostList";
import ForumTopic from "./components/Forum/CurdTesting/ForumTopic";
import FoundingTeam from "./containers/FoundingTeam";
import Header from "./containers/Header";
import Home from "./containers/Home";
import MarketItemDetail from "./containers/MarketItemDetail";
import MarketListing from "./containers/MarketListing";
import MarketPostTest from "./containers/MarketPostTest";
import MuiAlert from "@mui/lab/Alert";
import MyAccount from "./containers/account/MyAccount";
import PostArticle from "./containers/staff/Article/PostArticle";
import PostDepartment from "./containers/staff/UwcssaJob/PostDepartment";
import PostMarketItem from "./containers/market/PostMarketItem";
import PostUwcssaJob from "./containers/staff/UwcssaJob/PostUwcssaJob";
import Profile from "./containers/account/Profile";
import ResetPassword from "./containers/authentication/ResetPassword";
import ScrollToTop from "./Hooks/ScrollToTop";
import SignIn from "./containers/authentication/SignIn";
import SignUp from "./containers/authentication/SignUp";
import { Snackbar } from "@mui/material";
import Staff from "./containers/staff/Staff";
import UwcssaJobsPreview from "./containers/staff/UwcssaJob/UwcssaJobsPreview";
import awsconfig from "./aws-exports";
import { load_user } from "./redux/actions/authActions";
import { makeStyles } from "@mui/styles";
import store from "./redux/store";

const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans SC",
  },
  breakpoints: {
    value: {
      md: 960,
    },
  },
});

Amplify.configure(awsconfig);

const useStyles = makeStyles({
  headerBody: {
    minHeight: `calc(100vh - 220px)`,
    [theme.breakpoints.down("sm")]: {
      minHeight: `calc(100vh - 350px)`,
    },
  },
});
export default function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [signInOpen, setSignInOpen] = useState(false);
  useEffect(() => {
    dispatch(load_user());
    if (isAuthenticated) {
      return setSignInOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const isAuthenticated = useSelector(
    (state) => state.userAuth.isAuthenticated
  );
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleSignInClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSignInOpen(false);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop />
          <div className={classes.headerBody}>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/account/dashboard" exact component={Dashboard} />
              <Route
                path="/account/profile/:username"
                exact
                component={Profile}
              />
              <Route path="/account/myAccount" exact component={MyAccount} />
              <Route path="/staff" exact component={Staff} />
              <Route
                path="/staff/article"
                exact
                component={ArticlesPreview}
              />{" "}
              <Route
                path="/staff/uwcssaJob"
                exact
                component={UwcssaJobsPreview}
              />
              <Route
                path="/staff/article/postArticle"
                exact
                component={PostArticle}
              />
              <Route
                path="/staff/uwcssaJob/postUwcssaJob"
                exact
                component={PostUwcssaJob}
              />
              <Route
                path="/staff/uwcssaJob/postDepartment"
                exact
                component={PostDepartment}
              />
              <Route path="/forum" exact component={Forum} />
              <Route path="/forumTopic" exact component={ForumTopic} />
              <Route path="/forumPost" exact component={ForumPost} />
              <Route path="/forumPostList" exact component={ForumPostList} />
              <Route
                path="/forumPost/:forumPostId"
                exact
                component={ForumPostDetail}
              />
              <Route
                path="/forumPost/forumPostComment/:forumPostCommentId"
                exact
                component={ForumPostCommentDetail}
              />
              <Route path="/signIn" exact component={SignIn} />
              <Route path="/signUp" exact component={SignUp} />
              <Route path="/forgotPassword" exact component={ForgotPassword} />
              <Route path="/resetPassword" exact component={ResetPassword} />
              <Route
                path="/emailConfirm/:username"
                exact
                component={EmailConfirm}
              />
              <Route path="/article" exact component={ArticleListing} />
              <Route
                path="/article/:articleID"
                exact
                component={ArticleDetail}
              />
              <Route path="/MarketPostTest" exact component={MarketPostTest} /> 
                         
              <Route
                path="/market/postMarketItem"
                exact
                component={PostMarketItem}
              />
              <Route path="/market" exact component={MarketListing} />         
                   
              <Route
                path="/market/:marketId"
                exact
                component={MarketItemDetail}
              />
              <Route path="/foundingTeam" exact component={FoundingTeam} />
              <Route path="/contactUs" exact component={ContactUs} />
              <Route path="/career" component={Career} />
              <Route path="/event" exact component={Event} />
              <Route>404 Not Found!</Route>
            </Switch>
          </div>
          <Footer />
        </Router>
        <Snackbar
          open={signInOpen}
          autoHideDuration={2000}
          onClose={handleSignInClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={handleSignInClose} severity="success">
            登陆成功! 欢迎来到 UWCSSA.CA
          </Alert>
        </Snackbar>
      </ThemeProvider>
    </Provider>
  );
}
