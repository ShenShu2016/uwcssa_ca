import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import {
  postMarketItemImg,
  postMarketVehicle,
} from "../../redux/actions/marketItemActions";

import PublishIcon from "@mui/icons-material/Publish";
import S3Image from "../../components/S3/S3Image";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "960px",
    margin: "auto",
    paddingTop: "5rem",
  },
}));

const Input = styled("input")({
  display: "none",
});

export default function PostMarketVehicle() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [imgKey, setImgKey] = useState("");

  const history = useHistory();

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
  });
  console.log("marketVehicleData", marketVehicleData);
  const uploadMarketItemImg = async (e) => {
    const response = await dispatch(postMarketItemImg(e.target.files[0]));
    if (response) {
      setImgKey(response.key);
    }
  };
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
      imagePath: [imgKey],
      location: location,
      year,
      make,
      model,
      exteriorColor,
      interiorColor,
      fuelType,
      price: price,
      description: description,
      active: 1,
      ByCreatedAt: "MarketVehicle",
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
      <Box className={classes.type}>
        <div className="newType">
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Condition
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={marketVehicleData.vehicleType}
              onChange={(e) =>
                setMarketVehicleData({
                  ...marketVehicleData,
                  vehicleType: e.target.value,
                })
              }
              label="Condition"
            >
              {marketVehicleTypeList.map((vehicleType) => {
                return (
                  <MenuItem value={vehicleType.value} key={vehicleType.value}>
                    {vehicleType.label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </Box>
      <Box>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            type="file"
            onChange={(e) => {
              uploadMarketItemImg(e);
            }}
          />
          <Button variant="contained" component="span">
            上传图片
          </Button>
        </label>
      </Box>
      <S3Image S3Key={imgKey} style={{ width: "100%" }} />

      <Box>
        <TextField
          label="location"
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
      </Box>
      <Box className={classes.topic}>
        <TextField
          label="Year"
          variant="outlined"
          fullWidth
          type="number"
          value={marketVehicleData.year}
          onChange={(e) =>
            setMarketVehicleData({ ...marketVehicleData, year: e.target.value })
          }
        />
      </Box>
      <Box className={classes.topic}>
        <TextField
          label="Make"
          variant="outlined"
          fullWidth
          value={marketVehicleData.make}
          onChange={(e) =>
            setMarketVehicleData({ ...marketVehicleData, make: e.target.value })
          }
        />
      </Box>
      <Box className={classes.topic}>
        <TextField
          label="型号"
          variant="outlined"
          fullWidth
          value={marketVehicleData.model}
          onChange={(e) =>
            setMarketVehicleData({
              ...marketVehicleData,
              model: e.target.value,
            })
          }
        />
      </Box>
      <Box className={classes.topic}>
        <TextField
          label="价格"
          variant="outlined"
          fullWidth
          type="number"
          value={marketVehicleData.price}
          className={classes.titleInput}
          onChange={(e) =>
            setMarketVehicleData({
              ...marketVehicleData,
              price: e.target.value,
            })
          }
        />
      </Box>
      <Box className={classes.content}>
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
