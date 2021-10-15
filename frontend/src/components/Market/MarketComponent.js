import { AmplifyS3Image } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import {
  Typography,
  CardActionArea,
  Avatar,
  CardActions,
  Box,
  CardContent,
  Button,
  Card,
  CardHeader,
  IconButton,
} from "@mui/material";
const useStyles = makeStyles({
  root: {
    justifyContent: "center",
    margin: "auto",
    maxWidth: "960px",
    paddingInline: "1rem",
  },
  title: {
    textAlign: "center",

    color: "#0D1F48",
    paddingBottom: "3rem",
  },
  paper: {
    maxWidth: "100%",
    margin: "1rem auto",
  },
  s3image: {
    width: "100%",
  },
});

const MarketComponent = () => {
  const markets = useSelector((state) => state.allMarketItems.marketItems);
  const classes = useStyles();

  const renderList = markets.map((market) => {
    const {
      id,
      description,
      title,
      marketItemCategory,
      marketType,
      imagePath,
      price,
      //like,
      //unlike,
      createdAt,
      // updateAt,
      owner,
    } = market;

    return (
      <Grid item xs md={4}>
        <Card className={classes.paper} key={id} elevation={5}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}></Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={owner}
            subheader={`发布日期： ${createdAt.slice(0, 10)} ${createdAt.slice(
              11,
              19
            )}`}
          />{" "}
          <CardHeader title={title} />
          <CardActions>
            <Button size="small" color="primary">
              marketType: {marketType.name}
            </Button>
            <Button size="small" color="primary">
              marketItemCategory: {marketItemCategory.name}
            </Button>
          </CardActions>
          <div className={classes.s3image}>
            <CardActionArea>
              <CardContent>
                <AmplifyS3Image path={imagePath} />
              </CardContent>
            </CardActionArea>
          </div>
          <CardContent>
            <Typography variant="body1" noWrap color="red" component="p">
              价格：CAD {price}
            </Typography>
            <Typography
              variant="body1"
              noWrap
              color="textSecondary"
              component="p"
            >
              {description}
            </Typography>
          </CardContent>
          {/* <CardActions>
          <Button size="small" color="primary" startIcon={<ThumbUpIcon />}>
            {like.length}
          </Button>
          <Button size="small" color="primary" startIcon={<ThumbDownIcon />}>
            {unlike.length}
          </Button>
          <Button size="small" color="primary">
            回复: {}
          </Button>
        </CardActions> */}
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button
              size="small"
              color="primary"
              component={Link}
              to={`market/${id}`}
            >
              查看更多
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });

  return (
    <Box className={classes.root}>
      <Box>
        <Typography variant="h3" className={classes.title}>
          Markets
        </Typography>

        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            {renderList}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default MarketComponent;
