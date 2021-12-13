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
import { useDispatch, useSelector } from "react-redux";

import InputAdornment from "@mui/material/InputAdornment";
import MarketForm from "../../components/Market/marketForm";
import PostImgPreview from "../../components/Market/postImgPrev";
import PostUserInfo from "../../components/Market/postUserInfo";
import PreviewInfo from "../../components/Market/previewInfo";
import PublishIcon from "@mui/icons-material/Publish";
import SwipeableDrawerInfo from "../../components/Market/swipeableDrawer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { marketVehicleOptions } from "../../components/Market/marketVehicleOptions";
import { postMarketItem } from "../../redux/reducers/marketSlice";
import { postMultipleImages } from "../../redux/reducers/generalSlice";
import { postStyle } from "../../components/Market/postCss";
// import { useGetAllImages } from "../../components/Market/useGetImages";
import { useHistory } from "react-router";
import { useTitle } from "../../Hooks/useTitle";

export default function PostMarketVehicle() {
  const classes = postStyle();
  const dispatch = useDispatch();
  const history = useHistory();
  useTitle("发布二手车辆信息");
  const [imgURLs, setImgURLs] = useState([]);

  const { username } = useSelector((state) => state.userAuth.user);
  const [uploadStatus, setUploadStatus] = useState("idle");
  const user = useSelector((state) => state.userAuth.userProfile);
  const [open, setOpen] = useState(false);
  const [defaultInfo, setDefaultInfo] = useState(true);
  const [loading, setLoading] = useState(false);
  const marketUserInfo = useSelector((state) =>
    selectMarketUserById(state, username)
  );
  const { marketVehicleTypeList } = marketVehicleOptions;

  const [fakeItems, setFakeItems] = useState({
    marketType: "Vehicle",
    price: "Price",
    description: "Descriptions",
    location: "Location",
    make: "Toyota",
    model: "GR86",
    year: "2022",
    vehicleType: "Truck",
    exteriorColor: "Black",
    interiorColor: "Red",
    fuelType: "Gasoline",
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
      imgURLs: "",
      vehicleType: "",
      location: "",
      year: "",
      model: "",
      make: "",
      exteriorColor: "",
      interiorColor: "",
      fuelType: "",
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
      name: `${data.year} ${data.make} ${data.model}`,
      marketType: "Vehicle",
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
      history.replace(`/market/vehicle/${response.payload.id}`);
      reset();
    }
    console.log("Can upload");
  };

  useEffect(() => {
    dispatch(fetchMarketUserInfo(username));
  }, [username, dispatch]);

  const uploadMarketItemImg = async (e) => {
    const imagesData = e.target.files;
    const imageLocation = "market/vehicle";

    const response = await dispatch(
      postMultipleImages({ imagesData, imageLocation })
    );
    // console.log("response!!!", response);
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
              backgroundColor: "#f9f9f9",
              color: "#c1c1c1",
              transition: "color 0.3s",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "rgb(0,0,0)" }}
            >
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                fontWeight="bold"
              >
                New Vehicle Listing
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
              uploadMarketItemImg={uploadMarketItemImg}
              setUploadStatus={setUploadStatus}
              handleDeleteImg={handleDeleteImg}
            />
            <Box className={classes.content}>
              <Box sx={{ marginY: "1rem" }}>
                <Controller
                  name="make"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label={`Make${!!errors.make ? " is required" : ""}`}
                      autoFocus
                      variant="outlined"
                      fullWidth
                      required
                      error={!!errors.make}
                      placeholder="eg. Subaru"
                      value={value}
                      onChange={(e) => {
                        onChange(e);
                        setFakeItems({ ...fakeItems, make: e.target.value });
                      }}
                    />
                  )}
                />
              </Box>
              <Box sx={{ marginY: "1rem" }}>
                <Controller
                  name="model"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label={`Model${!!errors.model ? " is required" : ""}`}
                      variant="outlined"
                      placeholder="IMPREZA WRX STI"
                      fullWidth
                      required
                      error={!!errors.model}
                      value={value}
                      onChange={(e) => {
                        onChange(e);
                        setFakeItems({ ...fakeItems, model: e.target.value });
                      }}
                    />
                  )}
                />
              </Box>

              <Box sx={{ marginY: "1rem" }}>
                <Controller
                  name="vehicleType"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <MarketForm
                      title="Vehicle Type"
                      value={value}
                      options={marketVehicleTypeList}
                      required={true}
                      onChange={(e) => {
                        onChange(e);
                        setFakeItems({
                          ...fakeItems,
                          vehicleType: e.target.value,
                        });
                      }}
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
                      label={`Location${
                        !!errors.location ? " is required" : ""
                      }`}
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
                <CustomTags
                  placeholder="新车， 无事故..."
                  initial={fakeItems.tags}
                  onKeyDown={(e) => handleKeyDown(e)}
                  onDelete={(e) => handleDelete(e)}
                />
              </Box>

              <Box sx={{ marginY: "1rem" }}>
                <Controller
                  name="year"
                  control={control}
                  rules={{
                    required: true,
                    pattern: /[0-9]/,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label={`Year${!!errors.year ? " is required" : ""}`}
                      variant="outlined"
                      fullWidth
                      type="number"
                      placeholder="eg. 2021"
                      required
                      error={!!errors.year}
                      value={value}
                      onChange={(e) => {
                        onChange(e);
                        setFakeItems({ ...fakeItems, year: e.target.value });
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
                      label={`Price${!!errors.price ? " is required" : ""}`}
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
                  name="exteriorColor"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label={`Exterior Color${
                        !!errors.exteriorColor ? " is required" : ""
                      }`}
                      variant="outlined"
                      fullWidth
                      required
                      error={!!errors.exteriorColor}
                      placeholder="eg. World Rally Blue"
                      value={value}
                      onChange={(e) => {
                        onChange(e);
                        setFakeItems({
                          ...fakeItems,
                          exteriorColor: e.target.value,
                        });
                      }}
                    />
                  )}
                />
              </Box>
              <Box sx={{ marginY: "1rem" }}>
                <Controller
                  name="interiorColor"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label={`Interior Color${
                        !!errors.interiorColor ? " is required" : ""
                      }`}
                      variant="outlined"
                      fullWidth
                      required
                      error={!!errors.interiorColor}
                      placeholder="eg. Black"
                      value={value}
                      onChange={(e) => {
                        onChange(e);
                        setFakeItems({
                          ...fakeItems,
                          interiorColor: e.target.value,
                        });
                      }}
                    />
                  )}
                />
              </Box>
              <Box sx={{ marginY: "1rem" }}>
                <Controller
                  name="fuelType"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label={`Fuel Type${
                        !!errors.fuelType ? " is required" : ""
                      }`}
                      variant="outlined"
                      fullWidth
                      required
                      error={!!errors.fuelType}
                      placeholder="eg. Gasoline"
                      value={value}
                      onChange={(e) => {
                        onChange(e);
                        setFakeItems({
                          ...fakeItems,
                          fuelType: e.target.value,
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
                        !!errors.description ? " is required" : ""
                      }`}
                      value={value}
                      minRows={5}
                      variant="outlined"
                      multiline
                      required
                      error={!!errors.description}
                      placeholder="Describe your vehicle in a detailed manner!"
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
                defaultInfo={defaultInfo}
                setDefaultInfo={setDefaultInfo}
              />
            </Box>

            <Button
              variant="outlined"
              endIcon={<PublishIcon />}
              onClick={handleSubmit(onSubmit)}
              color="primary"
              disabled={loading}
            >
              上传MarketItem
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
            <PreviewInfo imgURLs={imgURLs} fakeItems={fakeItems} />
          </Paper>
        </Box>
        <Box className={classes.drawer}>
          <SwipeableDrawerInfo
            content={<PreviewInfo imgURLs={imgURLs} fakeItems={fakeItems} />}
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
