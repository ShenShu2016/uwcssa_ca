import {
  Box,
  Button,
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

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Chip from "@mui/material/Chip";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import PublishIcon from "@mui/icons-material/Publish";
import Storage from "@aws-amplify/storage";
import { makeStyles } from "@mui/styles";
import { postImage } from "../../redux/actions/generalAction";
import { postMarketRental } from "../../redux/actions/marketItemActions";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router";

// import { useTitle } from "../../Hooks/useTitle";

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
  menuPaper: {
    maxHeight: 100,
  },
  imgKeyFromServer: {
    width: "100%",
  },
}));

const Input = styled("input")({
  display: "none",
});

export default function PostMarketRental() {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const [imgKeyToServer, setImgKeyToServer] = useState(null);
  const [imgKeyFromServer, setImgKeyFromServer] = useState(null);
  const [tagInput, setTagInput] = useState("");
  const [error, setError] = useState("");
  const { username } = useSelector((state) => state.userAuth.user);
  const { imageKey } = useSelector((state) => state.general);

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
    const imgData = e.target.files;
    const imgLocation = "marketItem";
    dispatch(postImage(imgData, imgLocation));
    // if (response) {
    //   console.log("if (response)", response);
    //   setImgKeyToServer(response);
    //   // setImgKeyToServer(response.map((ResponseKey) => ResponseKey.key));
    // }
  };
  // console.log("imgkeyterver", imgKeyToServer);
  useEffect(() => {
    const getImage = async () => {
      try {
        // const imageAccessURL = await Promise.all(
        //   Array.from(imgKeyToServer).map((key) =>
        //     Storage.get(key, {
        //       level: "public",
        //       expires: 120,
        //       download: false,
        //     })
        //   )
        // );
        const imageAccessURL = await Storage.get(imageKey.key, {
          level: "public",
          expires: 120,
          download: false,
        });
        // setImgKeyFromServer((url) => url.concat(imageAccessURL));
        setImgKeyFromServer(imageAccessURL);
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setImgKeyFromServer();
      }
    };
    if (imageKey.key) {
      console.log("我tm来一次");
      getImage();
    }
  }, [imageKey]);

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
      tags,
    } = marketRentalData;

    const createMarketRentalInput = {
      marketRentalSaleRent: marketRentalSaleRent,
      propertyType: propertyType,
      bedroomCounts: bedroomCounts,
      bathroomsCounts: bathroomsCounts,
      price: price,
      imgS3Keys: [imageKey[0].key],
      address: address,
      description: description,
      propertySize: propertySize,
      dateAvailable: dateAvailable,
      laundryType: laundryType,
      airConditionType: airConditionType,
      heatingType: heatingType,
      catFriendly: catFriendly,
      dogFriendly: dogFriendly,
      tags: tags,
      active: true,
      createdAt: new Date().toISOString(),
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

  const marketRentalSaleRent = [
    { value: "ForSale", label: "出售" },
    { value: "Rent", label: "租赁" },
    { value: "Other", label: "其他" },
  ];
  const propertyType = [
    { value: "Apartment", label: "公寓" },
    { value: "House", label: "独立屋house" },
    { value: "RoomOnly", label: "单间" },
    { value: "TownHouse", label: "Townhouse" },
    { value: "Other", label: "其他" },
  ];

  const laundryType = [
    { value: "InUnitLaundry", label: "In Unit Laundry" },
    { value: "LaundryInBuilding", label: "Laundry In Building" },
    { value: "LaundryAvailable", label: "Laundry Available" },
    { value: "None", label: "None" },
    { value: "Other", label: "Other" },
  ];
  const AirConditionType = [
    { value: "CentralAC", label: "Central AC" },
    { value: "ACAvailable", label: "AC Available" },
    { value: "None", label: "None" },
    { value: "Other", label: "Other" },
  ];
  const HeatingType = [
    { value: "CentralHeating", label: "Central Heating" },
    { value: "ElectricHeating", label: "Electric Heating" },
    { value: "GasHeating", label: "Gas Heating" },
    { value: "RadiatorHeating", label: "Radiator Heating" },
    { value: "Other", label: "Other" },
  ];

  const catFriendly = [
    { value: true, label: "爱喵" },
    { value: false, label: "不爱喵" },
  ];

  const dogFriendly = [
    { value: true, label: "爱汪" },
    { value: false, label: "不爱汪" },
  ];

  const deleteHandler = (i) => () => {
    const { tags: newTags } = { ...marketRentalData };
    setMarketRentalData({
      ...marketRentalData,
      tags: newTags.filter((tag) => tag !== i),
    });
  };

  const inputKeyDown = (e) => {
    const val = e.target.value;
    // console.log("tagSuccess", marketRentalData.tags);
    if (e.key === "Enter" && val) {
      if (
        marketRentalData.tags.find(
          (tag) => tag.toLowerCase() === val.toLowerCase()
        )
      ) {
        setTagInput("");
        setError("The tag has been already created!");
      } else {
        e.preventDefault();
        const newTags = [...marketRentalData.tags].concat([val]);
        setMarketRentalData({ ...marketRentalData, tags: newTags });
        setTagInput("");
        setError("");
        console.log("tagSuccess", marketRentalData.tags);
      }
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

      {/* {imgKeyToServer &&
        imgKeyFromServer.map((imgKey) => (
          <img
            src={imgKey}
            key={imgKey}
            alt="images"
            className={classes.imgKeyFromServer}
          />
        ))} */}
      {imgKeyFromServer && (
        <img
          src={imgKeyFromServer}
          key={imgKeyFromServer}
          alt="images"
          className={classes.imgKeyFromServer}
        />
      )}

      <Box className={classes.content}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className="newTopic">
              <FormControl variant="outlined" fullWidth required>
                <InputLabel id="demo-simple-select-outlined-label2">
                  Home for Sale or Rent
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label2"
                  id="demo-simple-select-outlined2"
                  value={marketRentalData.marketRentalSaleRent}
                  required
                  MenuProps={{ classes: { paper: classes.menuPaper } }}
                  onChange={(e) =>
                    setMarketRentalData({
                      ...marketRentalData,
                      marketRentalSaleRent: e.target.value,
                    })
                  }
                  label="marketRentalSaleRent"
                >
                  {marketRentalSaleRent.map((category) => {
                    return (
                      <MenuItem value={category.value} key={category.value}>
                        {category.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div className="newTopic">
              <FormControl variant="outlined" fullWidth required>
                <InputLabel id="demo-simple-select-outlined-label2">
                  Property Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label2"
                  id="demo-simple-select-outlined2"
                  value={marketRentalData.propertyType}
                  required
                  onChange={(e) =>
                    setMarketRentalData({
                      ...marketRentalData,
                      propertyType: e.target.value,
                    })
                  }
                  label="propertyType"
                >
                  {propertyType.map((property) => {
                    return (
                      <MenuItem value={property.value} key={property.value}>
                        {property.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
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
            <div className="newTopic">
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label2">
                  Laundry Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label2"
                  id="demo-simple-select-outlined2"
                  value={marketRentalData.laundryType}
                  required
                  onChange={(e) =>
                    setMarketRentalData({
                      ...marketRentalData,
                      laundryType: e.target.value,
                    })
                  }
                  label="laundryType"
                >
                  {laundryType.map((property) => {
                    return (
                      <MenuItem value={property.value} key={property.value}>
                        {property.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div className="newTopic">
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label2">
                  Air Conditioning Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label2"
                  id="demo-simple-select-outlined2"
                  value={marketRentalData.airConditionType}
                  required
                  onChange={(e) =>
                    setMarketRentalData({
                      ...marketRentalData,
                      airConditionType: e.target.value,
                    })
                  }
                  label="airConditionType"
                >
                  {AirConditionType.map((property) => {
                    return (
                      <MenuItem value={property.value} key={property.value}>
                        {property.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div className="newTopic">
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label2">
                  Heating Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label2"
                  id="demo-simple-select-outlined2"
                  value={marketRentalData.heatingType}
                  required
                  onChange={(e) =>
                    setMarketRentalData({
                      ...marketRentalData,
                      heatingType: e.target.value,
                    })
                  }
                  label="heatingType"
                >
                  {HeatingType.map((property) => {
                    return (
                      <MenuItem value={property.value} key={property.value}>
                        {property.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
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
            {marketRentalData.tags.map((data) => {
              return (
                <Chip key={data} label={data} onDelete={deleteHandler(data)} />
              );
            })}
          </Grid>

          <Grid item xs={3}>
            <div className="newType">
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Cat Friendly
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={marketRentalData.catFriendly}
                  onChange={(e) =>
                    setMarketRentalData({
                      ...marketRentalData,
                      catFriendly: e.target.value,
                    })
                  }
                  label="catFriendly"
                >
                  {catFriendly.map((cat) => {
                    return (
                      <MenuItem value={cat.value} key={cat.value}>
                        {cat.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
          </Grid>

          <Grid item xs={3}>
            <div className="newType">
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Dog Friendly
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={marketRentalData.dogFriendly}
                  onChange={(e) =>
                    setMarketRentalData({
                      ...marketRentalData,
                      dogFriendly: e.target.value,
                    })
                  }
                  label="dogFriendly"
                >
                  {dogFriendly.map((dog) => {
                    return (
                      <MenuItem value={dog.value} key={dog.value}>
                        {dog.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
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
