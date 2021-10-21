import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
import {
  postMarketItem,
  postMarketItemImg,
} from "../../redux/actions/marketItemActions";

import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import PublishIcon from "@mui/icons-material/Publish";
import S3Image from "../../components/S3/S3Image";
import Select from "@mui/material/Select";
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
export default function PostMarketItem() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [imgKey, setImgKey] = useState("");

  const history = useHistory();

  const [marketItemData, setMarketItemData] = useState({
    title: "",
    name: "",
    price: "",
    description: "",
    marketItemCategory: "",
    marketItemCondition: "",
    location: "",
  });
  console.log("marketItemData", marketItemData);
  const uploadMarketItemImg = async (e) => {
    const response = await dispatch(postMarketItemImg(e.target.files[0]));
    if (response) {
      setImgKey(response.key);
    }
  };

  const uploadMarketItem = async () => {
    //Upload the marketItem
    const {
      title,
      description,
      marketItemCategory,
      marketItemCondition,
      price,
      location,
    } = marketItemData;

    const createMarketItemInput = {
      title: title,
      name: title,
      description: description,
      price: price,
      imagePath: [imgKey],
      marketItemCategory: marketItemCategory,
      marketItemCondition: marketItemCondition,
      location: location,
      tags: [],
      active: 1,
      ByCreatedAt: "MarketItem",
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

  return (
    <div className={classes.root}>
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
        <Typography variant="h4">输入商品信息</Typography>
        <TextField
          label="标题"
          variant="outlined"
          fullWidth
          value={marketItemData.title}
          style={{ marginBlock: "2rem" }}
          onChange={(e) => {
            setMarketItemData({ ...marketItemData, title: e.target.value });
          }}
        />
      </Box>
      <Box className={classes.topic}>
        <TextField
          label="价格"
          variant="outlined"
          fullWidth
          type="number"
          value={marketItemData.price}
          className={classes.titleInput}
          onChange={(e) =>
            setMarketItemData({ ...marketItemData, price: e.target.value })
          }
        />
      </Box>
      <Box className={classes.topic}>
        <div className="newTopic">
          <FormControl variant="outlined" fullWidth>
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
      </Box>
      <Box className={classes.type}>
        <div className="newType">
          <FormControl variant="outlined" fullWidth>
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
      </Box>

      <Box className={classes.content}>
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
      </Box>

      <Box>
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
