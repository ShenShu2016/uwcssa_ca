import React, { useEffect } from "react";
import Header from "../containers/Header";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../redux/actions/authActions";
import Footer from "../containers/Footer";


const Layout = ({ checkAuthenticated, load_user, children }) => {
  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
