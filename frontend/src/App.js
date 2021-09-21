import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

import Amplify from "aws-amplify";
import Auth from "@aws-amplify/auth";
import EmailConfirm from "./containers/EmailConfirm";
import Footer from "./containers/Footer";
import ForgotPassword from "./containers/ForgotPassword";
import GraphQLTesting from "./containers/GraphQLTesting";
import Header from "./containers/Header";
import Home from "./containers/Home";
import Login from "./containers/Login";
import MuiAlert from "@material-ui/lab/Alert";
import NewsComments from "./components/News/NewsComments";
import NewsDetail from "./containers/NewsDetail";
import NewsListing from "./containers/NewsListing";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";
import Register from "./containers/Register";
import ResetPassword from "./containers/ResetPassword";
import Snackbar from "@material-ui/core/Snackbar";
import awsconfig from "./aws-exports";
import uploadArticle from "./components/News/AddArticle";

Amplify.configure(awsconfig);

const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans SC",
  },
});

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);

  useEffect(() => {
    AssessLoggedInState();
  }, []);

  const AssessLoggedInState = () => {
    Auth.currentAuthenticatedUser()
      .then((result) => {
        setLoggedIn(true);
        console.log(result);
      })
      .catch((result) => {
        setLoggedIn(false);
        console.log(result);
      });
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      setLoggedIn(false);
    } catch (error) {
      console.log("error signing out", error);
    }
  };

  const onSignIn = () => {
    setLoggedIn(true);
    setSignInOpen(true);
  };

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
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header loggedIn={loggedIn} signOut={signOut} />
          <Switch>
            <Route
              path="/"
              exact
              component={() => <Home loggedIn={loggedIn} />}
            />
            <Route
              path="/login"
              exact
              component={() => (
                <Login onSignIn={onSignIn} loggedIn={loggedIn} />
              )}
            />
            <Route path="/register" exact component={Register} />
            <Route path="/products" exact component={ProductListing} />
            <Route path="/forgotpassword" exact component={ForgotPassword} />
            <Route path="/resetpassword" exact component={ResetPassword} />
            <Route path="/emailconfirm" exact component={EmailConfirm} />
            <Route path="/news" exact component={NewsListing} />
            <Route path="/news/:newsId" exact component={NewsDetail} />
            <Route
              path="articlecommentsingle_list/:articletId"
              exact
              component={NewsComments}
            />
            <Route
              path="/products/:productId"
              exact
              component={ProductDetail}
            />
            <Route path="/graphqltesting" exact component={GraphQLTesting} />
            <Route path="/uploadarticle" exact component={uploadArticle} />
            <Route>404 Not Found!</Route>
          </Switch>
          <Footer />
        </Router>
        <Snackbar
          open={signInOpen}
          autoHideDuration={6000}
          onClose={handleSignInClose}
        >
          <Alert onClose={handleSignInClose} severity="success">
            登陆成功! 欢迎来到 UWCSSA.CA
          </Alert>
        </Snackbar>
      </div>
    </ThemeProvider>
  );
}

export default App;
