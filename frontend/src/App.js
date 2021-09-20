import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";
import NewsDetail from "./containers/NewsDetail";
import NewsListing from "./containers/NewsListing";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import ForgotPassword from "./containers/ForgotPassword";
import ResetPassword from "./containers/ResetPassword";
import EmailConfirm from "./containers/EmailConfirm";
import NewsComments from "./components/News/NewsComments";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import awsconfig from "./aws-exports";
import Amplify from "aws-amplify";
import Auth from "@aws-amplify/auth";
import GraphQLTesting from "./containers/GraphQLTesting";
import uploadArticle from "./components/News/AddArticle";
Amplify.configure(awsconfig);

const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans SC",
  },
});

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    AssessLoggedInState();
  }, []);

  const AssessLoggedInState = () => {
    Auth.currentAuthenticatedUser()
      .then(() => {
        setLoggedIn(true);
      })
      .catch(() => {
        setLoggedIn(false);
      });
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      setLoggedIn(false);
      console.log("redirect");
    } catch (error) {
      console.log("error signing out", error);
    }
  };

  const onSignIn = () => {
    setLoggedIn(true);
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
            <Route path="/Register" exact component={Register} />
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
      </div>
    </ThemeProvider>
  );
}

export default App;
