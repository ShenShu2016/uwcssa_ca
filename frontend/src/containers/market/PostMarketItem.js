import React, { useEffect, useState } from "react";
import { TextField, Typography } from "@mui/material";
import { connect, useSelector } from "react-redux";
import {
  createMarketType,
  createMarketItemCategory,
} from "../../graphql/mutations";
import {
  postMarketItem,
  postMarketItemImg,
  setMarketTypes,
  setMarketCategories,
} from "../../redux/actions/marketItemActions";

import API from "@aws-amplify/api";
import { AmplifyS3Image } from "@aws-amplify/ui-react";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import PublishIcon from "@material-ui/icons/Publish";
import Select from "@mui/material/Select";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { makeStyles } from "@mui/styles";
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

const PostMarketItem = ({
  postMarketItem,
  postMarketItemImg,
  setMarketTypes,
  setMarketCategories,
}) => {
  const classes = useStyles();
  const [imgData, setImgData] = useState("");
  const [imgKey, setImgKey] = useState("");
  const history = useHistory();
  const [marketItemData, setMarketItemData] = useState({
    title: "",
    name: "",
    price: "",
    description: "",
    marketCategoryId: "",
    marketTypeId: "",
  });
  useEffect(() => {
    setMarketTypes();
    setMarketCategories();

    console.log("using effect"); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { marketTypes, marketCategories } = useSelector(
    (state) => state.allMarketItems
  );

  const uploadMarketItemImg = async () => {
    const response = await postMarketItemImg(imgData);
    console.log("response.key", response.key);
    setImgKey(response.key);
  };

  const uploadMarketItem = async () => {
    //Upload the marketItem
    const { title, description, marketTypeId, marketCategoryId, name, price } =
      marketItemData;

    const createMarketItemInput = {
      title: title,
      name: name,
      description: description,
      price: price,
      imagePath: [imgKey],
      marketItemMarketItemCategoryId: marketCategoryId,
      marketItemMarketTypeId: marketTypeId,
    };
    const response = await postMarketItem(createMarketItemInput);

    console.log("response.result", response);
    console.log("2222", marketItemData);

    if (response.result) {
      history.push(`/marketItem/${response.response.data.createMarketItem.id}`);
    }
  };
  const [marketCategoryData, setMarketCategoryData] = useState({ name: "" });

  const uploadMarketCategory = async () => {
    //Upload the topic
    console.log("marketCategoryData", marketCategoryData);
    const { name } = marketCategoryData;
    const createMarketCategoryInput = {
      name,
    };
    await API.graphql(
      graphqlOperation(createMarketItemCategory, {
        input: createMarketCategoryInput,
      })
    );
    setMarketCategories();
  };

  const [marketTypeData, setMarketTypeData] = useState({ name: "" });

  const uploadMarketType = async () => {
    console.log("typeData", marketTypeData);
    const { name } = marketTypeData;
    const createMarketTypeInput = {
      name,
    };
    await API.graphql(
      graphqlOperation(createMarketType, { input: createMarketTypeInput })
    );
    setMarketTypes();
  };

  return (
    <div className={classes.root}>
      <Box>
        <Typography variant="h4">输入商品信息</Typography>
        <TextField
          label="标题"
          variant="outlined"
          fullWidth
          value={marketItemData.title}
          style={{ marginBlock: "2rem" }}
          onChange={(e) =>
            setMarketItemData({ ...marketItemData, title: e.target.value })
          }
        />
      </Box>
      <Box className={classes.topic}>
        <TextField
          label="价格"
          variant="outlined"
          fullWidth
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
              value={marketItemData.marketCategoryId}
              onChange={(e) =>
                setMarketItemData({
                  ...marketItemData,
                  marketCategoryId: e.target.value,
                })
              }
              label="Category"
            >
              {marketCategories.map((topic) => {
                return (
                  <MenuItem value={topic.name} key={topic.name}>
                    {topic.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div className="newTopic">
          <TextField
            label="Topic"
            value={marketCategoryData.name}
            onChange={(e) =>
              setMarketCategoryData({
                ...marketCategoryData,
                name: e.target.value,
              })
            }
          />
          <Button
            variant="contained"
            endIcon={<PublishIcon />}
            onClick={uploadMarketCategory}
            color="primary"
          >
            上传新的category
          </Button>
        </div>
      </Box>
      <Box className={classes.type}>
        <div className="newType">
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={marketItemData.marketTypeId}
              onChange={(e) =>
                setMarketItemData({
                  ...marketItemData,
                  marketTypeId: e.target.value,
                })
              }
              label="Type"
            >
              {marketTypes.map((type) => {
                return (
                  <MenuItem value={type.name} key={type.name}>
                    {type.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div className="newType">
          <TextField
            label="Type"
            value={marketTypeData.name}
            onChange={(e) =>
              setMarketTypeData({ ...marketTypeData, name: e.target.value })
            }
          />
          <Button
            variant="contained"
            endIcon={<PublishIcon />}
            onClick={uploadMarketType}
            color="primary"
          >
            上传新的marketType
          </Button>
        </div>
      </Box>
      <Box className={classes.imgPreview}>
        {imgKey === "" ? (
          <Typography variant="h4">添加照片</Typography>
        ) : (
          <AmplifyS3Image path={imgKey} />
        )}
        <input
          type="file"
          accept="image/png"
          onChange={(e) => {
            setImgData(e.target.files[0]);
            console.log("imgData", imgData);
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={uploadMarketItemImg}
        >
          上传图片
        </Button>
      </Box>
      <Box className={classes.content}>
        <TextField
          label="description"
          value={marketItemData.description}
          minRows={20}
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
};

export default connect(null, {
  setMarketTypes,
  setMarketCategories,
  postMarketItem,
  postMarketItemImg,
})(PostMarketItem);
