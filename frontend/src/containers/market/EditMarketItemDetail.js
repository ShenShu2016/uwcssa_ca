import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CustomTags, { GetTags } from "../../components/CustomMUI/CustomTags";
import React, { useEffect, useState } from "react";
import {
  selectMarketItemById,
  updateMarketItemDetail,
} from "../../redux/reducers/marketSlice";
import { useDispatch, useSelector } from "react-redux";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Global } from "@emotion/react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import InputAdornment from "@mui/material/InputAdornment";
import MarketForm from "../../components/Market/marketForm";
import { MarketItemInfo } from "./MarketItemDetail";
import PublishIcon from "@mui/icons-material/Publish";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { Storage } from "@aws-amplify/storage";
import SwipeViews from "../../components/SwipeViews";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { marketItemOptions } from "../../components/Market/marketItemOptions";
import { postMultipleImages } from "../../redux/reducers/generalSlice";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
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
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: `calc(100% - ${drawerBleeding}px)`,
    },
  },
  previewImg: {
    width: "100px",
    height: "100px",
    position: "relative",
    backgroundColor: "rgb(0 0 0 / 20%)",
    borderRadius: "5px",
    zIndex: "1",
  },
  preview: {
    width: "calc(100% - 360px)",
    height: "calc(100vh - 64px)",
    padding: "2rem",
    float: "right",
    [theme.breakpoints.down("lg")]: {
      display: "block",
      height: "100%",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  previewImgRight: {
    width: "calc(100% - 350px)",
    height: "100%",
    position: "relative",
    backgroundColor: "rgb(243, 246, 249)",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      height: "40vh",
    },
  },
  previewInfo: {
    width: "350px",
    height: "100%",
    overflowY: "auto",
    overflowX: "hidden",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      height: "100vh",
      overflow: "hidden",
    },
  },
  drawer: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      backgroundColor:
        theme.palette.mode === "light"
          ? grey[100]
          : theme.palette.background.default,
    },
  },
  puller: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      width: 30,
      height: 6,
      backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
      borderRadius: 3,
      position: "absolute",
      top: 8,
      left: "calc(50% - 15px)",
    },
  },
  styledBox: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
    },
  },
  icon: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
}));

const Input = styled("input")({
  display: "none",
});

const drawerBleeding = 56;

