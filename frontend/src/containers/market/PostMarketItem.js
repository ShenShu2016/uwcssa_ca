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
import { postMarketItem } from "../../redux/actions/marketItemActions";
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
  menuPaper: {
    maxHeight: 10,
  },
}));

const Input = styled("input")({
  display: "none",
});
export default function PostMarketItem() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [imgKeyToServer, setImgKeyToServer] = useState([]);
  const [imgKeyFromServer, setImgKeyFromServer] = useState([]);
  const { username } = useSelector((state) => state.userAuth.user);
  const [tagInput, setTagInput] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const [marketItemData, setMarketItemData] = useState({
    title: "",
    name: "",
    price: "",
    description: "",
    marketItemCategory: "",
    marketItemCondition: "",
    location: "",
    tags: [],
  });
  console.log("marketItemData", marketItemData);

  const uploadMarketItemImg = async (e) => {
    const imgData = e.target.files;
    const imgLocation = "marketItem";
    const response = await dispatch(postMultipleImages(imgData, imgLocation));

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

  const uploadMarketItem = async () => {
    //Upload the marketItem
    const {
      title,
      description,
      marketItemCategory,
      marketItemCondition,
      price,
      location,
      tags,
    } = marketItemData;

    const createMarketItemInput = {
      title: title,
      name: title,
      description: description,
      price: price,
      imgS3Keys: imgKeyToServer,
      marketItemCategory: marketItemCategory,
      marketItemCondition: marketItemCondition,
      location: location,
      tags: tags,
      active: true,
      createdAt: new Date().toISOString(),
      userID: username,
      sortKey: "SortKey",
    };

    const response = await dispatch(postMarketItem(createMarketItemInput));
    console.log("response", response);
    if (response.result) {
      history.push(
        `/market/item/${response.response.data.createMarketItem.id}`
      );
    }
  };
  const marketItemConditionList = [
    { value: "New", label: "全新" },
    { value: "UsedLikeNew", label: "基本全新" },
    { value: "UsedGood", label: "7成新" },
    { value: "UsedFair", label: "可以使用" },
    { value: "Other", label: "其他" },
  ];
  const marketItemCategoryList = [
    { value: "Tools", label: "工具" },
    { value: "Furniture", label: "家具" },
    { value: "HouseHold", label: "家庭" },
    { value: "Garden", label: "园艺" },
    { value: "Appliances", label: "家电" },

    { value: "VideoGames", label: "电视游戏" },
    { value: "BooksMoviesMusic", label: "书籍，电影，音乐" },

    { value: "BagsLuggage", label: "箱包行李" },
    { value: "WomensClothingShoes", label: "女装，女鞋" },
    { value: "MensClothingShoes", label: "男装，男鞋" },
    { value: "JewelryAccessories", label: "珠宝首饰" },

    { value: "HealthBeauty", label: "健康美容" },
    { value: "PetSupplies", label: "宠物用品" },
    { value: "BabyKids", label: "婴儿玩具" },
    { value: "ToysGames", label: "玩具游戏" },

    { value: "ElectronicsComputers", label: "电子产品，电脑" },
    { value: "MobilePhones", label: "手机" },

    { value: "Bicycles", label: "自行车" },
    { value: "ArtsCrafts", label: "工艺品" },
    { value: "SportsOutdoors", label: "运动户外" },
    { value: "AutoParts", label: "汽车零件" },
    { value: "MusicalInstruments", label: "乐器" },
    { value: "AntiquesCollectibles", label: "古董收藏品" },

    { value: "GarageSale", label: "车库特卖" },
    { value: "Miscellaneous", label: "各种各样的" },
    { value: "Other", label: "其他" },
  ];

  const deleteHandler = (i) => () => {
    const { tags: newTags } = { ...marketItemData };
    setMarketItemData({
      ...marketItemData,
      tags: newTags.filter((tag) => tag !== i),
    });
  };

  const inputKeyDown = (e) => {
    const val = e.target.value;
    console.log("tagSuccess", marketItemData.tags);
    if (e.key === "Enter" && val) {
      if (
        marketItemData.tags.find(
          (tag) => tag.toLowerCase() === val.toLowerCase()
        )
      ) {
        setTagInput("");
        setError("The tag has been already created!");
      } else {
        e.preventDefault();
        const newTags = [...marketItemData.tags].concat([val]);
        setMarketItemData({ ...marketItemData, tags: newTags });
        setTagInput("");
        setError("");
        console.log("tagSuccess", marketItemData.tags);
      }
    }
  };

  return (
    <div className={classes.root}>
      <Box>
        <Typography variant="h4" gutterBottom component="div">
          New Item Listing
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

      {imgKeyToServer &&
        imgKeyFromServer.map((imgKey) => (
          <img src={imgKey} key={imgKey} alt="images" />
        ))}

      <Box className={classes.content}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              required
              value={marketItemData.title}
              onChange={(e) => {
                setMarketItemData({ ...marketItemData, title: e.target.value });
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              type="number"
              placeholder="eg. 200 (Currency: CAD $)"
              value={marketItemData.price}
              className={classes.titleInput}
              onChange={(e) =>
                setMarketItemData({ ...marketItemData, price: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={6}>
            <div className="newTopic">
              <FormControl variant="outlined" fullWidth required>
                <InputLabel id="demo-simple-select-outlined-label2">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label2"
                  id="demo-simple-select-outlined2"
                  value={marketItemData.marketItemCategory}
                  onChange={(e) =>
                    setMarketItemData({
                      ...marketItemData,
                      marketItemCategory: e.target.value,
                    })
                  }
                  MenuProps={{ classes: { paper: classes.menuPaper } }}
                  label="Category"
                >
                  {marketItemCategoryList.map((category) => {
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
            <TextField
              label="Tags"
              value={tagInput}
              variant="outlined"
              fullWidth
              placeholder="eg. 自用"
              onKeyDown={inputKeyDown}
              error={Boolean(error)}
              helperText={error}
              onChange={(e) => setTagInput(e.target.value)}
            />
            {marketItemData.tags.map((data) => {
              return (
                <Chip key={data} label={data} onDelete={deleteHandler(data)} />
              );
            })}
          </Grid>
          <Grid item xs={6}>
            <div className="newType">
              <FormControl variant="outlined" fullWidth required>
                <InputLabel id="demo-simple-select-outlined-label">
                  Condition
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={marketItemData.marketItemCondition}
                  onChange={(e) =>
                    setMarketItemData({
                      ...marketItemData,
                      marketItemCondition: e.target.value,
                    })
                  }
                  label="Condition"
                >
                  {marketItemConditionList.map((condition) => {
                    return (
                      <MenuItem value={condition.value} key={condition.value}>
                        {condition.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="location"
              value={marketItemData.location}
              variant="outlined"
              fullWidth
              onChange={(e) =>
                setMarketItemData({
                  ...marketItemData,
                  location: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="description"
              value={marketItemData.description}
              minRows={5}
              variant="outlined"
              multiline
              fullWidth
              onChange={(e) =>
                setMarketItemData({
                  ...marketItemData,
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
        onClick={uploadMarketItem}
        color="primary"
      >
        上传MarketItem
      </Button>
    </div>
  );
}
