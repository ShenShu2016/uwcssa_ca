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
import React, { useEffect, useState } from "react";
import {
  fetchMarketUserInfo,
  postMarketUserInfo,
  selectMarketUserById,
  updateMarketUserInfoDetail,
} from "../../redux/reducers/marketUserSlice";
import {
  selectMarketItemById,
  updateMarketItemDetail,
} from "../../redux/reducers/marketSlice";
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
import { postMultipleImages } from "../../redux/reducers/generalSlice";
import { postStyle } from "../../components/Market/postCss";
// import { useGetAllImages } from "../../components/Market/useGetImages";
import { useHistory } from "react-router";
import { useParams } from "react-router";
import { useTitle } from "../../Hooks/useTitle";

export default function EditMarketRentalDetail() {
  const classes = postStyle();
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  useTitle("更新租房信息");
  const marketItem = useSelector((state) => selectMarketItemById(state, id));
  const {
    imgURLs,
    marketRentalSaleRent,
    propertyType,
    bedroomCounts,
    bathroomsCounts,
    location,
    propertySize,
    dateAvailable,
    laundryType,
    airConditionType,
    heatingType,
    catFriendly,
    dogFriendly,
    price,
    description,
    contactWeChat,
    contactEmail,
    contactPhone,
  } = marketItem;
  const [uploadStatus, setUploadStatus] = useState("idle");
  const [loading, setLoading] = useState(false);
  // const [trigger, setTrigger] = useState(true);

  const marketUserInfo = useSelector((state) =>
    selectMarketUserById(state, marketItem.userID)
  );
  const [imgKeyFromServer, setImgKeyFromServer] = useState(imgURLs);

  const [defaultInfo, setDefaultInfo] = useState(false);
  const [open, setOpen] = useState(false);
  const {
    marketRentalSaleRent: saleRent,
    propertyType: pType,
    laundryType: lType,
    airConditionType: aType,
    heatingType: hType,
    catFriendly: cf,
    dogFriendly: df,
  } = marketRentalOptions;
  const [fakeItems, setFakeItems] = useState(marketItem);

  const {
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      imgURLs: imgKeyFromServer,
      marketRentalSaleRent: marketRentalSaleRent,
      propertyType: propertyType,
      bedroomCounts: bedroomCounts,
      bathroomsCounts: bathroomsCounts,
      location: location,
      propertySize: propertySize,
      dateAvailable: dateAvailable,
      laundryType: laundryType,
      airConditionType: airConditionType,
      heatingType: heatingType,
      catFriendly: catFriendly,
      dogFriendly: dogFriendly,
      price: price,
      description: description,
      contactEmail: contactEmail,
      contactWeChat: contactWeChat,
      contactPhone: contactPhone,
    },
  });

  const uploadMarketItemImg = async (e) => {
    const imagesData = e.target.files;
    const imageLocation = "market/rental";

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

  const onSubmit = async (data) => {
    const createMarketItemInput = {
      ...data,
      name: `${data.propertyType}, ${data.bedroomCounts} bedrooms, ${data.marketRentalSaleRent}`,
      id: id,
      marketType: "Rental",
      imgURLs: imgKeyFromServer,
      tags: GetTags(),
      active: true,
      userID: marketUserInfo.userID,
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
    // console.log("createMarketItemInput", createMarketItemInput);
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
      history.replace(`/market/rental/${response.payload.id}`);
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
              backgroundColor: "#f9f9f9",
              color: "#c1c1c1",
              transition: "color 0.3s",
            }}
          >
            <Stack direction="row" justifyContent="space-between">
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                fontWeight="bold"
                sx={{ color: "rgb(0,0,0)" }}
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
              imgKeyFromServer={imgKeyFromServer}
              uploadStatus={uploadStatus}
              control={control}
              errors={errors}
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
                      options={saleRent}
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
                      options={pType}
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
                      options={lType}
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
                      options={aType}
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
                      options={hType}
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
                      options={cf}
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
                      options={df}
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
