import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import CustomTags, { GetTags } from "../../components/CustomMUI/CustomTags";
import React, { useEffect, useState } from "react";
import {
  fetchMarketUserInfo,
  postMarketUserInfo,
  selectMarketUserById,
  updateMarketUserInfoDetail,
} from "../../redux/reducers/marketUserSlice";
import { useDispatch, useSelector } from "react-redux";

import InputAdornment from "@mui/material/InputAdornment";
import MarketForm from "../../components/Market/marketForm";
import PostImgPreview from "../../components/Market/postImgPrev";
import PreviewInfo from "./previewInfo";
import PublishIcon from "@mui/icons-material/Publish";
import { Storage } from "@aws-amplify/storage";
import SwipeableDrawerInfo from "../../components/Market/swipeableDrawer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { marketItemOptions } from "../../components/Market/marketItemOptions";
import { postMarketItem } from "../../redux/reducers/marketSlice";
import { postMultipleImages } from "../../redux/reducers/generalSlice";
import { postStyle } from "../../components/Market/postCss";
import { useHistory } from "react-router";
import { useTitle } from "../../Hooks/useTitle";

export default function PostMarketItem() {
  const classes = postStyle();
  const dispatch = useDispatch();
  const history = useHistory();
  useTitle("发布二手商品信息");
  const [imgKeyFromServer, setImgKeyFromServer] = useState([]);
  const { username } = useSelector((state) => state.userAuth.user);
  const user = useSelector((state) => state.userAuth.userProfile);
  const [uploadStatus, setUploadStatus] = useState("idle");
  const [trigger, setTrigger] = useState(true);
  const [defaultInfo, setDefaultInfo] = useState(true);
  const marketUserInfo = useSelector((state) =>
    selectMarketUserById(state, username)
  );
  const { marketItemConditionList, marketItemCategoryList } = marketItemOptions;
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

  const {
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      imgS3Keys: "",
      title: "",
      name: "",
      price: "",
      description: "",
      marketItemCategory: "",
      marketItemCondition: "",
      location: "",
      contactEmail: "",
      contactWeChat: "",
      contactPhone: "",
    },
  });
  const onSubmit = async (data) => {
    const createMarketItemInput = {
      ...data,
      marketType: "Item",
      imgS3Keys: Object.keys(imageKeys),
      tags: GetTags(),
      active: true,
      userID: username,
      sortKey: "SortKey",
    };
    const { contactEmail, contactPhone, contactWeChat } = data;
    const userInfo = {
      id: username,
      phone: contactPhone,
      weChat: contactWeChat,
      email: contactEmail,
      userID: username,
    };
    console.log("createMarketItemInput", createMarketItemInput);
    const response = await dispatch(postMarketItem(createMarketItemInput));
    if (marketUserInfo === undefined) {
      await dispatch(postMarketUserInfo(userInfo));
    } else if (marketUserInfo !== undefined) {
      if (defaultInfo === true) {
        await dispatch(updateMarketUserInfoDetail(userInfo));
      }
    }

    console.log("Something should be here", response);
    if (response.meta.requestStatus === "fulfilled") {
      history.push(`/market/item/${response.payload.id}`);
      reset();
    }
    console.log("Can upload");
  };

  useEffect(() => {
    dispatch(fetchMarketUserInfo(username));
  }, [username, dispatch]);

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

  return (
    <div className={classes.root}>
      <Stack className={classes.contain} direction="row">
        <Box className={classes.info}>
          <Paper
            className={classes.leftInfoPaper}
            elevation={3}
            sx={{ backgroundColor: "#f9f9f9" }}
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
                <IconButton onClick={() => setOpen(true)}>
                  <VisibilityIcon />
                </IconButton>
              </Box>
            </Stack>
            <PostImgPreview
              imgKeyFromServer={imgKeyFromServer}
              uploadStatus={uploadStatus}
              control={control}
              errors={errors}
              uploadMarketItemImg={uploadMarketItemImg}
              setTrigger={setTrigger}
              setUploadStatus={setUploadStatus}
              handleDeleteImg={handleDeleteImg}
            />
            <Box className={classes.content}>
              <Box sx={{ marginY: "1rem" }}>
                <Controller
                  name="title"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label={`Title${!!errors.title ? " is required!" : ""}`}
                      variant="outlined"
                      placeholder="Give your item the coolest name!"
                      autoFocus
                      fullWidth
                      required
                      error={!!errors.title}
                      value={value}
                      onChange={(e) => {
                        onChange(e);
                        setFakeItems({ ...fakeItems, title: e.target.value });
                      }}
                    />
                  )}
                />
              </Box>

              <Box sx={{ marginY: "1rem" }}>
                <Controller
                  name="price"
                  control={control}
                  rules={{
                    required: true,
                    pattern: /[0-9]/,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label={`Price${!!errors.price ? " is required!" : ""}`}
                      variant="outlined"
                      fullWidth
                      required
                      error={!!errors.price}
                      type="number"
                      placeholder="eg. 200 (Currency: CAD $)"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            CAD $
                          </InputAdornment>
                        ),
                      }}
                      value={value}
                      className={classes.titleInput}
                      onChange={(e) => {
                        onChange(e);
                        setFakeItems({ ...fakeItems, price: e.target.value });
                      }}
                    />
                  )}
                />
              </Box>

              <Box sx={{ marginY: "1rem" }}>
                <Controller
                  name="marketItemCategory"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <MarketForm
                      title="Category"
                      value={value}
                      options={marketItemCategoryList}
                      required={true}
                      error={!!errors.marketItemCategory}
                      onChange={(e) => {
                        onChange(e);
                        setFakeItems({
                          ...fakeItems,
                          marketItemCategory: e.target.value,
                        });
                      }}
                    />
                  )}
                />
              </Box>
              <Box sx={{ marginY: "1rem" }}>
                <Controller
                  name="marketItemCondition"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <MarketForm
                      title="Condition"
                      value={value}
                      options={marketItemConditionList}
                      required={true}
                      error={!!errors.marketItemCondition}
                      onChange={(e) => {
                        onChange(e);
                        setFakeItems({
                          ...fakeItems,
                          marketItemCondition: e.target.value,
                        });
                      }}
                    />
                  )}
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
                <Controller
                  name="location"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label={`Location${
                        !!errors.location ? " is required!" : ""
                      }`}
                      value={value}
                      variant="outlined"
                      fullWidth
                      error={!!errors.location}
                      required
                      onChange={(e) => {
                        onChange(e);
                        setFakeItems({
                          ...fakeItems,
                          location: e.target.value,
                        });
                      }}
                    />
                  )}
                />
              </Box>
              <Box sx={{ marginY: "1rem" }}>
                <Controller
                  name="description"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label={`Description${
                        !!errors.description ? " is required!" : ""
                      }`}
                      value={value}
                      minRows={5}
                      variant="outlined"
                      multiline
                      error={!!errors.description}
                      required
                      placeholder="Describe your items in a more detailed manner!"
                      fullWidth
                      onChange={(e) => {
                        onChange(e);
                        setFakeItems({
                          ...fakeItems,
                          description: e.target.value,
                        });
                      }}
                    />
                  )}
                />
              </Box>
              {marketUserInfo === undefined ? (
                <Typography variant="subtitle1" fontWeight="600">
                  Fill the Contact Info and Save as default
                </Typography>
              ) : (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={() => {
                          setDefaultInfo((prev) => !prev);

                          defaultInfo === true
                            ? setValue("contactEmail", marketUserInfo.email)
                            : setValue("contactEmail", "");
                          defaultInfo === true
                            ? setValue("contactPhone", marketUserInfo.phone)
                            : setValue("contactPhone", "");
                          defaultInfo === true
                            ? setValue("contactWeChat", marketUserInfo.weChat)
                            : setValue("contactWeChat", "");
                        }}
                      />
                    }
                    label="Use default contact information"
                  />
                </FormGroup>
              )}
              <Box sx={{ marginY: "1rem" }}>
                <Controller
                  name="contactPhone"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label={`Contact Phone${
                        !!errors.contactPhone ? " is required!" : ""
                      }`}
                      value={value}
                      variant="outlined"
                      disabled={defaultInfo === false ? true : false}
                      error={!!errors.contactPhone}
                      required
                      placeholder="eg: (123) 456 789"
                      fullWidth
                      onChange={(e) => {
                        onChange(e);
                      }}
                    />
                  )}
                />
              </Box>
              <Box sx={{ marginY: "1rem" }}>
                <Controller
                  name="contactEmail"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label={`Contact Email${
                        !!errors.contactEmail ? " is required!" : ""
                      }`}
                      value={value}
                      variant="outlined"
                      error={!!errors.contactEmail}
                      required
                      disabled={defaultInfo === false ? true : false}
                      placeholder="wang123456@email.com "
                      fullWidth
                      onChange={(e) => {
                        onChange(e);
                      }}
                    />
                  )}
                />
              </Box>
              <Box sx={{ marginY: "1rem" }}>
                <Controller
                  name="contactWeChat"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label="Contact WeChat"
                      value={value}
                      variant="outlined"
                      placeholder="eg: Wang123"
                      fullWidth
                      disabled={defaultInfo === false ? true : false}
                      onChange={(e) => {
                        onChange(e);
                      }}
                    />
                  )}
                />
              </Box>
            </Box>
            <Button
              variant="outlined"
              endIcon={<PublishIcon />}
              onClick={handleSubmit(onSubmit)}
              color="primary"
            >
              上传MarketItem
            </Button>
          </Paper>
        </Box>
        <Box className={classes.preview}>
          <Paper elevation={3} sx={{ height: "100%", width: "100%" }}>
            <PreviewInfo
              imgKeyFromServer={imgKeyFromServer}
              fakeItems={fakeItems}
            />
          </Paper>
        </Box>
        <Box className={classes.drawer}>
          <SwipeableDrawerInfo
            content={
              <PreviewInfo
                imgKeyFromServer={imgKeyFromServer}
                fakeItems={fakeItems}
              />
            }
            title="Preview"
            position="bottom"
            open={open}
            setOpen={() => setOpen(true)}
            setClose={() => setOpen(false)}
          />
        </Box>
      </Stack>
    </div>
  );
}
