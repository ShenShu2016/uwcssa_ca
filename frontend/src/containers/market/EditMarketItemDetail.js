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
import { Controller, useForm } from "react-hook-form";
import CustomTags, { GetTags } from "../../components/CustomMUI/CustomTags";
import GoogleMaps, {
  GetAddress,
} from "../../components/GoogleMap/GoogleMapsPlace";
import React, { useEffect, useRef, useState } from "react";
import {
  fetchMarketUserInfo,
  postMarketUserInfo,
  selectMarketUserById,
  updateMarketUserInfoDetail,
} from "../../redux/slice/marketUserSlice";
import {
  selectMarketItemById,
  updateAddressDetail,
  updateMarketItemDetail,
} from "../../redux/slice/marketSlice";
import { useDispatch, useSelector } from "react-redux";

import InputAdornment from "@mui/material/InputAdornment";
import MarketForm from "../../components/Market/marketForm";
import PostImgPreview from "../../components/Market/postImgPrev";
import PostUserInfo from "../../components/Market/postUserInfo";
import PreviewInfo from "../../components/Market/previewInfo";
import PublishIcon from "@mui/icons-material/Publish";
import SwipeableDrawerInfo from "../../components/Market/swipeableDrawer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { marketItemOptions } from "../../components/Market/marketItemOptions";
import { postMultipleImages } from "../../redux/slice/generalSlice";
import { postStyle } from "../../components/Market/postCss";
// import { useGetAllImages } from "../../components/Market/useGetImages";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { useTitle } from "../../Hooks/useTitle";

