import React, { useEffect } from "react";

import NewsComComponent from "./NewsComComponent";
import axios from "axios";
import { setNewsComments } from "../../redux/actions/newsComActions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const NewsComments = () => {
  const dispatch = useDispatch();
  const { articleId } = useParams();

  const fetchComments = async () => {
    const response = await axios
      .get(
        `${process.env.REACT_APP_API_URL}/news/articlecommentsingle_list/${articleId}?page=1`
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
