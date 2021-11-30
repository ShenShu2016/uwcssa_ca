import {
  Box,
  Button,
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
import { postMarketItem } from "../../redux/reducers/marketSlice";
import { postMultipleImages } from "../../redux/reducers/generalSlice";
import { postStyle } from "../../components/Market/postCss";
import { useGetAllImages } from "../../components/Market/useGetImages";
import { useHistory } from "react-router";
import { useTitle } from "../../Hooks/useTitle";

export default function PostMarketRental() {
  const classes = postStyle();
  const dispatch = useDispatch();
  const history = useHistory();
  useTitle("发布租房信息");
  const [imageKeys, setImageKeys] = useState("");
  const { username } = useSelector((state) => state.userAuth.user);
  const [uploadStatus, setUploadStatus] = useState("idle");
  const [trigger, setTrigger] = useState(true);
  const user = useSelector((state) => state.userAuth.userProfile);
  const [open, setOpen] = useState(false);
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
    type: "rental",
    price: "Price",
    description: "Descriptions",
    tags: ["Tags Goes Here"],
    createdAt: new Date().toISOString().slice(0, 10),
    updatedAt: new Date().toISOString().slice(0, 10),
    owner: username,
    marketRentalSaleRent: "Rent",
    propertyType: "House",
    bedroomCounts: "2",
    address: "UK London NW1 1RW",
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
      imgS3Keys: "",
      marketRentalSaleRent: "",
      propertyType: "",
      bedroomCounts: "",
      bathroomsCounts: "",
      address: "",
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
    const createMarketItemInput = {
      ...data,
      marketType: "Rental",
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
      history.push(`/market/rental/${response.payload.id}`);
      reset();
    }
    console.log("Can upload");
  };

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
      const newImg = response.payload.map((key) => [key, "temp"]);
      const temp = Object.entries(imageKeys).concat(newImg);
      setImageKeys(Object.fromEntries(temp));
    }
  };

  const imgKeyFromServer = useGetAllImages(
    Object.keys(imageKeys),
    imageKeys && trigger === true
  );

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
    const images = { ...imageKeys };
    const newKeys = Object.fromEntries(
      Object.entries(images).filter(([key, value]) => value !== imgKey)
    );
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
            sx={{
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
                新增房源
              </Typography>
              <Box className={classes.icon}>
                <IconButton onClick={() => setOpen(true)}>
                  <VisibilityIcon />
                </IconButton>
              </Box>
            </Stack>
            <PostImgPreview
              imgKeyFromServer={Object.values(imageKeys)}
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
                <Controller
                  name="address"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label={`地址${!!errors.address ? " is required" : ""}`}
                      value={value}
                      variant="outlined"
                      fullWidth
                      required
                      error={!!errors.address}
                      onChange={(e) => {
                        onChange(e);
                        setFakeItems({ ...fakeItems, address: e.target.value });
                      }}
                    />
                  )}
                />
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
              上传 MarketHome
            </Button>
          </Paper>
        </Box>
        <Box className={classes.preview}>
          <Paper elevation={3} sx={{ height: "100%", width: "100%" }}>
            <PreviewInfo
              imgKeyFromServer={Object.values(imageKeys)}
              fakeItems={fakeItems}
            />
          </Paper>
        </Box>
        <Box className={classes.drawer}>
          <SwipeableDrawerInfo
            content={
              <PreviewInfo
                imgKeyFromServer={Object.values(imageKeys)}
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
