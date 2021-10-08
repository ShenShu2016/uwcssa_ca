import React, { useEffect } from "react";

import ArticleComponent from "../components/Article/ArticleComponent";
import { setArticles } from "../redux/actions/articleActions";
import { useDispatch } from "react-redux";

export default function ArticleListing() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setArticles());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <ArticleComponent />
    </div>
  );
}
