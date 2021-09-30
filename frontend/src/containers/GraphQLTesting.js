import { Button, IconButton, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { API } from "aws-amplify";
import { AmplifyS3Image } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import { listArticles } from "../graphql/queries";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    textAlign: "center",
    marginBottom: "2rem",
  },
}));

export default function GraphQLTesting() {
  const classes = useStyles();
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const articleData = await API.graphql({
        query: listArticles,
        authMode: "AWS_IAM",
      });
      const articleList = articleData.data.listArticles.items;
      console.log("articleData", articleData);

      setArticles(articleList);
    } catch (error) {
      console.log("error on fetching Article", error);
    }
  };
  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        component={Link}
        to="/account/staff/article/postArticle"
      >
        Go Create Article
      </Button>
      <Typography variant="h1">GraphQLTesting</Typography>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <Typography variant="h3">title:{article.title}</Typography>
            <Typography variant="h3">article:{article.content}</Typography>
            <IconButton>like: {article.like.length}</IconButton>
            <IconButton>unlike: {article.unlike.length}</IconButton>
            <Typography variant="h5">
              topic: {article.topic ? article.topic.name : ""}
            </Typography>
            <Typography variant="h5">
              type: {article.type ? article.type.name : ""}
            </Typography>
            <Typography variant="h3">owner:{article.owner}</Typography>
            <AmplifyS3Image path={article.imagePath} />
          </div>
        );
      })}
    </div>
  );
}
