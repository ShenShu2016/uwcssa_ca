import React, { useEffect } from "react";
import {
  removeSelectedMarketItem,
  selectedMarketItem,
} from "../redux/actions/marketItemActions";
import { useDispatch, useSelector } from "react-redux";
import "./../components/Article/ArticleDetail/Main.css";
import { AmplifyS3Image } from "@aws-amplify/ui-react";

import { Link } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

import { makeStyles } from "@mui/styles";
import {
  Typography,
  Avatar,
  CardActions,
  Box,
  Button,
  CardHeader,
  IconButton,
} from "@mui/material";

import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  bread: {
    marginTop: "4rem",
    marginLeft: "1rem",
  },
  root: {
    maxWidth: "960px",
    margin: "auto",
    paddingBlock: "3rem",
    paddingInline: "1rem",
  },
});
export default function MarketItemDetail() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { marketId } = useParams();

  useEffect(() => {
    if (marketId && marketId !== "") {
      dispatch(selectedMarketItem(marketId));
    }
    return () => dispatch(removeSelectedMarketItem());
  }, [marketId]); // eslint-disable-line react-hooks/exhaustive-deps

  const marketItem = useSelector((state) => state.marketItem);
  console.log("111111111", marketItem);
  const {
    title,
    createdAt,
    imagePath,
    owner,
    price,

    // updatedAt,
    marketItemCategory,
    marketType,
    description,
  } = marketItem;

  return (
    // <div className={classes.root}>
    //   {/* <Main article={marketItem} /> */}
    //   {/* <ArticleComments article={article} />
    //   <ArticleCommentsPost article={article} /> */}
    // </div
    <div className={classes.root}>
      {Object.keys(marketItem).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Box>
          <CardHeader
            avatar={
              <Avatar
                aria-label="recipe"
                className={classes.avatar}
                component={Link}
                to={`/account/profile/${owner}`}
              ></Avatar>
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
          />
          <CardActions>
            <Button size="small" color="primary">
              marketType: {marketType.name}
            </Button>
            <Button size="small" color="primary">
              marketItemCategory: {marketItemCategory.name}
            </Button>
          </CardActions>
          <Typography variant="h3" align="center" className={classes.title}>
            {title}
          </Typography>

          <AmplifyS3Image path={imagePath} />
          <Typography variant="h3" color="red" className={classes.title}>
            价格：{price}
          </Typography>
          <Typography
            variant="body1"
            className={classes.content}
            component="pre"
          >
            {description}
          </Typography>
          {/* <Button size="small" color="primary" startIcon={<ThumbUpIcon />}>
            {like.length}
          </Button>
          <Button size="small" color="primary" startIcon={<ThumbDownIcon />}>
            {unlike.length}
          </Button> */}
          <Button size="small" color="primary">
            回复(测试)
          </Button>
        </Box>
      )}
    </div>
  );
}
