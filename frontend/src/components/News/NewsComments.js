import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { setNewsComments } from "../../redux/actions/newsComActions";
import { useDispatch } from "react-redux";
import NewsComComponent from "./NewsComComponent";
const NewsComments = () => {
  const dispatch = useDispatch();
  const { newsId } = useParams();

  const fetchComments = async () => {
    const response = await axios
      .get(
        `${process.env.REACT_APP_API_URL}/news/articlecommentsingle_list/${newsId}?page=1`
      )
      .catch((err) => {
        console.log("Err", err);
      });

    dispatch(setNewsComments(response.data.results));
  };
  useEffect(() => {
    fetchComments();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <NewsComComponent />
    </div>
  );
};
export default NewsComments;
