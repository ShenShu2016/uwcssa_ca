import React, { useEffect } from "react";
import axios from "axios";

import { setNewsComments } from "../../redux/actions/newsComActions";
import { useDispatch } from "react-redux";
import NewsComComponent from "./NewsComComponent";
const NewsComments = () => {
  const dispatch = useDispatch();

  const fetchComments = async () => {
    const response = await axios
      .get("https://api.uwcssa.ca/news/articlecomment_list")
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
