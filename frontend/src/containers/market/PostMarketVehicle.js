import {
  Box,
  Button,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PublishIcon from "@mui/icons-material/Publish";
import { Storage } from "@aws-amplify/storage";
import { makeStyles } from "@mui/styles";
import { postMarketVehicle } from "../../redux/actions/marketItemActions";
import { postMultipleImages } from "../../redux/actions/generalAction";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router";

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
  const [imgKeyFromServer, setImgKeyFromServer] = useState([]);
  const { username } = useSelector((state) => state.userAuth.user);
  const { imageKeys } = useSelector((state) => state.general);
  const [tagInput, setTagInput] = useState("");
  const [error, setError] = useState("");
  const [renderTrigger, setRenderTrigger] = useState(null);
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
      tags,
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
      tags: tags,
      active: true,
      createdAt: new Date().toISOstring,
      sortKey: "SortKey",
      userID: username,
    };

    const response = await dispatch(
      postMarketVehicle(createMarketVehicleInput)
    );
    console.log("response", response);
    if (response.result) {
      history.push(
        `/market/vehicle/${response.response.data.createMarketVehicle.id}`
      );
    }
  };

  const deleteHandler = (i) => () => {
    const { tags: newTags } = { ...marketVehicleData };
    setMarketVehicleData({
      ...marketVehicleData,
      tags: newTags.filter((tag) => tag !== i),
    });
  };

  const inputKeyDown = (e) => {
    const val = e.target.value;
    console.log("tagSuccess", marketVehicleData.tags);
    if (e.key === "Enter" && val) {
      if (
        marketVehicleData.tags.find(
          (tag) => tag.toLowerCase() === val.toLowerCase()
        )
      ) {
        setTagInput("");
        setError("The tag has been already created!");
      } else {
        e.preventDefault();
        const newTags = [...marketVehicleData.tags].concat([val]);
        setMarketVehicleData({ ...marketVehicleData, tags: newTags });
        setTagInput("");
        setError("");
        console.log("tagSuccess", marketVehicleData.tags);
      }
    }
  };

  const marketVehicleTypeList = [
    { value: "CarTruck", label: "Car Truck" },
    { value: "Motorcycle", label: "Motorcycle" },
    { value: "PowerSport", label: "PowerSport" },
    { value: "RVCamper", label: "RV Camper" },
    { value: "Trailer", label: "Trailer" },
    { value: "Other", label: "其他" },
  ];
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
        imgKeyFromServer.map((imgKey) => (
          <img src={imgKey} key={imgKey} alt="images" />
        ))}

      <Box className={classes.content}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className="newType">
              <FormControl variant="outlined" fullWidth required>
                <InputLabel id="demo-simple-select-outlined-label2">
                  Vehicle Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label2"
                  id="demo-simple-select-outlined2"
                  value={marketVehicleData.vehicleType}
                  onChange={(e) =>
                    setMarketVehicleData({
                      ...marketVehicleData,
                      vehicleType: e.target.value,
                    })
                  }
                  label="vehicleType"
                >
                  {marketVehicleTypeList.map((vehicleType) => {
                    return (
                      <MenuItem
                        value={vehicleType.value}
                        key={vehicleType.value}
                      >
                        {vehicleType.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
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
            <TextField
              label="Tags"
              value={tagInput}
              variant="outlined"
              fullWidth
              onKeyDown={inputKeyDown}
              error={Boolean(error)}
              helperText={error}
              onChange={(e) => setTagInput(e.target.value)}
            />
            {marketVehicleData.tags.map((data) => {
              return (
                <Chip key={data} label={data} onDelete={deleteHandler(data)} />
              );
            })}
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
