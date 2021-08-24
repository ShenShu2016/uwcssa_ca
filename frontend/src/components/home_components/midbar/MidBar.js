import "./MidBar.css";
import { Link } from "react-router-dom";
import React from "react";

const MidBar = () => {
  return (
    <div className="midbar-container">
      <div className="inner-container">
        <div className="midbar-left">
          <Link to="/login">
            <a> SIGN UP FOR MORE FEATURES!</a>
          </Link>
        </div>
        <div className="midbar-right">
          <Link to="/login">
            <button>SIGN UP FOR FORUM</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MidBar;
