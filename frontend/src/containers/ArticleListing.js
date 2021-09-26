import React, { useEffect } from "react";

import ArticleComponent from "../components/Article/ArticleComponent";
import { connect } from "react-redux";
import { setArticles } from "../redux/actions/articleActions";

const ArticleListing = ({ setArticles }) => {
  useEffect(() => {
    setArticles();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <ArticleComponent />
    </div>
  );
};

export default connect(null, { setArticles })(ArticleListing);
