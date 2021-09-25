import React, { useEffect } from "react";

import NewsComponent from "./NewsComponent";
import axios from "axios";
import { setArticles } from "../redux/actions/articleActions";
import { useDispatch } from "react-redux";

const ArticleListing = () => {
  // const news = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchNews = async () => {
    const response = await axios
      .get(`${process.env.REACT_APP_API_URL}/news/article_list/`)
      .catch((err) => {
        console.log("Err", err);
      });

    dispatch(setArticles(response.data.results));
  };
  useEffect(() => {
    fetchNews();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <NewsComponent />
    </div>
  );
};

export default ArticleListing;
