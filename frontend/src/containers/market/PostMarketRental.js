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
import { postAddress, postMarketItem } from "../../redux/slice/marketSlice";
import { useDispatch, useSelector } from "react-redux";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import InputAdornment from "@mui/material/InputAdornment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MarketForm from "../../components/Market/marketForm";
import PostImgPreview from "../../components/Market/postImgPrev";
import PostUserInfo from "../../components/Market/postUserInfo";
import PreviewInfo from "../../components/Market/previewInfo";
import PublishIcon from "@mui/icons-material/Publish";
import SwipeableDrawerInfo from "../../components/Market/swipeableDrawer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { marketRentalOptions } from "../../components/Market/marketRentalOptions";
import { postMultipleImages } from "../../redux/slice/generalSlice";
import { postStyle } from "../../components/Market/postCss";
// import { useGetAllImages } from "../../components/Market/useGetImages";
import { useHistory } from "react-router";
import { useTitle } from "../../Hooks/useTitle";
import { v4 as uuid } from "uuid";

export default function PostMarketRental() {
  const imgRef = useRef(null);
  const classes = postStyle();
  const dispatch = useDispatch();
  const history = useHistory();
  useTitle("发布租房信息");
  const [imgURLs, setImgURLs] = useState([]);
  const { username } = useSelector((state) => state.userAuth.user);
  const [uploadStatus, setUploadStatus] = useState("idle");
  const { darkTheme } = useSelector((state) => state.general);
  // const [trigger, setTrigger] = useState(true);
  const user = useSelector((state) => state.userAuth.userProfile);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [defaultInfo, setDefaultInfo] = useState(true);
  const marketUserInfo = useSelector((state) =>
    selectMarketUserById(state, username)
  );

  const {
    marketRentalSaleRent,
    propertyType,
    laundryType,
    airConditionType,
    heatingType,
    catFriendly,
    dogFriendly,
  } = marketRentalOptions;

  const [fakeItems, setFakeItems] = useState({
    marketType: "Rental",
    price: "Price",
    description: "Descriptions",
    tags: ["Tags Go Here"],
    createdAt: new Date().toISOString().slice(0, 10),
    updatedAt: new Date().toISOString().slice(0, 10),
    owner: username,
    marketRentalSaleRent: "Rent",
    propertyType: "House",
    bedroomCounts: "2",
    address: { description: "Location" },
    user: user,
    airConditionType: "CentralAC",
    heatingType: "CentralHeating",
    catFriendly: true,
    dogFriendly: true,
  });

  const {
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      imgURLs: "",
      marketRentalSaleRent: "",
      propertyType: "",
      bedroomCounts: "",
      bathroomsCounts: "",
      // location: "",
      propertySize: "",
      dateAvailable: new Date().toISOString(),
      laundryType: "",
      airConditionType: "",
      heatingType: "",
      catFriendly: "",
      dogFriendly: "",
      price: "",
      description: "",
      contactEmail: "",
      contactWeChat: "",
      contactPhone: "",
    },
  });

  const onSubmit = async (data) => {
    const address = await GetAddress();
    const addressID = uuid();
    const itemID = uuid();
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
      itemID: itemID,
      userID: username,
      id: addressID,
    };
    const addressResponse = await dispatch(postAddress(createAddressInput));
    console.log(addressResponse);

    const createMarketItemInput = {
      ...data,
      name: `${data.propertyType}, ${data.bedroomCounts} bedrooms, ${data.marketRentalSaleRent}`,
      marketType: "Rental",
      id: itemID,
      addressID: addressID,
      imgURLs: imgURLs,
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
    // console.log("createMarketItemInput", createMarketItemInput);
    setLoading(true);
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
      history.replace(`/market/rental/${response.payload.id}`);
      reset();
    }
    console.log("Can upload");
  };

  useEffect(() => {
    if (errors) {
      imgRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [errors]);

  useEffect(() => {
    dispatch(fetchMarketUserInfo(username));
  }, [username, dispatch]);

  const uploadMarketItemImg = async (e) => {
    const imagesData = e.target.files;
    const imageLocation = "market/rental";

    const response = await dispatch(
      postMultipleImages({ imagesData, imageLocation })
    );
    if (response.meta.requestStatus === "fulfilled") {
      setImgURLs((prev) => prev.concat(response.payload));
    }
  };

  const handleDeleteImg = (imgKey) => {
    const images = [...imgURLs];
    const newKeys = images.filter((key) => key !== imgKey);
    setImgURLs(newKeys);
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
            <Stack
              direction="row"
              justifyContent="space-between"
              ref={imgRef}
              sx={{ color: darkTheme ? "#c1c1c1" : "rgb(0,0,0)" }}
            >
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                fontWeight="bold"
              >
                新增房源
              </Typography>
              <Box className={classes.icon}>
                <IconButton onClick={() => setOpen(true)}>
                  <VisibilityIcon />
                </IconButton>
              </Box>
            </Stack>
            <PostImgPreview
              imgURLs={imgURLs}
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
                  name="marketRentalSaleRent"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <MarketForm
                      title="出售/出租"
                      value={value}
                      options={marketRentalSaleRent}
                      required={true}
                      error={!!errors.marketRentalSaleRent}
                      onChange={(e) => {
                        onChange(e);
                        setFakeItems({
                          ...fakeItems,
                          marketRentalSaleRent: e.target.value,
                        });
                      }}
                    />
                  )}
                />
              </Box>

              <Box sx={{ marginY: "1rem" }}>
                <Controller
                  name="propertyType"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <MarketForm
                      title="房型"
                      value={value}
                      options={propertyType}
                      required={true}
                      error={!!errors.propertyType}
                      onChange={(e) => {
                        onChange(e);
                        setFakeItems({
                          ...fakeItems,
                          propertyType: e.target.value,
                        });
                      }}
                    />
                  )}
                />
              </Box>

              <Box sx={{ marginY: "1rem" }}>
                <Controller
                  name="bedroomCounts"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      fullWidth
                      label="卧室"
                      value={value}
                      variant="outlined"
                      required
                      error={!!errors.bedroomCounts}
                      placeholder="eg. 2"
                      onChange={(e) => {
                        onChange(e);
                        setFakeItems({
                          ...fakeItems,
                          bedroomCounts: e.target.value,
                        });
                      }}
                    />
                  )}
                />
              </Box>

              <Box sx={{ marginY: "1rem" }}>
                <Controller
                  name="bathroomsCounts"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      fullWidth
                      label="卫浴"
                      value={value}
                      variant="outlined"
                      placeholder={"eg: 2"}
                      onChange={(e) => onChange(e)}
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
                      label={`价格${!!errors.price ? " is required" : ""}`}
                      value={value}
                      variant="outlined"
                      fullWidth
                      type="number"
                      required
                      error={!!errors.price}
                      placeholder="eg. 25000 (Currency: CAD $)"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            CAD $
                          </InputAdornment>
                        ),
                      }}
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
                  name="propertySize"
                  control={control}
                  rules={{ pattern: /[0-9]/ }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label="占地面积"
                      value={value}
                      variant="outlined"
                      fullWidth
                      type="number"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            &#13217;
                          </InputAdornment>
                        ),
                      }}
                      onChange={(e) => onChange(e)}
                    />
                  )}
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
                      label={`地址${!!errors.location ? " is required" : ""}`}
                      value={value}
                      variant="outlined"
                      fullWidth
                      required
                      error={!!errors.location}
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
                  name="dateAvailable"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <div>
                        <DateTimePicker
                          label="起始日期"
                          value={value}
                          id="dateAvailable"
                          onChange={(e) => {
                            onChange(e);
                          }}
                          renderInput={(params) => (
                            <TextField fullWidth {...params} />
                          )}
                        />
                      </div>
                    </LocalizationProvider>
                  )}
                />
              </Box>

              <Box sx={{ marginY: "1rem" }}>
                <Controller
                  name="laundryType"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <MarketForm
                      title="洗衣房"
                      value={value}
                      options={laundryType}
                      onChange={(e) => onChange(e)}
                    />
                  )}
                />
              </Box>

              <Box sx={{ marginY: "1rem" }}>
                <Controller
                  name="airConditionType"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <MarketForm
                      title="空调"
                      value={value}
                      options={airConditionType}
                      required={true}
                      error={!!errors.airConditionType}
                      onChange={(e) => {
                        onChange(e);
                        setFakeItems({
                          ...fakeItems,
                          airConditionType: e.target.value,
                        });
                      }}
                    />
                  )}
                />
              </Box>

              <Box sx={{ marginY: "1rem" }}>
                <Controller
                  name="heatingType"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <MarketForm
                      title="供暖"
                      value={value}
                      options={heatingType}
                      required={true}
                      error={!!errors.heatingType}
                      onChange={(e) => {
                        onChange(e);
                        setFakeItems({
                          ...fakeItems,
                          heatingType: e.target.value,
                        });
                      }}
                    />
                  )}
                />
              </Box>

              <Box sx={{ marginY: "1rem" }}>
                <CustomTags
                  placeholder="无烟，新装修..."
                  initial={fakeItems.tags}
                  onKeyDown={(e) => handleKeyDown(e)}
                  onDelete={(e) => handleDelete(e)}
                />
              </Box>

              <Box sx={{ marginY: "1rem" }}>
                <Controller
                  name="catFriendly"
                  control={control}
                  rules={
                    {
                      // required: true,
                    }
                  }
                  render={({ field: { onChange, value } }) => (
                    <MarketForm
                      title="养猫"
                      value={value}
                      options={catFriendly}
                      required={true}
                      error={errors.catFriendly ? true : false}
                      onChange={(e) => {
                        onChange(e);
                        setFakeItems({
                          ...fakeItems,
                          catFriendly: e.target.value,
                        });
                      }}
                    />
                  )}
                />
              </Box>

              <Box sx={{ marginY: "1rem" }}>
                <Controller
                  name="dogFriendly"
                  control={control}
                  rules={
                    {
                      // required: true,
                    }
                  }
                  render={({ field: { onChange, value } }) => (
                    <MarketForm
                      title="养狗"
                      value={value}
                      options={dogFriendly}
                      required={true}
                      error={!!errors.dogFriendly}
                      onChange={(e) => {
                        onChange(e);
                        setFakeItems({
                          ...fakeItems,
                          dogFriendly: e.target.value,
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
                      label={`详情描述${
                        !!errors.description ? " is required" : ""
                      }`}
                      value={value}
                      variant="outlined"
                      minRows={5}
                      fullWidth
                      required
                      error={!!errors.description}
                      multiline
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
                darkTheme={darkTheme}
                errors={errors}
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
              上传 MarketHome{" "}
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
              imgURLs={imgURLs}
              fakeItems={fakeItems}
              darkTheme={darkTheme}
            />
          </Paper>
        </Box>
        <Box className={classes.drawer}>
          <SwipeableDrawerInfo
            content={
              <PreviewInfo
                imgURLs={imgURLs}
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
