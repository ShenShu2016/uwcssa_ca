import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CssBaseline from "@mui/material/CssBaseline";
import { GetTags } from "../../components/CustomMUI/CustomTags";
import { Global } from "@emotion/react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { MarketCarpoolInfo } from "./MarketCarpoolDetail";
import PublishIcon from "@mui/icons-material/Publish";
import { Storage } from "@aws-amplify/storage";
import SwipeViews from "../../components/Market/SwipeViews";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import VisibilityIcon from "@mui/icons-material/Visibility";
// import InputAdornment from "@mui/material/InputAdornment";
// import MarketForm from "../../components/Market/marketForm";
import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
// import { marketItemOptions } from "../../components/Market/marketItemOptions";
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

export default function PostMarketPet() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  useTitle("发布Carpool信息");
  const [imgKeyFromServer, setImgKeyFromServer] = useState([]);
  const { username } = useSelector((state) => state.userAuth.user);
  const user = useSelector((state) => state.userAuth.userProfile);
  const [uploadStatus, setUploadStatus] = useState("idle");
  const [trigger, setTrigger] = useState(true);
  // const { marketItemConditionList, marketItemCategoryList } = marketItemOptions;
  const [imageKeys, setImageKeys] = useState("");
  const [open, setOpen] = useState(false);
  const [fakeItems, setFakeItems] = useState({
    title: "Title",
    price: "Price",
    description: "Descriptions",
    location: "Location",
    marketItemCondition: "New",
    marketItemCategory: "Tools",
    tags: ["Tags Goes Here"],
    createdAt: new Date().toISOString().slice(0, 10),
    updatedAt: new Date().toISOString().slice(0, 10),
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
    description: false,
  });

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

  const uploadMarketItemImg = async (e) => {
    const imagesData = e.target.files;
    const imageLocation = "market/pet";

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
    } = marketItemData;

    const createMarketItemInput = {
      marketType: "Pet",
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
      userID: username,
      sortKey: "SortKey",
    };
    // console.log("check!", createMarketItemInput);
    const canSave = {
      imageKeys,
      title,
      price,
      marketItemCategory,
      marketItemCondition,
      location,
      description,
    };

    if (Object.values(canSave).every((item) => item !== "")) {
      const response = await dispatch(postMarketItem(createMarketItemInput));
      console.log("Something should be here", response);
      if (response.meta.requestStatus === "fulfilled") {
        history.push(`/market/pet/${response.payload.id}`);
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

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // const handleKeyDown = (e) => {
  //   const newTags = [...fakeItems.tags, e];
  //   setFakeItems({ ...fakeItems, tags: newTags });
  // };

  // const handleDelete = (e) => {
  //   const newTags = fakeItems.tags.filter((tag) => tag !== e);
  //   setFakeItems({ ...fakeItems, tags: newTags });
  // };

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
                New Carpool Listing
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

              {/* <Box sx={{ marginY: "1rem" }}>
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
                </Box> */}
            </Box>
            <Button
              // sx={{ marginY: "1rem" }}
              variant="outlined"
              endIcon={<PublishIcon />}
              onClick={uploadMarketItem}
              color="primary"
              disabled //Disabled!
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
                <MarketCarpoolInfo marketItem={fakeItems} />
              </Box>
            </Stack>
          </Paper>
        </Box>
        <Box className={classes.drawer}>
          <CssBaseline />
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
            <Box overflow="hidden" height="100%">
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
                  <MarketCarpoolInfo marketItem={fakeItems} />
                </Box>
              </Box>
            </Box>
          </SwipeableDrawer>
        </Box>
      </Stack>
    </div>
  );
}
