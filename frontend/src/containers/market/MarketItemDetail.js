import {
  Avatar,
  Box,
  Button,
  CardActionArea,
  CardHeader,
  CardMedia,
  CircularProgress,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  removeSelectedMarketItem,
  selectedMarketItem,
} from "../../redux/actions/marketItemActions";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Storage from "@aws-amplify/storage";
import { makeStyles } from "@mui/styles";
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

  const [imageURL, setImageURL] = useState(null);
  const { id } = useParams();
  console.log("id", id);
  useEffect(() => {
    if (id && id !== "") {
      const type = "item";
      dispatch(selectedMarketItem(id, type));
    }
    return () => dispatch(removeSelectedMarketItem());
  }, [id, dispatch]);
  const { marketItem } = useSelector((state) => state.market.selected);
  console.log("marketItem", marketItem);
  const {
    // id,
    // name,
    imgS3Keys,
    title,
    price,
    description,
    location,
    marketItemCondition,
    marketItemCategory,
    tags,
    // active,
    createdAt,
    // ByCreatedAt,
    owner,
  } = marketItem;

  useEffect(() => {
    const getImage = async () => {
      try {
        console.log("我tm又莱拉imgS3Keys[0]", imgS3Keys[0]);
        const imageAccessURL = await Storage.get(imgS3Keys[0], {
          level: "public",
          expires: 120,
          download: false,
        });
        // console.log("imageAccessURL", imageAccessURL);
        setImageURL(imageAccessURL);
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setImageURL(null);
      }
    };
    if (imgS3Keys) {
      getImage();
    }
  }, [imgS3Keys]);

  return (
    <div className={classes.root}>
      {Object.keys(marketItem).length === 0 ? (
        <div>
          <CircularProgress />
        </div>
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
          <Typography variant="h3" align="center" className={classes.title}>
            {title}
          </Typography>

          <CardActionArea
            onClick={() => {
              window.open(imageURL[0]);
            }}
          >
            <CardMedia component="img" image={imageURL} />
          </CardActionArea>
          <Divider />
          <Typography variant="h3" color="red" className={classes.title}>
            Tags：{tags}
          </Typography>
          <Typography variant="h3" color="red" className={classes.title}>
            价格：$ {price}
          </Typography>
          <Typography variant="h3" color="red" className={classes.title}>
            位置：{location}
          </Typography>
          <Typography variant="h3" color="red" className={classes.title}>
            条件：{marketItemCondition}
          </Typography>
          <Typography variant="h3" color="red" className={classes.title}>
            分类：{marketItemCategory}
          </Typography>
          <Typography
            variant="body1"
            className={classes.content}
            component="pre"
          >
            {description}
          </Typography>
          <Button size="small" color="primary">
            回复(测试)
          </Button>
        </Box>
      )}
    </div>
  );
}
