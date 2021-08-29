import React, { Fragment, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import "../components/news_components/newssinglepage/NewsSinglePage.css";

const NewsSinglePage = ({ isAuthenticated, user }) => {
  const { article_id } = useParams();

  const [singleNewsData, setsingleNewsData] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/news/article/${article_id}`)
      .then((response) => {
        setsingleNewsData(
          <Fragment>
            <div className="newssingle-title">{response.data.subject}</div>
            <div className="newssingle-info-share">
              <Link>
                <i class="fab fa-weixin"></i>
              </Link>
              <Link>
                <i class="fab fa-weibo"></i>
              </Link>
              <Link>
                <i class="fab fa-facebook"></i>
              </Link>
            </div>
            <div className="newssingle-post-info">
              <ul>
                <li>By: {response.data.created_by}</li>
                <li>Post at: {response.data.created_at}</li>
                <li>Last Update: {response.data.updated_at}</li>
              </ul>
            </div>
            <div className="newssingle-main-pic">
              <img src={response.data.image} alt="" />
            </div>
            <div className="newssingle-content">
              <pre>{response.data.content}</pre>
            </div>
          </Fragment>,
        );
      });
  }, []);

  const logInBar = (
    <div className="newssingle-login">
      <div className="newssingle-login-inner">
        <span>The comment section is now closed. Please </span>
        <span>
          <Link to="/login">
            <button>Log In</button>
          </Link>
        </span>
        <span>or </span>
        <span>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </span>
      </div>
    </div>
  );
  return (
    <Fragment>
      <div className="newssingle-main-container">
        {singleNewsData}
        <div className="newssingle-comment">
          {isAuthenticated ? "" : logInBar}
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps)(NewsSinglePage);
