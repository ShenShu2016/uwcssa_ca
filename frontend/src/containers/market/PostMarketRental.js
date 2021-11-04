import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import CustomTags, { GetTags } from "../../components/CustomMUI/CustomTags";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MarketForm from "../../components/Market/marketForm";
import PublishIcon from "@mui/icons-material/Publish";
import Storage from "@aws-amplify/storage";
import { makeStyles } from "@mui/styles";
import { marketRentalOptions } from "./marketRentalOptions";
import { postMarketRental } from "../../redux/actions/marketItemActions";
import { postMultipleImages } from "../../redux/actions/generalAction";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router";
import { useTitle } from "../../Hooks/useTitle";

// import { useTitle } from "../../Hooks/useTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "960px",
    margin: "auto",
    paddingTop: "5rem",
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
  menuPaper: {
    maxHeight: 100,
  },
  imgPreview: {
    minWidth: "300px",
    maxWidth: "700px",
    backgroundColor: "#f4f4f4",
    textAlign: "center",
  },
}));

const Input = styled("input")({
  display: "none",
});

export default function PostMarketRental() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useTitle("发布租房信息");
  // const [imgKeyToServer, setImgKeyToServer] = useState(null);
  const [imgKeyFromServer, setImgKeyFromServer] = useState([]);
  const { username } = useSelector((state) => state.userAuth.user);
  const { imageKeys } = useSelector((state) => state.general);
  const [renderTrigger, setRenderTrigger] = useState(null);
  const {
    marketRentalSaleRent,
    propertyType,
    laundryType,
    airConditionType,
    heatingType,
    catFriendly,
    dogFriendly,
  } = marketRentalOptions;

  // console.log("imageKeys", imageKeys, imageKeys[0].key);
  const history = useHistory();

  const [marketRentalData, setMarketRentalData] = useState({
    marketRentalSaleRent: "Other",
    propertyType: "Other",
    bedroomCounts: 0,
    bathroomsCounts: 0,
    price: 0,
    address: "",
    description: "",
    propertySize: 0,
    dateAvailable: "2019-05-03T18:18:13.683Z",
    laundryType: "Other",
    airConditionType: "Other",
    heatingType: "CentralHeating",
    catFriendly: true,
    dogFriendly: true,
    tags: [],
  });
  // console.log("marketRentalData", marketRentalData);
  const uploadMarketItemImg = async (e) => {
    const imagesData = e.target.files;
    setRenderTrigger(imagesData.length);
    const imgLocation = "marketItem";
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

  const uploadMarketRental = async () => {
    //Upload the marketRental
    const {
      marketRentalSaleRent,
      propertyType,
      bedroomCounts,
      bathroomsCounts,
      price,
      address,
      description,
      propertySize,
      dateAvailable,
      laundryType,
      airConditionType,
      heatingType,
      catFriendly,
      dogFriendly,
    } = marketRentalData;

    const createMarketRentalInput = {
      marketRentalSaleRent: marketRentalSaleRent,
      propertyType: propertyType,
      bedroomCounts: bedroomCounts,
      bathroomsCounts: bathroomsCounts,
      price: price,
      imgS3Keys: imageKeys,
      address: address,
      description: description,
      propertySize: propertySize,
      dateAvailable: dateAvailable,
      laundryType: laundryType,
      airConditionType: airConditionType,
      heatingType: heatingType,
      catFriendly: catFriendly,
      dogFriendly: dogFriendly,
      tags: GetTags(),
      active: true,
      userID: username,
      sortKey: "SortKey",
    };
    console.log("createMarketRentalInput", createMarketRentalInput);

    const response = await dispatch(postMarketRental(createMarketRentalInput));
    console.log("response", response);
    if (response.result) {
      history.push(
        `/market/rental/${response.response.data.createMarketRental.id}`
      );
    }
  };

  return (
    <div className={classes.root}>
      <Box>
        <Typography variant="h4" gutterBottom component="div">
          New Home Listing
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
          <Box
            component="img"
            src={imgKey}
            key={imgKeyIdx}
            className={classes.imgPreview}
          />
        ))}

      <Box className={classes.content}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <MarketForm
              title="Home for Sale or Rent"
              value={marketRentalData.marketRentalSaleRent}
              options={marketRentalSaleRent}
              required={true}
              onChange={(e) =>
                setMarketRentalData({
                  ...marketRentalData,
                  marketRentalSaleRent: e.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={6}>
            <MarketForm
              title="Property Type"
              value={marketRentalData.propertyType}
              options={propertyType}
              required={true}
              onChange={(e) =>
                setMarketRentalData({
                  ...marketRentalData,
                  propertyType: e.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Bedroom Counts"
              value={marketRentalData.bedroomCounts}
              variant="outlined"
              onChange={(e) =>
                setMarketRentalData({
                  ...marketRentalData,
                  bedroomCounts: e.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Bathroom Counts"
              value={marketRentalData.bathroomCounts}
              variant="outlined"
              placeholder={"eg: 2"}
              onChange={(e) =>
                setMarketRentalData({
                  ...marketRentalData,
                  bathroomsCounts: e.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Price"
              value={marketRentalData.price}
              variant="outlined"
              fullWidth
              onChange={(e) =>
                setMarketRentalData({
                  ...marketRentalData,
                  price: e.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Property Size"
              value={marketRentalData.propertySize}
              variant="outlined"
              fullWidth
              onChange={(e) =>
                setMarketRentalData({
                  ...marketRentalData,
                  propertySize: e.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Address"
              value={marketRentalData.address}
              variant="outlined"
              fullWidth
              onChange={(e) =>
                setMarketRentalData({
                  ...marketRentalData,
                  address: e.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <div>
                <DateTimePicker
                  label="Date Available"
                  value={marketRentalData.dateAvailable}
                  id="dateAvailable"
                  onChange={(e) => {
                    console.log("e", e);
                    setMarketRentalData({
                      ...marketRentalData,
                      dateAvailable: e,
                    });
                  }}
                  renderInput={(params) => <TextField fullWidth {...params} />}
                />
              </div>
            </LocalizationProvider>
          </Grid>

          <Grid item xs={6}>
            <MarketForm
              title="Laundry Type"
              value={marketRentalData.laundryType}
              options={laundryType}
              required={false}
              onChange={(e) =>
                setMarketRentalData({
                  ...marketRentalData,
                  laundryType: e.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={6}>
            <MarketForm
              title="Air Conditioning Type"
              value={marketRentalData.airConditionType}
              options={airConditionType}
              required={true}
              onChange={(e) =>
                setMarketRentalData({
                  ...marketRentalData,
                  airConditionType: e.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={6}>
            <MarketForm
              title="Heating Type"
              value={marketRentalData.heatingType}
              options={heatingType}
              required={true}
              onChange={(e) =>
                setMarketRentalData({
                  ...marketRentalData,
                  heatingType: e.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={6}>
            <CustomTags />
          </Grid>

          <Grid item xs={3}>
            <MarketForm
              title="Cat Friendly"
              value={marketRentalData.catFriendly}
              options={catFriendly}
              required={true}
              onChange={(e) =>
                setMarketRentalData({
                  ...marketRentalData,
                  catFriendly: e.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={3}>
            <MarketForm
              title="Dog Friendly"
              value={marketRentalData.dogFriendly}
              options={dogFriendly}
              required={true}
              onChange={(e) =>
                setMarketRentalData({
                  ...marketRentalData,
                  dogFriendly: e.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Description"
              value={marketRentalData.description}
              variant="outlined"
              minRows={5}
              fullWidth
              multiline
              onChange={(e) =>
                setMarketRentalData({
                  ...marketRentalData,
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
        onClick={uploadMarketRental}
        color="primary"
      >
        上传 MarketHome
      </Button>
    </div>
  );
}
