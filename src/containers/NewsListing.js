import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import NewsComponent from "./NewsComponent";
import axios from "axios";
import { setNews } from "../redux/actions/newsActions";

const NewsListing = () => {
  // const news = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchNews = async () => {
    const response = await axios
      .get(`${process.env.REACT_APP_API_URL}/news/article_list/`)
      .catch((err) => {
        console.log("Err", err);
      });

    dispatch(setNews(response.data.results));
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

export default NewsListing;
