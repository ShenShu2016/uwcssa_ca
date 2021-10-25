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
  postMarketHome,
  postMarketItemImg,
} from "../../redux/actions/marketItemActions";

import PublishIcon from "@mui/icons-material/Publish";
import Storage from "@aws-amplify/storage";
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
export default function PostMarketHome() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [imgKeyToServer, setImgKeyToServer] = useState([]);
  const [imgKeyFromServer, setImgKeyFromServer] = useState([]);

  const history = useHistory();

  const [marketHomeData, setMarketHomeData] = useState({
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
  });
  console.log("marketHomeData", marketHomeData);

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

  const uploadMarketHome = async () => {
    //Upload the marketHome
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
    } = marketHomeData;

    const createMarketHomeInput = {
      marketHomeSaleRent: marketHomeSaleRent,
      propertyType: propertyType,
      bedroomCounts: bedroomCounts,
      bathroomsCounts: bathroomsCounts,
      price: price,
      imagePath: [imgKeyToServer],
      address: address,
      description: description,
      propertySize: propertySize,
      dateAvailable: dateAvailable,
      laundryType: laundryType,
      airConditionType: airConditionType,
      heatingType: heatingType,
      catFriendly: catFriendly,
      dogFriendly: dogFriendly,
      active: 1,
      ByCreatedAt: "MarketHome",
    };
    console.log("createMarketHomeInput", createMarketHomeInput);

    const response = await dispatch(postMarketHome(createMarketHomeInput));
    console.log("response", response);
    if (response.result) {
      history.push(
        `/market/rental/${response.response.data.createMarketHome.id}`
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
              Home for Sale of Rent
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label2"
              id="demo-simple-select-outlined2"
              value={marketHomeData.marketHomeSaleRent}
              onChange={(e) =>
                setMarketHomeData({
                  ...marketHomeData,
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

      <Box className={classes.type}>
        <div className="newType">
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              PropertyType
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={marketHomeData.propertyType}
              onChange={(e) =>
                setMarketHomeData({
                  ...marketHomeData,
                  propertyType: e.target.value,
                })
              }
              label="propertyType"
            >
              {propertyType.map((propertyType) => {
                return (
                  <MenuItem value={propertyType.value} key={propertyType.value}>
                    {propertyType.label}
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
          value={marketHomeData.bedroomCounts}
          variant="outlined"
          fullWidth
          onChange={(e) =>
            setMarketHomeData({
              ...marketHomeData,
              bedroomCounts: e.target.value,
            })
          }
        />
      </Box>

      <Box className={classes.content}>
        <TextField
          label="bathroomCounts"
          value={marketHomeData.bathroomCounts}
          variant="outlined"
          fullWidth
          onChange={(e) =>
            setMarketHomeData({
              ...marketHomeData,
              bathroomsCounts: e.target.value,
            })
          }
        />
      </Box>

      <Box className={classes.content}>
        <TextField
          label="price"
          value={marketHomeData.price}
          variant="outlined"
          fullWidth
          onChange={(e) =>
            setMarketHomeData({
              ...marketHomeData,
              price: e.target.value,
            })
          }
        />
      </Box>

      <Box className={classes.content}>
        <TextField
          label="address"
          value={marketHomeData.address}
          variant="outlined"
          fullWidth
          onChange={(e) =>
            setMarketHomeData({
              ...marketHomeData,
              address: e.target.value,
            })
          }
        />
      </Box>

      <Box className={classes.content}>
        <TextField
          label="propertySize"
          value={marketHomeData.propertySize}
          variant="outlined"
          fullWidth
          onChange={(e) =>
            setMarketHomeData({
              ...marketHomeData,
              propertySize: e.target.value,
            })
          }
        />
      </Box>

      <Box className={classes.content}>
        <TextField
          label="dateAvailable"
          value={marketHomeData.dateAvailable}
          variant="outlined"
          fullWidth
          onChange={(e) =>
            setMarketHomeData({
              ...marketHomeData,
              dateAvailable: e.target.value,
            })
          }
        />
      </Box>

      <Box className={classes.content}>
        <TextField
          label="laundryType"
          value={marketHomeData.laundryType}
          variant="outlined"
          fullWidth
          onChange={(e) =>
            setMarketHomeData({
              ...marketHomeData,
              laundryType: e.target.value,
            })
          }
        />
      </Box>

      <Box className={classes.content}>
        <TextField
          label="airConditionType"
          value={marketHomeData.airConditionType}
          variant="outlined"
          fullWidth
          onChange={(e) =>
            setMarketHomeData({
              ...marketHomeData,
              airConditionType: e.target.value,
            })
          }
        />
      </Box>

      <Box className={classes.content}>
        <TextField
          label="heatingType"
          value={marketHomeData.heatingType}
          variant="outlined"
          fullWidth
          onChange={(e) =>
            setMarketHomeData({
              ...marketHomeData,
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
              value={marketHomeData.catFriendly}
              onChange={(e) =>
                setMarketHomeData({
                  ...marketHomeData,
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
              value={marketHomeData.dogFriendly}
              onChange={(e) =>
                setMarketHomeData({
                  ...marketHomeData,
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
          value={marketHomeData.description}
          variant="outlined"
          minRows={5}
          fullWidth
          multiline
          onChange={(e) =>
            setMarketHomeData({
              ...marketHomeData,
              description: e.target.value,
            })
          }
        />
      </Box>

      <Button
        variant="contained"
        endIcon={<PublishIcon />}
        onClick={uploadMarketHome}
        color="primary"
      >
        上传MarketHome
      </Button>
    </div>
  );
}
