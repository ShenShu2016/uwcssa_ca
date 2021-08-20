import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import "./Navbar.css";
import { LoginButton } from "../button/LoginButton";
import Dropdown from "./Dropdown";
import LogoSvg from "../uwcssa_logo.svg";
import store from "../../store";

const Navbar = ({ logout, isAuthenticated, user }) => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
        {user ? user.username : ""}
        Logout
      </a>
    </li>
  );

  const userInfo = () => (
    <Fragment>
      <li className="nav-item">
        <a className="nav-link nav-link-user" href="#!" onClick={logout_user}>
          {user ? user.username : ""}
        </a>
      </li>
    </Fragment>
  );

  return (
    <Fragment>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img
            src={LogoSvg}
            style={{ height: 62, width: 62 }}
            alt="website logo"
          />
        </Link>
        <Link to="/" className="navbar-logo-text">
          UWCSSA
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

          <li className="nav-item">
            <Link to="/members" className="nav-links" onClick={closeMobileMenu}>
              Members
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/forum" className="nav-links" onClick={closeMobileMenu}>
              EN/中文
            </Link>
          </li>
          {/* <li
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
          </li> */}
          {/* 这东西是根据你有没有登录变的 */}
          <li className="nav-item">
            <Link to="/search" className="nav-links" onClick={closeMobileMenu}>
              <i class="fas fa-search"></i>
            </Link>
          </li>
          {isAuthenticated ? userInfo() : guestLinks()}

          {/* 这东西是根据你有没有登录变的 */}
        </ul>
        {/* <form>
          <input className="nav-search" placeholder="Search" />
        </form> */}

        {/* 这东西是根据你有没有登录变的 */}
        {isAuthenticated ? (
          ""
        ) : (
          <div className="none-at-media">
            <LoginButton />
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
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(Navbar);
