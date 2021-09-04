import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";
import NewsDetail from "./containers/NewsDetail";
import NewsListing from "./containers/NewsListing";
import Home from "./containers/Home";
import Layout from "./hocs/Layout";
import Login from "./containers/Login";
import Register from "./containers/Register";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans SC",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/Register" exact component={Register} />
              <Route path="/products" exact component={ProductListing} />
              <Route path="/news" exact component={NewsListing} />
              <Route
                path="/products/:productId"
                exact
                component={ProductDetail}
              />
              <Route path="/news/:newsId" exact component={NewsDetail} />
              <Route>404 Not Found!</Route>
            </Switch>
          </Layout>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
