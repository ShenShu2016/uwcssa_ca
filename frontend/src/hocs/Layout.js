import React, { useEffect } from "react";
import Header from "../containers/Header";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../redux/actions/authActions";
import Footer from "../containers/Footer";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "89.5vh",
  },
}));
const Layout = ({ checkAuthenticated, load_user, children }) => {
  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
