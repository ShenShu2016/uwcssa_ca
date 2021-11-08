import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import CustomTags, { GetTags } from "../../components/CustomMUI/CustomTags";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import MarketForm from "../../components/Market/marketForm";
import PublishIcon from "@mui/icons-material/Publish";
import { Storage } from "@aws-amplify/storage";
import { makeStyles } from "@mui/styles";
import { marketVehicleOptions } from "./marketVehicleOptions";
import { postMarketItem } from "../../redux/actions/marketItemActions";
import { postMultipleImages } from "../../redux/actions/generalAction";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router";
import { useTitle } from "../../Hooks/useTitle";

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
}));

const Input = styled("input")({
  display: "none",
});

export default function PostMarketVehicle() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useTitle("发布二手车辆信息");
  const [imgKeyFromServer, setImgKeyFromServer] = useState([]);
  const { username } = useSelector((state) => state.userAuth.user);
  const { imageKeys } = useSelector((state) => state.general);
  const [renderTrigger, setRenderTrigger] = useState(null);
  const { marketVehicleTypeList } = marketVehicleOptions;
  const history = useHistory();
  // console.log("imgKeys", imageKeys);

  const [marketVehicleData, setMarketVehicleData] = useState({
    vehicleType: "",
    location: "",
    year: "",
    make: "",
    model: "",
    exteriorColor: "",
    interiorColor: "",
    fuelType: "",
    price: "",
    description: "",
    tags: [],
  });
  // console.log("marketVehicleData", marketVehicleData);
  const uploadMarketItemImg = async (e) => {
    const imagesData = e.target.files;
    setRenderTrigger(imagesData.length);
    const imgLocation = "marketVehicle";
    await dispatch(postMultipleImages(imagesData, imgLocation));
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
    if (imageKeys.length === renderTrigger && imageKeys.length !== 0) {
      getImage();
    }
  }, [imageKeys, renderTrigger]);

  // console.log("imgKeyFromServer", imgKeyFromServer);
  // console.log("imageKeys", imageKeys);

  const uploadMarketVehicle = async () => {
    const {
      vehicleType,
      location,
      year,
      make,
      model,
      exteriorColor,
      interiorColor,
      fuelType,
      price,
      description,
    } = marketVehicleData;

    const createMarketVehicleInput = {
      vehicleType,
      imgS3Keys: imageKeys,
      location: location,
      year: year,
      make: make,
      model: model,
      exteriorColor: exteriorColor,
      interiorColor: interiorColor,
      fuelType: fuelType,
      price: price,
      description: description,
      tags: GetTags(),
      active: true,
      createdAt: new Date().toISOstring,
      sortKey: "SortKey",
      userID: username,
    };

    const response = await dispatch(postMarketItem(createMarketVehicleInput));
    console.log("response", response);
    if (response.payload.result) {
      history.push(
        `/market/vehicle/${response.payload.response.data.createMarketVehicle.id}`
      );
    }
  };

  return (
    <div className={classes.root}>
      <Box>
        <Typography variant="h4" gutterBottom component="div">
          New Vehicle Listing
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
          <img src={imgKey} key={imgKeyIdx} alt="images" />
        ))}

      <Box className={classes.content}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <MarketForm
              title="Vehicle Type"
              value={marketVehicleData.vehicleType}
              options={marketVehicleTypeList}
              required={true}
              onChange={(e) =>
                setMarketVehicleData({
                  ...marketVehicleData,
                  vehicleType: e.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Location"
              value={marketVehicleData.location}
              variant="outlined"
              fullWidth
              onChange={(e) =>
                setMarketVehicleData({
                  ...marketVehicleData,
                  location: e.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={6}>
            <CustomTags />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Year"
              variant="outlined"
              fullWidth
              type="number"
              placeholder="eg. 2021"
              required
              value={marketVehicleData.year}
              onChange={(e) =>
                setMarketVehicleData({
                  ...marketVehicleData,
                  year: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Make"
              variant="outlined"
              fullWidth
              required
              placeholder="eg. Subaru"
              value={marketVehicleData.make}
              onChange={(e) =>
                setMarketVehicleData({
                  ...marketVehicleData,
                  make: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Model"
              variant="outlined"
              placeholder="IMPREZA WRX STI"
              fullWidth
              required
              value={marketVehicleData.model}
              onChange={(e) =>
                setMarketVehicleData({
                  ...marketVehicleData,
                  model: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              type="number"
              placeholder="eg. 25000 (Currency: CAD $)"
              value={marketVehicleData.price}
              className={classes.titleInput}
              onChange={(e) =>
                setMarketVehicleData({
                  ...marketVehicleData,
                  price: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Exterior Color"
              variant="outlined"
              fullWidth
              placeholder="eg. World Rally Blue"
              value={marketVehicleData.exteriorColor}
              onChange={(e) =>
                setMarketVehicleData({
                  ...marketVehicleData,
                  exteriorColor: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Interior Color"
              variant="outlined"
              fullWidth
              placeholder="eg. Black"
              value={marketVehicleData.interiorColor}
              onChange={(e) =>
                setMarketVehicleData({
                  ...marketVehicleData,
                  interiorColor: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Fuel Type"
              variant="outlined"
              fullWidth
              placeholder="eg. Gasoline"
              value={marketVehicleData.fuelType}
              onChange={(e) =>
                setMarketVehicleData({
                  ...marketVehicleData,
                  fuelType: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="description"
              value={marketVehicleData.description}
              minRows={5}
              variant="outlined"
              multiline
              fullWidth
              onChange={(e) =>
                setMarketVehicleData({
                  ...marketVehicleData,
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
        onClick={uploadMarketVehicle}
        color="primary"
      >
        上传MarketItem
      </Button>
    </div>
  );
}
