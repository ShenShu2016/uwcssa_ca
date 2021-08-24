import "./WithJoinUs.css";
import { Link } from "react-router-dom";
import React, { useState, Fragment } from "react";

const WithJoinUs = () => {
  return (
    <Fragment>
      <div class="with-join-us">
        <div className="with-us">
          <div className="with-us-inner">
            <h3>WANT TO PARTNER WITH US?</h3>
            <div className="p-width">
              <p>
                We partner with organizations seeking growth and impact to build
                services and experiences for University of Windsor students and
                the local community.
              </p>
            </div>

            <button className="with-join-button"> Contact Us</button>
          </div>
        </div>
        <div className="join-us">
          <div className="join-us-inner">
            <h3>WANT TO JOIN OUR TEAM?</h3>

            <div className="p-width">
              <p>
                Are you looking to take on some of the biggest challenges or
                wish to make a contribution to the student community? Join our
                team.
              </p>
            </div>
            <button className="with-join-button">Join Us</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WithJoinUs;
