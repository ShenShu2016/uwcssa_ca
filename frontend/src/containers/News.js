import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/news_components/News.css";
import axios from "axios";
export default function News() {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/news/article_list/").then((response) => {
      setNewsData(
        response.data.results.map((newsitem, index) => (
          <Fragment>
            <div className="news-summary-box" key={index}>
              <div className="news-summary-topic">
                <Link to="/news/game/">
                  <button className="topic-tag">{newsitem.topic}</button>
                </Link>
              </div>

              <div className="news-summary-subject">
                <Link
                  to={"/news/" + newsitem.id}
                  style={{ textDecoration: "none" }}
                >
                  {newsitem.subject.substring(0, 35)}
                  {"..."}
                </Link>
              </div>
              <div className="news-summary-content">
                <Link to="/news/" style={{ textDecoration: "none" }}>
                  <p>{newsitem.content.substring(0, 150)}</p>
                </Link>
              </div>
              <div className="news-summary-author">
                <Link style={{ textDecoration: "none" }}>
                  {newsitem.created_by}
                </Link>
              </div>
              <div className="news-summary-times-info">观看：100 点赞：50</div>
            </div>
          </Fragment>
        )),
      );
    });
  }, []);

  console.log(newsData);

  return (
    <Fragment>
      <div className="news-title">
        <h3>In the News</h3>
      </div>
      <div className="news-main-container">
        <div className="news-main-pic">
          <div className="news-main-pic-left"></div>
          <div className="news-main-pic-right">
            <h3>GG dissolves Parliament, triggering election campaign</h3>
            <p>brief summary</p>
          </div>
        </div>
        <div className="lastest-news">
          <i></i>
          <p>Latest News</p>
        </div>
        {newsData}
      </div>
    </Fragment>
  );
}
