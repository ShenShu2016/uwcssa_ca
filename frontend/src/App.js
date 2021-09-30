import { Provider, connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { checkAuthenticated, load_user } from "./redux/actions/authActions";

import Amplify from "aws-amplify";
import ArticleDetail from "./containers/ArticleDetail";
import ArticleListing from "./containers/ArticleListing";
import ContactUs from "./containers/ContactUs";
import EmailConfirm from "./containers/EmailConfirm";
import Footer from "./containers/Footer";
import ForgotPassword from "./containers/ForgotPassword";
import GraphQLTesting from "./containers/GraphQLTesting";
import Header from "./containers/Header";
import Home from "./containers/Home";
import JoinUs from "./containers/JoinUs";
import MuiAlert from "@material-ui/lab/Alert";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";
import ResetPassword from "./containers/ResetPassword";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import Snackbar from "@material-ui/core/Snackbar";
import awsconfig from "./aws-exports";
import store from "./redux/store";
import uploadArticle from "./components/Article/AddArticle";
import FourmHome from "./containers/FourmHome";

Amplify.configure(awsconfig);

const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans SC",
  },
});

function App({ load_user, checkAuthenticated, isAuthenticated }) {
  const [signInOpen, setSignInOpen] = useState(false);
  useEffect(() => {
    load_user();
    checkAuthenticated();
    if (isAuthenticated) {
      return setSignInOpen(true);
    }
  }, [load_user, checkAuthenticated, isAuthenticated]);

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
              <Route path="/" exact component={() => <Home />} />
              <Route path="/signIn" exact component={() => <SignIn />} />
              <Route path="/signUp" exact component={SignUp} />
              <Route path="/products" exact component={ProductListing} />
              <Route path="/forgotPassword" exact component={ForgotPassword} />
              <Route path="/resetPassword" exact component={ResetPassword} />
              <Route path="/emailConfirm" exact component={EmailConfirm} />
              <Route path="/article" exact component={ArticleListing} />
              <Route
                path="/article/:articleId"
                exact
                component={ArticleDetail}
              />
              <Route
                path="/products/:productId"
                exact
                component={ProductDetail}
              />
              <Route path="/fourmHome" exact component={FourmHome} />
              <Route path="/graphqlTesting" exact component={GraphQLTesting} />
              <Route path="/uploadArticle" exact component={uploadArticle} />
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
export default connect(mapStateToProps, { checkAuthenticated, load_user })(App);
