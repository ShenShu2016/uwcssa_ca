import { Provider, connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

import Amplify from "aws-amplify";
import ArticleDetail from "./containers/ArticleDetail";
import ArticleListing from "./containers/ArticleListing";
import ArticlesPreview from "./containers/account/staff/Article/ArticlesPreview";
import ContactUs from "./containers/ContactUs";
import Dashboard from "./containers/account/Dashboard";
import EmailConfirm from "./containers/authentication/EmailConfirm";
import Footer from "./containers/Footer";
import ForgotPassword from "./containers/ForgotPassword";
import GraphQLTesting from "./containers/GraphQLTesting";
import Header from "./containers/Header";
import Home from "./containers/Home";
import JoinUs from "./containers/JoinUs";
import MuiAlert from "@material-ui/lab/Alert";
import MyAccount from "./containers/account/MyAccount";
import PostArticle from "./containers/account/staff/Article/PostArticle";
import Profile from "./containers/account/Profile";
import ResetPassword from "./containers/authentication/ResetPassword";
import SignIn from "./containers/authentication/SignIn";
import SignUp from "./containers/authentication/SignUp";
import Snackbar from "@material-ui/core/Snackbar";
import Staff from "./containers/account/staff/Staff";
import awsconfig from "./aws-exports";
import { load_user } from "./redux/actions/authActions";
import store from "./redux/store";

Amplify.configure(awsconfig);

const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans SC",
  },
});

function App({ load_user, isAuthenticated }) {
  const [signInOpen, setSignInOpen] = useState(false);
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
              />
              <Route
                path="/account/staff/article/postArticle"
                exact
                component={PostArticle}
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
                path="/article/:articleId"
                exact
                component={ArticleDetail}
              />
              <Route path="/graphqlTesting" exact component={GraphQLTesting} />
              <Route path="/contactUs" exact component={ContactUs} />
              <Route path="/joinUs" component={JoinUs} />
              <Route>404 Not Found!</Route>
            </Switch>
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
