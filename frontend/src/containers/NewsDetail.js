import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedNew, removeSelectedNew } from "../redux/actions/newsActions";

import { makeStyles } from "@material-ui/core/styles";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import { Link as newslink } from "react-router-dom";
import { Container } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    width: "100%",
    minHeight: 320,
    left: 395,
    top: 442,
    marginTop: 36,
  },
  createby: {
    marginTop: 28,
  },
  createat: {
    marginTop: 29,
  },
  contentcss: {
    marginTop: 44,
  },
  buttoncss: {
    marginTop: 64,
  },
  main: {
    marginTop: 157,
    marginBottom: 1413,
  },
  breadcss: {
    marginTop: 42,
    marginLeft: "1rem",
  },
});

const NewsDetail = () => {
  const classes = useStyles();
  const new12 = useSelector((state) => state.new12);
  const { subject, content, image, created_by, id, updated_at } = new12;
  const { newId } = useParams();
  const dispatch = useDispatch();
  console.log(newId);

  const fetchNewDetail = async () => {
    const response = await axios
      .get(`https://api.uwcssa.ca/news/article/${newId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedNew(response.data));
  };

  useEffect(() => {
    if (newId && newId !== "") fetchNewDetail();
    return () => dispatch(removeSelectedNew());
  }, [newId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" className={classes.breadcss}>
        <Link color="inherit" href="/">
          首页
        </Link>
        <Link color="inherit" component={newslink} to="/news">
          新闻
        </Link>
        <Typography color="textPrimary">文章{id}</Typography>
      </Breadcrumbs>
      {/* <h1>NewsDetail</h1>
      <Button variant="contained" color="primary" component={Link} to="/news">
        Back to News
      </Button> */}
      {Object.keys(new12).length === 0 ? (
        <div>...Loading</div>
      ) : (
        // <Card className={classes.root}>
        //   <CardActionArea>
        //     <CardMedia
        //       component="img"
        //       alt="Contemplative Reptile"
        //       height="140"
        //       image={image}
        //       title={subject}
        //     />
        //     <CardContent>
        //       <Typography gutterBottom variant="h5" component="h2">
        //         {topic}
        //       </Typography>
        //       <Typography variant="body2" color="textSecondary" component="p">
        //         {content}
        //       </Typography>
        //     </CardContent>
        //   </CardActionArea>
        //   <CardActions>
        //     <Button size="small" color="primary">
        //       Share
        //     </Button>
        //     <Button size="small" color="primary">
        //       Learn More
        //     </Button>
        //   </CardActions>
        // </Card>
        <box>
          <Container className={classes.main}>
            <Typography component="h1" variant="h4" align="center">
              {subject}
            </Typography>

            <box>
              <Typography
                component="h1"
                variant="subtitle1"
                className={classes.createby}
              >
                by {created_by}
              </Typography>
              <Typography
                component="h1"
                variant="subtitle1"
                className={classes.createat}
              >
                {updated_at}
              </Typography>
              <CardMedia className={classes.media} image={image} />
              <CardContent>
                <Typography
                  variant="substitle1"
                  component="p"
                  className={classes.contentcss}
                >
                  {content}
                </Typography>
              </CardContent>

              <Typography
                variant="substitle1"
                align="center"
                className={classes.buttoncss}
              >
                *任何人都可以阅读
                评论区内容，但如果要添加或者回复评论，你必须是uwcssa的注册用户。如果你还没有账户，你可以现在就创建一个（免费）。
              </Typography>
            </box>
          </Container>
        </box>
      )}
    </div>
  );
};
export default NewsDetail;
