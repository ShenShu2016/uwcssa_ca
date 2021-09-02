import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import "./Navbar.css";
import { Button } from "../button/Button";
import Dropdown from "./Dropdown";
import LogoSvg from "../uwcssa_logo.svg";
import store from "../../store";

const Navbar = ({ logout, isAuthenticated }) => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { user } = store.getState();
  console.log(user);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const [redirect, setRedirect] = useState(false);

  const logout_user = () => {
    logout();
    setRedirect(true);
  };

  const guestLinks = () => (
    <Fragment>
      <li className="nav-item">
        <Link
          to="/login"
          className="nav-links-mobile"
          onClick={closeMobileMenu}
        >
          Sign Up
        </Link>
      </li>
    </Fragment>
  );

  const authLinks = () => (
    <li className="nav-item">
      <a className="nav-link" href="#!" onClick={logout_user}>
        Logout
      </a>
    </li>
  );
  return (
    <Fragment>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          UWCSSA{" "}
          <img
            src={LogoSvg}
            style={{ height: 40, width: 40 }}
            alt="website logo"
            fill="red"
          />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/news" className="nav-links" onClick={closeMobileMenu}>
              News
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/forum" className="nav-links" onClick={closeMobileMenu}>
              Forum
            </Link>
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link to="/members" className="nav-links" onClick={closeMobileMenu}>
              Members
            </Link>
          </li>
          {/* 这东西是根据你有没有登录变的 */}
          {isAuthenticated ? authLinks() : guestLinks()}
          {/* 这东西是根据你有没有登录变的 */}
        </ul>
        {/* 这东西是根据你有没有登录变的 */}
        {isAuthenticated ? (
          ""
        ) : (
          <div className="none-at-media">
            <Button />
          </div>
        )}
        {/* 这东西是根据你有没有登录变的 */}
      </nav>
      {redirect ? <Redirect to="/" /> : <Fragment></Fragment>}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
