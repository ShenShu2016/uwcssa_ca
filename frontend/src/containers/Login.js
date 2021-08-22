import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import axios from "axios";
import "../components/login_components/LoginForm.css";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`,
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };

  const continueWithFacebook = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/facebook/?redirect_uri=${process.env.REACT_APP_API_URL}/facebook`,
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login_form_main">
      <div className="login-bottom-border">
        <h3>Log In</h3>
      </div>
      <p>
        Don’t have an accont? <Link to="/signup">Sign Up</Link>
      </p>
      <div className="login-form-container">
        <div className="password-login">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="password-form-group">
              <h4>Email</h4>
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="password-form-group">
              <h4>Password</h4>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                minLength="6"
                required
              />
            </div>
            <div className="remember-robot">
              <div>
                <input type="checkbox" value="lsRememberMe" id="rememberMe" />{" "}
                <label for="rememberMe">Remember me</label>
              </div>
              <div>
                <input type="checkbox" value="lsRememberMe" id="rememberMe" />{" "}
                <label for="rememberMe">l’m not a robot</label>
              </div>
            </div>
            <button className="btn" type="submit">
              Login
            </button>
          </form>
        </div>
        <div className="thirdparty-login">
          <button className="btn" onClick={continueWithGoogle}>
            <i class="fab fa-google"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Continue
            With Google
          </button>
          <br />
          <button className="btn" onClick={continueWithFacebook}>
            <i class="fab fa-facebook"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Continue With
            Facebook
          </button>
          {/* Forgot your Password?{" "}
            <Link to="/reset-password">Reset Password</Link> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
