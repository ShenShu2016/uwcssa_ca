import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { checkAuthenticated, load_user } from "./redux/actions/authActions";

import Amplify from "aws-amplify";
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
import { Provider } from "react-redux";
import Register from "./containers/Register";
import ResetPassword from "./containers/ResetPassword";
import Snackbar from "@material-ui/core/Snackbar";
import awsconfig from "./aws-exports";
import { connect } from "react-redux";
import store from "./redux/store";
import uploadArticle from "./components/News/AddArticle";
import JoinUs from "./containers/JoinUs";

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
              <Route path="/login" exact component={() => <Login />} />
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
              <Route path="/joinus" component={JoinUs} />
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
