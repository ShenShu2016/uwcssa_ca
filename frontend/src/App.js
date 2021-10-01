import { Provider, connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Snackbar, makeStyles } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

import Amplify from "aws-amplify";
import ArticleDetail from "./containers/ArticleDetail";
import ArticleListing from "./containers/ArticleListing";
import ArticlesPreview from "./containers/account/staff/Article/ArticlesPreview";
import Career from "./containers/Career";
import ContactUs from "./containers/ContactUs";
import Dashboard from "./containers/account/Dashboard";
import EmailConfirm from "./containers/authentication/EmailConfirm";
import Footer from "./containers/Footer";
import ForgotPassword from "./containers/authentication/ForgotPassword";
import FourmHome from "./containers/FourmHome";
import GraphQLTesting from "./containers/GraphQLTesting";
import Header from "./containers/Header";
import Home from "./containers/Home";
import MuiAlert from "@material-ui/lab/Alert";
import MyAccount from "./containers/account/MyAccount";
import PostArticle from "./containers/account/staff/Article/PostArticle";
import PostUwcssaJob from "./containers/account/staff/UwcssaJob/PostUwcssaJob";
import Profile from "./containers/account/Profile";
import ResetPassword from "./containers/authentication/ResetPassword";
import ScrollToTop from "./Hooks/ScrollToTop";
import SignIn from "./containers/authentication/SignIn";
import SignUp from "./containers/authentication/SignUp";
import Staff from "./containers/account/staff/Staff";
import UwcssaJobsPreview from "./containers/account/staff/UwcssaJob/UwcssaJobsPreview";
import awsconfig from "./aws-exports";
import { load_user } from "./redux/actions/authActions";
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
});
function App({ load_user, isAuthenticated }) {
  const [signInOpen, setSignInOpen] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    load_user();
    if (isAuthenticated) {
      return setSignInOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <div className="App">
          <Router>
            <ScrollToTop />
            <div className={classes.headerBody}>
              <Header />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/account/dashboard" exact component={Dashboard} />
                <Route path="/account/profile" exact component={Profile} />
                <Route path="/account/myAccount" exact component={MyAccount} />
                <Route path="/account/staff" exact component={Staff} />
                <Route
                  path="/account/staff/article"
                  exact
                  component={ArticlesPreview}
                />{" "}
                <Route
                  path="/account/staff/uwcssaJob"
                  exact
                  component={UwcssaJobsPreview}
                />
                <Route
                  path="/account/staff/article/postArticle"
                  exact
                  component={PostArticle}
                />
                <Route
                  path="/account/staff/uwcssaJob/postUwcssaJob"
                  exact
                  component={PostUwcssaJob}
                />
                <Route path="/fourmHome" exact component={FourmHome} />
                <Route path="/signIn" exact component={SignIn} />
                <Route path="/signUp" exact component={SignUp} />
                <Route
                  path="/forgotPassword"
                  exact
                  component={ForgotPassword}
                />
                <Route path="/resetPassword" exact component={ResetPassword} />
                <Route
                  path="/emailConfirm/:username"
                  exact
                  component={EmailConfirm}
                />
                <Route path="/article" exact component={ArticleListing} />
                <Route
                  path="/article/:articleId"
                  exact
                  component={ArticleDetail}
                />
                <Route
                  path="/graphqlTesting"
                  exact
                  component={GraphQLTesting}
                />
                <Route path="/contactUs" exact component={ContactUs} />
                <Route path="/career" component={Career} />
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
        </div>
      </ThemeProvider>
    </Provider>
  );
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.userAuth.isAuthenticated,
});
export default connect(mapStateToProps, { load_user })(App);
