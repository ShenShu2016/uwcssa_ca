import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import CustomTags, { GetTags } from "../../components/CustomMUI/CustomTags";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import MarketForm from "../../components/Market/marketForm";
import PublishIcon from "@mui/icons-material/Publish";
import { Storage } from "@aws-amplify/storage";
import { makeStyles } from "@mui/styles";
import { marketItemOptions } from "./marketItemOptions";
import { postMarketItem } from "../../redux/reducers/marketSlice";
import { postMultipleImages } from "../../redux/reducers/generalSlice";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router";
import { useTitle } from "../../Hooks/useTitle";

// import { postMarketItem } from "../../redux/actions/marketItemActions";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "960px",
    margin: "auto",
    paddingTop: "5rem",
  },

  imgPreview: {
    minHeight: "300px",
    backgroundColor: "#f4f4f4",
    textAlign: "center",
  },
  titleInput: {
    marginBlock: "2rem",
  },
  content: {
    marginBlock: "2rem",
  },
  type: {
    marginBlock: "2rem",
  },
  topic: {
    marginBlock: "2rem",
  },
  newTopic: {
    textAlign: "center",
    width: "100%",
    margin: "auto",
  },
  menuPaper: {
    maxHeight: 10,
  },
  imgKeyFromServer: {
    width: "100%",
  },
}));

const Input = styled("input")({
  display: "none",
});
export default function PostMarketItem() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useTitle("发布二手商品信息");
  const [imgKeyFromServer, setImgKeyFromServer] = useState([]);
  const { username } = useSelector((state) => state.userAuth.user);
  const [imageKeys, setImageKeys] = useState([]);
  const { marketItemConditionList, marketItemCategoryList } = marketItemOptions;

  const history = useHistory();

  const [marketItemData, setMarketItemData] = useState({
    title: "",
    name: "",
    price: "",
    description: "",
    marketItemCategory: "",
    marketItemCondition: "",
    location: "",
    tags: [],
  });
  console.log("marketItemData", marketItemData);

  const uploadMarketItemImg = async (e) => {
    const imagesData = e.target.files;
    const imageLocation = "marketItem";

    const response = await dispatch(
      postMultipleImages({ imagesData, imageLocation })
    );
    if (response.meta.requestStatus === "fulfilled") {
      setImageKeys(response.payload);
    }
  };

  useEffect(() => {
    const getImage = async () => {
      try {
        setImgKeyFromServer([]);
        const imageAccessURL = await Promise.all(
          Array.from(imageKeys).map((key) =>
            Storage.get(key, {
              level: "public",
              expires: 120,
              download: false,
            })
          )
        );
        setImgKeyFromServer((url) => url.concat(imageAccessURL));
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setImgKeyFromServer([]);
      }
    };
    console.log("imageKeys", imageKeys);
    if (imageKeys) {
      getImage();
    }
  }, [imageKeys]);

  const uploadMarketItem = async () => {
    //Upload the marketItem
    const {
      title,
      description,
      marketItemCategory,
      marketItemCondition,
      price,
      location,
    } = marketItemData;

    const createMarketItemInput = {
      title: title,
      name: title,
      description: description,
      price: price,
      imgS3Keys: imageKeys,
      marketItemCategory: marketItemCategory,
      marketItemCondition: marketItemCondition,
      location: location,
      tags: GetTags(),
      active: true,
      createdAt: new Date().toISOString(),
      userID: username,
      sortKey: "SortKey",
    };

    const response = await dispatch(postMarketItem(createMarketItemInput));
    if (response.payload.result) {
      history.push(
        `/market/item/${response.payload.response.data.createMarketItem.id}`
      );
    }
  };

  return (
    <div className={classes.root}>
      <Box>
        <Typography variant="h4" gutterBottom component="div">
          New Item Listing
        </Typography>
      </Box>

      <Box>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            type="file"
            multiple
            onChange={(e) => {
              uploadMarketItemImg(e);
            }}
          />
          <Button variant="contained" component="span">
            上传图片
          </Button>
        </label>
      </Box>

      {imgKeyFromServer &&
        imgKeyFromServer.map((imgKey, imgKeyIdx) => (
          <img
            className={classes.imgKeyFromServer}
            src={imgKey}
            key={imgKeyIdx}
            alt="images"
          />
        ))}

      <Box className={classes.content}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              required
              value={marketItemData.title}
              onChange={(e) => {
                setMarketItemData({ ...marketItemData, title: e.target.value });
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              type="number"
              placeholder="eg. 200 (Currency: CAD $)"
              value={marketItemData.price}
              className={classes.titleInput}
              onChange={(e) =>
                setMarketItemData({ ...marketItemData, price: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={6}>
            <MarketForm
              title="Category"
              value={marketItemData.marketItemCategory}
              options={marketItemCategoryList}
              required={true}
              onChange={(e) =>
                setMarketItemData({
                  ...marketItemData,
                  marketItemCategory: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTags />
          </Grid>
          <Grid item xs={6}>
            <MarketForm
              title="Condition"
              value={marketItemData.marketItemCondition}
              options={marketItemConditionList}
              required={true}
              onChange={(e) =>
                setMarketItemData({
                  ...marketItemData,
                  marketItemCondition: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="location"
              value={marketItemData.location}
              variant="outlined"
              fullWidth
              onChange={(e) =>
                setMarketItemData({
                  ...marketItemData,
                  location: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="description"
              value={marketItemData.description}
              minRows={5}
              variant="outlined"
              multiline
              fullWidth
              onChange={(e) =>
                setMarketItemData({
                  ...marketItemData,
                  description: e.target.value,
                })
              }
            />
          </Grid>
        </Grid>
      </Box>
      <Button
        variant="contained"
        endIcon={<PublishIcon />}
        onClick={uploadMarketItem}
        color="primary"
      >
        上传MarketItem
      </Button>
    </div>
  );
}
