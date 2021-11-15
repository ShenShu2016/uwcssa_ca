import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CustomTags, { GetTags } from "../../components/CustomMUI/CustomTags";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import InputAdornment from "@mui/material/InputAdornment";
import MarketForm from "../../components/Market/marketForm";
import { MarketItemInfo } from "./MarketItemDetail";
import PublishIcon from "@mui/icons-material/Publish";
import { Storage } from "@aws-amplify/storage";
import SwipeViews from "../../components/Market/SwipeViews";
import { makeStyles } from "@mui/styles";
import { marketItemOptions } from "../../components/Market/marketItemOptions";
import { postMarketItem } from "../../redux/reducers/marketSlice";
import { postMultipleImages } from "../../redux/reducers/generalSlice";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router";
import { useTitle } from "../../Hooks/useTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    height: "calc(100vh - 64px)",
  },
  titleInput: {
    marginBlock: "2rem",
  },
  content: {},
  imgKeyFromServer: {
    width: "100%",
  },
  images: {
    height: "100%",
    width: "calc(100% - 360px)",
    // bgcolor="black"
    position: "relative",
    overflow: "hidden",
    float: "left",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "50vh",
    },
  },
  contain: {
    width: "100%",
    overflow: "hidden",
    height: "calc(100vh - 64px)",
    bgcolor: "black",
    [theme.breakpoints.down("md")]: {
      display: "block",
      height: "100%",
    },
  },
  info: {
    width: "360px",
    height: "100%",
    float: "left",
    paddingRight: "5px",
    overflowY: "auto",
    overflowX: "hidden",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100%",
    },
  },
  previewImg: {
    width: "100px",
    height: "100px",
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
  const user = useSelector((state) => state.userAuth.userProfile);
  const [imageKeys, setImageKeys] = useState("");
  const [fakeItems, setFakeItems] = useState({
    title: "Title",
    price: "Price",
    description: "Descriptions",
    location: "Location",
    marketItemCondition: "New",
    marketItemCategory: "Tools",
    tags: ["bala bala"],
    createdAt: new Date().toISOString().slice(0, 10),
    user: user,
    owner: username,
  });
  const [error, setError] = useState({
    imageKeys: false,
    title: false,
    price: false,
    marketItemCategory: false,
    marketItemCondition: false,
    location: false,
  });
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
    const imageLocation = "market/item";

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
      marketType: "Item",
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
      userID: username,
      sortKey: "SortKey",
    };
    console.log("check!", createMarketItemInput);
    const canSave = {
      imageKeys,
      title,
      price,
      marketItemCategory,
      marketItemCondition,
      location,
    };

    if (Object.values(canSave).every((item) => item !== "")) {
      const response = await dispatch(postMarketItem(createMarketItemInput));
      console.log("Something should be here", response);
      if (response.meta.requestStatus === "fulfilled") {
        history.push(
          `/market/item/${response.payload.data.createMarketItem.id}`
        );
      }
      console.log("Can upload");
    } else {
      const newError = {};
      Object.keys(canSave).forEach((item) =>
        canSave[item] === ""
          ? (newError[item] = true)
          : (newError[item] = false)
      );
      setError(newError);
    }
  };
  console.log("Check", imgKeyFromServer);
  return (
    <div className={classes.root}>
      <Stack className={classes.contain} direction="row">
        <Box className={classes.info}>
          <Paper
            elevation={3}
            sx={{ maxWidth: "100%", padding: "1rem", height: "100%" }}
          >
            <Box>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                fontWeight="bold"
              >
                New Item Listing
              </Typography>
            </Box>

            <Box>
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  type="file"
                  required
                  multiple
                  onChange={(e) => {
                    uploadMarketItemImg(e);
                    setError({ ...error, imageKeys: false });
                  }}
                />
                <Button variant="outlined" component="span">
                  上传图片
                </Button>
                {error.imageKeys ? (
                  <Typography color="error">
                    * At least ONE image is required!
                  </Typography>
                ) : null}
              </label>
            </Box>
            <Paper
              elevation={1}
              bgcolor="rgb(243, 246, 249)"
              sx={{
                marginY: "1rem",
                padding: "0.5rem",
                width: "100%",
                height: "125px",
                backgroundColor: "rgb(243, 246, 249)",
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                justifyContent="flex-start"
                alignItems="center"
                maxWidth="100%"
                sx={{ overflowX: "auto" }}
              >
                {imgKeyFromServer &&
                  imgKeyFromServer.map((imgKey, imgKeyIdx) => (
                    <Box
                      component="img"
                      className={classes.previewImg}
                      src={imgKey}
                      key={imgKeyIdx}
                      alt="images"
                      borderRadius="5px"
                    />
                  ))}
              </Stack>
            </Paper>

            <Box className={classes.content}>
              <Box sx={{ marginY: "1rem" }}>
                <TextField
                  label={`Title${Boolean(error.title) ? " is required!" : ""}`}
                  variant="outlined"
                  placeholder="Give your item the coolest name!"
                  autoFocus={
                    !Object.values(error).every(Boolean) || Boolean(error.title)
                  }
                  fullWidth
                  required
                  error={Boolean(error.title)}
                  value={marketItemData.title}
                  onChange={(e) => {
                    setMarketItemData({
                      ...marketItemData,
                      title: e.target.value,
                    });
                    setError({ ...error, title: false });
                    setFakeItems({ ...fakeItems, title: e.target.value });
                  }}
                />
              </Box>

              <Box sx={{ marginY: "1rem" }}>
                <TextField
                  label={`Price${Boolean(error.price) ? " is required!" : ""}`}
                  variant="outlined"
                  fullWidth
                  required
                  autoFocus={Boolean(error.price)}
                  error={Boolean(error.price)}
                  type="number"
                  placeholder="eg. 200 (Currency: CAD $)"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">CAD $</InputAdornment>
                    ),
                  }}
                  value={marketItemData.price}
                  className={classes.titleInput}
                  onChange={(e) => {
                    setMarketItemData({
                      ...marketItemData,
                      price: e.target.value,
                    });
                    setError({ ...error, price: false });
                    setFakeItems({ ...fakeItems, price: e.target.value });
                  }}
                />
              </Box>

              <Box sx={{ marginY: "1rem" }}>
                <MarketForm
                  title="Category"
                  value={marketItemData.marketItemCategory}
                  options={marketItemCategoryList}
                  required={true}
                  error={Boolean(error.marketItemCategory)}
                  onChange={(e) => {
                    setMarketItemData({
                      ...marketItemData,
                      marketItemCategory: e.target.value,
                    });
                    setError({ ...error, marketItemCategory: false });
                    setFakeItems({
                      ...fakeItems,
                      marketItemCategory: e.target.value,
                    });
                  }}
                />
              </Box>
              <Box sx={{ marginY: "1rem" }}>
                <CustomTags placeholder="新装修， 独立卫浴..." />
              </Box>
              <Box sx={{ marginY: "1rem" }}>
                <MarketForm
                  title="Condition"
                  value={marketItemData.marketItemCondition}
                  options={marketItemConditionList}
                  required={true}
                  error={Boolean(error.marketItemCondition)}
                  onChange={(e) => {
                    setMarketItemData({
                      ...marketItemData,
                      marketItemCondition: e.target.value,
                    });
                    setError({ ...error, marketItemCondition: false });
                    setFakeItems({
                      ...fakeItems,
                      marketItemCondition: e.target.value,
                    });
                  }}
                />
              </Box>
              <Box sx={{ marginY: "1rem" }}>
                <TextField
                  label={`Location${
                    Boolean(error.location) ? " is required!" : ""
                  }`}
                  value={marketItemData.location}
                  variant="outlined"
                  fullWidth
                  autoFocus={Boolean(error.location)}
                  error={Boolean(error.location)}
                  onChange={(e) => {
                    setMarketItemData({
                      ...marketItemData,
                      location: e.target.value,
                    });
                    setError({ ...error, location: false });
                    setFakeItems({ ...fakeItems, location: e.target.value });
                  }}
                />
              </Box>
              <Box sx={{ marginY: "1rem" }}>
                <TextField
                  label="description"
                  value={marketItemData.description}
                  minRows={5}
                  variant="outlined"
                  multiline
                  placeholder="Describe your items in a more detailed manner!"
                  fullWidth
                  onChange={(e) => {
                    setMarketItemData({
                      ...marketItemData,
                      description: e.target.value,
                    });
                    setFakeItems({ ...fakeItems, description: e.target.value });
                  }}
                />
              </Box>
            </Box>
            <Button
              // sx={{ marginY: "1rem" }}
              variant="outlined"
              endIcon={<PublishIcon />}
              onClick={uploadMarketItem}
              color="primary"
            >
              上传MarketItem
            </Button>
          </Paper>
        </Box>
        <Box
          width="calc(100% - 360px)"
          height="calc(100vh - 64px)"
          padding="2rem"
          float="right"
        >
          <Paper elevation={3} sx={{ height: "100%", width: "100%" }}>
            <Stack direction="row" width="100%" height="100%">
              <Box
                width="calc(100% - 350px)"
                height="100%"
                position="relative"
                sx={{ backgroundColor: "rgb(243, 246, 249)" }}
              >
                {imgKeyFromServer.length !== 0 ? (
                  <SwipeViews images={imgKeyFromServer} />
                ) : (
                  <Box
                    height="50px"
                    sx={{
                      left: "50%",
                      top: "40%",
                      position: "absolute",
                      transform: "translate(-50%,-50%)",
                    }}
                  >
                    <Typography variant="h4">
                      Your images will go here in the preview mode
                    </Typography>
                  </Box>
                )}
              </Box>
              <Box width="350px" height="100%">
                <MarketItemInfo marketItem={fakeItems} />
              </Box>
            </Stack>
          </Paper>
        </Box>
      </Stack>
    </div>
  );
}