export default function EditMarketItemDetail() {
  const imgRef = useRef(null);
  const classes = postStyle();
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  useTitle("更新二手商品信息");
  const marketItem = useSelector((state) => selectMarketItemById(state, id));
  const { darkTheme } = useSelector((state) => state.general);
  const [fakeItems, setFakeItems] = useState(marketItem);
  const [loading, setLoading] = useState(false);
  const marketUserInfo = useSelector((state) =>
    selectMarketUserById(state, marketItem.userID)
  );
  const {
    imgURLs,
    title,
    price,
    addressID,
    description,
    marketItemCategory,
    marketItemCondition,
    createdAt,
    contactEmail,
    contactPhone,
    contactWeChat,
  } = marketItem;
  const [uploadStatus, setUploadStatus] = useState("idle");
  // const [trigger, setTrigger] = useState(true);
  const [defaultInfo, setDefaultInfo] = useState(false);
  const { marketItemConditionList, marketItemCategoryList } = marketItemOptions;
  // let temp = [];
  const [imgKeyFromServer, setImgKeyFromServer] = useState(imgURLs);

  const [open, setOpen] = useState(false);

  const {
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      imgURLs: imgKeyFromServer,
      title: title,
      price: price,
      description: description,
      marketItemCategory: marketItemCategory,
      marketItemCondition: marketItemCondition,
      contactEmail: contactEmail,
      contactWeChat: contactWeChat,
      contactPhone: contactPhone,
    },
  });

  useEffect(() => {
    if (errors) {
      imgRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [errors]);

  const uploadMarketItemImg = async (e) => {
    const imagesData = e.target.files;
    const imageLocation = "market/item";

    const response = await dispatch(
      postMultipleImages({ imagesData, imageLocation })
    );
    if (response.meta.requestStatus === "fulfilled") {
      setImgKeyFromServer((prev) => prev.concat(response.payload));
    }
  };

  useEffect(() => {
    dispatch(fetchMarketUserInfo(marketItem.userID));
  }, [marketItem.userID, dispatch]);

  // console.log("??", GetAddress().description);

  const onSubmit = async (data) => {
    const address = await GetAddress();
    const {
      description,
      place_id,
      reference,
      terms,
      types,
      apartmentNumber,
      geocodingResult,
      lat,
      lng,
    } = address;
    const createAddressInput = {
      description,
      place_id,
      reference,
      terms,
      types,
      apartmentNumber,
      geocodingResult,
      lat,
      lng,
      itemID: id,
      userID: marketUserInfo.userID,
      id: addressID,
    };
    const addressResponse = await dispatch(
      updateAddressDetail(createAddressInput)
    );
    console.log(addressResponse);
    const createMarketItemInput = {
      ...data,
      // location: GetAddress().description,
      id: id,
      // address: address,
      name: data.title,
      addressID: addressID,
      marketType: "Item",
      imgURLs: imgKeyFromServer,
      tags: GetTags(),
      active: true,
      userID: marketUserInfo.userID,
      createdAt: createdAt,
      sortKey: "SortKey",
    };
    const { contactEmail, contactPhone, contactWeChat } = data;
    const userInfo = {
      id: marketUserInfo.userID,
      phone: contactPhone,
      weChat: contactWeChat,
      email: contactEmail,
      userID: marketUserInfo.userID,
    };
    console.log("createMarketItemInput", createMarketItemInput);
    setLoading(true);
    const response = await dispatch(
      updateMarketItemDetail(createMarketItemInput)
    );
    if (marketUserInfo === undefined) {
      await dispatch(postMarketUserInfo(userInfo));
    } else if (marketUserInfo !== undefined) {
      if (defaultInfo === true) {
        await dispatch(updateMarketUserInfoDetail(userInfo));
      }
    }

    console.log("Something should be here", response);
    if (response.meta.requestStatus === "fulfilled") {
      history.replace(`/market/item/${response.payload.id}`);
      reset();
    }
    console.log("Can upload");
  };

  const handleDeleteImg = (imgKey) => {
    const images = [...imgKeyFromServer];
    const newKeys = images.filter((key) => key !== imgKey);
    setImgKeyFromServer(newKeys);
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
            sx={{
              backgroundColor: darkTheme ? "#101010" : "#f9f9f9",
              color: "#c1c1c1",
              transition: "color 0.3s",
            }}
          >
            <Stack direction="row" justifyContent="space-between" ref={imgRef}>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                fontWeight="bold"
                sx={{ color: darkTheme ? "#c1c1c1" : "rgb(0,0,0)" }}
              >
                Edit Item Listing
              </Typography>
              <Box className={classes.icon}>
                <IconButton onClick={() => setOpen(true)}>
                  <VisibilityIcon />
                </IconButton>
              </Box>
            </Stack>
            <PostImgPreview
              imgURLs={imgKeyFromServer}
              uploadStatus={uploadStatus}
              control={control}
              errors={errors}
              darkTheme={darkTheme}
              uploadMarketItemImg={uploadMarketItemImg}
              // setTrigger={setTrigger}
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
                {/* <Controller
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
                /> */}
                <GoogleMaps />
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
              <PostUserInfo
                control={control}
                setValue={setValue}
                errors={errors}
                darkTheme={darkTheme}
                defaultInfo={defaultInfo}
                setDefaultInfo={setDefaultInfo}
              />
            </Box>
            <Button
              variant="outlined"
              endIcon={<PublishIcon />}
              onClick={handleSubmit(onSubmit)}
              color="primary"
            >
              上传MarketItem{" "}
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-0.75rem",
                    marginLeft: "-0.75rem",
                  }}
                />
              )}
            </Button>
          </Paper>
        </Box>
        <Box className={classes.preview}>
          <Paper elevation={3} sx={{ height: "100%", width: "100%" }}>
            <PreviewInfo
              imgURLs={imgKeyFromServer}
              fakeItems={fakeItems}
              darkTheme={darkTheme}
            />
          </Paper>
        </Box>
        <Box className={classes.drawer}>
          <SwipeableDrawerInfo
            content={
              <PreviewInfo
                imgURLs={imgKeyFromServer}
                fakeItems={fakeItems}
                darkTheme={darkTheme}
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
