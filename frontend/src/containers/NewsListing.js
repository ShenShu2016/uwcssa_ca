import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsComponent from "./NewsComponent";
import axios from "axios";
import { setNews } from "../redux/actions/newsActions";

const NewsListing = () => {
  const news = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchNews = async () => {
    const response = await axios
      .get("https://api.uwcssa.ca/news/article_list/")
      .catch((err) => {
        console.log("Err", err);
      });

    dispatch(setNews(response.data.results));
  };
  console.log(news);

  useEffect(() => {
    fetchNews();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log("News:", news);
  return (
    <div>
      <NewsComponent />
    </div>
  );
};
export default NewsListing;