export default function EditMarketItemDetail() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  useTitle("更新二手商品信息");
  const marketItem = useSelector((state) => selectMarketItemById(state, id));
  const [fakeItems, setFakeItems] = useState(marketItem);

  const { imgS3Keys } = marketItem;
  const [imgKeyFromServer, setImgKeyFromServer] = useState(imgS3Keys);
  const [marketItemData, setMarketItemData] = useState(marketItem);
  const [uploadStatus, setUploadStatus] = useState("idle");
  const [trigger, setTrigger] = useState(true);
  const { marketItemConditionList, marketItemCategoryList } = marketItemOptions;
  let temp = [];
  imgS3Keys.map((img, idx) => (temp[idx] = [img, "temp"]));
  const [imageKeys, setImageKeys] = useState(Object.fromEntries(temp));

  const [open, setOpen] = useState(false);

  const [error, setError] = useState({
    imageKeys: false,
    title: false,
    price: false,
    marketItemCategory: false,
    marketItemCondition: false,
    location: false,
    description: false,
    contactEmail: false,
    contactPhone: false,
  });

  const uploadMarketItemImg = async (e) => {
    const imagesData = e.target.files;
    const imageLocation = "market/item";

    const response = await dispatch(
      postMultipleImages({ imagesData, imageLocation })
    );
    if (response.meta.requestStatus === "fulfilled") {
      const newImg = response.payload.map((key) => [key, "temp"]);
      const temp = Object.entries(imageKeys).concat(newImg);
      setImageKeys(Object.fromEntries(temp));
    }
  };

  useEffect(() => {
    const getImage = async () => {
      try {
        // setImgKeyFromServer([]);
        const imageAccessURL = await Promise.all(
          Object.keys(imageKeys).map((key) =>
            Storage.get(key, {
              level: "public",
              expires: 120,
              download: false,
            })
          )
        );
        // setImgKeyFromServer((url) => url.concat(imageAccessURL));
        setImgKeyFromServer(imageAccessURL);
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setImgKeyFromServer([]);
      }
    };
    // console.log("imageKeys", imageKeys);
    if (imageKeys && trigger === true) {
      getImage();
    }
  }, [imageKeys, trigger]);

  useEffect(() => {
    if (
      Object.values(imageKeys).includes("temp") &&
      Object.values(imageKeys).length === imgKeyFromServer.length &&
      trigger
    ) {
      const images = Object.entries(imageKeys);
      console.log("Bug here!", images);
      if (Object.values(imageKeys).length === 1) {
        let temp = {};
        temp[images[0][0]] = imgKeyFromServer[0];
        console.log("almost", temp);
        setImageKeys(temp);
      } else {
        imgKeyFromServer.map((url, idx) => (images[idx][1] = url));
        console.log("almost", images);
        setImageKeys(Object.fromEntries(images));
      }
      setTrigger(false);
    }
  }, [imgKeyFromServer, imageKeys, trigger]);

  const uploadMarketItem = async () => {
    //Upload the marketItem
    const {
      title,
      description,
      marketItemCategory,
      marketItemCondition,
      price,
      location,
      contactEmail,
      contactPhone,
      contactWeChat,
    } = marketItemData;

    const updatedMarketItem = {
      marketType: "Item",
      id: id,
      title: title,
      name: title,
      description: description,
      price: price,
      imgS3Keys: Object.keys(imageKeys),
      marketItemCategory: marketItemCategory,
      marketItemCondition: marketItemCondition,
      location: location,
      tags: GetTags(),
      active: true,
      userID: marketItem.userID,
      contactEmail,
      contactPhone,
      contactWeChat,
      sortKey: "SortKey",
    };
    // console.log("check!", updateMarketItemDetail);
    const canSave = {
      imageKeys,
      title,
      price,
      marketItemCategory,
      marketItemCondition,
      location,
      description,
      contactEmail,
      contactPhone,
    };

    if (Object.values(canSave).every((item) => item !== "")) {
      const response = await dispatch(
        updateMarketItemDetail(updatedMarketItem)
      );
      console.log("Something should be here", response);
      if (response.meta.requestStatus === "fulfilled") {
        history.push(`/market/item/${response.payload.id}`);
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

  const handleDeleteImg = (imgKey) => {
    const newImg = [...imgKeyFromServer].filter((key) => key !== imgKey);
    const images = { ...imageKeys };
    const newKeys = Object.fromEntries(
      Object.entries(images).filter(([key, value]) => value !== imgKey)
    );
    setImgKeyFromServer(newImg);
    setImageKeys(newKeys);
  };

  const handleKeyDown = (e) => {
    const newTags = [...fakeItems.tags, e];
    setFakeItems({ ...fakeItems, tags: newTags });
  };

  const handleDelete = (e) => {
    const newTags = fakeItems.tags.filter((tag) => tag !== e);
    setFakeItems({ ...fakeItems, tags: newTags });
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  console.log("imgKeys", imageKeys);
  console.log("imgKeyfromServer", imgKeyFromServer);
  return (
    <div className={classes.root}>
      <Stack className={classes.contain} direction="row">
        <Box className={classes.info}>
          <Paper
            elevation={3}
            sx={{
              maxWidth: "100%",
              padding: "1rem",
              height: "100%",
              overflowY: "auto",
              overflowX: "hidden",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Stack direction="row" justifyContent="space-between">
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                fontWeight="bold"
              >
                New Item Listing
              </Typography>
              <Box className={classes.icon}>
                <IconButton onClick={toggleDrawer(true)}>
                  <VisibilityIcon />
                </IconButton>
              </Box>
            </Stack>
            {imgKeyFromServer.length !== 0 ? (
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  type="file"
                  required
                  multiple
                  onChange={(e) => {
                    uploadMarketItemImg(e);
                    setTrigger(true);
                  }}
                />
                <Button variant="outlined" component="span">
                  Upload More {imgKeyFromServer.length}/5
                </Button>
              </label>
            ) : null}
            <Paper
              elevation={1}
              bgcolor="rgb(243, 246, 249)"
              sx={{
                marginY: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.25rem",
                width: "100%",
                height: "130px",
                backgroundColor: "rgb(243, 246, 249)",
              }}
            >
              {imgKeyFromServer.length === 0 ? (
                uploadStatus !== "succeeded" ? (
                  <label htmlFor="contained-button-file">
                    <Stack
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Input
                        accept="image/*"
                        id="contained-button-file"
                        type="file"
                        required
                        multiple
                        onChange={(e) => {
                          uploadMarketItemImg(e);
                          setTrigger(true);
                          setError({ ...error, imageKeys: false });
                          setUploadStatus("succeeded");
                          setTimeout(() => {
                            setUploadStatus("idle");
                          }, 2500);
                        }}
                      />
                      <Typography fontSize="15px" fontWeight="lighter">
                        Upload your images from HERE!
                      </Typography>
                      {error.imageKeys ? (
                        <Typography color="error">
                          * At least ONE image is required!
                        </Typography>
                      ) : null}
                      <AddPhotoAlternateIcon sx={{ fontSize: 60 }} />
                    </Stack>
                  </label>
                ) : (
                  <Stack
                    direction="column"
                    spacing={1}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography fontSize="15px" fontWeight="lighter">
                      Loading preview...
                    </Typography>
                    <CircularProgress />
                  </Stack>
                )
              ) : (
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                  color="rgb(243, 246, 249)"
                  sx={{ overflowX: "auto" }}
                >
                  {imgKeyFromServer &&
                    imgKeyFromServer.map((imgKey, imgKeyIdx) => (
                      <Box key={imgKeyIdx} className={classes.previewImg}>
                        <Box
                          component="img"
                          src={imgKey}
                          key={imgKeyIdx}
                          alt="images"
                          zIndex="1"
                          borderRadius="5px"
                          sx={{
                            top: "50%",
                            left: "50%",
                            position: "absolute",
                            transform: "translate(-50%,-50%)",
                            maxHeight: "100px",
                            maxWidth: "100%",
                          }}
                        />
                        <IconButton
                          color="inherit"
                          key={imgKey}
                          onClick={() => handleDeleteImg(imgKey)}
                          sx={{
                            top: 0,
                            right: 0,
                            zIndex: "2",
                            position: "absolute",
                          }}
                        >
                          <HighlightOffIcon />
                        </IconButton>
                      </Box>
                    ))}
                </Stack>
              )}
            </Paper>

            <Box className={classes.content}>
              <Box sx={{ marginY: "1rem" }}>
                <TextField
                  label={`Title${Boolean(error.title) ? " is required!" : ""}`}
                  variant="outlined"
                  placeholder="Give your item the coolest name!"
                  autoFocus
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
                <CustomTags
                  placeholder="新装修， 独立卫浴..."
                  initial={fakeItems.tags}
                  onKeyDown={(e) => handleKeyDown(e)}
                  onDelete={(e) => handleDelete(e)}
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
                  error={Boolean(error.location)}
                  required
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
                  label={`Description${
                    Boolean(error.description) ? " is required!" : ""
                  }`}
                  value={marketItemData.description}
                  minRows={5}
                  variant="outlined"
                  multiline
                  error={Boolean(error.description)}
                  required
                  placeholder="Describe your items in a more detailed manner!"
                  fullWidth
                  onChange={(e) => {
                    setMarketItemData({
                      ...marketItemData,
                      description: e.target.value,
                    });
                    setError({ ...error, description: false });
                    setFakeItems({ ...fakeItems, description: e.target.value });
                  }}
                />
              </Box>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Using default contact information"
                />
              </FormGroup>
              <Box sx={{ marginY: "1rem" }}>
                <TextField
                  label={`Contact Phone${
                    Boolean(error.contactPhone) ? " is required!" : ""
                  }`}
                  value={marketItemData.contactPhone}
                  variant="outlined"
                  error={Boolean(error.contactPhone)}
                  required
                  placeholder="eg: (123) 456 789"
                  fullWidth
                  onChange={(e) => {
                    setMarketItemData({
                      ...marketItemData,
                      contactPhone: e.target.value,
                    });
                    setError({ ...error, contactPhone: false });
                  }}
                />
              </Box>
              <Box sx={{ marginY: "1rem" }}>
                <TextField
                  label={`Contact Email${
                    Boolean(error.contactEmail) ? " is required!" : ""
                  }`}
                  value={marketItemData.contactEmail}
                  variant="outlined"
                  error={Boolean(error.contactEmail)}
                  required
                  placeholder="wang123456@email.com "
                  fullWidth
                  onChange={(e) => {
                    setMarketItemData({
                      ...marketItemData,
                      contactEmail: e.target.value,
                    });
                    setError({ ...error, contactEmail: false });
                  }}
                />
              </Box>
              <Box sx={{ marginY: "1rem" }}>
                <TextField
                  label="Contact WeChat"
                  value={marketItemData.contactWeChat}
                  variant="outlined"
                  placeholder="eg: Wang123"
                  fullWidth
                  onChange={(e) => {
                    setMarketItemData({
                      ...marketItemData,
                      contactWeChat: e.target.value,
                    });
                  }}
                />
              </Box>
            </Box>
            <Button
              // sx={{ marginBottom: "2rem" }}
              variant="outlined"
              endIcon={<PublishIcon />}
              onClick={uploadMarketItem}
              color="primary"
            >
              上传MarketItem
            </Button>
          </Paper>
        </Box>
        <Box className={classes.preview}>
          <Paper elevation={3} sx={{ height: "100%", width: "100%" }}>
            <Stack
              direction={{ xs: "column", lg: "row" }}
              width="100%"
              height="100%"
            >
              <Box className={classes.previewImgRight}>
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
                    <Typography variant="h6">
                      Your images will go here in the preview mode
                    </Typography>
                  </Box>
                )}
              </Box>
              <Box className={classes.previewInfo}>
                <MarketItemInfo marketItem={fakeItems} mode="preview" />
              </Box>
            </Stack>
          </Paper>
        </Box>
        <Box className={classes.drawer}>
          <ScopedCssBaseline />
          <Global
            styles={{
              ".MuiDrawer-root > .MuiPaper-root": {
                height: `calc(80% - ${drawerBleeding}px)`,
                overflow: "visible",
              },
            }}
          />
          <SwipeableDrawer
            anchor="bottom"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <Box
              className={classes.styledBox}
              sx={{
                position: "absolute",
                top: -drawerBleeding,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                visibility: "visible",
                right: 0,
                left: 0,
              }}
            >
              <Box className={classes.puller} />
              <Typography sx={{ p: 2, color: "text.secondary" }}>
                Preview
              </Typography>
            </Box>
            <Box
              width="100%"
              height="100%"
              sx={{ overflowX: "hidden", overflowY: "auto" }}
            >
              <Box className={classes.previewImgRight}>
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
                    <Typography variant="h6">
                      Your images will go here in the preview mode
                    </Typography>
                  </Box>
                )}
              </Box>
              <Box className={classes.previewInfo}>
                <MarketItemInfo marketItem={fakeItems} mode="preview" />
              </Box>
            </Box>
          </SwipeableDrawer>
        </Box>
      </Stack>
    </div>
  );
}
