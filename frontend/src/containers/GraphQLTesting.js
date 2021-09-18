import { Button, IconButton, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { listArticles } from "../graphql/queries";
import { Link } from "react-router-dom";

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
    setTimeout(()=>{
      setRefresh(refresh=>!refresh);
    },1000)
  }, []);

  const fetchArticles = async () => {
    try {
      const articleData = await API.graphql({
        query: listArticles,
        authMode: "AWS_IAM",
      });
      const articleList = articleData.data.listArticles.items;
      console.log("Article list", articleList);

      modifyArticles(articleList)
      
    } catch (error) {
      console.log("error on fetching Article", error);
    }
  };

  const [refresh, setRefresh] = useState(false);

  const modifyArticles = async articles => {
    console.log(articles.length)
    let newArticles = []
    articles.map(async article => {
      newArticles.push({ ...article, imagePath:await Storage.get(article.imagePath)})
    })
    setArticles(newArticles)
  }

  return (
    <div className={classes.root}>
      <Button variant="contained" component={Link} to="/uploadarticle">
        Go Add Article
      </Button>
      <Typography variant="h1">GraphQLTesting</Typography>
      {articles.length==0 ? <h1>Loading...</h1> : articles.map(article => {
        return (
          <div key={article.id}>
            <Typography variant="h3">title:{article.title}</Typography>
            <Typography variant="h3">article:{article.content}</Typography>
            <IconButton>like: {article.like}</IconButton>
            <IconButton>unlike: {article.unlike}</IconButton>
            <Typography variant="h5">topic: {article.topic}</Typography>
            <Typography variant="h5">type: {article.type}</Typography>
            <Typography variant="h3">owner:{article.owner}</Typography>
            <Typography variant="h3"><img src={article.imagePath} style={{width: 188,height: 188}} /></Typography>
          </div>
        );
      })}
    </div>
  );
}
