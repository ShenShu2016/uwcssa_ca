import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  postMarketItemImg,
  postMarketRental,
} from "../../redux/actions/marketItemActions";
import { useDispatch, useSelector } from "react-redux";

import Chip from "@mui/material/Chip";
import PublishIcon from "@mui/icons-material/Publish";
import Storage from "@aws-amplify/storage";
import { makeStyles } from "@mui/styles";
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
}));

const Input = styled("input")({
  display: "none",
});

export default function PostMarketRental() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [imgKeyToServer, setImgKeyToServer] = useState([]);
  const [imgKeyFromServer, setImgKeyFromServer] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const { username } = useSelector((state) => state.userAuth.user);
  const history = useHistory();

  const [marketRentalData, setMarketRentalData] = useState({
    marketHomeSaleRent: "Other",
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
  console.log("marketRentalData", marketRentalData);

  const uploadMarketItemImg = async (e) => {
    const response = await Promise.all(
      Array.from(e.target.files).map((file) =>
        dispatch(postMarketItemImg(file))
      )
    );
    if (response) {
      setImgKeyToServer(response.map((ResponseKey) => ResponseKey.key));
    }
  };

  useEffect(() => {
    const getImage = async () => {
      try {
        const imageAccessURL = await Promise.all(
          Array.from(imgKeyToServer).map((key) =>
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
    if (imgKeyToServer) {
      getImage();
    }
  }, [imgKeyToServer]);

  const uploadMarketRental = async () => {
    //Upload the marketRental
    const {
      marketHomeSaleRent,
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
      marketHomeSaleRent: marketHomeSaleRent,
      propertyType: propertyType,
      bedroomCounts: bedroomCounts,
      bathroomsCounts: bathroomsCounts,
      price: price,
      imagePath: imgKeyToServer,
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
      ByCreatedAt: "MarketHome",
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

  const marketHomeSaleRent = [
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
    console.log("tagSuccess", marketRentalData.tags);
    if (e.key === "Enter" && val) {
      if (
        marketRentalData.tags.find(
          (tag) => tag.toLowerCase() === val.toLowerCase()
        )
      ) {
        return;
      }
      e.preventDefault();
      const newTags = [...marketRentalData.tags].concat([val]);
      setMarketRentalData({ ...marketRentalData, tags: newTags });
      setTagInput("");
      console.log("tagSuccess", marketRentalData.tags);
    }
  };

  return (
    <div className={classes.root}>
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

      {imgKeyToServer &&
        imgKeyFromServer.map((imgKey) => (
          <img src={imgKey} key={imgKey} alt="images" />
        ))}

      <Box className={classes.topic}>
        <div className="newTopic">
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label2">
              Home for Sale or Rent
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label2"
              id="demo-simple-select-outlined2"
              value={marketRentalData.marketHomeSaleRent}
              onChange={(e) =>
                setMarketRentalData({
                  ...marketRentalData,
                  marketHomeSaleRent: e.target.value,
                })
              }
              label="marketHomeSaleRent"
            >
              {marketHomeSaleRent.map((category) => {
                return (
                  <MenuItem value={category.value} key={category.value}>
                    {category.label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </Box>

      <Box className={classes.topic}>
        <div className="newTopic">
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label2">
              propertyType
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label2"
              id="demo-simple-select-outlined2"
              value={marketRentalData.propertyType}
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
      </Box>

      <Box className={classes.content}>
        <TextField
          label="bedroomCounts"
          value={marketRentalData.bedroomCounts}
          variant="outlined"
          fullWidth
          onChange={(e) =>
            setMarketRentalData({
              ...marketRentalData,
              bedroomCounts: e.target.value,
            })
          }
        />
      </Box>

      <Box className={classes.content}>
        <TextField
          label="bathroomCounts"
          value={marketRentalData.bathroomCounts}
          variant="outlined"
          fullWidth
          onChange={(e) =>
            setMarketRentalData({
              ...marketRentalData,
              bathroomsCounts: e.target.value,
            })
          }
        />
      </Box>

      <Box className={classes.content}>
        <TextField
          label="price"
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
      </Box>

      <Box className={classes.content}>
        <TextField
          label="address"
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
      </Box>

      <Box className={classes.content}>
        <TextField
          label="propertySize"
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
      </Box>

      <Box className={classes.content}>
        <TextField
          label="dateAvailable"
          value={marketRentalData.dateAvailable}
          variant="outlined"
          fullWidth
          onChange={(e) =>
            setMarketRentalData({
              ...marketRentalData,
              dateAvailable: e.target.value,
            })
          }
        />
      </Box>

      <Box className={classes.content}>
        <TextField
          label="laundryType"
          value={marketRentalData.laundryType}
          variant="outlined"
          fullWidth
          onChange={(e) =>
            setMarketRentalData({
              ...marketRentalData,
              laundryType: e.target.value,
            })
          }
        />
      </Box>

      <Box className={classes.content}>
        <TextField
          label="airConditionType"
          value={marketRentalData.airConditionType}
          variant="outlined"
          fullWidth
          onChange={(e) =>
            setMarketRentalData({
              ...marketRentalData,
              airConditionType: e.target.value,
            })
          }
        />
      </Box>

      <Box className={classes.content}>
        <TextField
          label="tags"
          value={tagInput}
          variant="outlined"
          fullWidth
          onKeyDown={inputKeyDown}
          onChange={(e) => setTagInput(e.target.value)}
        />
      </Box>

      {marketRentalData.tags.map((data) => {
        return <Chip key={data} label={data} onDelete={deleteHandler(data)} />;
      })}

      <Box className={classes.content}>
        <TextField
          label="heatingType"
          value={marketRentalData.heatingType}
          variant="outlined"
          fullWidth
          onChange={(e) =>
            setMarketRentalData({
              ...marketRentalData,
              heatingType: e.target.value,
            })
          }
        />
      </Box>

      <Box className={classes.type}>
        <div className="newType">
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              CatFriendly
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
      </Box>

      <Box className={classes.type}>
        <div className="newType">
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              DogFriendly
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
      </Box>

      <Box className={classes.content}>
        <TextField
          label="description"
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
      </Box>

      <Button
        variant="contained"
        endIcon={<PublishIcon />}
        onClick={uploadMarketRental}
        color="primary"
      >
        上传MarketHome
      </Button>
    </div>
  );
}
