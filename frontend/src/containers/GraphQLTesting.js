import { Button, IconButton, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { API } from "aws-amplify";
import { listArticles } from "../graphql/queries";
import { Link } from "react-router-dom";
import { AmplifyS3Image } from "@aws-amplify/ui-react";
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
      // console.log("Article list", articleList);
      setArticles(articleList);
    } catch (error) {
      console.log("error on fetching Article", error);
    }
  };

  return (
    <div className={classes.root}>
      <Button variant="contained" component={Link} to="/uploadarticle">
        Go Add Article
      </Button>
      <Typography variant="h1">GraphQLTesting</Typography>
      {articles.map((article) => {
        // console.log( getImgURL(article.imagePath))
        // console.log(article)
        // <AmplifyS3Image imgKey={article.imagePath} />
        return (
          <div key={article.id}>
            <Typography variant="h3">title:{article.title}</Typography>
            <Typography variant="h3">article:{article.content}</Typography>
            <IconButton>like: {article.like}</IconButton>
            <IconButton>unlike: {article.unlike}</IconButton>
            <Typography variant="h5">topic: {article.topic}</Typography>
            <Typography variant="h5">type: {article.type}</Typography>
            <Typography variant="h3">owner:{article.owner}</Typography>
            <AmplifyS3Image path={article.imagePath} />
            {/* https://docs.amplify.aws/ui/storage/s3-image/q/framework/react/ */}
          </div>
        );
      })}
    </div>
  );
}
